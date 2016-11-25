(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Validators = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Utils = require('./utils');

module.exports = {
  nationalId: function nationalId(id) {
    var _id$split = id.split(/\s*-\s*/),
        _id$split2 = _slicedToArray(_id$split, 2),
        number = _id$split2[0],
        verifier = _id$split2[1];

    return verifier == Utils.mod11Verifier(number);
  },
  phone: function phone(number) {
    var oldFormat = /\d{1,2}-?\d{7}/;
    var newFormat = /\d{9}/;
    return oldFormat.test(number) || newFormat.test(number);
  }
};

},{"./utils":3}],2:[function(require,module,exports){
"use strict";

module.exports = {
  fullName: function fullName(name) {
    return name.split(/\s+/).length > 1;
  },
  email: function email(address) {
    var emailRegexp = /^(\w+|.|\+)+@(\w+\.)+\w+$/i;
    return emailRegexp.test(address);
  }
};

},{}],3:[function(require,module,exports){
'use strict';

module.exports = {
  mod11Verifier: function mod11Verifier(value) {
    var number = value.replace(/\D/g, '');

    var reversedStringArray = Array.from(number.toString()).reverse();
    var sum = reversedStringArray.reduce(function (memo, digit, index) {
      var factor = index % 6 + 2;
      return memo + parseInt(digit) * factor;
    }, 0);

    var mod11 = 11 - sum % 11;
    var verifier = mod11;
    if (mod11 == 11) verifier = 0;
    if (mod11 == 10) verifier = 'k';
    return verifier;
  }
};

},{}],4:[function(require,module,exports){
'use strict';

module.exports = {
  cl: require('./cl'),
  string: require('./string')
};

},{"./cl":1,"./string":2}]},{},[4])(4)
});