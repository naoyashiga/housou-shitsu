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

var precacheConfig = [["/housou-shitsu/404.html","e4a1e9d5f8845630c2723f719a436705"],["/housou-shitsu/about/index.html","cb4005cd20add2f1f3ccc521dcb9657c"],["/housou-shitsu/archive/2001/10/04/001/index.html","b5fd0949a731591d799f3601c4f333b6"],["/housou-shitsu/archive/2001/10/11/001/index.html","70332204d6c075bdedc1fa2e6bf32e40"],["/housou-shitsu/archive/2001/10/18/001/index.html","16fe512eb319942ae9452335bd530215"],["/housou-shitsu/archive/2001/10/25/001/index.html","0aaf8be38aa6c3d1f767cb95fe0d7d1f"],["/housou-shitsu/archive/2001/11/01/001/index.html","f5472a0ee3ca1f7b1673e68bb3255b2b"],["/housou-shitsu/archive/2001/11/08/001/index.html","ee351577b2ab3ad95ca4da0d3a5286cf"],["/housou-shitsu/archive/2001/11/15/001/index.html","20f029028956c63d08baa90f043668b1"],["/housou-shitsu/archive/2001/11/22/001/index.html","74eb3e46c6c96463eb04a69997af2da6"],["/housou-shitsu/archive/2001/11/29/001/index.html","e675c69b4837a87243166c2bbf0fdb11"],["/housou-shitsu/archive/2001/12/06/001/index.html","8bbb313b167ee913bd5c92c57261bf98"],["/housou-shitsu/archive/2001/12/13/001/index.html","6f3910dcf1a660e6d1acba01550da1fa"],["/housou-shitsu/archive/2001/12/20/001/index.html","575cfb8d521b0cd6f41c073600d58dd4"],["/housou-shitsu/archive/2001/12/27/001/index.html","9b5d12f776f784c18333dabdb6e82a39"],["/housou-shitsu/archive/2002/01/03/001/index.html","5165ec6d5718683db3344ea2dc258855"],["/housou-shitsu/archive/2002/01/10/001/index.html","8b920386845a6b070f06f08a91fc7d2e"],["/housou-shitsu/archive/2002/01/17/001/index.html","25f8c5ae578447eee3e5831068aa7ccd"],["/housou-shitsu/archive/2002/01/24/001/index.html","1ef49fa97a5bd1bc9abcc326c58a6203"],["/housou-shitsu/archive/2002/01/31/001/index.html","c2d292bfb30bd4147464e85a2418bc21"],["/housou-shitsu/archive/2002/02/07/001/index.html","528871acc83489540bf6a868d1233643"],["/housou-shitsu/archive/2002/02/14/001/index.html","cce467f8f6be42914570d3d180f7c783"],["/housou-shitsu/archive/2002/02/21/001/index.html","49fb49d76ba700d9a47cd881f628a715"],["/housou-shitsu/archive/2002/02/28/001/index.html","c310b591599c25c64928674527ed5f01"],["/housou-shitsu/archive/2002/03/07/001/index.html","34298ad18a854c5a32a3bfeded85b4e6"],["/housou-shitsu/archive/2002/03/14/001/index.html","85827cc45965b0a27e75d5a9dd0c8b48"],["/housou-shitsu/archive/2002/03/21/001/index.html","c29d2970f340f1ef611a57b40f0a9241"],["/housou-shitsu/archive/2002/03/28/001/index.html","762d6b6c99201836b0f42c344cfe80a1"],["/housou-shitsu/archive/2002/04/04/001/index.html","aa70abe23c0ae68240dd83b3b6809b2b"],["/housou-shitsu/archive/2002/04/11/001/index.html","8a1f1c09a13fc4fd4074169cd1eab39c"],["/housou-shitsu/archive/2002/04/18/001/index.html","ec131cdcb7061f53dd89903ada8fb25d"],["/housou-shitsu/archive/2002/04/25/001/index.html","e35d4c701f24af66c4cfc6afa5ae73ef"],["/housou-shitsu/archive/2002/05/02/001/index.html","5c6fe5e182e99080df311f712725d310"],["/housou-shitsu/archive/2002/05/09/001/index.html","126247ae8c7ead8811a9b93a24fd7c31"],["/housou-shitsu/archive/2002/05/16/001/index.html","6307c319c5a95e90f23203a832b4a953"],["/housou-shitsu/archive/2002/05/23/001/index.html","209f42bd266df41210bc0da5cd5c31d6"],["/housou-shitsu/archive/2002/05/30/001/index.html","4992e1037e8b3d7b732c980da05f49e9"],["/housou-shitsu/archive/2002/06/06/001/index.html","7efffa2ba624d60f7688a0b5f1e5a1fd"],["/housou-shitsu/archive/2002/06/13/001/index.html","6c947c01b5422cac1d4a4a599df00d87"],["/housou-shitsu/css/main.css","86172b83866ee26e3b824687cccc90b5"],["/housou-shitsu/images/touch/apple-touch-icon.png","7326f54bfe6776293f08b34c3a5fde7b"],["/housou-shitsu/images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["/housou-shitsu/images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["/housou-shitsu/images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["/housou-shitsu/images/transparent.jpg","f17853017415f4def9d23508feff521a"],["/housou-shitsu/index.html","f68ecb5ab77341ea1254073a5fb9e811"],["/housou-shitsu/lists/index.html","cc739bd47bfc1e5f976367331a7fa27c"],["/housou-shitsu/manifest.json","d61a766421f2876f9d709307eb3d4286"],["/housou-shitsu/scripts/main.min.js","8971778a9cc0ad74eeea6d9ed8a7b87f"],["/housou-shitsu/tags/index.html","d49e70549484841ffce5f73155370c28"]];
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







