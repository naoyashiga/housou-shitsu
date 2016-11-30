/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/housou-shitsu/404.html","5c94aaa451bbb16384457a29198ede56"],["/housou-shitsu/about/index.html","68875731d1b91861c8387cb98c97e181"],["/housou-shitsu/archive/2001/10/04/001/index.html","2e3af058803f5c13f31a270cc003196c"],["/housou-shitsu/archive/2001/10/11/001/index.html","f1d4933f342c4b277d642b12b1614862"],["/housou-shitsu/archive/2001/10/18/001/index.html","6d82d029a1c83b96d1df79fac78ab6ff"],["/housou-shitsu/archive/2001/10/25/001/index.html","173a41e4bb3191e9f4e8af11137cf78d"],["/housou-shitsu/archive/2001/11/01/001/index.html","c36b2c68c22c25dbb9c073c4892b3bc3"],["/housou-shitsu/archive/2001/11/08/001/index.html","9f22471175c616bd20ea7c18159acc6c"],["/housou-shitsu/archive/2001/11/15/001/index.html","f6783ca279f25cacd5a14a364d9edb51"],["/housou-shitsu/archive/2001/11/22/001/index.html","5e5e9786163266224c1b8bb182985a5c"],["/housou-shitsu/archive/2001/11/29/001/index.html","7fa26998eab5bd0b844f6f34259cb64c"],["/housou-shitsu/archive/2001/12/06/001/index.html","b2d34ef535fe281d8dccba85f04b48b8"],["/housou-shitsu/archive/2001/12/13/001/index.html","f01e839dff2f6883ddd2f28eff0c3ca9"],["/housou-shitsu/archive/2001/12/20/001/index.html","20f4c5d203cd92c88e76955fad7516ca"],["/housou-shitsu/archive/2001/12/27/001/index.html","69a8b691ece8c9c30eaea250e4c35892"],["/housou-shitsu/archive/2002/01/03/001/index.html","1c91ca66fcc2d7b64bac02c6f0982d43"],["/housou-shitsu/archive/2002/01/10/001/index.html","31d5bed039f844244b88f385266d5e35"],["/housou-shitsu/archive/2002/01/17/001/index.html","4217846994e828f1f6808c8f1e87d1d8"],["/housou-shitsu/archive/2002/01/24/001/index.html","364ddbef853e42c8cac950297f1054e9"],["/housou-shitsu/archive/2002/01/31/001/index.html","381555fa74a45f256e7aed8ad4092994"],["/housou-shitsu/archive/2002/02/07/001/index.html","a3ccf6f4c2e3d0d57c9c6563d44d9f6b"],["/housou-shitsu/archive/2002/02/14/001/index.html","3f6ebc0d6624ea36248d4c5c68e620d5"],["/housou-shitsu/archive/2002/02/21/001/index.html","b530f218412059ea9065531522d001ea"],["/housou-shitsu/archive/2002/02/28/001/index.html","98ec67342c6f6deee767107ff5b2bc1f"],["/housou-shitsu/archive/2002/03/07/001/index.html","e1f9bdd6cd189c5af7d183f4d7646fdd"],["/housou-shitsu/archive/2002/03/14/001/index.html","2225f05705f5cc56fe30b7dcd1548ef2"],["/housou-shitsu/archive/2002/03/21/001/index.html","6a620b40f0157acc9f08546f7f99d53f"],["/housou-shitsu/archive/2002/03/28/001/index.html","0787282001f174d0f122925ce55d1dae"],["/housou-shitsu/archive/2002/04/04/001/index.html","52dfa3ded4850eab2ac7a57a9a98ceb8"],["/housou-shitsu/archive/2002/04/11/001/index.html","eaaa9aebd8428f1cbde737a0ddd806f3"],["/housou-shitsu/archive/2002/04/18/001/index.html","eed65bbab711902eb31c830f3eab9039"],["/housou-shitsu/archive/2002/04/25/001/index.html","d9f0cb8868629576418f523e352ce813"],["/housou-shitsu/archive/2002/05/02/001/index.html","e40e6e01cde2d11d9cec9b8fad5108fe"],["/housou-shitsu/archive/2002/05/09/001/index.html","28c50eaaddb0fa165d0fa1dd6d903934"],["/housou-shitsu/archive/2002/05/16/001/index.html","a4b5039ed9cf3d417071b67bf8daff08"],["/housou-shitsu/archive/2002/05/23/001/index.html","799ad13baffafddd7d99d93e772f6d77"],["/housou-shitsu/archive/2002/05/30/001/index.html","54e2d9e5e45930dbc8b6db5688327310"],["/housou-shitsu/archive/2002/06/06/001/index.html","74ebe00332c4eab15a80180056314060"],["/housou-shitsu/archive/2002/06/13/001/index.html","60bc68819c9a6a7b891d7270f2effe6b"],["/housou-shitsu/css/main.css","86172b83866ee26e3b824687cccc90b5"],["/housou-shitsu/images/touch/apple-touch-icon.png","7326f54bfe6776293f08b34c3a5fde7b"],["/housou-shitsu/images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["/housou-shitsu/images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["/housou-shitsu/images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["/housou-shitsu/images/transparent.jpg","f17853017415f4def9d23508feff521a"],["/housou-shitsu/index.html","e50121e3cb5788837baaa34badc5ee6d"],["/housou-shitsu/lists/index.html","659a02fa8032400efa8cc673614dbcb3"],["/housou-shitsu/manifest.json","d61a766421f2876f9d709307eb3d4286"],["/housou-shitsu/scripts/main.min.js","8971778a9cc0ad74eeea6d9ed8a7b87f"],["/housou-shitsu/tags/index.html","efeaf76799c2bf5f67e95f2fcfda2172"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







