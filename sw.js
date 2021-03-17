const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';
const PRECACHE_URLS = [
  'index.html',
  './',
  'CSS/IMGS/AWFT_Album_cover.png',
  'CSS/IMGS/icon.png',
  'AWFT.css',
  'style.css',
  'main.js',
  'sw.js'
  ];
// The install handler takes care of precaching our resources as directed
self.addEventListener('install',function(event){
event.waitUntil(
  caches.open(PRECACHE).then(function(cache){
    return cache.addAll(PRECACHE_URLS);
  })
  );
});

//activate handler
self.addEventListener('activate',event =>{
  console.log('Service worker activating...');
});

// The fetch handler
self.addEventListener('fetch',function(event){
  event.respondWith(
    caches.match(event.request).then(function(response){
      return response || fetch(event.request);
    })
    );
});