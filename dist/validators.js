(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Validators = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const Utils = require('./utils');

module.exports = {
  nationalId: (id) => {
    const [number, verifier] = id.split(/\s*-\s*/);
    return verifier == Utils.mod11Verifier(number);
  },
  phone: (number) => {
    const oldFormat = /\d{1,2}-?\d{7}/;
    const newFormat = /\d{9}/;
    return oldFormat.test(number) || newFormat.test(number);
  }
}

},{"./utils":3}],2:[function(require,module,exports){
module.exports = {
  fullName: (name) => {
    return name.split(/\s+/).length > 1;
  },
  email: (address) => {
    const emailRegexp = /^(\w+|.|\+)+@(\w+\.)+\w+$/i
    return emailRegexp.test(address);
  }
}

},{}],3:[function(require,module,exports){
module.exports = {
  mod11Verifier: (value) => {
    const number = value.replace(/\D/g, '');

    const reversedStringArray = Array.from(number.toString()).reverse();
    const sum = reversedStringArray.reduce((memo, digit, index) => {
      factor = index % 6 + 2;
      return memo + parseInt(digit) * factor;
    }, 0);

    const mod11 = 11 - sum % 11;
    var verifier = mod11;
    if (mod11 == 11) verifier = 0;
    if (mod11 == 10) verifier = 'k';
    return verifier;
  }
}

},{}],4:[function(require,module,exports){
module.exports = {
  cl: require('./cl'),
  string: require('./string')
}

},{"./cl":1,"./string":2}]},{},[4])(4)
});