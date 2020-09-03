Years Interval
==============

| CI / CD | Status |
| ------- | ------ |
| Travis | [![Build Status](https://travis-ci.com/sineverba/npm-pkg-year-interval.svg?branch=master)](https://travis-ci.com/sineverba/npm-pkg-year-interval) |
| Coverall | [![Coverage Status](https://coveralls.io/repos/github/sineverba/npm-pkg-year-interval/badge.svg?branch=master)](https://coveralls.io/github/sineverba/npm-pkg-year-interval?branch=master) |

`years interval` returns current year or a string made by a year start + current year.

Useful to use in copyright section ("Copyright 2018-2020 by Acme INC").

"2018-2020" in previous example is string returned.

## Installation
`npm install @sineverba/year-interval`

## Usage

(In following examples current year is assumed as 2020)

```js
var interval = require('@sineverba/year-interval');
var yearInterval = interval("2020");
console.log(yearInterval); // returns 2020
var newYearInterval = interval("2018");
console.log(newYearInterval); // returns 2018-2020
// on next year...
console.log(yearInterval); // returns 2020-2021
console.log(newYearInterval); // returns 2018-2021
```

## Tests

`npm test` for simple test

`npm cover` for coverage