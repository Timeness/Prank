self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('incognito-cache').then((cache) => {
            return cache.addAll([]); // Cache nothing
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return new Response('Network error occurred', { status: 408 });
        })
    );
});
