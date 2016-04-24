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
// - randomOctal();
// - randomOctal(max);
// - randomOctal(min, max);

randomOctal();
// => 0o147

randomOctal(7);
// => 0o4

randomOctal(4, 7);
// => 0o6
```

## Related

- [random-binary](https://github.com/mock-end/random-binary) - Return a random binary number.
- [random-hexadecimal](https://github.com/mock-end/random-hexadecimal) - Return a random hexadecimal number.
- [random-integral](https://github.com/mock-end/random-integral) - Return a random integer.
- [random-natural](https://github.com/mock-end/random-natural) - Return a natural number.
- [random-decimal](https://github.com/mock-end/random-decimal) - Return a random decimal.
- [random-floating](https://github.com/mock-end/random-floating) - Return a random floating point number.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-octal/issues/new).
