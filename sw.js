console.log('Started', self);

// self.addEventListener('install', function(event) {
//   self.skipWaiting();
//   console.log('Installed', event);
// });

self.addEventListener('activate', function(event) {
console.log('Activated', event);
});

self.addEventListener('push', function(event) {
  console.log('Push message received', event);
});


let currentCacheName = 'pwatest-sw-v1';

let arrayOfFilesToCache = [
    '/pwa/index.html',
	'/pwa/features/index.html',
	'/pwa/works/index.html',
    '/pwa/team/index.html',
    '/pwa/contact/index.html'
];


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(currentCacheName).then(function(cache) {

        console.log(arrayOfFilesToCache , 'Installed', event);
        return cache.addAll(arrayOfFilesToCache);
    })
  );
});
