'use strict';

const assert = require('assert');

const cendex = require('.');

const arr = [1, 2, 3, 4, 5, 6, 7];

describe('#cendex', () => {
    it('should return the correct index from an array', () => {
        assert.strictEqual(cendex(arr, 1), 0);
        assert.strictEqual(cendex(arr, 2), 1);
        assert.strictEqual(cendex(arr, 3), 2);
        assert.strictEqual(cendex(arr, 4), 3);
        assert.strictEqual(cendex(arr, 5), 4);
        assert.strictEqual(cendex(arr, 6), 5);
        assert.strictEqual(cendex(arr, 7), 6);
    });

    it('should return the -1 if the value is not found in the index', () => {
        assert.strictEqual(cendex(arr, 8), -1);
    });

    it('should work just fine with a string', () => {
        assert.strictEqual(cendex('abcdef', 'c'), 2);
    });
});
