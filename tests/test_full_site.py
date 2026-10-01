import http.server
import socketserver
import threading
import time
import os
import sys
from playwright.sync_api import sync_playwright

WORKSPACE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=WORKSPACE, **kwargs)
    def log_message(self, format, *args):
        pass

def start_server(port=8900):
    httpd = socketserver.TCPServer(("127.0.0.1", port), QuietHandler)
    thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    thread.start()
    return httpd

def run_site_precheck():
    PORT = 8900
    httpd = start_server(PORT)
    BASE_URL = f"http://127.0.0.1:{PORT}"

    print(f"[PRECHECK] Starting complete site verification at {BASE_URL}")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        iphone = p.devices['iPhone 14']

        # -------------------------------------------------------------
        # 1. Test index.html (Home)
        # -------------------------------------------------------------
        print("\n[CHECK 1] Verifying index.html (Home Page)...")
        page = browser.new_page()
        page.goto(f"{BASE_URL}/index.html", wait_until="networkidle")
        assert "杀戮小队指挥台" in page.title()
        assert page.locator('a[href="goals.html"]').is_visible()
        assert page.locator('a[href="tracker.html"]').is_visible()
        version_text = page.locator("[data-app-version]").text_content()
        print(f"  -> Home page loaded OK. Version: {version_text}")
        page.close()

        # -------------------------------------------------------------
        # 2. Test goals.html (Mission Cards Deck)
        # -------------------------------------------------------------
        print("\n[CHECK 2] Verifying goals.html (Approved Ops 2025 Cards)...")
        page = browser.new_page(viewport={"width": 1280, "height": 900})
        page.goto(f"{BASE_URL}/goals.html", wait_until="networkidle")
        assert "杀戮小队 2025 认证行动任务包卡牌全集" in page.title()

        # Check total cards rendered
        cards = page.locator(".card-scene")
        count = cards.count()
        print(f"  -> Total rendered cards: {count}")
        assert count == 29, f"Expected exactly 29 cards, got {count}"

        # Test filters
        filter_primary = page.locator('button[data-cat="primary"]')
        filter_primary.click()
        page.wait_for_timeout(200)
        visible_cards = page.locator(".card-item:visible")
        print(f"  -> Primary filter: {visible_cards.count()} visible cards (expected 3)")
        assert visible_cards.count() == 3

        filter_kill = page.locator('button[data-cat="kill"]')
        filter_kill.click()
        page.wait_for_timeout(200)
        visible_cards = page.locator(".card-item:visible")
        print(f"  -> Kill filter: {visible_cards.count()} visible cards (expected 1)")
        assert visible_cards.count() == 1

        filter_crit = page.locator('button[data-cat="crit"]')
        filter_crit.click()
        page.wait_for_timeout(200)
        visible_cards = page.locator(".card-item:visible")
        print(f"  -> Crit filter: {visible_cards.count()} visible cards (expected 9)")
        assert visible_cards.count() == 9

        filter_tac = page.locator('button[data-cat="tac"]')
        filter_tac.click()
        page.wait_for_timeout(200)
        visible_cards = page.locator(".card-item:visible")
        print(f"  -> Tac filter: {visible_cards.count()} visible cards (expected 12)")
        assert visible_cards.count() == 12

        filter_init = page.locator('button[data-cat="init"]')
        filter_init.click()
        page.wait_for_timeout(200)
        visible_cards = page.locator(".card-item:visible")
        print(f"  -> Init filter: {visible_cards.count()} visible cards (expected 4)")
        assert visible_cards.count() == 4

        # Reset filter
        page.locator('button[data-cat="all"]').click()
        page.wait_for_timeout(200)
        assert page.locator(".card-item:visible").count() == 29

        # Test card flip
        page.locator('button:has-text("全部翻转")').click()
        page.wait_for_timeout(300)
        print("  -> Flip cards test OK")
        page.close()

        # -------------------------------------------------------------
        # 3. Test tracker.html (Match State Tracker on Mobile)
        # -------------------------------------------------------------
        print("\n[CHECK 3] Verifying tracker.html (Mobile Match State)...")
        mobile_ctx = browser.new_context(**iphone)
        page = mobile_ctx.new_page()

        requests_logged = []
        page.on("request", lambda r: requests_logged.append(r.url))

        page.goto(f"{BASE_URL}/tracker.html", wait_until="networkidle")
        assert "Track Game" in page.title()

        # Check action buttons
        assert page.locator("[data-action=choose-primary]").is_visible()
        assert page.locator("[data-action=choose-critical]").is_visible()
        assert page.locator("[data-action=choose-secondary]").is_visible()
        assert page.locator('a[href="first-turn.html"]').is_visible()

        # Test selecting a primary op
        page.locator("[data-action=choose-primary]").click()
        primary_choice = page.locator('[data-primary-id="primary-crit-op"]')
        primary_choice.click()
        status_text = page.locator("[data-tracker-status]").text_content()
        print(f"  -> Tracker status after selecting Primary Op: {status_text}")
        assert "主要任务 · 主要行动：关键行动" in status_text

        # Wait for background prefetch
        page.wait_for_timeout(1000)
        prefetched = [u for u in requests_logged if "first-turn" in u]
        print(f"  -> Background prefetch requests observed: {len(prefetched)}")
        assert len(prefetched) > 0, "Idle preloading must trigger in background"

        # -------------------------------------------------------------
        # 4. Test first-turn.html (Initiative Tracker)
        # -------------------------------------------------------------
        print("\n[CHECK 4] Verifying first-turn.html navigation & interactions...")
        with page.expect_navigation():
            page.locator('a[href="first-turn.html"]').click()
        assert "first-turn.html" in page.url

        # Check 4 round rows
        toggles = page.locator("[data-round]")
        assert toggles.count() == 4
        # Toggle all 4 rounds
        for i in range(4):
            toggles.nth(i).click()

        saved = page.evaluate("() => localStorage.getItem('kill-team-first-turn')")
        print(f"  -> First turn localStorage state: {saved}")
        assert saved is not None

        # Return to tracker
        with page.expect_navigation():
            page.locator('a[href="tracker.html"]').click()
        assert "tracker.html" in page.url
        print("  -> Back navigation to tracker.html OK")

        mobile_ctx.close()
        browser.close()
        httpd.shutdown()

    print("\n=======================================================")
    print(" [PUBLISH PRECHECK PASSED] SITE READY FOR GITHUB PAGES! ")
    print("=======================================================")

if __name__ == "__main__":
    run_site_precheck()
