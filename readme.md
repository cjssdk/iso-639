ISO 639 language codes
======================

[![NPM version](https://img.shields.io/npm/v/cjs-iso-639.svg?style=flat-square)](https://www.npmjs.com/package/cjs-iso-639)
[![Dependencies Status](https://img.shields.io/david/cjssdk/iso-639.svg?style=flat-square)](https://david-dm.org/cjssdk/iso-639)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/cjssdk)


This library provides ISO language codes with English and local names.

 Code | Description
------|-------------
 1    | 2 characters, one per language or [ISO 639 macrolanguage][wiki-macro]
 2T   | 3 characters, one per language
 2B   | 3 characters, mostly the same as 639-2T, but with some codes derived from English names rather than native names of languages


## Installation ##

```bash
npm install cjs-iso-639
```


## Usage ##

Add to the scope:

```js
var codes = require('cjs-iso-639');
```

Use:

```js
console.log(codes['1']['fr']);
console.log(codes['2T']['fra']);
// both give ['French', 'français']
```


## Contribution ##

See [details](.github/contributing.md).


## License ##

`cjs-iso-639` is released under the [MIT License](license.md).
