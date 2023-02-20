/* https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers */

self.addEventListener("install", (e) => {
    console.log("[Service Worker] Install");
});

self.addEventListener("activate", (e) => {
    console.log("[Service Worker] Activate");
});

self.addEventListener("activate", (e) => {
    console.log("[Service Worker] Activate");
});

self.addEventListener("fetch", (e) => {
    console.log(`[Service Worker] Fetched resource ${e.request.url}`);
});