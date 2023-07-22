 

 
const CACHE_NAME = 'my-react-app-cache-v9';
const urlsToCache = ['/index.html', '/offline.html', '/favicon.ico', /* Add other assets you want to cache */];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
