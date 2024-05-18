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
    "url": "assets/index-Bl9jXkCj.js",
    "revision": null
  }, {
    "url": "assets/index-CtxCHZba.js",
    "revision": null
  }, {
    "url": "assets/index-DTiwmVFd.css",
    "revision": null
  }, {
    "url": "assets/index-legacy-BJjyzAuM.js",
    "revision": null
  }, {
    "url": "assets/index-legacy-pdiGrKUx.js",
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
    "revision": "a739d1539fc43729a26007c26b1a7b3c"
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
    "url": "alarm-192.png",
    "revision": "261aad9bdd9c9498432dc7f85825eb3f"
  }, {
    "url": "alarm-512.png",
    "revision": "8e1fc2ace05eda2f37dee485665ecc6d"
  }, {
    "url": "manifest.webmanifest",
    "revision": "50db6e0edf08294dc3c6b58cf9a7a430"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
//# sourceMappingURL=sw.js.map
