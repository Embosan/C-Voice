self.addEventListener('fetch', (event) => {
  // Aquí es donde ocurre la magia del modo offline (lo veremos más adelante)
  console.log('Interceptando petición para:', event.request.url);
const CACHE_NAME = 'embosan-voice-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png'
  // Añade aquí tu archivo .css o .js principal si tienen nombres distintos
];

// Instalación: Guarda los archivos en la memoria del móvil
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('📦 EmbosanTech: Guardando archivos en caché');
      return cache.addAll(assets);
    })
  );
});

// Respuesta: Si no hay internet, sirve los archivos desde la caché
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});va
});