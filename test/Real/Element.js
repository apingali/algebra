
// TODO confronta Real e Complex, a livello di test, metodi ecc
var assert = require('assert');
var algebra = require('../../index.js');

var Real         = algebra.Real.Element;
var FieldElement = algebra.FieldElement;

describe('RealElement', function () {
  describe('constructor:', function () {
    it('accepts a number as single argument', function() {
      var ten = new Real(10);
      assert.ok(ten instanceof Real);
    });
  });

  describe('inheritance:', function () {
    it('is a FieldElement', function() {
    });
  });

  describe('clone()', function () {
    it('returns a copy of the object', function() {
/*
      var x = new Real(-15);
      var y = x.clone();
      assert.ok(y instanceof Real);
      assert.ok(x.eq(y));
*/
    });
  });

  describe('eq(<Real>)', function () {
    it('returns true if two elements are equal', function() {
/*
      var x = new Real(-1);
      var y = new Real(-1);
      assert.ok(x.eq(y));
      assert.ok(y.eq(x));
*/
    });
  });

  describe('add(<Real>)', function () {
    it('implements the addition operator', function() {
/*
      var x = new Real(2);
      var y = new Real(3);
      x.add(y);
      assert.equals(x.getData(), 5);
*/
    });

    it('coerces number data type', function() {
/*
      var x = new Real(2);
      x.add(3);
      assert.equals(x.getData(), 5);
*/
    });
  });

  describe('sub(<Real>)', function () {
    it('implements the subtraction operator', function() {
    });
  });

  describe('mul(<Real>)', function () {
    it('implements the multiplication operator', function() {
    });
  });

  describe('div(<Real>)', function () {
    it('implements the division operator', function() {
    });
  });

  describe('neg(<Real>)', function () {
    it('...', function() {
    });
  });

  describe('abs(<Real>)', function () {
    it('', function() {
    });
  });

  describe('inv()', function () {
    it('returns the inverse of an element', function() {
    });
  });

  describe('toString()', function () {
    it('...', function() {
    });
  });
});

