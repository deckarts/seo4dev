!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o={element(e){e.setAttribute("lang","en-us")}},a={element(e){const t=e.getAttribute("rel"),n=e.getAttribute("href"),o=e.getAttribute("target");n||e.setAttribute("href","/"),t||"_blank"!=o?"_blank"==o&&e.setAttribute("rel","noopener "+t):e.setAttribute("rel","noopener")}},r={element(e){const t=e.getAttribute("alt"),n=e.getAttribute("src");t||e.setAttribute("alt","spacer image"),n.startsWith("/")?(e.setAttribute("src","https://internetmarketingninjas.com"+n),e.setAttribute("loading","lazy")):n.startsWith("../")&&(e.setAttribute("src","https://internetmarketingninjas.com/"+n),e.setAttribute("loading","lazy"))}},i={element(e){const t=e.getAttribute("href"),n=e.getAttribute("rel");t.startsWith("/_next")?e.setAttribute("href","https://cf-pages-next-artzipper.pages.dev"+t):"icon"!=n&&t.startsWith("/")?(e.setAttribute("href","https://internetmarketingninjas.com"+t),e.setAttribute("defer","")):e.setAttribute("defer","")}},s={element(e){const t=e.getAttribute("type");t&&(/ld\+json/.test(t)||/application\/json/.test(t)||e.removeAttribute("type"));const n=e.getAttribute("src");n&&n.startsWith("/javascripts/")||n&&n.startsWith("/scripts/")?e.setAttribute("src","https://internetmarketingninjas.com"+n):n&&n.startsWith("/_next")&&e.setAttribute("src","https://cf-pages-next-artzipper.pages.dev"+n),["/global.js"].includes(n)?e.setAttribute("async",""):["/blogcomments.js"].includes(n)&&e.setAttribute("defer","")}},p={element(e){const t=e.getAttribute("type");t&&(/ld\+json/.test(t)?e.setInnerContent('{\n  "@context": "https://schema.org/",\n  "@type": "Recipe",\n  "name": "Party Coffee Cake",\n  "image": [\n    "https://example.com/photos/1x1/photo.jpg",\n    "https://example.com/photos/4x3/photo.jpg",\n    "https://example.com/photos/16x9/photo.jpg"\n  ],\n  "author": {\n    "@type": "Person",\n    "name": "Mary Stone"\n  },\n  "datePublished": "2018-03-10",\n  "description": "This coffee cake is awesome and perfect for parties.",\n  "prepTime": "PT20M",\n  "cookTime": "PT30M",\n  "totalTime": "PT50M",\n  "keywords": "cake for a party, coffee",\n  "recipeYield": "10",\n  "recipeCategory": "Dessert",\n  "recipeCuisine": "American",\n  "nutrition": {\n    "@type": "NutritionInformation",\n    "calories": "270 calories"\n  },\n  "recipeIngredient": [\n    "2 cups of flour",\n    "3/4 cup white sugar",\n    "2 teaspoons baking powder",\n    "1/2 teaspoon salt",\n    "1/2 cup butter",\n    "2 eggs",\n    "3/4 cup milk"\n    ],\n  "recipeInstructions": [\n    {\n      "@type": "HowToStep",\n      "name": "Preheat",\n      "text": "Preheat the oven to 350 degrees F. Grease and flour a 9x9 inch pan.",\n      "url": "https://example.com/party-coffee-cake#step1",\n      "image": "https://example.com/photos/party-coffee-cake/step1.jpg"\n    },\n    {\n      "@type": "HowToStep",\n      "name": "Mix dry ingredients",\n      "text": "In a large bowl, combine flour, sugar, baking powder, and salt.",\n      "url": "https://example.com/party-coffee-cake#step2",\n      "image": "https://example.com/photos/party-coffee-cake/step2.jpg"\n    },\n    {\n      "@type": "HowToStep",\n      "name": "Add wet ingredients",\n      "text": "Mix in the butter, eggs, and milk.",\n      "url": "https://example.com/party-coffee-cake#step3",\n      "image": "https://example.com/photos/party-coffee-cake/step3.jpg"\n    },\n    {\n      "@type": "HowToStep",\n      "name": "Spread into pan",\n      "text": "Spread into the prepared pan.",\n      "url": "https://example.com/party-coffee-cake#step4",\n      "image": "https://example.com/photos/party-coffee-cake/step4.jpg"\n    },\n    {\n      "@type": "HowToStep",\n      "name": "Bake",\n      "text": "Bake for 30 to 35 minutes, or until firm.",\n      "url": "https://example.com/party-coffee-cake#step5",\n      "image": "https://example.com/photos/party-coffee-cake/step5.jpg"\n    },\n    {\n      "@type": "HowToStep",\n      "name": "Enjoy",\n      "text": "Allow to cool and enjoy.",\n      "url": "https://example.com/party-coffee-cake#step6",\n      "image": "https://example.com/photos/party-coffee-cake/step6.jpg"\n    }\n  ],\n  "aggregateRating": {\n    "@type": "AggregateRating",\n    "ratingValue": "5",\n    "ratingCount": "18"\n  },\n  "video": {\n    "@type": "VideoObject",\n    "name": "How to make a Party Coffee Cake",\n    "description": "This is how you make a Party Coffee Cake.",\n    "thumbnailUrl": [\n      "https://example.com/photos/1x1/photo.jpg",\n      "https://example.com/photos/4x3/photo.jpg",\n      "https://example.com/photos/16x9/photo.jpg"\n     ],\n    "contentUrl": "http://www.example.com/video123.mp4",\n    "embedUrl": "http://www.example.com/videoplayer?video=123",\n    "uploadDate": "2018-02-05T08:00:00+08:00",\n    "duration": "PT1M33S",\n    "interactionStatistic": {\n      "@type": "InteractionCounter",\n      "interactionType": { "@type": "http://schema.org/WatchAction" },\n      "userInteractionCount": 2347\n    },\n    "expires": "2019-02-05T08:00:00+08:00"\n  }\n}\n'):e.removeAttribute("type"))}},l={element(e){e.setInnerContent("Detlef's rewrite of SEL's homepage title which is going to be way too long")}},h={headers:{"content-type":"text/html;charset=UTF-8;","content-security-policy":"default-src 'self'; script-src 'self' static.cloudflareinsights.com; style-src 'unsafe-inline' seo4.dev; img-src 'self' via.placeholder.com; object-src 'self'; base-uri 'self';"}},c={headers:{"content-type":"text/html;charset=UTF-8;","content-security-policy":"default-src 'self'; script-src 'self' static.cloudflareinsights.com; style-src 'unsafe-inline' seo4.dev *.slid.es; img-src 'self' via.placeholder.com; font-src 'self' data: *.slid.es; frame-src slides.com; object-src 'self'; base-uri 'self';"}};async function d(e){if("/detlef.jpg"==e){const e=await fetch("https://searchreturn.com/detlef-headshot.jpg");return new Response(e.body,{headers:{"content-type":"image/jpeg","cache-control":"no-cache"}})}if("/detlef-m.jpg"==e){const e=await fetch("https://searchreturn.com/detlef-headshot-mobile.jpg");return new Response(e.body,{headers:{"content-type":"image/jpeg","cache-control":"no-cache"}})}return"/manifest.json"==e?new Response('{\n  "name": "seo4dev",\n  "short_name": "seo4dev",\n  "background_color": "black",\n  "theme_color": "lightgreen",\n  "description": "Companion app for our SEO for Developers Workshops",\n  "display": "standalone",\n  "icons": [\n    {\n      "src": "https://via.placeholder.com/192",\n      "sizes": "192x192",\n      "type": "image/png"\n    },\n    {\n      "src": "https://via.placeholder.com/512",\n      "sizes": "512x512",\n      "type": "image/png",\n      "purpose": "any maskable"\n    }\n  ],\n  "start_url": "/offline.html"\n}',{headers:{"content-type":"application/manifest+json"}}):"/style.css"==e?new Response("article\n{ padding:5px; border:dotted 3px #ff006e; margin-top:5px; }\n\nheader\n{ padding:0px; text-align:center; }\n\naside\n{ margin-top:5px; background-color:#f0eaea; padding:5px; text-align:center; font-style:italic; border:double 3px #b200ff; }\n\nsection\n{ padding:5px; border:dashed 3px #0026ff; margin-top:5px; }\n\nfooter\n{ padding:5px; text-align:center; font-weight:bold; }\n\nnav\n{ text-align:center; }\n\nul li\n{ display:inline; padding-left:5px; padding-right:5px; text-align:left; font-size:16px; font-weight:bold; }",{headers:{"content-type":"text/css","cache-control":"no-cache"}}):"/service-worker.js"==e?new Response("self.addEventListener('install', (e) => {\n  e.waitUntil(\n    caches.open('seo4-dev').then((cache) => cache.addAll([\n      '/offline.html',\n    ])),\n  );\n});\n\nself.addEventListener('fetch', (e) => {\n  console.log(e.request.url);\n  e.respondWith(\n    caches.match(e.request).then((response) => response || fetch(e.request)),\n  );\n});",{headers:{"content-type":"text/javascript","cache-control":"no-cache"}}):"/script.js"==e?new Response("if ('serviceWorker' in navigator) {\n  navigator.serviceWorker\n    .register('/service-worker.js')\n    .then(() => { console.log('Service Worker Registered'); });\n}",{headers:{"content-type":"text/javascript","cache-control":"no-cache"}}):new Response("dispatch request not path found",{status:404})}async function m(e){if("/minwiz/"==e)return await fetch("http://detlefjohnson.com/minwiz.html");if("/minwiz-schema.json"==e)return await fetch("http://detlefjohnson.com/demo-schema.json");if("/minwiz-full/"==e){const e=await fetch("http://detlefjohnson.com/minwiz-cake.html");return(new HTMLRewriter).on("script",p).transform(e)}if("/nextjs/"==e){const e=await fetch("https://cf-pages-next-artzipper.pages.dev/");return(new HTMLRewriter).on("html",o).on("link",i).on("script",s).transform(e)}if("/imn/"==e){const e=await fetch("https://internetmarketingninjas.com/");return(new HTMLRewriter).on("a",a).on("img",r).on("link",i).on("script",p).transform(e)}if("/sel/"==e){const e=await fetch("https://searchengineland.com/");return(new HTMLRewriter).on("a",a).on("title",l).on("script",s).transform(e)}return new Response("dispatch subrequest path not found",{status:404})}addEventListener("fetch",e=>{let t=new URL(e.request.url).pathname;switch(t){case"/nextjs/":case"/imn/":case"/sel/":case"/minwiz/":case"/minwiz-schema.json":case"/minwiz-full/":e.respondWith(m(t));break;case"/manifest.json":case"/service-worker.js":case"/script.js":case"/style.css":case"/detlef.jpg":case"/detlef-m.jpg":e.respondWith(d(t));break;case"/favicon.ico":e.respondWith(fetch("https://searchreturn.com/favicon.ico"));break;case"/smx.jpg":e.respondWith(fetch("https://searchreturn.com/smx.jpg"));break;case"/offline.html":e.respondWith(new Response("offline"));break;case"/hire/":e.respondWith(new Response('<!DOCTYPE html>\n<html lang="en-us">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">\n    <title>Hire Detlef Johnson</title>\n    <meta name="description" content="Hire Detlef Johnson to give a Core Web Vitals workshop to your team, to present to your developers, or to optimize through a proxy service without the need for your developers to get involved.">\n    <meta name="keywords" content="seo for developers, smx, smx advanced, smx advanced workshop">\n    <link rel="prefetch" href="/" as="document">\n    <style>body { max-width:650px; margin:0 auto; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; } nav { padding:15px 0; } article { padding:5px; border:none; margin-top:5px; } h1, header { text-align:center; } header { padding:0px; } aside { margin-top:5px; background-color:#f0eaea; padding:5px; text-align:center; font-style:italic; border:double 3px #b200ff; } section { padding:5px; border:none; margin-top:5px; } footer { padding:5px; text-align:center; font-weight:bold; } nav { text-align:center; } .skip-link { position:absolute; top:-40px; left:0; background:#000000; color:white; padding:8px; z-index:100; } .skip-link:focus { top:0; }</style>\n  </head>\n  <body style="max-width:650px; margin:0 auto;">\n    <a class="skip-link" href="#main">Skip to main</a>\n    <header>\n      <nav><a title="Home" href="/">Home</a> | <a title="Hire" href="/hire/">Hire</a> | <a title="Schedule" href="/schedule/">Schedule</a></nav>\n    </header>\n    <main id="main">\n      <h1>Hire Detlef Johnson</h1>\n      <article>\n          <h2>Workshops</h2>\n          <p>Workshops are available onsite or using remote connectivity. I offer something similar to but not exactly SEO for Developers, privately, with an extra emphasis on Core Web Vitals for performance improvement. You can request a special Workshop topic or agenda. References are available upon request.</p>\n          <h2>Core Web Vitals Service</h2>\n          <p>You can retain me for optimization exclusively by proxy through my employer <a title="Internet Marketing Ninjas" href="https://www.internetmarketingninjas.com/">Internet Marketing Ninjas</a> to improve your performance scores for Google without the need to involve your developers. A working cloudflare account is required for service and Business level or better is recommended.</p>\n      </article>\n      <section>\n        <h2>About</h2>\n      \n        <aside>\n          <figure>\n            <img alt="Detlef Johnson" srcset="/detlef-m.jpg 150w, /detlef.jpg 300w" sizes="150vw" src="/detlef.jpg" width="150" height="150">\n            <figcaption>Detlef Johnson</figcaption>\n          </figure>\n          <h2>SMX Workshops Companion Website</h2>\n          <p>This prototype website and subsequent application services are for demonstrating Core Web Vitals and best practices for learning in SMX Workshops by <a title="Detlef Johnson" rel="noopener" target="_blank" href="https://searchengineland.com/author/detlef-johnson">Detlef Johnson</a>, author of the Search Engine Land column: "SEO for Developers."</p>\n        </aside>\n      </section>\n    </main>\n    \n    <footer>\n      <hr>\n      <p>Copyright &copy; Detlef Johnson. All rights reserved.</p>\n      <nav><a title="Detlef on Twitter" href="https://twitter.com/deckarts">Twitter</a> | <a title="Source on GitHub" href="https://github.com/deckarts/seo4dev">GitHub</a></nav>\n    </footer>\n  </body>\n</html>',h));break;case"/schedule/":e.respondWith(new Response('<!DOCTYPE html>\n<html lang="en-us">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">\n    <title>SMX Event Workshop Schedule</title>\n    <meta name="description" content="Schedule of SMX Events with SEO for Developers Workshops planned.">\n    <meta name="keywords" content="seo for developers, smx, smx advanced, smx advanced workshop">\n    <link rel="prefetch" href="/" as="document">\n    <link rel="prefetch" href="/smx-report/" as="document">\n    <link rel="prefetch" href="/smx-advanced/" as="document">\n    <style>body { max-width:650px; margin:0 auto; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; } nav { padding:15px 0; } article { padding:5px; border:none; margin-top:5px; } h1, header { text-align:center; } header { padding:0px; } aside { margin-top:5px; background-color:#f0eaea; padding:5px; text-align:center; font-style:italic; border:double 3px #b200ff; } section { padding:5px; border:none; margin-top:5px; } footer { padding:5px; text-align:center; font-weight:bold; } nav { text-align:center; } .skip-link { position:absolute; top:-40px; left:0; background:#000000; color:white; padding:8px; z-index:100; } .skip-link:focus { top:0; }</style>\n  </head>\n  <body style="max-width:650px; margin:0 auto;">\n    <a class="skip-link" href="#main">Skip to main</a>\n    <header>\n      <nav><a title="Home" href="/">Home</a> | <a title="Hire" href="/hire/">Hire</a> | <a title="Schedule" href="/schedule/">Schedule</a></nav>\n    </header>\n    <main id="main">\n      <h1>Workshop Schedule</h1>\n      <article>\n        <h2>PubCon 2021</h2>\n        <h3>PubCon Pro Florida</h3>\n        <p>August 3rd, 4th, &amp; 5th*</p>\n      </article>\n      <article>\n        <h2>SMX Workshops 2021</h2>\n        <h3>SMX Next</h3>\n        <p>November 9th and 10th*</p>\n        <h3>SMX Code</h3>\n        <p>December 14th*</p>\n        <strong>*TBD: Participation is pending.</strong>\n      </article>\n      <article>\n        <h2>Past Events</h2>\n        <h3>SMX Advanced</h3>\n        <p>Our <a title="Latest SMX Workshop" href="/smx-advanced/">latest workshop</a> was held June 17th and 18th and included a "Birds of a Feather" agency / developer communications session.</p>\n        <h3>SMX Report</h3>\n        <p><a title="SMX Report Workshop" href="/smx-report/">Our debut workshop</a>! It was held February 24th and 25th, 2021. We got enough positive feedback to hold another one.</p>\n      </article>\n      <section>\n        <h2>About</h2>\n      \n        <aside>\n          <figure>\n            <img alt="Detlef Johnson" srcset="/detlef-m.jpg 150w, /detlef.jpg 300w" sizes="150vw" src="/detlef.jpg" width="150" height="150">\n            <figcaption>Detlef Johnson</figcaption>\n          </figure>\n          <h2>SMX Workshops Companion Website</h2>\n          <p>This prototype website and subsequent application services are for demonstrating Core Web Vitals and best practices for learning in SMX Workshops by <a title="Detlef Johnson" rel="noopener" target="_blank" href="https://searchengineland.com/author/detlef-johnson">Detlef Johnson</a>, author of the Search Engine Land column: "SEO for Developers."</p>\n        </aside>\n      </section>\n    </main>\n    \n    <footer>\n      <hr>\n      <p>Copyright &copy; Detlef Johnson. All rights reserved.</p>\n      <nav><a title="Detlef on Twitter" href="https://twitter.com/deckarts">Twitter</a> | <a title="Source on GitHub" href="https://github.com/deckarts/seo4dev">GitHub</a></nav>\n    </footer>\n  </body>\n</html>',h));break;case"/smx-report/":e.respondWith(new Response('<!DOCTYPE html>\n<html lang="en-us">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">\n    <title>SMX Report 2021: SEO for Developers Workshop</title>\n    <meta name="description" content="SMX Report 2021: SEO for Developers workshop by Detlef Johnson.">\n    <meta name="keywords" content="seo for developers, smx, smx advanced, smx advanced workshop">\n    <link rel="preconnect" href="https://slides.com">\n    <link rel="prefetch" href="/" as="document">\n    <link rel="prefetch" href="/schedule/" as="document">\n    <style>body { max-width:650px; margin:0 auto; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; } nav { padding:15px 0; } article { padding:5px; border:none; margin-top:5px; } h1, header { text-align:center; } header { padding:0px; } aside { margin-top:5px; background-color:#f0eaea; padding:5px; text-align:center; font-style:italic; border:double 3px #b200ff; } section { padding:5px; border:none; margin-top:5px; } footer { padding:5px; text-align:center; font-weight:bold; } nav { text-align:center; } .skip-link { position:absolute; top:-40px; left:0; background:#000000; color:white; padding:8px; z-index:100; } .skip-link:focus { top:0; }</style>\n  </head>\n  <body>\n    <a class="skip-link" href="#main">Skip to main</a>\n    <header>\n      <nav><a title="Home" href="/">Home</a> | <a title="Hire" href="/hire/">Hire</a> | <a title="Schedule" href="/schedule/">Schedule</a></nav>\n    </header>\n    <main id="main">\n      <h1>SMX Report</h1>\n      <article style="min-height: 500px;">\n        <h2>Presentation February 24th &amp; 25th</h2>\n        <iframe title="SEO for Developers Presentation" style="position:relative; left:25px; border-top:10px solid #34adeb;" src="https://slides.com/deckart/seo-for-developers-feb-2021/embed?byline=hidden&share=hidden" width="576" height="420" allowfullscreen></iframe>\n        <p><img alt="SMX Advanced Logo" style="width:100px; height:auto;" width="484" height="186" src="/smx.jpg"></p>\n      </article>\n      <section>\n        <h2>About</h2>\n      \n        <aside>\n          <figure>\n            <img alt="Detlef Johnson" srcset="/detlef-m.jpg 150w, /detlef.jpg 300w" sizes="150vw" src="/detlef.jpg" width="150" height="150">\n            <figcaption>Detlef Johnson</figcaption>\n          </figure>\n          <h2>SMX Workshops Companion Website</h2>\n          <p>This prototype website and subsequent application services are for demonstrating Core Web Vitals and best practices for learning in SMX Workshops by <a title="Detlef Johnson" rel="noopener" target="_blank" href="https://searchengineland.com/author/detlef-johnson">Detlef Johnson</a>, author of the Search Engine Land column: "SEO for Developers."</p>\n        </aside>\n      </section>\n    </main>\n    \n    <footer>\n      <hr>\n      <p>Copyright &copy; Detlef Johnson. All rights reserved.</p>\n      <nav><a title="Detlef on Twitter" href="https://twitter.com/deckarts">Twitter</a> | <a title="Source on GitHub" href="https://github.com/deckarts/seo4dev">GitHub</a></nav>\n    </footer>\n  </body>\n</html>',c));break;case"/smx-advanced/":e.respondWith(new Response('<!DOCTYPE html>\n<html lang="en-us">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">\n    <title>SMX Advanced 2021: SEO for Developers Workshop</title>\n    <meta name="description" content="SMX Advanced 2021: SEO for Developers workshop by Detlef Johnson.">\n    <meta name="keywords" content="seo for developers, smx, smx advanced, smx advanced workshop">\n    <link rel="preconnect" href="https://slides.com">\n    <link rel="prefetch" href="/" as="document">\n    <link rel="prefetch" href="/schedule/" as="document">\n    <style>body { max-width:650px; margin:0 auto; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; } nav { padding:15px 0; } article { padding:5px; border:none; margin-top:5px; } h1, header { text-align:center; } header { padding:0px; } aside { margin-top:5px; background-color:#f0eaea; padding:5px; text-align:center; font-style:italic; border:double 3px #b200ff; } section { padding:5px; border:none; margin-top:5px; } footer { padding:5px; text-align:center; font-weight:bold; } nav { text-align:center; } .skip-link { position:absolute; top:-40px; left:0; background:#000000; color:white; padding:8px; z-index:100; } .skip-link:focus { top:0; }</style>\n  </head>\n  <body>\n    <a class="skip-link" href="#main">Skip to main</a>\n    <header>\n      <nav><a title="Home" href="/">Home</a> | <a title="Hire" href="/hire/">Hire</a> | <a title="Schedule" href="/schedule/">Schedule</a></nav>\n    </header>\n    <main id="main">\n      <h1>SMX Advanced</h1>\n      <article style="min-height: 500px;">\n        <h2>Presentation June 17th &amp; 18th</h2>\n        <iframe title="SEO for Developers Presentation" style="position:relative; left:25px; border-top:10px solid #34adeb;" src="https://slides.com/deckart/seo-for-developers-jun-2021/embed?byline=hidden&share=hidden" width="576" height="420" allowfullscreen></iframe>\n        <p><img alt="SMX Advanced Logo" style="width:100px; height:auto;" width="484" height="186" src="/smx.jpg"> <a title="SEO for Developers SMX Workshop PDF" rel="noopener" target="_blank" href="https://searchreturn.com/seo4dev.pdf">PDF</a></p>\n      </article>\n      <section>\n        <h2>About</h2>\n      \n        <aside>\n          <figure>\n            <img alt="Detlef Johnson" srcset="/detlef-m.jpg 150w, /detlef.jpg 300w" sizes="150vw" src="/detlef.jpg" width="150" height="150">\n            <figcaption>Detlef Johnson</figcaption>\n          </figure>\n          <h2>SMX Workshops Companion Website</h2>\n          <p>This prototype website and subsequent application services are for demonstrating Core Web Vitals and best practices for learning in SMX Workshops by <a title="Detlef Johnson" rel="noopener" target="_blank" href="https://searchengineland.com/author/detlef-johnson">Detlef Johnson</a>, author of the Search Engine Land column: "SEO for Developers."</p>\n        </aside>\n      </section>\n    </main>\n    \n    <footer>\n      <hr>\n      <p>Copyright &copy; Detlef Johnson. All rights reserved.</p>\n      <nav><a title="Detlef on Twitter" href="https://twitter.com/deckarts">Twitter</a> | <a title="Source on GitHub" href="https://github.com/deckarts/seo4dev">GitHub</a></nav>\n    </footer>\n  </body>\n</html>',c));break;case"/smx-next/":e.respondWith(new Response('<!DOCTYPE html>\n<html lang="en-us">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">\n    <title>SMX Next 2021: SEO for Developers Workshop</title>\n    <meta name="description" content="SMX Next 2021: SEO for Developers workshop by Detlef Johnson.">\n    <meta name="keywords" content="seo for developers, smx, smx advanced, smx advanced workshop">\n    <link rel="prefetch" href="/" as="document">\n    <link rel="prefetch" href="/schedule/" as="document">\n    <style>body { max-width:650px; margin:0 auto; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; } nav { padding:15px 0; } article { padding:5px; border:none; margin-top:5px; } h1, header { text-align:center; } header { padding:0px; } aside { margin-top:5px; background-color:#f0eaea; padding:5px; text-align:center; font-style:italic; border:double 3px #b200ff; } section { padding:5px; border:none; margin-top:5px; } footer { padding:5px; text-align:center; font-weight:bold; } nav { text-align:center; } .skip-link { position:absolute; top:-40px; left:0; background:#000000; color:white; padding:8px; z-index:100; } .skip-link:focus { top:0; }</style>\n  </head>\n  <body>\n    <a class="skip-link" href="#main">Skip to main</a>\n    <header>\n      <nav><a title="Home" href="/">Home</a> | <a title="Hire" href="/hire/">Hire</a> | <a title="Schedule" href="/schedule/">Schedule</a></nav>\n    </header>\n    <main id="main">\n      <h1>SMX Next</h1>\n      <article style="min-height: 500px;">\n        <h2>November 9th &amp; 10th</h2>\n        <p><img alt="SMX Advanced Logo" style="width:100px; height:auto;" width="484" height="186" src="/smx.jpg"></p>\n      </article>\n      <section>\n        <h2>About</h2>\n      \n        <aside>\n          <figure>\n            <img alt="Detlef Johnson" srcset="/detlef-m.jpg 150w, /detlef.jpg 300w" sizes="150vw" src="/detlef.jpg" width="150" height="150">\n            <figcaption>Detlef Johnson</figcaption>\n          </figure>\n          <h2>SMX Workshops Companion Website</h2>\n          <p>This prototype website and subsequent application services are for demonstrating Core Web Vitals and best practices for learning in SMX Workshops by <a title="Detlef Johnson" rel="noopener" target="_blank" href="https://searchengineland.com/author/detlef-johnson">Detlef Johnson</a>, author of the Search Engine Land column: "SEO for Developers."</p>\n        </aside>\n      </section>\n    </main>\n    \n    <footer>\n      <hr>\n      <p>Copyright &copy; Detlef Johnson. All rights reserved.</p>\n      <nav><a title="Detlef on Twitter" href="https://twitter.com/deckarts">Twitter</a> | <a title="Source on GitHub" href="https://github.com/deckarts/seo4dev">GitHub</a></nav>\n    </footer>\n  </body>\n</html>',h));break;case"/smx-code/":e.respondWith(new Response('<!DOCTYPE html>\n<html lang="en-us">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">\n    <title>SMX Code 2021: SEO for Developers Workshop</title>\n    <meta name="description" content="SMX Code 2021: SEO for Developers workshop by Detlef Johnson.">\n    <meta name="keywords" content="seo for developers, smx, smx advanced, smx advanced workshop">\n    <link rel="prefetch" href="/" as="document">\n    <link rel="prefetch" href="/schedule/" as="document">\n    <style>body { max-width:650px; margin:0 auto; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; } nav { padding:15px 0; } article { padding:5px; border:none; margin-top:5px; } h1, header { text-align:center; } header { padding:0px; } aside { margin-top:5px; background-color:#f0eaea; padding:5px; text-align:center; font-style:italic; border:double 3px #b200ff; } section { padding:5px; border:none; margin-top:5px; } footer { padding:5px; text-align:center; font-weight:bold; } nav { text-align:center; } .skip-link { position:absolute; top:-40px; left:0; background:#000000; color:white; padding:8px; z-index:100; } .skip-link:focus { top:0; }</style>\n  </head>\n  <body>\n    <a class="skip-link" href="#main">Skip to main</a>\n    <header>\n      <nav><a title="Home" href="/">Home</a> | <a title="Hire" href="/hire/">Hire</a> | <a title="Schedule" href="/schedule/">Schedule</a></nav>\n    </header>\n    <main id="main">\n      <h1>SMX Code</h1>\n      <article style="min-height: 500px;">\n        <h2>December 14th</h2>\n        <p><img alt="SMX Advanced Logo" style="width:100px; height:auto;" width="484" height="186" src="/smx.jpg"></p>\n      </article>\n      <section>\n        <h2>About</h2>\n      \n        <aside>\n          <figure>\n            <img alt="Detlef Johnson" srcset="/detlef-m.jpg 150w, /detlef.jpg 300w" sizes="150vw" src="/detlef.jpg" width="150" height="150">\n            <figcaption>Detlef Johnson</figcaption>\n          </figure>\n          <h2>SMX Workshops Companion Website</h2>\n          <p>This prototype website and subsequent application services are for demonstrating Core Web Vitals and best practices for learning in SMX Workshops by <a title="Detlef Johnson" rel="noopener" target="_blank" href="https://searchengineland.com/author/detlef-johnson">Detlef Johnson</a>, author of the Search Engine Land column: "SEO for Developers."</p>\n        </aside>\n      </section>\n    </main>\n    \n    <footer>\n      <hr>\n      <p>Copyright &copy; Detlef Johnson. All rights reserved.</p>\n      <nav><a title="Detlef on Twitter" href="https://twitter.com/deckarts">Twitter</a> | <a title="Source on GitHub" href="https://github.com/deckarts/seo4dev">GitHub</a></nav>\n    </footer>\n  </body>\n</html>',h));break;case"/":e.respondWith(new Response('<!DOCTYPE html>\n<html lang="en-us">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">\n    <title>SEO for Developers by Detlef Johnson</title>\n    <meta name="description" content="SMX Advanced 2021: SEO for Developers series workshop by Detlef Johnson">\n    <meta name="keywords" content="seo for developers, smx, smx advanced, smx advanced workshop">\n    <meta name="theme-color" content="lightgreen">\n    <link rel="preconnect" href="https://via.placeholder.com">\n    <link rel="prefetch" href="/smx-report/" as="document">\n    <link rel="prefetch" href="/smx-advanced/" as="document">\n    <link rel="prefetch" href="/schedule/" as="document">\n    <link rel="manifest" href="manifest.json">\n    <link rel="apple-touch-icon" href="https://via.placeholder.com/192">\n    <style>body { max-width:650px; margin:0 auto; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; } nav { padding:15px 0; } article { padding:5px; border:none; margin-top:5px; } h1, header { text-align:center; } header { padding:0px; } aside { margin-top:5px; background-color:#f0eaea; padding:5px; text-align:center; font-style:italic; border:double 3px #b200ff; } section { padding:5px; border:none; margin-top:5px; } footer { padding:5px; text-align:center; font-weight:bold; } nav { text-align:center; } .skip-link { position:absolute; top:-40px; left:0; background:#000000; color:white; padding:8px; z-index:100; } .skip-link:focus { top:0; }</style>\n  </head>\n  <body style="max-width:650px; margin:0 auto;">\n    <a class="skip-link" href="#main">Skip to main</a>\n    <header>\n      <nav><a title="Home" href="/">Home</a> | <a title="Hire" href="/hire/">Hire</a> | <a title="Schedule" href="/schedule/">Schedule</a></nav>\n    </header>\n    <main id="main">\n      <h1>SEO for Developers</h1>\n      <article>\n          <h2>Announcements</h2>\n          <p>TODO: As per request I will figure out a way to get my dotfiles in a Github repo for those who want it. You know who you are! :-)\n          <p>I am waiting on pending acceptance for a panel position on Core Web Vitals optimization at PubCon Pro Florida (in-person) on August 3rd, 4th, and 5th.</p>\n      </article>\n      <section>\n        <h2>About</h2>\n      \n        <aside>\n          <figure>\n            <img alt="Detlef Johnson" srcset="/detlef-m.jpg 150w, /detlef.jpg 300w" sizes="150vw" src="/detlef.jpg" width="150" height="150">\n            <figcaption>Detlef Johnson</figcaption>\n          </figure>\n          <h2>SMX Workshops Companion Website</h2>\n          <p>This prototype website and subsequent application services are for demonstrating Core Web Vitals and best practices for learning in SMX Workshops by <a title="Detlef Johnson" rel="noopener" target="_blank" href="https://searchengineland.com/author/detlef-johnson">Detlef Johnson</a>, author of the Search Engine Land column: "SEO for Developers."</p>\n        </aside>\n      </section>\n    </main>\n    \n    <footer>\n      <hr>\n      <p>Copyright &copy; Detlef Johnson. All rights reserved.</p>\n      <nav><a title="Detlef on Twitter" href="https://twitter.com/deckarts">Twitter</a> | <a title="Source on GitHub" href="https://github.com/deckarts/seo4dev">GitHub</a></nav>\n    </footer>\n  </body>\n</html>',h));break;case"/robots.txt":e.respondWith(new Response("User-agent: *\nDisallow: /honeypot/"));break;case"/2021/06/smx-adv/":e.respondWith(Response.redirect("https://seo4.dev/smx-advanced/",301));break;case"/sitemap.xml":e.respondWith(new Response('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\t<url>\n\t\t<loc>https://seo4.dev/</loc>\n\t\t<lastmod>2021-06-09</lastmod>\n\t\t<changefreq>weekly</changefreq>\n\t\t<priority>1.0</priority>\n\t</url>\n</urlset>'));break;default:e.respondWith(new Response("request not found",{status:404}))}})}]);