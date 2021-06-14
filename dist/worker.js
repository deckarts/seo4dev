!(function(e) {
  var t = {};
  function n(s) {
    if (t[s]) return t[s].exports;
    var r = (t[s] = { i: s, l: !1, exports: {} });
    return e[s].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, s) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var s = Object.create(null);
      if (
        (n.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            s,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return s;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function(e, t, n) {
    "use strict";
    n.r(t);
    const s = {
        element(e) {
          const t = e.getAttribute("rel"),
            n = e.getAttribute("href"),
            s = e.getAttribute("target");
          n || e.setAttribute("href", "/"),
            t || "_blank" != s
              ? "_blank" == s && e.setAttribute("rel", "noopener " + t)
              : e.setAttribute("rel", "noopener");
        }
      },
      r = {
        element(e) {
          const t = e.getAttribute("alt"),
            n = e.getAttribute("src");
          t || e.setAttribute("alt", "spacer image"),
            n.startsWith("/")
              ? (e.setAttribute(
                  "src",
                  "https://internetmarketingninjas.com" + n
                ),
                e.setAttribute("loading", "lazy"))
              : n.startsWith("../") &&
                (e.setAttribute(
                  "src",
                  "https://internetmarketingninjas.com/" + n
                ),
                e.setAttribute("loading", "lazy"));
        }
      },
      o = {
        element(e) {
          const t = e.getAttribute("href");
          "canonical" == e.getAttribute("rel")
            ? e.setAttribute("href", "https://internetmarketingninjas.com")
            : t
            ? t.startsWith("/")
              ? (e.setAttribute(
                  "href",
                  "https://internetmarketingninjas.com" + t
                ),
                e.setAttribute("defer", ""))
              : e.setAttribute("defer", "")
            : (e.setAttribute("href", "missing-href"),
              e.setAttribute("defer", ""));
        }
      },
      i = {
        element(e) {
          e.getAttribute("type") && e.removeAttribute("type");
          const t = e.getAttribute("src");
          ((t && t.startsWith("/javascripts/")) ||
            (t && t.startsWith("/scripts/"))) &&
            e.setAttribute("src", "https://internetmarketingninjas.com" + t),
            ["/global.js"].includes(t)
              ? e.setAttribute("async", "")
              : ["/blogcomments.js"].includes(t) && e.setAttribute("defer", "");
        }
      },
      a = {
        headers: {
          "content-type": "text/html;charset=UTF-8;",
          "content-security-policy":
            "default-src 'self'; style-src 'unsafe-inline'; img-src 'self' via.placeholder.com; object-src 'none'; base-uri 'none'; report-uri 'none';"
        }
      },
      c = {
        headers: {
          "content-type": "text/html;charset=UTF-8;",
          "content-security-policy":
            "default-src 'self'; frame-src slides.com; style-src 'unsafe-inline' *.slid.es; font-src 'self' data: *.slid.es; img-src 'self' *.slid.es; object-src 'none'; base-uri 'none';"
        }
      };
    async function l(e) {
      return "/manifest.json" == e
        ? new Response(
            '{\n  "name": "SEO4DEV",\n  "background_color": "black",\n  "theme_color": "lightgreen",\n  "description": "Shows placeholder pictures. Hey, at least it isn\'t cats.",\n  "display": "standalone",\n  "icons": [\n    {\n      "src": "https://via.placeholder.com/192",\n      "sizes": "192x192",\n      "type": "image/png"\n    },\n    {\n      "src": "https://via.placeholder.com/5l2",\n      "sizes": "512x512",\n      "type": "image/png",\n      "purpose": "any maskable"\n    }\n  ],\n  "name": "Awesome placeholder pictures",\n  "short_name": "Placeholders",\n  "start_url": "/offline.html"\n}',
            { headers: { "content-type": "application/manifest+json;" } }
          )
        : "/service-worker.js" == e
        ? new Response(
            "self.addEventListener('install', (e) => {\n  e.waitUntil(\n    caches.open('seo4-dev').then((cache) => cache.addAll([\n      '/offline.html',\n      '/script.js',\n    ])),\n  );\n});\n\nself.addEventListener('fetch', (e) => {\n  console.log(e.request.url);\n  e.respondWith(\n    caches.match(e.request).then((response) => response || fetch(e.request)),\n  );\n});",
            { headers: { "content-type": "text/javascript" } }
          )
        : "/script.js" == e
        ? new Response(
            "if ('serviceWorker' in navigator) {\n  navigator.serviceWorker\n    .register('/service-worker.js')\n    .then(() => { console.log('Service Worker Registered'); });\n}",
            { headers: { "content-type": "text/javascript" } }
          )
        : new Response("dispatch request not path found", { status: 404 });
    }
    async function h(e) {
      if ("/imn/" == e) {
        const e = await fetch("https://internetmarketingninjas.com/");
        return new HTMLRewriter()
          .on("a", s)
          .on("img", r)
          .on("link", o)
          .on("script", i)
          .transform(e);
      }
      if ("/sel/" == e) {
        const e = await fetch("https://searchengineland.com/");
        return new HTMLRewriter().on("a", s).transform(e);
      }
      return new Response("dispatch subrequest path not found", {
        status: 404
      });
    }
    addEventListener("fetch", e => {
      let t = new URL(e.request.url).pathname;
      switch (t) {
        case "/imn/":
        case "/sel/":
          e.respondWith(h(t));
          break;
        case "/2021/06/smx-adv/":
          e.respondWith(
            new Response(
              '<!DOCTYPE html>\n<html lang="en-us">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">\n    <title>SMX Advanced 2021: Web Platform Workshop by Detlef Johnson</title>\n    <meta name="description" content="SMX Advanced 2021: SEO for Developers series workshop by Detlef Johnson to be held in a virtual envoironment until such a time we can produce conferences in person once again.">\n    <meta name="keywords" content="seo for developers, smx, smx advanced, smx advanced workshop">\n    <style>.skip-link { position: absolute; top: -40px; left: 0; background: #000000; color: white; padding: 8px; z-index: 100; } .skip-link:focus { top: 0; }</style>\n  </head>\n  <body>\n    <a class="skip-link" href="#main">Skip to main</a>\n    <header>\n      <nav><a href="/">Home</a> | <a href="/2021/06/smx-adv/">Next Workshop</a></nav>\n    </header>\n    <main id="main">\n      <h1>Presentations</h1>\n      <article>\n        <section style="min-height: 500px;">\n          <h1>SMX Advanced (June 17th, 18th)</h1>\n          <iframe title="SEO for Developers Presentaion" style="position: absolute; left: 8px; border-top: 10px solid #34adeb;" src="https://slides.com/deckart/seo4dev/embed?byline=hidden&share=hidden" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n          <img alt="SMX Advanced Logo" style="position: relative; top: 355px; float: left; width: 100px;" width="484" height:"186" src="/smx.jpg">\n        </section>\n      \n        <aside>\n          <figure>\n            <img alt="Detlef Johnson" src="/detlef.jpg" width="80" height="100">\n            <figcaption>Detlef Johnson</figcaption>\n          </figure>\n          <h1>About this website</h1>\n          <p>Companion website for the SEO for Developers Workshop</p>\n        </aside>\n      </article>\n    </main>\n    \n    <footer>\n      <hr>\n      <p>Copyright &copy; Detlef Johnson. All rights reserved.</p>\n    </footer>\n  </body>\n</html>',
              c
            )
          );
          break;
        case "/":
          e.respondWith(
            new Response(
              '<!DOCTYPE html>\n<html lang="en-us">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">\n    <title>SEO for Developers by Detlef Johnson</title>\n    <meta name="description" content="SMX Advanced 2021: SEO for Developers series workshop by Detlef Johnson">\n    <meta name="keywords" content="seo for developers, smx, smx advanced, smx advanced workshop">\n    <meta name="theme-color" content="lightgreen">\n    <link rel="manifest" href="manifest.json">\n    <link rel="apple-touch-icon" href="https://via.placeholder.com/192">\n    <script src="script.js" defer></script>\n    <style>.skip-link { position: absolute; top: -40px; left: 0; background: #000000; color: white; padding: 8px; z-index: 100; } .skip-link:focus { top: 0; }</style>\n  </head>\n  <body>\n    <a class="skip-link" href="#main">Skip to main</a>\n    <header>\n      <nav><a href="/">Home</a> | <a href="/2021/06/smx-adv/">Next Workshop</a></nav>\n    </header>\n    <main id="main">\n      <h1>SEO for Developers</h1>\n      <article>\n        <section>\n          <h1>Workshop Announcements</h1>\n          <p>The next workshop is Thursday and Friday June 17th and 18th.</p>\n        </section>\n      \n        <aside>\n          <figure>\n            <img alt="Detlef Johnson" src="/detlef.jpg" width="80" height="100">\n            <figcaption>Detlef Johnson</figcaption>\n          </figure>\n          <h1>About this website</h1>\n          <p>Companion website for the SEO for Developers Workshop</p>\n        </aside>\n      </article>\n    </main>\n    \n    <footer>\n      <hr>\n      <p>Copyright &copy; Detlef Johnson. All rights reserved.</p>\n    </footer>\n  </body>\n</html>',
              a
            )
          );
          break;
        case "/manifest.json":
        case "/service-worker.js":
        case "/script.js":
          e.respondWith(l(t));
          break;
        case "/favicon.ico":
          e.respondWith(fetch("https://searchreturn.com/favicon.ico"));
          break;
        case "/detlef.jpg":
          e.respondWith(fetch("https://searchreturn.com/detlef.johnson.jpg"));
          break;
        case "/smx.jpg":
          e.respondWith(fetch("https://searchreturn.com/smx.jpg"));
          break;
        case "/offline.html":
          e.respondWith(new Response("offline"));
          break;
        case "/robots.txt":
          e.respondWith(new Response("User-agent: *\nDisallow: /honeypot/"));
          break;
        case "/sitemap.xml":
          e.respondWith(
            new Response(
              '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\t<url>\n\t\t<loc>https://seo4.dev/</loc>\n\t\t<lastmod>2021-06-09</lastmod>\n\t\t<changefreq>weekly</changefreq>\n\t\t<priority>1.0</priority>\n\t</url>\n</urlset>'
            )
          );
          break;
        default:
          e.respondWith(new Response("request not found", { status: 404 }));
      }
    });
  }
]);
