/// <reference lib="webworker" />
// declare const self: ServiceWorkerGlobalScope;
import {precacheAndRoute} from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST || []);

// Click and open notification
self.addEventListener('notificationclick', event => {
    event.notification.close();
    // console.log('Data', data)
    console.log('Data', event.data)
    event.waitUntil(
        clients
            .matchAll({
                type: "window",
                includeUncontrolled: true
            })
            .then((clientList) => {
                console.log('Data', clientList)
                for (const client of clientList) {
                    // if (client.url === "/" && "focus" in client) return client.focus();
                    if ("focus" in client) return client.focus();
                }
                // if (clients.openWindow) return clients.openWindow("/");
            }),
    );
});
