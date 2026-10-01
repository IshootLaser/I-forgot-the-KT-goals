import http.server
import socketserver
import threading
import time
import os
import sys
from playwright.sync_api import sync_playwright

WORKSPACE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class QuietSimpleHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=WORKSPACE, **kwargs)
    def log_message(self, format, *args):
        pass  # Quiet logging

def start_server(port=8899):
    handler = QuietSimpleHTTPRequestHandler
    httpd = socketserver.TCPServer(("127.0.0.1", port), handler)
    thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    thread.start()
    return httpd

def run_tests():
    PORT = 8899
    httpd = start_server(PORT)
    BASE_URL = f"http://127.0.0.1:{PORT}"
    print(f"[TEST] Local static server running at {BASE_URL}")

    with sync_playwright() as p:
        # Test 1: Mobile Viewport (iPhone 14 / modern smartphone)
        print("\n--- Test Suite 1: Mobile Environment Simulation ---")
        iphone = p.devices['iPhone 14']
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(**iphone)
        page = context.new_page()

        requests_logged = []
        page.on("request", lambda r: requests_logged.append(r.url))

        console_errors = []
        def handle_console(msg):
            if msg.type == "error":
                text = msg.text
                # In sandbox mode without internet, external CDNs (tailwindcss, google fonts) fail with ERR_PROXY_CONNECTION_FAILED
                if "ERR_PROXY_CONNECTION_FAILED" in text or "cdn.tailwindcss.com" in text or "fonts.googleapis.com" in text:
                    return
                console_errors.append(text)
        page.on("console", handle_console)

        print("[1.1] Loading tracker.html on mobile...")
        t0 = time.time()
        page.goto(f"{BASE_URL}/tracker.html", wait_until="networkidle")
        load_time = (time.time() - t0) * 1000
        print(f"  -> tracker.html loaded in {load_time:.1f}ms")

        # Wait for idle callback to trigger background preloading
        print("[1.2] Waiting for idle prefetch...")
        page.wait_for_timeout(1500)

        prefetched_urls = [u for u in requests_logged if "first-turn" in u]
        print(f"  -> Background prefetched requests observed: {len(prefetched_urls)}")
        for u in prefetched_urls:
            print(f"     * {u}")
        assert len(prefetched_urls) > 0, "Expected first-turn assets to be prefetched in the background!"

        # Click on "先手追踪"
        print("[1.3] Clicking '先手追踪' link...")
        t_click = time.time()
        with page.expect_navigation():
            page.locator('a[href="first-turn.html"]').click()
        transition_time = (time.time() - t_click) * 1000
        print(f"  -> Navigated to first-turn.html in {transition_time:.1f}ms")
        assert "first-turn.html" in page.url

        # Verify page content on first-turn.html
        print("[1.4] Verifying first-turn controls and styling...")
        heading = page.locator("#first-turn-title").text_content()
        assert "先手状态" in heading, f"Unexpected heading: {heading}"

        toggles = page.locator("[data-round]")
        assert toggles.count() == 4, f"Expected 4 round toggles, got {toggles.count()}"

        # Test interaction: toggle round 1
        first_toggle = toggles.nth(0)
        initial_label = first_toggle.get_attribute("aria-label")
        print(f"  -> Round 1 initial state: {initial_label}")
        first_toggle.click()
        new_label = first_toggle.get_attribute("aria-label")
        print(f"  -> Round 1 after tap: {new_label}")
        assert "先手：我" in new_label or "先手：对手" in new_label

        # Verify localStorage persistence
        saved_state = page.evaluate("() => localStorage.getItem('kill-team-first-turn')")
        print(f"  -> Saved state in localStorage: {saved_state}")
        assert saved_state is not None, "localStorage kill-team-first-turn should be populated"

        # Click "返回对战记录"
        print("[1.5] Clicking '返回对战记录' back link...")
        t_back = time.time()
        with page.expect_navigation():
            page.locator('a[href="tracker.html"]').click()
        back_time = (time.time() - t_back) * 1000
        print(f"  -> Navigated back to tracker.html in {back_time:.1f}ms")
        assert "tracker.html" in page.url

        # Check console errors
        print(f"  -> Console errors encountered: {len(console_errors)}")
        if console_errors:
            print(f"     Errors: {console_errors}")
        assert len(console_errors) == 0, "No console errors should occur during mobile testing!"

        context.close()

        # Test 2: Direct standalone visit to first-turn.html
        print("\n--- Test Suite 2: Standalone first-turn.html Direct Visit ---")
        context2 = browser.new_context(**iphone)
        page2 = context2.new_page()
        page2.goto(f"{BASE_URL}/first-turn.html", wait_until="networkidle")
        assert page2.locator("#first-turn-title").is_visible()
        context2.close()
        print("  -> Direct standalone access OK.")

        # Test 3: Desktop Environment Simulation
        print("\n--- Test Suite 3: Desktop Environment Simulation ---")
        context3 = browser.new_context(viewport={"width": 1280, "height": 800})
        page3 = context3.new_page()
        page3.goto(f"{BASE_URL}/tracker.html", wait_until="networkidle")
        page3.wait_for_timeout(1200)
        with page3.expect_navigation():
            page3.locator('a[href="first-turn.html"]').click()
        assert "first-turn.html" in page3.url
        assert page3.locator("#first-turn-title").is_visible()
        context3.close()
        print("  -> Desktop preloading and navigation OK.")

        browser.close()
        httpd.shutdown()

    print("\n==========================================")
    print("ALL PLAYWRIGHT TESTS PASSED SUCCESSFULLY! ")
    print("==========================================")

if __name__ == "__main__":
    run_tests()
