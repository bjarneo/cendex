const bench = require('nanobench');
const R = require('rambda')
const Ramda = require('ramda')
const indexOf = require('lodash.indexof')
const cendex = require('.');

const arr = [];

let fill = 1000;

while (fill--) {
    arr.push(Math.random().toString());
}

const FIRST = arr[100];
const SECOND = arr[200];
const THIRD = arr[300];
const FOURTH = arr[400];
const FIFTH = arr[500];
const SIXTH = arr[600];
const SEVENTH = arr[700];
const EIGHTH = arr[800];
const NINTH = arr[900];
const TENTH = arr[999];

const END = 250000;

bench('indexOf 250.000 times', b => {
    b.start();

    for (let i = 0; i < END; i++) {
        arr.indexOf(FIRST) > -1;
        arr.indexOf(SECOND) > -1;
        arr.indexOf(THIRD) > -1;
        arr.indexOf(FOURTH) > -1;
        arr.indexOf(FIFTH) > -1;
        arr.indexOf(SIXTH) > -1;
        arr.indexOf(SEVENTH) > -1;
        arr.indexOf(EIGHTH) > -1;
        arr.indexOf(NINTH) > -1;
        arr.indexOf(TENTH) > -1;
    }

    b.end();
});

bench('cendex 250.000 times', b => {
    b.start();

    for (let i = 0; i < END; i++) {
        cendex(arr, FIRST) > -1;
        cendex(arr, SECOND) > -1;
        cendex(arr, THIRD) > -1;
        cendex(arr, FOURTH) > -1;
        cendex(arr, FIFTH) > -1;
        cendex(arr, SIXTH) > -1;
        cendex(arr, SEVENTH) > -1;
        cendex(arr, EIGHTH) > -1;
        cendex(arr, NINTH) > -1;
        cendex(arr, TENTH) > -1;
    }

    b.end();
});

bench('Ramda 250.000 times', b => {
    b.start();

    for (let i = 0; i < END; i++) {
        Ramda.indexOf(FIRST, arr) > -1;
        Ramda.indexOf(SECOND, arr) > -1;
        Ramda.indexOf(THIRD, arr) > -1;
        Ramda.indexOf(FOURTH, arr) > -1;
        Ramda.indexOf(FIFTH, arr) > -1;
        Ramda.indexOf(SIXTH, arr) > -1;
        Ramda.indexOf(SEVENTH, arr) > -1;
        Ramda.indexOf(EIGHTH, arr) > -1;
        Ramda.indexOf(NINTH, arr) > -1;
        Ramda.indexOf(TENTH, arr) > -1;
    }

    b.end();
});

bench('Rambda 250.000 times', b => {
    b.start();

    for (let i = 0; i < END; i++) {
        R.indexOf(FIRST, arr) > -1;
        R.indexOf(SECOND, arr) > -1;
        R.indexOf(THIRD, arr) > -1;
        R.indexOf(FOURTH, arr) > -1;
        R.indexOf(FIFTH, arr) > -1;
        R.indexOf(SIXTH, arr) > -1;
        R.indexOf(SEVENTH, arr) > -1;
        R.indexOf(EIGHTH, arr) > -1;
        R.indexOf(NINTH, arr) > -1;
        R.indexOf(TENTH, arr) > -1;
    }

    b.end();
});

bench('lodash.indexOf 250.000 times', b => {
    b.start();

    for (let i = 0; i < END; i++) {
        indexOf(arr, FIRST) > -1;
        indexOf(arr, SECOND) > -1;
        indexOf(arr, THIRD) > -1;
        indexOf(arr, FOURTH) > -1;
        indexOf(arr, FIFTH) > -1;
        indexOf(arr, SIXTH) > -1;
        indexOf(arr, SEVENTH) > -1;
        indexOf(arr, EIGHTH) > -1;
        indexOf(arr, NINTH) > -1;
        indexOf(arr, TENTH) > -1;
    }

    b.end();
});
