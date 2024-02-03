import {precacheAndRoute} from 'workbox-precaching';

/* eslint-disable-next-line no-restricted-globals */
precacheAndRoute(self.__WB_MANIFEST);

const cacheName = 'study';
const cacheFiles = [
  '/', // 루트 경로
  '/index.html', // 인덱스 HTML 파일
  '/src/'
];

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('install', event => {
  console.log('The service worker is install');
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(cacheFiles);
    })
  );
});

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('fetch', event => {
  console.log('The service worker is fetch');
  event.respondWith(
    caches.match(event.request).then(response => {
      return response ||  fetch(event.request);
    })
  );
});
