'use strict';

const expect = require('expect');
const fp = require('../lib/fp.js');

describe('testing map method', () => {
  it('should return array with values incrimented by 1', () => {
    let result = fp.map([1, 2, 3], n => n + 1);
    expect(result).toEqual([2, 3, 4]);
  });
  it('should return array with values doubled', () => {
    let result = fp.map([2, 4, 6], n => n * 2);
    expect(result).toEqual([4, 8, 12]);
  });
});

describe('testing filter method', () => {
  it('should return array with only even values', () => {
    let result = fp.filter([1, 2, 3], n => n % 2 === 0);
    expect(result).toEqual([2]);
  });
  it('should return only the second item in the array', () => {
    let result = fp.filter([2, 4, 6], (n, i) => i === 1);
    expect(result).toEqual([4]);
  });
});

describe('testing reduce method', () => {
  it('should return array of values summed', () => {
    let result = fp.reduce([1, 2, 3], (a, b) => a + b, 0);
    expect(result).toEqual(6);
  });
  it('should return the highest number', () => {
    let result = fp.reduce([1, 2, 3], (a, b) => b > a ? b : a, -Infinity);
    expect(result).toEqual(3);
  });
});

describe('testing concat method', () => {
  it('should return a single array from two arrays', () => {
    let result = fp.concat([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('should return a single array from three arrays, but only from two', () => {
    let result = fp.concat([1, 2], [3, 4], [5, 6]);
    expect(result).toEqual([1, 2, 3, 4]);
  });
});

describe('testing splice method', () => {
  it('should return an array of values between index two and three', () => {
    let result = fp.splice([1, 2, 3], 2, 3)
    expect(result).toEqual([3]);
  });

  it('should return an array of values between index one and three', () => {
    let result = fp.splice([1, 2, 3], 1, 3)
    expect(result).toEqual([2, 3]);
  });

});
