Years Interval
==============

| CI / CD | Status |
| ------- | ------ |
| NPM | [![npm version](https://badge.fury.io/js/%40sineverba%2Fyears-interval.svg)](https://badge.fury.io/js/%40sineverba%2Fyears-interval)
| Semaphore CI | [![Build Status](https://sineverba.semaphoreci.com/badges/npm-pkg-year-interval/branches/master.svg)](https://sineverba.semaphoreci.com/projects/npm-pkg-year-interval) |
| Circle CI | [![CircleCI](https://circleci.com/gh/sineverba/npm-pkg-year-interval.svg?style=svg)](https://circleci.com/gh/sineverba/npm-pkg-year-interval) |
| Coverall | [![Coverage Status](https://coveralls.io/repos/github/sineverba/npm-pkg-year-interval/badge.svg?branch=master)](https://coveralls.io/github/sineverba/npm-pkg-year-interval?branch=master) |
| SonarCloud | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=npm-pkg-years-interval&metric=alert_status)](https://sonarcloud.io/dashboard?id=npm-pkg-years-interval) |

`years interval` returns current year or a string made by a year start + current year.

Useful to use in copyright section ("Copyright 2018-2020 by Acme INC").

"2018-2020" in previous example is what you get.

## Installation
`npm install @sineverba/years-interval`

## Usage

(In following examples current year is assumed as 2020)

```js
import { GetYearInterval } from '@sineverba/years-interval';

const yearInterval = GetYearInterval("2020");
console.log(yearInterval); // returns 2020
const newYearInterval = GetYearInterval("2018");
console.log(newYearInterval); // returns 2018-2020
// on next year...
console.log(yearInterval); // returns 2020-2021
console.log(newYearInterval); // returns 2018-2021
```

## Tests

`npm run test` for simple test

`npm run cover` for coverage
