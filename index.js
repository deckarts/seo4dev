//progressive web app
import { pwaManifest, pwaWorker, pwaScript } from "./pages/progressivewebapp";

//pages
import { indexHtml } from "./pages/index";
import { smxadvHtml } from "./pages/smxadv";

//stylesheets
import { stylesheet } from "./pages/stylesheet.js";

//re-writers
import { aRewriter } from "./util/arewriter";
import { imgRewriter } from "./util/imgrewriter";
import { linkRewriter } from "./util/linkrewriter";
import { scriptRewriter } from "./util/scriptrewriter";
import { titleRewriter } from "./util/titlerewriter";

//headers
const defaultHeaders = {
  headers: {
    "content-type": "text/html;charset=UTF-8;",
    "content-security-policy":
      "default-src 'self'; style-src 'unsafe-inline' seo4.dev; img-src 'self' via.placeholder.com; object-src 'none'; base-uri 'none'; report-uri 'none';"
  }
};

const smxadvHeaders = {
  headers: {
    "content-type": "text/html;charset=UTF-8;",
    "content-security-policy":
      "default-src 'self'; frame-src slides.com; style-src 'unsafe-inline' seo4.dev *.slid.es; font-src 'self' data: *.slid.es; img-src 'self' *.slid.es; object-src 'none'; base-uri 'none';"
  }
};

//dispatch handlers
async function dispatchRequest(path) {
  if (path == "/manifest.json") {
    return new Response(pwaManifest, {
      headers: { "content-type": "application/manifest+json;" }
    });
  } else if (path == "/style.css") {
    return new Response(stylesheet, {
      headers: { "content-type": "text/css" }
    });
  } else if (path == "/service-worker.js") {
    return new Response(pwaWorker, {
      headers: { "content-type": "text/javascript" }
    });
  } else if (path == "/script.js") {
    return new Response(pwaScript, {
      headers: { "content-type": "text/javascript" }
    });
  } else {
    return new Response("dispatch request not path found", { status: 404 });
  }
}

async function dispatchSubRequest(path) {
  if (path == "/imn/") {
    const page = await fetch("https://internetmarketingninjas.com/");
    return new HTMLRewriter()
      .on("a", aRewriter)
      .on("img", imgRewriter)
      .on("link", linkRewriter)
      .on("script", scriptRewriter)
      .transform(page);
  } else if (path == "/sel/") {
    const page = await fetch("https://searchengineland.com/");
    return new HTMLRewriter()
      .on("a", aRewriter)
      .on("title", titleRewriter)
      .transform(page);
  } else {
    return new Response("dispatch subrequest path not found", { status: 404 });
  }
}

//router
addEventListener("fetch", event => {
  const parsedUrl = new URL(event.request.url);
  let path = parsedUrl.pathname;
  switch (path) {
    case "/imn/":
      event.respondWith(dispatchSubRequest(path));
      break;
    case "/sel/":
      event.respondWith(dispatchSubRequest(path));
      break;
    case "/manifest.json":
      event.respondWith(dispatchRequest(path));
      break;
    case "/service-worker.js":
      event.respondWith(dispatchRequest(path));
      break;
    case "/script.js":
      event.respondWith(dispatchRequest(path));
      break;
    case "/style.css":
      event.respondWith(dispatchRequest(path));
      break;
    case "/favicon.ico":
      event.respondWith(fetch("https://searchreturn.com/favicon.ico"));
      break;
    case "/detlef.jpg":
      event.respondWith(fetch("https://searchreturn.com/detlef.johnson.jpg"));
      break;
    case "/smx.jpg":
      event.respondWith(fetch("https://searchreturn.com/smx.jpg"));
      break;
    case "/offline.html":
      event.respondWith(new Response("offline"));
      break;
    case "/2021/06/smx-adv/":
      event.respondWith(new Response(smxadvHtml, smxadvHeaders));
      break;
    case "/":
      event.respondWith(new Response(indexHtml, defaultHeaders));
      break;
    case "/robots.txt":
      event.respondWith(new Response("User-agent: *\nDisallow: /honeypot/"));
      break;
    case "/sitemap.xml":
      event.respondWith(
        new Response(
          '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\t<url>\n\t\t<loc>https://seo4.dev/</loc>\n\t\t<lastmod>2021-06-09</lastmod>\n\t\t<changefreq>weekly</changefreq>\n\t\t<priority>1.0</priority>\n\t</url>\n</urlset>'
        )
      );
      break;
    default:
      event.respondWith(new Response("request not found", { status: 404 }));
  }
});
