/**
 * Kill Team Command Deck - Lightweight Mobile & Desktop Static Preloader
 * Automatically pre-caches target static pages and assets in browser idle time
 * with zero impact on initial page performance.
 */
(function () {
  'use strict';

  function isSaveDataOrSlowConnection() {
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (!conn) return false;
    if (conn.saveData) return true;
    if (conn.effectiveType && (conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g')) return true;
    return false;
  }

  function prefetchUrl(url, asType) {
    if (!url) return;
    const cleanUrl = url.split('?')[0];

    // Check if link prefetch already exists
    if (!document.querySelector(`link[rel="prefetch"][href*="${cleanUrl}"]`)) {
      try {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        if (asType) link.as = asType;
        document.head.appendChild(link);
      } catch (_) {}
    }

    // Low-priority fetch to warm browser HTTP cache (essential for iOS Safari & WebKit)
    if (window.fetch) {
      try {
        window.fetch(url, { priority: 'low', cache: 'default' }).catch(function () {});
      } catch (_) {}
    }
  }

  function injectSpeculationRules(pageUrl) {
    if (!HTMLScriptElement.supports || !HTMLScriptElement.supports('speculationrules')) {
      return;
    }
    const scriptId = 'speculation-rules-' + pageUrl.replace(/[^a-zA-Z0-9]/g, '-');
    if (document.getElementById(scriptId)) return;

    try {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'speculationrules';
      script.textContent = JSON.stringify({
        prerender: [
          {
            source: 'list',
            urls: [pageUrl],
            eagerness: 'moderate'
          }
        ]
      });
      document.head.appendChild(script);
    } catch (_) {}
  }

  window.setupPagePreload = function (options) {
    if (!options || !Array.isArray(options.resources)) return;
    if (isSaveDataOrSlowConnection()) return;

    var targetPage = options.pageUrl || (options.resources[0] && options.resources[0][0]);
    var triggered = false;

    function runPreload() {
      if (triggered) return;
      triggered = true;

      // 1. Speculative rules for Chromium browsers
      if (targetPage && targetPage.endsWith('.html')) {
        injectSpeculationRules(targetPage);
      }

      // 2. Prefetch all specified resources (HTML, CSS, JS)
      options.resources.forEach(function (item) {
        var url = Array.isArray(item) ? item[0] : item;
        var asType = Array.isArray(item) ? item[1] : undefined;
        prefetchUrl(url, asType);
      });
    }

    // Schedule on browser idle after page is loaded, guaranteed within 600ms
    function scheduleIdle() {
      var fallbackTimer = setTimeout(runPreload, 300);
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(function () {
          clearTimeout(fallbackTimer);
          runPreload();
        }, { timeout: 600 });
      }
    }

    if (document.readyState === 'complete') {
      scheduleIdle();
    } else {
      window.addEventListener('load', scheduleIdle, { once: true });
      setTimeout(scheduleIdle, 800);
    }

    // Immediate touch/pointer intent trigger as fallback
    if (options.selector) {
      function attachIntent() {
        var el = document.querySelector(options.selector);
        if (!el) return;
        el.addEventListener('touchstart', runPreload, { once: true, passive: true });
        el.addEventListener('pointerdown', runPreload, { once: true, passive: true });
      }
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', attachIntent, { once: true });
      } else {
        attachIntent();
      }
    }
  };
})();
