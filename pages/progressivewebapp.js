export const pwaManifest =
`{
  "name": "SEO4DEV",
  "background_color": "black",
  "theme_color": "lightgreen",
  "description": "Shows placeholder pictures. Hey, at least it isn't cats.",
  "display": "standalone",
  "icons": [
    {
      "src": "https://via.placeholder.com/192",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "https://via.placeholder.com/5l2",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "name": "Awesome placeholder pictures",
  "short_name": "Placeholders",
  "start_url": "/offline.html"
}`;

export const pwaWorker =
`self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('seo4-dev').then((cache) => cache.addAll([
      '/offline.html',
      '/script.js',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});`


export const pwaScript =
`if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then(() => { console.log('Service Worker Registered'); });
}`
