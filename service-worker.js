self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("pwa-cache").then((cache) => {
        return cache.addAll([
          "/final/pp.html",
          "/final/manifest.json",
          "/final/icon-192x192.png",
          "/final/icon-512x512.png"
          // Agar aapke external CSS/JS files hain, unhe bhi yahan add karein.
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  