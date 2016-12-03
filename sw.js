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

var precacheConfig = [["/housou-shitsu/404.html","e2828dc72f1dcdc3205708aa5ea1f162"],["/housou-shitsu/about/index.html","47053e47a7f17cf9705039e1af58d32e"],["/housou-shitsu/archive/2001/10/04/001/index.html","c9ad80d4d43c12c167a827fdc3485f9a"],["/housou-shitsu/archive/2001/10/11/001/index.html","58e333938c02b20c8df1c647a1bbb64a"],["/housou-shitsu/archive/2001/10/18/001/index.html","fdd09094a492513a92fedded24f07d4c"],["/housou-shitsu/archive/2001/10/25/001/index.html","f6449659d9f0a4eaca7e15eb1a1c99a0"],["/housou-shitsu/archive/2001/11/01/001/index.html","f8eace088b2012eb93cdc1bb06686fec"],["/housou-shitsu/archive/2001/11/08/001/index.html","851bc9d416abae860cf25746855511e4"],["/housou-shitsu/archive/2001/11/15/001/index.html","f5bff5b999b8909e44f7da0bfb5f31c9"],["/housou-shitsu/archive/2001/11/22/001/index.html","a9c4fee9bf30105a58e856382ec1c1de"],["/housou-shitsu/archive/2001/11/29/001/index.html","d4a4a19882067e48640d0a04e99e42e6"],["/housou-shitsu/archive/2001/12/06/001/index.html","df8754157495590ef70f8049f15ccba3"],["/housou-shitsu/archive/2001/12/13/001/index.html","47c6302abb17ac95f3798d2986b1afca"],["/housou-shitsu/archive/2001/12/20/001/index.html","1363c4c43a41de6f118e5bdcc6139d8a"],["/housou-shitsu/archive/2001/12/27/001/index.html","f5126e0173d79dad21fe0ef22726738d"],["/housou-shitsu/archive/2002/01/03/001/index.html","5bdf2767bc2952d8387999639b6c310f"],["/housou-shitsu/archive/2002/01/10/001/index.html","af9c865b41d07e7d9aead651adff1955"],["/housou-shitsu/archive/2002/01/17/001/index.html","497f485280a6797f5004fea8aa48398c"],["/housou-shitsu/archive/2002/01/24/001/index.html","ec6798b39c15e8eec1c2b58f32f57059"],["/housou-shitsu/archive/2002/01/31/001/index.html","2e2217486d9e62e81d7df890813e4b2b"],["/housou-shitsu/archive/2002/02/07/001/index.html","17d35046dd811d67b30341fc0324e36b"],["/housou-shitsu/archive/2002/02/14/001/index.html","f83b58f126e2279f3ca929b8029cfab6"],["/housou-shitsu/archive/2002/02/21/001/index.html","4228d8589652dd0ed084ea50a4411afc"],["/housou-shitsu/archive/2002/02/28/001/index.html","015f93efa6fbc11e3531f70ebe06d13e"],["/housou-shitsu/archive/2002/03/07/001/index.html","99fef84e32eac5427832428994b4465d"],["/housou-shitsu/archive/2002/03/14/001/index.html","77fcd15ae25d43e9edf4de54c58c5cf6"],["/housou-shitsu/archive/2002/03/21/001/index.html","e95ce92b240c54e32800760d0f552a35"],["/housou-shitsu/archive/2002/03/28/001/index.html","83fb2cd9297f45f5ee3298fbbf93d90d"],["/housou-shitsu/archive/2002/04/04/001/index.html","5700f097a5ef5fc80ac477fefa9020c6"],["/housou-shitsu/archive/2002/04/11/001/index.html","2def9509e93164d0a0a5089c4f5a811f"],["/housou-shitsu/archive/2002/04/18/001/index.html","2e85170049c9922a0ebe37ad87ba06a7"],["/housou-shitsu/archive/2002/04/25/001/index.html","a0bbd5df879a9a1d7d6fb7f99a8a21a1"],["/housou-shitsu/archive/2002/05/02/001/index.html","90dacd3a9dba617a41f27252b17575cf"],["/housou-shitsu/archive/2002/05/09/001/index.html","a2a8fd5104c5ce20f47e2bc78adc7b90"],["/housou-shitsu/archive/2002/05/16/001/index.html","5a8d962b71f2dcf89dbb6db94829ed21"],["/housou-shitsu/archive/2002/05/23/001/index.html","2de11fd5dcdf493616bc4e1918591cf9"],["/housou-shitsu/archive/2002/05/30/001/index.html","a644aa0da109a6a3b413a1e022a3f299"],["/housou-shitsu/archive/2002/06/06/001/index.html","118a3bd877f181d8b0f554d07131e84d"],["/housou-shitsu/archive/2002/06/13/001/index.html","115ca137e8e78be3a625a6795e91c199"],["/housou-shitsu/archive/2002/06/20/001/index.html","1c9766adfcfc0594206a5651bf26eb07"],["/housou-shitsu/archive/2002/06/27/001/index.html","a69aff9af651f13618f6dd8f13705a22"],["/housou-shitsu/archive/2002/07/04/001/index.html","bfa7d5a0d4340184e7d0b278b05f0221"],["/housou-shitsu/archive/2002/07/11/001/index.html","519917894b0668751875274c596c82fd"],["/housou-shitsu/archive/2002/07/18/001/index.html","509476f4690d9c139b6120195f3b6d22"],["/housou-shitsu/archive/2002/07/25/001/index.html","1a2c0e27a674d8c4fcadedb901ac2fc5"],["/housou-shitsu/archive/2002/08/01/001/index.html","98b586d2c0795ad53b39d7e59e1bc22f"],["/housou-shitsu/archive/2002/08/08/001/index.html","eade48c342f876fcdd3f4a1622abf691"],["/housou-shitsu/archive/2002/08/15/001/index.html","134c21bf68869e6cc5d547b50fa4dc5b"],["/housou-shitsu/archive/2002/08/22/001/index.html","8463949105ce43f95e87a3a15c5ce192"],["/housou-shitsu/archive/2002/08/29/001/index.html","1cf41c41b3d3504b59e4fbdf325afbd2"],["/housou-shitsu/archive/2002/09/05/001/index.html","f67f98acde30968b365e3f9ac5080720"],["/housou-shitsu/archive/2002/09/12/001/index.html","07c3229e4c33eb99c20b82dc47cf0c60"],["/housou-shitsu/archive/2002/09/19/001/index.html","5d78d2e50957727fa5301134e46670ec"],["/housou-shitsu/archive/2002/09/26/001/index.html","5198148aa640a982c84950d479c35acd"],["/housou-shitsu/archive/2002/10/03/001/index.html","4837a40a0e6439fd8218f15aa02a4c81"],["/housou-shitsu/archive/2002/10/10/001/index.html","755d8a39d27a4d6a07f8f15d5b8ba5e8"],["/housou-shitsu/archive/2002/10/17/001/index.html","e7c8ab4fc6b68a5f2442d2b5ee4c53b2"],["/housou-shitsu/archive/2002/10/24/001/index.html","de27159aa5a8da55c86f29924479b2fb"],["/housou-shitsu/archive/2002/10/31/001/index.html","b82bede6cc3ca5edd1ac97fe1ff3da3a"],["/housou-shitsu/archive/2002/11/07/001/index.html","54cf43c9d2ff1095905e11b08ca4b7bc"],["/housou-shitsu/archive/2002/11/14/001/index.html","3b86b42e09db6b9fedb5e9d783606cf4"],["/housou-shitsu/archive/2002/11/21/001/index.html","64f2a3ecbf863a3373de40449053b32f"],["/housou-shitsu/archive/2002/11/28/001/index.html","698a99a2b5c6e48152aaabf6cbf886a7"],["/housou-shitsu/archive/2002/12/05/001/index.html","d1a38065d3d2a350d9507fb1b528eb5e"],["/housou-shitsu/archive/2002/12/12/001/index.html","28ff644731ebe4189876461ed5ab6f2e"],["/housou-shitsu/archive/2002/12/19/001/index.html","f606aab95e9e6dd1adef694f06457a2b"],["/housou-shitsu/archive/2002/12/26/001/index.html","5ee5a389d9d51a6a3d7c43c593633aed"],["/housou-shitsu/archive/2003/01/02/001/index.html","3b61929435a71f4cbc5b86366438b5c9"],["/housou-shitsu/archive/2003/01/09/001/index.html","0d902a2de90616832081dcd72de98eda"],["/housou-shitsu/archive/2003/01/16/001/index.html","3764c2ae5406c3b614454aa3b2530ad1"],["/housou-shitsu/archive/2003/01/23/001/index.html","4e3d58b07f3a7bf0269d73184184f481"],["/housou-shitsu/archive/2003/01/30/001/index.html","b1d18ffb1db2e2e03164b974f49a3d76"],["/housou-shitsu/archive/2003/02/06/001/index.html","58e84735022afd4751a0b80bcbf0fef4"],["/housou-shitsu/archive/2003/02/13/001/index.html","769ec5f28b688568274f568c5920bbbd"],["/housou-shitsu/archive/2003/02/20/001/index.html","e71d74b53d175a4f42fed8facdbee41c"],["/housou-shitsu/archive/2003/02/27/001/index.html","a554fd616378a95503c82d35c011a290"],["/housou-shitsu/archive/2003/03/06/001/index.html","2646edc8e33b95cabfa15a989a2f0f1b"],["/housou-shitsu/archive/2003/03/13/001/index.html","64eb08c5891a168b7739bcd1e020cd72"],["/housou-shitsu/archive/2003/03/20/001/index.html","f692f1431857c2230071eef6f03ccb77"],["/housou-shitsu/archive/2003/03/27/001/index.html","64a562af165a89df60cda1a89bc3ae78"],["/housou-shitsu/archive/2003/04/03/001/index.html","cb9c2afa642a0ca593742513e59be2c7"],["/housou-shitsu/archive/2003/04/10/001/index.html","9fa0e2cb7113f2fd633754abbfaea32e"],["/housou-shitsu/archive/2003/04/17/001/index.html","9f773e688aafa6e42e2077df537dd6f2"],["/housou-shitsu/archive/2003/04/24/001/index.html","9f8bb9d30569227ea16b988e09b06cae"],["/housou-shitsu/archive/2003/05/01/001/index.html","27fee75f2289c4a66884a9fcdee4947d"],["/housou-shitsu/archive/2003/05/08/001/index.html","8f9928a57857964de4db61aaf1a23539"],["/housou-shitsu/archive/2003/05/15/001/index.html","2df9d572eb39cc9b9b329c44d88f16eb"],["/housou-shitsu/archive/2003/05/22/001/index.html","4c29ae7a37240819be398d5d4b22ee5e"],["/housou-shitsu/archive/2003/05/29/001/index.html","469747d45483ad49f95b3e6e323682e0"],["/housou-shitsu/archive/2003/06/05/001/index.html","914430caaac6b18b385b625fb6220070"],["/housou-shitsu/archive/2003/06/12/001/index.html","37a656cb811350897c4c2a46c9201508"],["/housou-shitsu/archive/2003/06/19/001/index.html","dd27ed3339a9178a7b4ae4fa45220fed"],["/housou-shitsu/archive/2003/06/26/001/index.html","0e43ed597a0482657702a458417db90a"],["/housou-shitsu/archive/2003/07/03/001/index.html","34c91abff4663ca2b241d6fd0cd9f0c3"],["/housou-shitsu/archive/2003/07/10/001/index.html","25d73ace29a86b3c859c0493712a7874"],["/housou-shitsu/archive/2003/07/17/001/index.html","73fc575df2d7b6f635241286cf521136"],["/housou-shitsu/archive/2003/07/24/001/index.html","dbfd1d17ea6ca080977332df3086f9ae"],["/housou-shitsu/archive/2003/07/31/001/index.html","f3ef6b42bb04a47aa6e6ab82d273367c"],["/housou-shitsu/archive/2003/08/07/001/index.html","9a346087b4b4b301fbd817a3bc96d440"],["/housou-shitsu/archive/2003/08/14/001/index.html","7fe9824d23844b1213cf9288bef3be45"],["/housou-shitsu/archive/2003/08/21/001/index.html","b75d949123a5798182251e8af47c7749"],["/housou-shitsu/archive/2003/08/28/001/index.html","db2d8201f7ae22fd1f8bf2ba48d3cb4e"],["/housou-shitsu/archive/2003/09/04/001/index.html","f54b583c036a614339f5f4f15981a4d7"],["/housou-shitsu/archive/2003/09/11/001/index.html","c114da3c351bafd72255ff261214b882"],["/housou-shitsu/archive/2003/09/18/001/index.html","44c74063d5ad4250736467df9ccd88d9"],["/housou-shitsu/archive/2003/09/25/001/index.html","344fd32abb75b09404823a96f3fbf8b4"],["/housou-shitsu/archive/2003/10/02/001/index.html","b5638e69a37c2c5bcbdc7c617eed992a"],["/housou-shitsu/archive/2003/10/09/001/index.html","cdc26f78da25c36cdf1522171d83667a"],["/housou-shitsu/archive/2003/10/16/001/index.html","1780e096b5dd48bbbbf1cb1042672ac1"],["/housou-shitsu/archive/2003/10/23/001/index.html","643c0fe1ac5ef30db97221dbefeee1b6"],["/housou-shitsu/archive/2003/10/30/001/index.html","835ba792f7b6bb9295f3c34e2cb0b98d"],["/housou-shitsu/archive/2003/11/06/001/index.html","579fb88724ffddf47472ee51e485ef66"],["/housou-shitsu/archive/2003/11/13/001/index.html","e37cb1c0ee96c8c91b5d9fc04282cee0"],["/housou-shitsu/archive/2003/11/20/001/index.html","69a28031c03c9303de9d0f516f94fd81"],["/housou-shitsu/archive/2003/11/27/001/index.html","9888bdd20064a3d9b655218f44d73236"],["/housou-shitsu/archive/2003/12/04/001/index.html","3522b49cf18358f67219e87fc5f478c0"],["/housou-shitsu/archive/2003/12/11/001/index.html","6cc382ae81c42a2e810a30ad0486e6cc"],["/housou-shitsu/archive/2003/12/18/001/index.html","c70a54afd83312541240da668d0cdbd6"],["/housou-shitsu/archive/2003/12/25/001/index.html","b0301b0685a828026ba6cf2d711eb63d"],["/housou-shitsu/archive/2004/01/01/001/index.html","4f98b92b56bb2dd304b172a3e53a8d31"],["/housou-shitsu/archive/2004/01/08/001/index.html","df80b339498c8e1e539f19019334d8df"],["/housou-shitsu/archive/2004/01/15/001/index.html","0aec8e8574119894004df2a005ac64e4"],["/housou-shitsu/archive/2004/01/22/001/index.html","c14c66e829446294eed7ba4e3c3d6820"],["/housou-shitsu/archive/2004/01/29/001/index.html","5d1d03a7e2435873fd076b54521b7d7a"],["/housou-shitsu/archive/2004/02/05/001/index.html","aca93ba411641d292c45dbf97dacf2af"],["/housou-shitsu/archive/2004/02/12/001/index.html","530c0d83cc96da74addab0b8c47bdead"],["/housou-shitsu/archive/2004/02/19/001/index.html","afe0184dc2bf1d3fcf53d743a0865794"],["/housou-shitsu/archive/2004/02/26/001/index.html","d1d527360b2948979b7ff99acdc7c136"],["/housou-shitsu/archive/2004/03/04/001/index.html","2ecaf499f3b2b07b7735518890136e5f"],["/housou-shitsu/archive/2004/03/11/001/index.html","0767b5c7b1677cd288c5b6995b8b1505"],["/housou-shitsu/archive/2004/03/18/001/index.html","87ed66c4ab7216209e820ad8e43d74d9"],["/housou-shitsu/archive/2004/03/25/001/index.html","57710d84eaff3d70993216f3fea1bce0"],["/housou-shitsu/archive/2004/04/01/001/index.html","452190df24e5c86a3fc2e1c0a3367b89"],["/housou-shitsu/archive/2004/04/08/001/index.html","01db4d37b2a2aa2869dc96cd7398631f"],["/housou-shitsu/archive/2004/04/15/001/index.html","997b238eb0722cfd0a324d8572a57322"],["/housou-shitsu/archive/2004/04/22/001/index.html","088615c8e3a4515166a5f177841c474b"],["/housou-shitsu/archive/2004/04/29/001/index.html","cb099fdebeab9e5996f8a487b620e867"],["/housou-shitsu/archive/2004/05/06/001/index.html","41d95108964bf32d7fb03465d0f51dbf"],["/housou-shitsu/archive/2004/05/13/001/index.html","b6e482ca2b11cc3f119bcca1be65264d"],["/housou-shitsu/archive/2004/05/20/001/index.html","05430856aa950f9c8c205f812daca81e"],["/housou-shitsu/archive/2004/05/27/001/index.html","2cdb81eeb19ceb3bf155cb3910b156ab"],["/housou-shitsu/archive/2004/06/03/001/index.html","4f2805c8a039797076b4209e68c71b41"],["/housou-shitsu/archive/2004/06/10/001/index.html","988a519abea65b6aa4722e814e71639b"],["/housou-shitsu/archive/2004/06/17/001/index.html","28c5f27a5f2aaa79d9bdd7fcf0f146a6"],["/housou-shitsu/archive/2004/06/24/001/index.html","bcc43069c7fbe20cd6593bb0ffb35612"],["/housou-shitsu/archive/2004/07/01/001/index.html","b84cb8da4121c7f6745f48d45e99744f"],["/housou-shitsu/archive/2004/07/08/001/index.html","433c357a422cab6ea2e4ba6a7c7346a4"],["/housou-shitsu/archive/2004/07/15/001/index.html","2569d54a9c5c84780fbab717e65e0f53"],["/housou-shitsu/archive/2004/07/22/001/index.html","8463afb61cd360db53efafda5822dc72"],["/housou-shitsu/archive/2004/07/29/001/index.html","7dba5a28aa3f4d41f8e453a596c8db88"],["/housou-shitsu/archive/2004/08/05/001/index.html","21c01d17fb977f4bd59565304a36d2c6"],["/housou-shitsu/archive/2004/08/12/001/index.html","769ee2bbc8947ef03d831be6c7786dda"],["/housou-shitsu/archive/2004/08/19/001/index.html","7a0220874ec315f898569de822ed40e5"],["/housou-shitsu/archive/2004/08/26/001/index.html","2038d9cb841a81778eddd9456b5a2f18"],["/housou-shitsu/archive/2004/09/02/001/index.html","216e0bfb8a4335fcabab3e4969e48910"],["/housou-shitsu/archive/2004/09/09/001/index.html","87599e05626c5be17aac439364c385ac"],["/housou-shitsu/archive/2004/09/16/001/index.html","00bf013bff7991ead38fd5177be9b100"],["/housou-shitsu/archive/2004/09/23/001/index.html","3621207e63e012a9bd691ea351c10b07"],["/housou-shitsu/archive/2004/09/30/001/index.html","29549d81a73fc5ec6828259a62523f6e"],["/housou-shitsu/archive/2004/10/07/001/index.html","0cc497ba71b1f098236f37c09af1ceda"],["/housou-shitsu/archive/2004/10/14/001/index.html","3af799db65a1bff9816d1b381aa77899"],["/housou-shitsu/archive/2004/10/21/001/index.html","a086889d1702706dab46704910cbe1cd"],["/housou-shitsu/archive/2004/10/28/001/index.html","a5cdf5f2dbd5614126ef40ed925541c5"],["/housou-shitsu/archive/2004/11/04/001/index.html","ba83aeb35472b37dd275716e35e8e9c6"],["/housou-shitsu/archive/2004/11/11/001/index.html","600de1e26948d10bc6f6caf31002cbc3"],["/housou-shitsu/archive/2004/11/18/001/index.html","1913edb9f66415d1bcc2ce6bccf4c78a"],["/housou-shitsu/archive/2004/11/25/001/index.html","b289587c0896dbd4863fa8f04d2fb3e9"],["/housou-shitsu/archive/2004/12/02/001/index.html","5dfda4c60217aad1cb6b784e946fb7e2"],["/housou-shitsu/archive/2004/12/09/001/index.html","414d617da07a7e9175ce47f26318b5f7"],["/housou-shitsu/archive/2004/12/16/001/index.html","25f77aaedfcbe363b7b048a2e7a61f14"],["/housou-shitsu/archive/2004/12/23/001/index.html","5a46fed0519e1e03bda7cfc5dfebe4f9"],["/housou-shitsu/archive/2004/12/30/001/index.html","e85410d571a9a511fb8d44db881df843"],["/housou-shitsu/archive/2005/01/06/001/index.html","ff24446416306c172f0aba6723f606b9"],["/housou-shitsu/archive/2005/01/13/001/index.html","f1a1f4c691c4e2ae40e4ef26c44f6847"],["/housou-shitsu/archive/2005/01/20/001/index.html","efcb39e52bf57fc73b9013329cbd6aaf"],["/housou-shitsu/archive/2005/01/27/001/index.html","9ccc23431d51e9b84dd4ded35f36f015"],["/housou-shitsu/archive/2005/02/03/001/index.html","505c690cd1bd97146cdf14a076497a1f"],["/housou-shitsu/archive/2005/02/10/001/index.html","5c07f6d0426ba282ca803b4efd68d662"],["/housou-shitsu/archive/2005/02/17/001/index.html","25813d5bc1546da003df49832b5e9997"],["/housou-shitsu/archive/2005/02/24/001/index.html","97033f30303da7494cdcc2857b598a28"],["/housou-shitsu/archive/2005/03/03/001/index.html","3c1e1ba8e579626e04bf1788a59febdc"],["/housou-shitsu/archive/2005/03/10/001/index.html","9fde28c0c0c0b7e259c059801662a0bd"],["/housou-shitsu/archive/2005/03/17/001/index.html","ce95d12954fef596d5e30a91fddaeb35"],["/housou-shitsu/archive/2005/03/24/001/index.html","01e327703f163390f6bc92e59d20fb16"],["/housou-shitsu/archive/2005/03/31/001/index.html","7baf851df4b1b810bf7d5a6d6550519e"],["/housou-shitsu/archive/2005/04/02/001/index.html","22ca0c01858952bd014758d97133086d"],["/housou-shitsu/archive/2005/04/09/001/index.html","80c95b25e57265c007c4818770fb5f6f"],["/housou-shitsu/archive/2005/04/16/001/index.html","4fd39f82b5f5a1ba5842dbf813c4f78c"],["/housou-shitsu/archive/2005/04/23/001/index.html","00105715bd0d90d6c0688554b118b8db"],["/housou-shitsu/archive/2005/04/30/001/index.html","5deb402e0ca6d6232cf1d90a88418f95"],["/housou-shitsu/archive/2005/05/07/001/index.html","d68ffd7a3cc9ae4f56e97e961cc2301b"],["/housou-shitsu/archive/2005/05/14/001/index.html","2c7f611e2cd7159d911cbc01b662ff0b"],["/housou-shitsu/archive/2005/05/21/001/index.html","940af553b6367acdd4e498a17c3d1841"],["/housou-shitsu/archive/2005/05/28/001/index.html","045acba9be5979155e4f235241a57af3"],["/housou-shitsu/archive/2005/06/04/001/index.html","04fede3a71e9a98f7a6ecc456079a970"],["/housou-shitsu/archive/2005/06/11/001/index.html","4843843a4e4e2e2896c6e83c7874296f"],["/housou-shitsu/archive/2005/06/18/001/index.html","ab4310d297b219901eff508e2ec90e76"],["/housou-shitsu/archive/2005/06/25/001/index.html","ba01ded029f07a8cac0988c703b6522d"],["/housou-shitsu/archive/2005/07/02/001/index.html","d60679134fbe6513be19affd061bec8f"],["/housou-shitsu/archive/2005/07/09/001/index.html","ab5424ae5097b58f1d22f3ebdf4e42a7"],["/housou-shitsu/archive/2005/07/16/001/index.html","ae5c42b112a2465d1a6d532d440126c7"],["/housou-shitsu/archive/2005/07/23/001/index.html","8739c2b167162fe4efca5fc0a1b88fae"],["/housou-shitsu/archive/2005/07/30/001/index.html","7808045cecc3ae7dafa2dc5c303d9f45"],["/housou-shitsu/archive/2005/08/06/001/index.html","99daf5c6a710e97b0a631bc08c5fcac5"],["/housou-shitsu/archive/2005/08/13/001/index.html","b463e2736ebd8eb3fee2c779b3bb5236"],["/housou-shitsu/archive/2005/08/20/001/index.html","3c5cda37e14836bc0d754406e9298aae"],["/housou-shitsu/archive/2005/08/27/001/index.html","2d844a230829bb8ad9df55fd17635ec3"],["/housou-shitsu/archive/2005/09/03/001/index.html","cadf81d77de12b60281703162e6bc02a"],["/housou-shitsu/archive/2005/09/10/001/index.html","6c3a1c115b7a5a8ecc707e93f3347678"],["/housou-shitsu/archive/2005/09/17/001/index.html","1494e6bafd87945089210f926438aca6"],["/housou-shitsu/archive/2005/09/24/001/index.html","73c99ae060579c75e2606a101573d457"],["/housou-shitsu/archive/2005/10/01/001/index.html","b9a103d4cc47e277076674ad567f7dcb"],["/housou-shitsu/archive/2005/10/08/001/index.html","af73e2aa68e51548098127dfcf6b61d7"],["/housou-shitsu/archive/2005/10/15/001/index.html","90de46ba54a2790ff58f8b6d467e0451"],["/housou-shitsu/archive/2005/10/22/001/index.html","0b17f603b41471725ee9cc0daaa8000e"],["/housou-shitsu/archive/2005/10/29/001/index.html","68df4100fc6ed0c7479ec08c33252c13"],["/housou-shitsu/archive/2005/11/05/001/index.html","f6288d34cf486d3458c0e90fea17d71b"],["/housou-shitsu/archive/2005/11/12/001/index.html","2e376fd8576bf5d4b23d6e98ef9925dc"],["/housou-shitsu/archive/2005/11/19/001/index.html","0a00b6220db4139bba0d5f2d27acd1d2"],["/housou-shitsu/archive/2005/11/26/001/index.html","686f7329e962a79cde0e9d8404cc14a7"],["/housou-shitsu/archive/2005/12/03/001/index.html","1fe2d48cf8ab991cddee9761fc3be8ef"],["/housou-shitsu/archive/2005/12/10/001/index.html","4b586b6142ef84409f8f023aa8fa7ca0"],["/housou-shitsu/archive/2005/12/17/001/index.html","ddbd49841b37564a4a20acf8e5dfd109"],["/housou-shitsu/archive/2005/12/24/001/index.html","8223f8ee0f763fbe3a854be75a8f4bbe"],["/housou-shitsu/archive/2006/01/07/001/index.html","018003c2951d1143b6c2dbedd6bb5c86"],["/housou-shitsu/archive/2006/01/14/001/index.html","9644e153508248b37265102ec4753221"],["/housou-shitsu/archive/2006/01/21/001/index.html","7038c2c1f8fc1e158c7b7f412a7c90bc"],["/housou-shitsu/archive/2006/01/28/001/index.html","87897fc61854d2f762b1899b8fee5d7b"],["/housou-shitsu/archive/2006/02/04/001/index.html","7d27635805f438336810eebf46b60c32"],["/housou-shitsu/archive/2006/02/11/001/index.html","7208a93d357bcbe4df4fbae8366817a9"],["/housou-shitsu/archive/2006/02/18/001/index.html","8f1a8568160c8c62d804a9c38d9bb9c6"],["/housou-shitsu/archive/2006/02/25/001/index.html","076dec03b3d25dac7f576e3e99f73c74"],["/housou-shitsu/archive/2006/03/04/001/index.html","0fd4f48cb8923a514c8b018d23993cda"],["/housou-shitsu/archive/2006/03/11/001/index.html","8d2a1e9a89e217b2eeb2e506969e528a"],["/housou-shitsu/archive/2006/03/18/001/index.html","516a667288a626c78674d17cd512a52f"],["/housou-shitsu/archive/2006/03/25/001/index.html","6e3064fa69c92c7c664f37320df744df"],["/housou-shitsu/archive/2006/04/01/001/index.html","5d077594492229b42334c4064792893b"],["/housou-shitsu/archive/2006/04/08/001/index.html","c6aa99967cbf0cdf779f13f5f908dec2"],["/housou-shitsu/archive/2006/04/15/001/index.html","bdf340759b1d17ee4b5c6fd922e4e97d"],["/housou-shitsu/archive/2006/04/22/001/index.html","9d4b363469a0f37b0ca2585c64426afa"],["/housou-shitsu/archive/2006/04/29/001/index.html","248d427062d40b4ac6e2eb7cb73f6c47"],["/housou-shitsu/archive/2006/05/06/001/index.html","bda8e36bc7f4b5dbe6d6214a44b2c292"],["/housou-shitsu/archive/2006/05/13/001/index.html","6e094d44bc4740a60cd9b4f29cff7716"],["/housou-shitsu/archive/2006/05/20/001/index.html","bdb79315468e1bb6a6bf4499d890dcb7"],["/housou-shitsu/archive/2006/05/27/001/index.html","7d9763a58f65417a5ba68df11f1f6534"],["/housou-shitsu/archive/2006/06/03/001/index.html","510beb4783dd909aa7fa54e7bc7ce814"],["/housou-shitsu/archive/2006/06/10/001/index.html","5d43c0fbec54c7a5412f3912b403cc06"],["/housou-shitsu/archive/2006/06/17/001/index.html","37c1e69fc15d7d039df1879e74245a07"],["/housou-shitsu/archive/2006/06/24/001/index.html","bd2fed292a4e032996fdc348604f96a2"],["/housou-shitsu/archive/2006/07/01/001/index.html","937413a6ae454ac30b085edfc640ab1a"],["/housou-shitsu/archive/2006/07/08/001/index.html","6695809d8edbb0add42ffd43b4cf3862"],["/housou-shitsu/archive/2006/07/15/001/index.html","bc570fb6ee867aeaae82e5dc961da10d"],["/housou-shitsu/archive/2006/07/22/001/index.html","d5283c700a3f0fc92e8842946186693a"],["/housou-shitsu/archive/2006/07/29/001/index.html","7ea303fddfa75a9b5f519b538dfd8697"],["/housou-shitsu/archive/2006/08/05/001/index.html","bb2407bd857ccef003aebde37b4bc30c"],["/housou-shitsu/archive/2006/08/12/001/index.html","3b497002147da89b4354c7a46a91e4c1"],["/housou-shitsu/archive/2006/08/19/001/index.html","1ca2a52232e6bbc3f15cbe77e657cccd"],["/housou-shitsu/archive/2006/08/26/001/index.html","80c2998af1f296d0d3aa2ea526a1f15f"],["/housou-shitsu/archive/2006/09/02/001/index.html","0c65b092f586e706767ae99431a73ff6"],["/housou-shitsu/archive/2006/09/09/001/index.html","b21015a15a4f8767f57897adffb03a15"],["/housou-shitsu/archive/2006/09/16/001/index.html","5f5a6b123d0d8e0ee71d67d8009262b6"],["/housou-shitsu/archive/2006/09/23/001/index.html","2e8a8f0a5f241e4c3147297156cc492d"],["/housou-shitsu/archive/2006/09/30/001/index.html","0d788c8a947d312ba29f3d1d98bfe02f"],["/housou-shitsu/archive/2006/10/07/001/index.html","107f4e5f0c2284d98ea613ee92b48d8f"],["/housou-shitsu/archive/2006/10/14/001/index.html","f5cfa5712489baee684280c2d254c31f"],["/housou-shitsu/archive/2006/10/21/001/index.html","6f26ce9547bc74ab8a9b8e18e297a122"],["/housou-shitsu/archive/2006/10/28/001/index.html","759bc91a52cef4de20d81f35d8045192"],["/housou-shitsu/archive/2006/11/04/001/index.html","0f345837b3da02d2eb7de55e2a3d4a31"],["/housou-shitsu/archive/2006/11/11/001/index.html","2386a51facdb7f1a3187e36084376ea1"],["/housou-shitsu/archive/2006/11/18/001/index.html","da75434fbcbfbf24938ef5918d47b511"],["/housou-shitsu/archive/2006/11/25/001/index.html","5627305ef8597ccd70501eadc0baafd2"],["/housou-shitsu/archive/2006/12/02/001/index.html","7922b4d0b08a52f993db1c48bff92801"],["/housou-shitsu/archive/2006/12/09/001/index.html","f840d15b9180706dd868faca99857c23"],["/housou-shitsu/archive/2006/12/16/001/index.html","52af1470d827a936fce65b2042647876"],["/housou-shitsu/archive/2006/12/23/001/index.html","6ab07e361e6b2241a93379e811638366"],["/housou-shitsu/archive/2006/12/30/001/index.html","3098e81ac32bb0341db66eb92c4d680b"],["/housou-shitsu/archive/2007/01/06/001/index.html","3196a41d7457a5a6811b5bcc2cae871c"],["/housou-shitsu/archive/2007/01/13/001/index.html","a5b02bfb4008a89d380a0bd4f84be697"],["/housou-shitsu/archive/2007/01/20/001/index.html","8d287563da9c6b2204159bca802f6c7b"],["/housou-shitsu/archive/2007/01/27/001/index.html","c5530af0b7a37756e7bb39f3b3d1a80e"],["/housou-shitsu/archive/2007/02/03/001/index.html","346cd83baefc6330e1e3b4043189e15e"],["/housou-shitsu/archive/2007/02/10/001/index.html","a0d116284f853c717f93b9f474b65617"],["/housou-shitsu/archive/2007/02/17/001/index.html","6da3a7ee64409632a10a192013939bc4"],["/housou-shitsu/archive/2007/02/24/001/index.html","d0a938fb63cd5e7e0ded281124b586a0"],["/housou-shitsu/archive/2007/03/03/001/index.html","07395c0f1416e2d1f4677989cd2fd7ad"],["/housou-shitsu/archive/2007/03/10/001/index.html","cba3807210a464cf0dfdc5caa7d2680c"],["/housou-shitsu/archive/2007/03/17/001/index.html","9018c71aa3e89746333b74565aaf0453"],["/housou-shitsu/archive/2007/03/24/001/index.html","18d075d8f8aa1407b2e9625975c1fcc4"],["/housou-shitsu/archive/2007/03/31/001/index.html","81a242411a0f640dbf8a8dc419ad0583"],["/housou-shitsu/archive/2007/04/07/001/index.html","0a4a7a2f1d241e7f46cea8e24b47f8aa"],["/housou-shitsu/archive/2007/04/14/001/index.html","970d03a4800094ea70805038fe5f9f7b"],["/housou-shitsu/archive/2007/04/21/001/index.html","265149b58b3b3000df5b3e78ba94a403"],["/housou-shitsu/archive/2007/04/28/001/index.html","c7e78a79327b7d5ea1e3e755c0b68b30"],["/housou-shitsu/archive/2007/05/05/001/index.html","08d2fbae957546812702c5d8dcab584f"],["/housou-shitsu/archive/2007/05/12/001/index.html","3bdc1324caf528c3d8a7b07e1e6bb863"],["/housou-shitsu/archive/2007/05/19/001/index.html","7f38f5b5ee36724fe3ba22754aad4cea"],["/housou-shitsu/archive/2007/05/26/001/index.html","86551ebae5172f2b1c8c6af2ea4669b6"],["/housou-shitsu/archive/2007/06/02/001/index.html","11396d0b734dce1fd0949565ae022049"],["/housou-shitsu/archive/2007/06/09/001/index.html","61221ca879c44c05a2066fda0ad0260e"],["/housou-shitsu/archive/2007/06/16/001/index.html","cfdc0011d82f85e6e418cffd0ed77bb8"],["/housou-shitsu/archive/2007/06/23/001/index.html","de4a993cc01829debf52b0474a0efdee"],["/housou-shitsu/archive/2007/06/30/001/index.html","08edc5780cc6fc3d6907804ac5c91ae9"],["/housou-shitsu/archive/2007/07/07/001/index.html","9502f527d70a41a8774d1bd90b57741a"],["/housou-shitsu/archive/2007/07/14/001/index.html","69651b615ed11e1a8f594e6ce500fd0f"],["/housou-shitsu/archive/2007/07/21/001/index.html","1878b86f478f68288ff0288b93116e33"],["/housou-shitsu/archive/2007/07/28/001/index.html","73482ee7279b21574c17e12b8e42cd95"],["/housou-shitsu/archive/2007/08/04/001/index.html","371ef6a2f865c320a0da1fdc40e47f2d"],["/housou-shitsu/archive/2007/08/11/001/index.html","b33ea2b8fd3e41626163e40dced7f72d"],["/housou-shitsu/archive/2007/08/18/001/index.html","2709a9bca1e1f8bf22372095dcf67f6e"],["/housou-shitsu/archive/2007/08/25/001/index.html","0ca6c0acad0cbd7d6419f0956e00a7d5"],["/housou-shitsu/archive/2007/09/01/001/index.html","57ee1e509e4fd22d0b0af9071ade4b51"],["/housou-shitsu/archive/2007/09/08/001/index.html","5579f13db92914e22e7be0dc2ca8c9d9"],["/housou-shitsu/archive/2007/09/15/001/index.html","4078ed187eacd99d9912de6a9a7cd2b9"],["/housou-shitsu/archive/2007/09/22/001/index.html","24d71af97d8197cfd316cf8349b95505"],["/housou-shitsu/archive/2007/09/29/001/index.html","9cf23c17f427ff374c2b646ac19e72f8"],["/housou-shitsu/archive/2007/10/06/001/index.html","1f0b9aee584f6915fdbe5607f088c372"],["/housou-shitsu/archive/2007/10/13/001/index.html","a5f1a234248b4aa7977d6a1f9e9726a6"],["/housou-shitsu/archive/2007/10/20/001/index.html","8fe714de3dc5989c49e9a3f345b83aca"],["/housou-shitsu/archive/2007/10/27/001/index.html","5b732094ea17d68b1664d959355d37a0"],["/housou-shitsu/archive/2007/11/03/001/index.html","2f9d4bb2d9b2f5c9fa11041d0ccf137a"],["/housou-shitsu/archive/2007/11/10/001/index.html","a2d26738317a57df4ee90cf5b5c5d7b2"],["/housou-shitsu/archive/2007/11/17/001/index.html","c68c30deb82888ecf358d6c8d24822e4"],["/housou-shitsu/archive/2007/11/24/001/index.html","350ee2012dc37927b48908d26d9d8501"],["/housou-shitsu/archive/2007/12/01/001/index.html","503439545768e6c2bf5ecc989d511c92"],["/housou-shitsu/archive/2007/12/08/001/index.html","68a1a72f39679dc9b1a55aee4023cff1"],["/housou-shitsu/archive/2007/12/15/001/index.html","a25fc89aba639c00ccab0959a26e692e"],["/housou-shitsu/archive/2007/12/22/001/index.html","5421783574797d3ba9a64f5344597842"],["/housou-shitsu/archive/2007/12/29/001/index.html","c13af6392c72e82db3854d84ad5d31a9"],["/housou-shitsu/archive/2008/01/05/001/index.html","0be541653ee20eb7c9c47d6dc70d4419"],["/housou-shitsu/archive/2008/01/12/001/index.html","d067f276d9733a3625b3c6113dbc0c28"],["/housou-shitsu/archive/2008/01/19/001/index.html","592a42014c790fed4798a8858c9b7340"],["/housou-shitsu/archive/2008/01/26/001/index.html","3e5320878123cf5e3ffa163911952bf7"],["/housou-shitsu/archive/2008/02/02/001/index.html","e1a67b9e8aa525d7a4e22b178f2ca715"],["/housou-shitsu/archive/2008/02/09/001/index.html","ffc2a66497463972e73d679c2a6018bb"],["/housou-shitsu/archive/2008/02/16/001/index.html","1064e68dd183010ac2d3affa729bb3be"],["/housou-shitsu/archive/2008/02/23/001/index.html","12a6756b8636738c28a3dbd3a6ebba79"],["/housou-shitsu/archive/2008/03/01/001/index.html","ce3e99a973c63053c1ea274e956a20fb"],["/housou-shitsu/archive/2008/03/08/001/index.html","949a1836825d825e9ef8498ebef63cfb"],["/housou-shitsu/archive/2008/03/15/001/index.html","b656edbf340ec8326fa14e1bda9e33ef"],["/housou-shitsu/archive/2008/03/22/001/index.html","3fdc3a0b87c2837da1192d83a6694275"],["/housou-shitsu/archive/2008/03/29/001/index.html","81cfd9d20921ef55f249d5c3270f5c3f"],["/housou-shitsu/archive/2008/04/05/001/index.html","0564ec549fcde6fc395eed55101cc2c4"],["/housou-shitsu/archive/2008/04/12/001/index.html","e7a01bad12f2b811b468984964baa8c6"],["/housou-shitsu/archive/2008/04/19/001/index.html","9647cf40d4208b5da4d827f2360d6585"],["/housou-shitsu/archive/2008/04/26/001/index.html","a1740e91c72fd04e9038f969af150fee"],["/housou-shitsu/archive/2008/05/03/001/index.html","b4f3b2454b15998fb912180c415444a0"],["/housou-shitsu/archive/2008/05/10/001/index.html","c3b4364e1abe154ae8a17459c303a2d0"],["/housou-shitsu/archive/2008/05/17/001/index.html","7130edd213b810f0fba0179e69bf6763"],["/housou-shitsu/archive/2008/05/24/001/index.html","2f842b2ee99bd805bb00772467d8b09a"],["/housou-shitsu/archive/2008/05/31/001/index.html","3e360b3ab7d4a55bf648540b44703bc5"],["/housou-shitsu/archive/2008/06/07/001/index.html","4a8d15c28177b147822d2241b9dd4933"],["/housou-shitsu/archive/2008/06/14/001/index.html","d7a4ab760d53843cc15022693de3173e"],["/housou-shitsu/archive/2008/06/21/001/index.html","5bd77dedb30d4da94b55110e7379a065"],["/housou-shitsu/archive/2008/06/28/001/index.html","b1d7adc056e0f924a4daf74cf1eb61d8"],["/housou-shitsu/archive/2008/07/05/001/index.html","4fb204a4339e8f86a5f18acef533f431"],["/housou-shitsu/archive/2008/07/12/001/index.html","6304c03e481941ef3c2fd73e12690d05"],["/housou-shitsu/archive/2008/07/19/001/index.html","b6716a54547437b773869d9198e3db14"],["/housou-shitsu/archive/2008/07/26/001/index.html","54002429369555672ea37aab5b9d4264"],["/housou-shitsu/archive/2008/08/02/001/index.html","74488e2b719adb0555a02c7330194980"],["/housou-shitsu/archive/2008/08/09/001/index.html","448d62429fa18a00c9d41f5724fc1fcf"],["/housou-shitsu/archive/2008/08/16/001/index.html","3e550ab0160325df3bd19f265948b1f2"],["/housou-shitsu/archive/2008/08/23/001/index.html","b89beecdecc3bcb63ad3c56e1286fafa"],["/housou-shitsu/archive/2008/08/30/001/index.html","25b3514ba5d4010535cf9e00108c8583"],["/housou-shitsu/archive/2008/09/06/001/index.html","4c9130aa3208c217f6c50a06664f0f5e"],["/housou-shitsu/archive/2008/09/13/001/index.html","aa0adff5c7ed20e9ec6f63e95b26fa2c"],["/housou-shitsu/archive/2008/09/20/001/index.html","70a07970bee68c6ecc51c6ad4d12aeb7"],["/housou-shitsu/archive/2008/09/27/001/index.html","9e909c527090243bbcd5f7b7ada295f8"],["/housou-shitsu/archive/2008/10/04/001/index.html","926d91cda50a14dbf4276f6bb0e16b18"],["/housou-shitsu/archive/2008/10/11/001/index.html","285d368ce352258be647df5341ff66b2"],["/housou-shitsu/archive/2008/10/18/001/index.html","fb0b6c3174b6f953ee8ce63fa6d9d043"],["/housou-shitsu/archive/2008/10/25/001/index.html","5b4fa43d39ae75d7785f4f051c1b87c6"],["/housou-shitsu/archive/2008/11/01/001/index.html","0b00593dea59412ec9d4495ea0901a37"],["/housou-shitsu/archive/2008/11/08/001/index.html","76b7fcbed015e87d4fbb019e6607b2e2"],["/housou-shitsu/archive/2008/11/15/001/index.html","b5d8d4f884f269846bb65a24e1bcd029"],["/housou-shitsu/archive/2008/11/22/001/index.html","0cdf9d85c6f5e46478f9396b4caebd2c"],["/housou-shitsu/archive/2008/11/29/001/index.html","8d41ff4b763aaaca6a3638380b933498"],["/housou-shitsu/archive/2008/12/06/001/index.html","be335c08fb5f00ce794aca6bcaf915f1"],["/housou-shitsu/archive/2008/12/13/001/index.html","586b0325ed464daef31e63d865d38499"],["/housou-shitsu/archive/2008/12/20/001/index.html","5c3d6db509b572a3373c6ca61962fa1d"],["/housou-shitsu/archive/2008/12/27/001/index.html","dc12323baf20680751f80d9c37cce273"],["/housou-shitsu/archive/2009/01/03/001/index.html","50a19dd7fbc30be97e716c9840f47bff"],["/housou-shitsu/archive/2009/01/10/001/index.html","1a9f76af7bb694c8fe504246e0fc3a30"],["/housou-shitsu/archive/2009/01/17/001/index.html","065c820678217ed7ff9f9e5867735926"],["/housou-shitsu/archive/2009/01/24/001/index.html","2da12c59c3d6baed44adfd8b6cafcc18"],["/housou-shitsu/archive/2009/01/31/001/index.html","9ba7de0a8636f17700cd4a8978af3ea0"],["/housou-shitsu/archive/2009/02/07/001/index.html","04c587c877d9da2ec9a102e8a7a2e3bf"],["/housou-shitsu/archive/2009/02/14/001/index.html","f55460387d1a37046cd666c4e1daa295"],["/housou-shitsu/archive/2009/02/21/001/index.html","c453db68afeff53c6693680eb8f06c56"],["/housou-shitsu/archive/2009/02/28/001/index.html","20d32ebf0743c161ae7d7451b023a790"],["/housou-shitsu/archive/2009/03/07/001/index.html","ab1e075b087c4d6099ed5d1a6e8c4adb"],["/housou-shitsu/archive/2009/03/14/001/index.html","ee9b59aacd0ab07edc8c4c0a5abde42e"],["/housou-shitsu/archive/2009/03/21/001/index.html","21e977ae0ea64aec698b32a959927f48"],["/housou-shitsu/archive/2009/03/28/001/index.html","823214f200e40a838250a06cd1c06e96"],["/housou-shitsu/css/main.css","86172b83866ee26e3b824687cccc90b5"],["/housou-shitsu/images/touch/apple-touch-icon.png","7326f54bfe6776293f08b34c3a5fde7b"],["/housou-shitsu/images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["/housou-shitsu/images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["/housou-shitsu/images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["/housou-shitsu/images/transparent.jpg","f17853017415f4def9d23508feff521a"],["/housou-shitsu/index.html","79eefdb38f4e20b8d0494dcfd6391bfd"],["/housou-shitsu/lists/index.html","dea6a50de02c6afb59f0f51eafa8b165"],["/housou-shitsu/manifest.json","d61a766421f2876f9d709307eb3d4286"],["/housou-shitsu/scripts/main.min.js","8971778a9cc0ad74eeea6d9ed8a7b87f"],["/housou-shitsu/tags/index.html","0040e6ee483e17f1ac6237a8fae736a9"]];
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







