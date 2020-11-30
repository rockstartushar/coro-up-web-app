const staticDevCoffee = "dev-fightagainstcorona-site-v1"
const assets = [
  "/",
  "index.html",
  "corona1.png",
  "corona2.jpg",
  "corona3.jpg",
  "corona4.jpg",
  "corona5.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})