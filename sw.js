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
    '/index.html',
	'https://bogdanostrovskiy.github.io/pwa/features/index.html',
	'https://bogdanostrovskiy.github.io/pwa/works/index.html',
    'https://bogdanostrovskiy.github.io/pwa/team/index.html',
    'https://bogdanostrovskiy.github.io/pwa/contact/index.html'
];


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(currentCacheName).then(function(cache) {

        console.log(arrayOfFilesToCache , 'Installed', event);
        return cache.addAll(arrayOfFilesToCache);
    })
  );
});
