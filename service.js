// Installation Event: Cache necessary assets
self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('cache-v1').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/app-manifest.json',
          '/service.js',
          '/imagess.jpg',
          '/imagee.jpg',
          '/icon-192.png',
          '/icon-512.png'
          // Agar koi aur assets hain (CSS, JS files) to unko yahan add karein
        ]);
      })
    );
  });
  
  // Fetch Event: Serve cached assets when offline
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  