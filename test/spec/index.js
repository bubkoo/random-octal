'use strict';

var expect = require('chai').expect;


describe('random-octal: ', function () {

  var randomOctal = require('../../');

  it('randomOctal()', function () {
    expect(randomOctal()).to.be.a('string');
  });

  it('randomOctal(8)', function () {
    expect(randomOctal(7)).to.be.match(/^0O[0-7]$/);
  });
});
