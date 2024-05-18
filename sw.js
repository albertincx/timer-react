/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (

        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })

      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-e264f298'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/index-D9vzVTOO.js",
    "revision": null
  }, {
    "url": "assets/index-Dkbn--n9.js",
    "revision": null
  }, {
    "url": "assets/index-DTiwmVFd.css",
    "revision": null
  }, {
    "url": "assets/index-legacy-C6qVhFXk.js",
    "revision": null
  }, {
    "url": "assets/index-legacy-kE_354q6.js",
    "revision": null
  }, {
    "url": "assets/index-Yon0N6zI.css",
    "revision": null
  }, {
    "url": "assets/polyfills-Bf9OOwh3.js",
    "revision": null
  }, {
    "url": "assets/polyfills-legacy-iNkSH-Sv.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-D_kkWWxm.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-legacy-BOodOgXd.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "37848932c86696128f2a9a18ca9448df"
  }, {
    "url": "timer-process.js",
    "revision": "5a65108750dc1713125072e0818e21a2"
  }, {
    "url": "timer.js",
    "revision": "62c07dc125ba00c3a621b85fdd612bdd"
  }, {
    "url": "favicon.png",
    "revision": "8e753dceb10e5bf3bb67f00b6a597011"
  }, {
    "url": "pwa-192x192.png",
    "revision": "f24c9384006bbc8de95ed69990459dca"
  }, {
    "url": "alarm-512.png",
    "revision": "8e1fc2ace05eda2f37dee485665ecc6d"
  }, {
    "url": "manifest.webmanifest",
    "revision": "74037d9af2a587a2985af257d966360b"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
//# sourceMappingURL=sw.js.map

// Click and open notification
self.addEventListener('notificationclick', event => {
  console.log('Data 1', event)
  event.notification.close();
  event.waitUntil(
      clients
          .matchAll({
            type: "window",
            includeUncontrolled: true
          })
          .then((clientList) => {
            console.log('Data', clientList);
            for (const client of clientList) {
              // if (client.url === "/" && "focus" in client) return client.focus();
              if ("focus" in client) return client.focus();
            }
            if (clients.openWindow) return clients.openWindow("/");
          }),
  );
});
