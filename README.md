# random-octal

> Return a random octal number.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-octal/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-octal/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-octal)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-octal/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-octal)


## Install

```
$ npm install --save random-octal
```

## Usage

> For more use-cases see the [tests](https://github.com/mock-end/random-octal/blob/master/test/spec/index.js)

```js
var randomOctal = require('random-octal');

// API
// - randomOctal([options]);

// options
// - min
// - max
```

By default it will return an octal number between `0` and `9007199254740992`:

```js
randomOctal();
// => '0o147'
```

Can optionally provide `min` and `max`:

```js
randomOctal({ max: 7 });
// => '0o4'

randomOctal({ min: 4, max: 7 });
// => '0o6'
```

**Note**: these `min` and `max` are **inclusive**, so they are included in the range.

## Related

- [random-integral](https://github.com/mock-end/random-integral) - Return a random integer.
- [random-natural](https://github.com/mock-end/random-natural) - Return a random natural number.
- [random-decimal](https://github.com/mock-end/random-decimal) - Return a random decimal.
- [random-floating](https://github.com/mock-end/random-floating) - Return a random floating point number.
- [random-index](https://github.com/mock-end/random-index) - Return a random array-like index.
- [random-binary](https://github.com/mock-end/random-binary) - Return a random binary number.
- [random-hexadecimal](https://github.com/mock-end/random-hexadecimal) - Return a random hexadecimal number.
- [random-unicode](https://github.com/mock-end/random-unicode) - Return a random unicode. 
- [random-bool](https://github.com/mock-end/random-bool) - Return a random boolean (true/false).
- [random-char](https://github.com/mock-end/random-char) - Return a random char.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-octal/issues/new).
