var require = meteorInstall({"lib":{"collections":{"index.js":function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// lib/collections/index.js                                                                       //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
"use strict";                                                                                     //
                                                                                                  //
Object.defineProperty(exports, "__esModule", {                                                    //
  value: true                                                                                     //
});                                                                                               //
exports.undefined = undefined;                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"methods":{"index.js":function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// server/methods/index.js                                                                        //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
"use strict";                                                                                     //
                                                                                                  //
Object.defineProperty(exports, "__esModule", {                                                    //
  value: true                                                                                     //
});                                                                                               //
                                                                                                  //
exports["default"] = function () {};                                                              //
////////////////////////////////////////////////////////////////////////////////////////////////////

}},"publications":{"index.js":function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// server/publications/index.js                                                                   //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
"use strict";                                                                                     //
                                                                                                  //
Object.defineProperty(exports, "__esModule", {                                                    //
  value: true                                                                                     //
});                                                                                               //
                                                                                                  //
exports["default"] = function () {};                                                              //
////////////////////////////////////////////////////////////////////////////////////////////////////

}},"main.js":["./publications","./methods",function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// server/main.js                                                                                 //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
'use strict';                                                                                     //
                                                                                                  //
var _publications = require('./publications');                                                    // 1
                                                                                                  //
var _publications2 = _interopRequireDefault(_publications);                                       //
                                                                                                  //
var _methods = require('./methods');                                                              // 2
                                                                                                  //
var _methods2 = _interopRequireDefault(_methods);                                                 //
                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
                                                                                                  //
(0, _publications2['default'])();                                                                 // 4
(0, _methods2['default'])();                                                                      // 5
////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".jsx"]});
require("./lib/collections/index.js");
require("./server/methods/index.js");
require("./server/publications/index.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
