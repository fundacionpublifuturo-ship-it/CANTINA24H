/* Service worker v2: guarda la app para abrir rápido, NUNCA guarda datos de Supabase.
   Cada vez que actualices index.html o config.js, cambia el número de VERSION. */
const VERSION = 'cantina-v2.0.0';
const BASE = ['/', '/index.html', '/config.js', '/manifest.webmanifest', '/favicon.png', '/icon-192.png', '/icon-512.png', '/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(BASE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname.endsWith('supabase.co') || url.hostname.endsWith('supabase.in')) return; // datos siempre en vivo

  // Archivos propios: primero internet (actualizaciones), si no hay, la copia guardada
  if (url.origin === self.location.origin) {
    e.respondWith(fetch(req).then(r => {
      if (r.ok) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req.mode === 'navigate' ? '/index.html' : req, copy)); }
      return r;
    }).catch(() => caches.match(req.mode === 'navigate' ? '/index.html' : req)));
    return;
  }
  // Librería de Supabase y fuentes: copia guardada primero
  if (/fonts\.(googleapis|gstatic)\.com$|cdn\.jsdelivr\.net$/.test(url.hostname)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
      if (r.ok || r.type === 'opaque') { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return r;
    })));
  }
});
