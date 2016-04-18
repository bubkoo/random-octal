'use strict';

var randomNatural = require('random-natural');

module.exports = function (min, max) {

  var int   = randomNatural(min, max);
  var octal = int.toString(8);

  return '0O' + octal;
};
