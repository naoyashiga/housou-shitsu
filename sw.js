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

var precacheConfig = [["/housou-shitsu/404.html","48f7f2c54767002493e85366df8cb7c6"],["/housou-shitsu/about/index.html","10f8e28f43d842adcab6a2e216bc6b6d"],["/housou-shitsu/archive/2001/10/04/001/index.html","4744d71280b78e1c707df97d22f2399e"],["/housou-shitsu/archive/2001/10/11/001/index.html","e2b66c919d77ee6d14a90bdb4310ed58"],["/housou-shitsu/archive/2001/10/18/001/index.html","d70552dc2d1db887aee0efb5592c52f9"],["/housou-shitsu/archive/2001/10/25/001/index.html","aec0cd6125fa6779e0c3bc2f5edc1ad2"],["/housou-shitsu/archive/2001/11/01/001/index.html","433651445791f322c4371a105e0ba67a"],["/housou-shitsu/archive/2001/11/08/001/index.html","5a7218cb509e0fd6c7abed3084bc7cbf"],["/housou-shitsu/archive/2001/11/15/001/index.html","c46d9d0846d51f5b33f2841f1d7c2c16"],["/housou-shitsu/archive/2001/11/22/001/index.html","57f7d9b78b40dd792c42929c1d4eeeaa"],["/housou-shitsu/archive/2001/11/29/001/index.html","04c5f4859f56a4cc652e20b410e93ede"],["/housou-shitsu/archive/2001/12/06/001/index.html","2f16f3003129f2ee79cf6aab48c5f20c"],["/housou-shitsu/archive/2001/12/13/001/index.html","d30f0e3dbb39600fb36540009018f128"],["/housou-shitsu/archive/2001/12/20/001/index.html","6c420c0d6add1a944c4b8910197eae1f"],["/housou-shitsu/archive/2001/12/27/001/index.html","5715a3f32dd25bf5780e13ad2d05cdda"],["/housou-shitsu/archive/2002/01/03/001/index.html","a75d445037a61109ae1c08a3aea8f5bb"],["/housou-shitsu/archive/2002/01/10/001/index.html","565af477559ec867332b252d78ff714c"],["/housou-shitsu/archive/2002/01/17/001/index.html","68e63272c3ad813d5f4599dc8bdfff73"],["/housou-shitsu/archive/2002/01/24/001/index.html","662c8d06f5f9cd30f32600f074dcc827"],["/housou-shitsu/archive/2002/01/31/001/index.html","c797f13310963b12d8d67dac8f891ac0"],["/housou-shitsu/archive/2002/02/07/001/index.html","122b10e964a7406261ceb370af84e80d"],["/housou-shitsu/archive/2002/02/14/001/index.html","d51f902201fbc70bf659441d3198ef9b"],["/housou-shitsu/archive/2002/02/21/001/index.html","654bae39d73035de8f4c2f9315cfb57c"],["/housou-shitsu/archive/2002/02/28/001/index.html","416f975af3e0537a1989be9c179b8779"],["/housou-shitsu/archive/2002/03/07/001/index.html","aaaef8ba173ccb7e45bf533a34d30033"],["/housou-shitsu/archive/2002/03/14/001/index.html","53f2b42f2e05a0f9bcfb093a10548f86"],["/housou-shitsu/archive/2002/03/21/001/index.html","dc425d7ae03f0b66485dccd49c8695f3"],["/housou-shitsu/archive/2002/03/28/001/index.html","8ba895913ddbdb14729d7a1527b421bd"],["/housou-shitsu/archive/2002/04/04/001/index.html","c868ba7ead69728006ca3430d597f4b7"],["/housou-shitsu/archive/2002/04/11/001/index.html","477090dc038a65c382a66af43fd042e1"],["/housou-shitsu/archive/2002/04/18/001/index.html","fa5aa9f9b7cff6c93030e1340ea0698f"],["/housou-shitsu/archive/2002/04/25/001/index.html","9114e29b5db99af4e55f40db440f51da"],["/housou-shitsu/archive/2002/05/02/001/index.html","a83b89d7ad73a606d4d36308205c2e41"],["/housou-shitsu/archive/2002/05/09/001/index.html","f0cffd9908a18ec93f5b88f8f1a46bf0"],["/housou-shitsu/archive/2002/05/16/001/index.html","06f0f8c06cbb3130158d1ad025aa526a"],["/housou-shitsu/archive/2002/05/23/001/index.html","fec300885a47d298e9030ff443c210fa"],["/housou-shitsu/archive/2002/05/30/001/index.html","5819826607988afa51dd9e6cc1df1062"],["/housou-shitsu/archive/2002/06/06/001/index.html","16586c4d2a137dda4def41b6c6a7e286"],["/housou-shitsu/archive/2002/06/13/001/index.html","20111b6a5d827f891c581a89066d10d3"],["/housou-shitsu/css/main.css","86172b83866ee26e3b824687cccc90b5"],["/housou-shitsu/images/touch/apple-touch-icon.png","7326f54bfe6776293f08b34c3a5fde7b"],["/housou-shitsu/images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["/housou-shitsu/images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["/housou-shitsu/images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["/housou-shitsu/images/transparent.jpg","f17853017415f4def9d23508feff521a"],["/housou-shitsu/index.html","674a5d28a7b18ac31768f540ca91a34c"],["/housou-shitsu/lists/index.html","fc344083ed1607bb1753b21cd8e1efea"],["/housou-shitsu/manifest.json","d61a766421f2876f9d709307eb3d4286"],["/housou-shitsu/scripts/main.min.js","8971778a9cc0ad74eeea6d9ed8a7b87f"],["/housou-shitsu/tags/index.html","d54524cdc4b3b97a4aa2ce669f05ac66"]];
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







