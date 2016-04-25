'use strict';

var randomNatural = require('random-natural');

module.exports = function (options) {

  var int   = randomNatural(options);
  var octal = int.toString(8);

  return '0o' + octal;
};
