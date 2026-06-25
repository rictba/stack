const CACHE = 'stack-v9';
const ASSETS = [
  '/stack/',
  '/stack/index.html',
  '/stack/manifest.json',
  '/stack/icon.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  // Network-first for the app shell so updates show immediately;
  // fall back to cache when offline.
  if (req.mode === 'navigate' || req.destination === 'document') {
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put('/stack/index.html', copy));
        return res;
      }).catch(() => caches.match('/stack/index.html').then(r => r || caches.match('/stack/')))
    );
    return;
  }
  // Cache-first for static assets.
  e.respondWith(caches.match(req).then(r => r || fetch(req)));
});
