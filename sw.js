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

var precacheConfig = [["/housou-shitsu/404.html","f0bd376d0926ef17a6991443b597afcf"],["/housou-shitsu/about/index.html","98031f38c7e5ef9274f8cf313cbd3e82"],["/housou-shitsu/archive/2001/10/04/001/index.html","86dce1976f95f9329cf1142f27cb7c54"],["/housou-shitsu/archive/2001/10/11/001/index.html","a4dfb0b6c439afcb603c8f431da551dd"],["/housou-shitsu/archive/2001/10/18/001/index.html","fec9a1bdd43fb68304dd7596321d1d3e"],["/housou-shitsu/archive/2001/10/25/001/index.html","c17172db820155b86c0019ab652f20a4"],["/housou-shitsu/archive/2001/11/01/001/index.html","01f0acf923e785dfd019bc44776d4026"],["/housou-shitsu/archive/2001/11/08/001/index.html","becf6ee0655769406642e7c8886e7012"],["/housou-shitsu/archive/2001/11/15/001/index.html","f7664d19712fe16e13d1bb66b16c9853"],["/housou-shitsu/archive/2001/11/22/001/index.html","fcb782bdc166cccba9a1ac517c392517"],["/housou-shitsu/archive/2001/11/29/001/index.html","be09c8f314326adefed11b8a444b06b5"],["/housou-shitsu/archive/2001/12/06/001/index.html","2fc2968758d2fcd7b81e501eab5c2e6f"],["/housou-shitsu/archive/2001/12/13/001/index.html","18b75d146c1bcfd761beb84981b895ea"],["/housou-shitsu/archive/2001/12/20/001/index.html","ccf5013c56ef6593466339e5be284218"],["/housou-shitsu/archive/2001/12/27/001/index.html","1a9e2d0e8e2efe9796b89cc1d769e76d"],["/housou-shitsu/archive/2002/01/03/001/index.html","c175fffc5b2e17dcbf1c662f1202a6e1"],["/housou-shitsu/archive/2002/01/10/001/index.html","7d654c596af98fe8ff38d28951e7b9f6"],["/housou-shitsu/archive/2002/01/17/001/index.html","0cc0b6c17d1308ccae829c0042131f83"],["/housou-shitsu/archive/2002/01/24/001/index.html","b34f96549ade10d3aebcdd593614272a"],["/housou-shitsu/archive/2002/01/31/001/index.html","04123e0ab292fae2308d0c2b010235be"],["/housou-shitsu/archive/2002/02/07/001/index.html","90ec0f8f49fd50c310d7c199b4df498c"],["/housou-shitsu/archive/2002/02/14/001/index.html","fd34061434ec45fcd559e0d30fd7fb4a"],["/housou-shitsu/archive/2002/02/21/001/index.html","f8bd0dc8efc099944d69ae132d5049d2"],["/housou-shitsu/archive/2002/02/28/001/index.html","86298d724f141df2806ac11e9324b048"],["/housou-shitsu/archive/2002/03/07/001/index.html","ff7cd5ecf94f89a3cc29582ee37997e2"],["/housou-shitsu/archive/2002/03/14/001/index.html","3e3bc1c5ab60fc01c8f6a9f35fa13bed"],["/housou-shitsu/archive/2002/03/21/001/index.html","472ab61b96f60d00b7c30ec4034e9f8e"],["/housou-shitsu/archive/2002/03/28/001/index.html","3988c5d10ef10f71a493fda2b07157f4"],["/housou-shitsu/archive/2002/04/04/001/index.html","5040a7f8ddcace069a7bf5c78b618853"],["/housou-shitsu/archive/2002/04/11/001/index.html","e317a2a8de66890e7d841043a733cd1a"],["/housou-shitsu/archive/2002/04/18/001/index.html","0c14cb4e2dc0732b1b2bb2fcb028e5f8"],["/housou-shitsu/archive/2002/04/25/001/index.html","bc0306d490bd47f8e1671a288680e0a5"],["/housou-shitsu/archive/2002/05/02/001/index.html","8ac55e06f0406d7d82e569c99199fcc6"],["/housou-shitsu/archive/2002/05/09/001/index.html","f36883ce5cbacc00a6e661933b1b6e13"],["/housou-shitsu/archive/2002/05/16/001/index.html","313540e3b22ed32a7d5706d21424aafb"],["/housou-shitsu/archive/2002/05/23/001/index.html","e055aaca11330dd21f31dbc1da923c4f"],["/housou-shitsu/archive/2002/05/30/001/index.html","3de77165f8488d89ee542cdc0ae18697"],["/housou-shitsu/archive/2002/06/06/001/index.html","5fb008b4e3a452c2b345c67ed4789d4a"],["/housou-shitsu/archive/2002/06/13/001/index.html","ae067d2cbcd13e6eb974cca0d4d25bc7"],["/housou-shitsu/css/main.css","86172b83866ee26e3b824687cccc90b5"],["/housou-shitsu/images/touch/apple-touch-icon.png","7326f54bfe6776293f08b34c3a5fde7b"],["/housou-shitsu/images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["/housou-shitsu/images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["/housou-shitsu/images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["/housou-shitsu/images/transparent.jpg","f17853017415f4def9d23508feff521a"],["/housou-shitsu/index.html","cc168b48c3248801effa2fe2d36632ca"],["/housou-shitsu/lists/index.html","51f7fd60fa07b73a6be15aeb1a572fdc"],["/housou-shitsu/manifest.json","d61a766421f2876f9d709307eb3d4286"],["/housou-shitsu/scripts/main.min.js","8971778a9cc0ad74eeea6d9ed8a7b87f"],["/housou-shitsu/tags/index.html","bd96b77bd90caae997b7a906aa024028"]];
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







