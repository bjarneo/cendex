cendex [center index]
--
![Travis](https://travis-ci.org/bjarneo/cendex.svg?branch=master)

The most performant package to find the index of an element in an array or string.

How it works
--
It starts from the center of the array, increments and decrements from the center index until it finds the element. Which means it will be slow for the 25% first elements in an array, but faster than any other implementation for the last 75%.  
![How cendex work](https://github.com/bjarneo/cendex/blob/master/chart.png?raw=true)

The median time used however if we have an array with 1000 entries, and look for first 100, 200, 300, 400, 500, 600, 700, 800, 900 then 999, will be faster than all of the other indexOf implementations. Even the native one. Please take a look at the benchmark test.

Usage
--

```bash
$ npm i --save cendex
```

```js
const cendex = require('cendex');

const words = [
    'cendex',
    'javascript',
    'php',
    'python',
    'node',
    'nlp'
];

cendex(words, 'cendex');    // Output: 0
cendex(words, 'python');    // Output: 3
cendex(words, 'not here');  // Output: -1
```

Benchmark
--
Result by using node v7.7.2  
![How cendex work](https://github.com/bjarneo/cendex/blob/master/benchmark.png?raw=true)

Tests
--
```bash
$ npm test
```

Contribution
--
Contributions are appreciated.

License
--
MIT-licensed. See LICENSE.
