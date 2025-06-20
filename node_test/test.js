import { describe, it } from 'node:test';
import assert from 'node:assert';
import { sum, subtract, multiply } from '../utils/basicMathFunctions.js';

describe('Basic Math Functions', () => {
  describe('sum', () => {
    it('should return the sum of two numbers', () => {
      assert.strictEqual(sum(2, 3), 5);
    });
  });

  describe('subtract', () => {
    it('should return the difference of two numbers', () => {
      assert.strictEqual(subtract(5, 3), 2);
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      assert.strictEqual(multiply(2, 3), 6);
    });
  });
});
