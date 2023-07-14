import 'regenerator-runtime';
import CacheRegister from './utils/cache-register';

const assetsSaveToCache = [
  './',
  './icons/icon.png',
  './icons/icon_x48.png',
  './icons/icon_x72.png',
  './icons/icon_x96.png',
  './icons/icon_x128.png',
  './icons/icon_x192.png',
  './icons/icon_x384.png',
  './icons/icon_x512.png',
  './index.html',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheRegister.cachingAppShell([...assetsSaveToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheRegister.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheRegister.revalidateCache(event.request));
});
