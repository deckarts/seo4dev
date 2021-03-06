//progressive web app
import { pwaManifest, pwaWorker, pwaScript } from "./pages/components/progressivewebapp";

//pages
import { indexHtml } from "./pages/homeindex";
import { hireHtml } from "./pages/hire";
import { scheduleHtml } from "./pages/schedule";
import { smxBuildHtml, smxReportHtml, smxAdvHtml, smxNextHtml, smxCodeHtml } from "./pages/smxevents";
import { dotfilesHtml } from "./pages/dotfiles";

//stylesheets
import { stylesheet } from "./pages/components/styles.js";

//re-writers
import { htmlRewriter } from "./util/htmlrewriter";
import { aRewriter } from "./util/arewriter";
import { imgRewriter } from "./util/imgrewriter";
import { linkRewriter } from "./util/linkrewriter";
import { scriptRewriter } from "./util/scriptrewriter";
import { schemaRewriter } from "./util/schemarewriter";
import { titleRewriter } from "./util/titlerewriter";

//craft headers
//test: https://observatory.mozilla.org/analyze/seo4.dev
const defaultHeaders = {
  headers: {
    "content-type": "text/html;charset=UTF-8;",
    "X-Content-Type-Options":
      "nosniff",
    "content-security-policy":
      "frame-ancestors 'none'; form-action 'none'; default-src 'none'; script-src 'self' static.cloudflareinsights.com storage.googleapis.com; script-src-elem 'unsafe-inline' cdn.jsdelivr.net static.cloudflareinsights.com; connect-src 'self'; prefetch-src 'self'; manifest-src 'self'; style-src 'self'; img-src 'self' via.placeholder.com; object-src 'self'; base-uri 'self';",
    "X-Frame-Options":
      "SAMEORIGIN",
  }
};

const smxHeaders = {
  headers: {
    "content-type": "text/html;charset=UTF-8;",
    "content-security-policy":
      "frame-ancestors 'none'; form-action 'none'; default-src 'none'; script-src 'self' static.cloudflareinsights.com storage.googleapis.com; script-src-elem 'unsafe-inline' cdn.jsdelivr.net static.cloudflareinsights.com; connect-src 'self'; prefetch-src 'self'; manifest-src 'self'; style-src 'self' *.slid.es; img-src 'self' via.placeholder.com; font-src 'self' data: *.slid.es; frame-src slides.com; object-src 'self'; base-uri 'self';",
  }
};

//dispatch handlers
async function dispatchRequest(path) {
  if (path == "/detlef.jpg") {
    const detlefImg0 = await fetch(
      "https://searchreturn.com/detlef-headshot.jpg"
    );
    return new Response(detlefImg0.body, {
      headers: {
        "content-type": "image/jpeg",
        "cache-control": "no-cache"
      }
    });
  } else if (path == "/detlef-m.jpg") {
    const detlefImg1 = await fetch(
      "https://searchreturn.com/detlef-headshot-mobile.jpg"
    );
    return new Response(detlefImg1.body, {
      headers: {
        "content-type": "image/jpeg",
        "cache-control": "no-cache"
      }
    });
  } else if (path == "/manifest.json") {
    return new Response(pwaManifest, {
      headers: { "content-type": "application/manifest+json" }
    });
  } else if (path == "/style.css") {
    return new Response(stylesheet, {
      headers: {
        "content-type": "text/css",
        "cache-control": "no-cache"
      }
    });
  } else if (path == "/pwabuilder-sw.js") {
    return new Response(pwaWorker, {
      headers: {
        "content-type": "text/javascript",
        "cache-control": "no-cache"
      }
    });
  } else if (path == "/script.js") {
    return new Response(pwaScript, {
      headers: {
        "content-type": "text/javascript",
        "cache-control": "no-cache"
      }
    });
  } else {
    return new Response("dispatch request not path found", { status: 404 });
  }
}

async function dispatchSubRequest(path) {
  if (path == "/images/192x192.png") {
    return await fetch("https://via.placeholder.com/192");
  } else if (path == "/images/512x512.png") {
    return await fetch("https://via.placeholder.com/512");
  } else if (path == "/minwiz/") {
    return await fetch("http://detlefjohnson.com/minwiz.html");
  } else if (path == "/minwiz-schema.json") {
    return await fetch("http://detlefjohnson.com/demo-schema.json");
  } else if (path == "/minwiz-full/") {
    const page = await fetch("http://detlefjohnson.com/minwiz-cake.html");
    return new HTMLRewriter()
      .on("script", schemaRewriter)
      .transform(page);
  } else if(path == "/nextjs/") {
    const page = await fetch("https://cf-pages-next-artzipper.pages.dev/");
    return new HTMLRewriter()
      .on("html", htmlRewriter)
      .on("link", linkRewriter)
      .on("script", scriptRewriter)
      .transform(page);
  } else if(path == "/imn/") {
    const page = await fetch("https://internetmarketingninjas.com/");
    return new HTMLRewriter()
      .on("a", aRewriter)
      .on("img", imgRewriter)
      .on("link", linkRewriter)
      .on("script", schemaRewriter)
      .transform(page);
  } else if (path == "/sel/") {
    const page = await fetch("https://searchengineland.com/");
    return new HTMLRewriter()
      .on("a", aRewriter)
      .on("title", titleRewriter)
      .on("script", scriptRewriter)
      .transform(page);
  } else {
    return new Response("dispatch subrequest path not found", { status: 404 });
  }
}

//our crude router needs a new strategy
addEventListener("fetch", event => {
  const parsedUrl = new URL(event.request.url);
  let path = parsedUrl.pathname;
  switch (path) {
    case "/nextjs/":
      event.respondWith(dispatchSubRequest(path));
      break;
    case "/imn/":
      event.respondWith(dispatchSubRequest(path));
      break;
    case "/sel/":
      event.respondWith(dispatchSubRequest(path));
      break;
    case "/minwiz/":
      event.respondWith(dispatchSubRequest(path));
      break;
    case "/minwiz-schema.json":
      event.respondWith(dispatchSubRequest(path));
      break;
    case "/minwiz-full/":
      event.respondWith(dispatchSubRequest(path));
      break;
    case "/manifest.json":
      event.respondWith(dispatchRequest(path));
      break;
    case "/pwabuilder-sw.js":
      event.respondWith(dispatchRequest(path));
      break;
    case "/script.js":
      event.respondWith(dispatchRequest(path));
      break;
    case "/style.css":
      event.respondWith(dispatchRequest(path));
      break;
    case "/detlef.jpg":
      event.respondWith(dispatchRequest(path));
      break;
    case "/detlef-m.jpg":
      event.respondWith(dispatchRequest(path));
      break;
    case "/favicon.ico":
      event.respondWith(fetch("https://searchreturn.com/favicon.ico"));
      break;
    case "/smx.jpg":
      event.respondWith(fetch("https://searchreturn.com/smx.jpg"));
      break;
    case "/offline.html":
      event.respondWith(new Response("offline"));
      break;
    case "/images/192x192.png":
      event.respondWith(dispatchSubRequest(path));
      break;
    case "/images/512x512.png":
      event.respondWith(dispatchSubRequest(path));
      break;
    case "/hire/":
      event.respondWith(new Response(hireHtml, defaultHeaders));
      break;
    case "/schedule/":
      event.respondWith(new Response(scheduleHtml, defaultHeaders));
      break;
    case "/dotfiles/":
      event.respondWith(new Response(dotfilesHtml, defaultHeaders));
      break;
    case "/smx-build/":
      event.respondWith(new Response(smxBuildHtml, smxHeaders));
      break;
    case "/smx-report/":
      event.respondWith(new Response(smxReportHtml, smxHeaders));
      break;
    case "/smx-advanced/":
      event.respondWith(new Response(smxAdvHtml, smxHeaders));
      break;
    case "/smx-next/":
      event.respondWith(new Response(smxNextHtml, defaultHeaders));
      break;
    case "/smx-code/":
      event.respondWith(new Response(smxCodeHtml, defaultHeaders));
      break;
    case "/":
      event.respondWith(new Response(indexHtml, defaultHeaders));
      break;
    case "/robots.txt":
      event.respondWith(new Response("User-agent: *\nDisallow: /honeypot/"));
      break;
    case "/2021/06/smx-adv/":
      event.respondWith(Response.redirect("https://seo4.dev/smx-advanced/", 301));
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
