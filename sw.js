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

var precacheConfig = [["/housou-shitsu/404.html","7235eb12195ce23fb95f1f5efb903416"],["/housou-shitsu/about/index.html","85f9f9133db1118838aace31a478907a"],["/housou-shitsu/archive/2001/10/04/001/index.html","7bfb8daf50de356356a03f4f416859dd"],["/housou-shitsu/archive/2001/10/11/001/index.html","6f87c7ae65a0e9671aeb6055bf3379f3"],["/housou-shitsu/archive/2001/10/18/001/index.html","8aef2be82fb378b0651cc831739781bd"],["/housou-shitsu/archive/2001/10/25/001/index.html","be389870634ec4f92f2b8a0e88a309c4"],["/housou-shitsu/archive/2001/11/01/001/index.html","e34796ffa576e1e02f9423a88739939d"],["/housou-shitsu/archive/2001/11/08/001/index.html","ec2ccbcd9903110cb7524bf939bc78bb"],["/housou-shitsu/archive/2001/11/15/001/index.html","bb6cb6ed541ed91358e5a3db82437f33"],["/housou-shitsu/archive/2001/11/22/001/index.html","24a238d833e1f12bb851fc04b9a5ca6d"],["/housou-shitsu/archive/2001/11/29/001/index.html","fa14ccdb53f25c64cc68c42a0a75863e"],["/housou-shitsu/archive/2001/12/06/001/index.html","b5ca9f15e34329314c4a48db5a17d60e"],["/housou-shitsu/archive/2001/12/13/001/index.html","4179e45e0b59668f14d4eb515cd7eacd"],["/housou-shitsu/archive/2001/12/20/001/index.html","e05e009901a2faab1959e77df1f14aa9"],["/housou-shitsu/archive/2001/12/27/001/index.html","358acb327800968a53d50f1d025e4542"],["/housou-shitsu/archive/2002/01/03/001/index.html","5ca45dc3a0aef964b74bdf31e28e59ca"],["/housou-shitsu/archive/2002/01/10/001/index.html","8e0becfa62cb42a2a36b82de101d39fb"],["/housou-shitsu/archive/2002/01/17/001/index.html","f1ab6b4400eafd13a34bf4a39bc39866"],["/housou-shitsu/archive/2002/01/24/001/index.html","f1ac7a3f2d1067f4c108512e57527363"],["/housou-shitsu/archive/2002/01/31/001/index.html","de1c835c8ad14d5d1266cedbac752ca4"],["/housou-shitsu/archive/2002/02/07/001/index.html","5c5028ce42e9d9896bebc91652ba3d10"],["/housou-shitsu/archive/2002/02/14/001/index.html","35c6a0835dfcdd55701d3e5177b08b69"],["/housou-shitsu/archive/2002/02/21/001/index.html","a51ff618c91bbea15ac74fd190c25ebd"],["/housou-shitsu/archive/2002/02/28/001/index.html","7957fae6020a4666319804c5de15120f"],["/housou-shitsu/archive/2002/03/07/001/index.html","2c02ff1ee3c0007f1c81a9a5f2b9393c"],["/housou-shitsu/archive/2002/03/14/001/index.html","e32ece2baa2eab847fedbf48d6885fd1"],["/housou-shitsu/archive/2002/03/21/001/index.html","0baed6a3728418c5972e5fca2563bf64"],["/housou-shitsu/archive/2002/03/28/001/index.html","9f1dc55854891cab0d6bb7ac46b2179f"],["/housou-shitsu/archive/2002/04/04/001/index.html","68065613ea49e4e219e9359d9c64ef50"],["/housou-shitsu/archive/2002/04/11/001/index.html","4146684bebb4d55a81be7ee5fb001613"],["/housou-shitsu/archive/2002/04/18/001/index.html","c5e5a8ef0bcfd4d11fb2062796b6085d"],["/housou-shitsu/archive/2002/04/25/001/index.html","7e7f63454c637434fc2c615d24c626b5"],["/housou-shitsu/archive/2002/05/02/001/index.html","2fc0106805f93c8d3bddc1e408709e95"],["/housou-shitsu/archive/2002/05/09/001/index.html","bc2b5bd9b882a9e767000e9311226d8e"],["/housou-shitsu/archive/2002/05/16/001/index.html","8c17c353b70ecdfac529ae230220c0ac"],["/housou-shitsu/archive/2002/05/23/001/index.html","85aef18b23c0ca0a4d25203357050957"],["/housou-shitsu/archive/2002/05/30/001/index.html","220af4d106584d608a427063d9ad3df2"],["/housou-shitsu/archive/2002/06/06/001/index.html","ab2db7836b566814341f225bb7f2aa84"],["/housou-shitsu/archive/2002/06/13/001/index.html","ae65154a749273b4e0679e799446cd66"],["/housou-shitsu/css/main.css","86172b83866ee26e3b824687cccc90b5"],["/housou-shitsu/images/touch/apple-touch-icon.png","7326f54bfe6776293f08b34c3a5fde7b"],["/housou-shitsu/images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["/housou-shitsu/images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["/housou-shitsu/images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["/housou-shitsu/images/transparent.jpg","f17853017415f4def9d23508feff521a"],["/housou-shitsu/index.html","839ac102ca537b2350d876ea2dd93c99"],["/housou-shitsu/lists/index.html","65d2f11732ad853604157b4712fe81d9"],["/housou-shitsu/manifest.json","d61a766421f2876f9d709307eb3d4286"],["/housou-shitsu/scripts/main.min.js","8971778a9cc0ad74eeea6d9ed8a7b87f"],["/housou-shitsu/tags/index.html","fdc9cc0b801944d2d454f8708f739838"]];
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







