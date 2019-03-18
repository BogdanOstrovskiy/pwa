console.log('Started', self);

let currentCacheName = 'pwatest-sw-v7';

let arrayOfFilesToCache = [
    '/pwa/js/main.js',
    '/pwa/js/jquery-2.2.4.min.js',
    '/pwa/css/font-awesome.css',
    '/pwa/css/normalize.css',
    '/pwa/css/socicon.css',
    '/pwa/css/style.css',
    '/pwa/index.html',
    '/pwa/features/index.html',
    '/pwa/works/index.html',
    '/pwa/team/index.html',
    '/pwa/contact/index.html',
    '/pwa/slick/slick.min.js',
    '/pwa/slick/slick.css',
    '/pwa/slick/slick-theme.css',
];

self.addEventListener('install', function (event) {
    // self.skipWaiting();
    console.log('installed', event);
});

self.addEventListener('activate', function (event) {
    console.log('activated', event);
});

self.addEventListener('push', function (event) {
    console.log('push message received', event);
});

self.addEventListener('fetch', function (event) {
    console.log('fetch action received', event.request.url);

    event.respondWith(
        // caches.match(event.request)
        fetch(event.request).catch(function(event) {
            console.error('Returning offline page instead.', event);
            return caches.open(currentCacheName).then(function(cache) {
                return cache.match(event.request);
            });
        })
    )
});

self.addEventListener('install', function (event) {
    // event.waitUntil(
    //     caches.keys().then(function (cacheNames) {
    //         return Promise.all(
    //             cacheNames.map(function (cacheName) {
    //                 if (currentCacheName !== cacheName && cacheName.startsWith("pwatest-sw")) {
    //                     console.log('cache deleted');
    //                     return caches.delete(cacheName);
    //                 }
    //             })
    //         );
    //     })
    // );
    event.waitUntil(
        caches.open(currentCacheName).then(function (cache) {
            console.log(arrayOfFilesToCache, 'Installed', event);
            return cache.addAll(arrayOfFilesToCache);
        })
    )
});