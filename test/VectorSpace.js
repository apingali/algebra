var algebra = require('algebra')
var notDefined = require('not-defined')

var Real = algebra.Real
var VectorSpace = algebra.VectorSpace

var methodBinaryOperator = require('./features/methodBinaryOperator')
var staticBinaryOperator = require('./features/staticBinaryOperator')
var staticUnaryOperator = require('./features/staticUnaryOperator')

var R2 = VectorSpace(Real)(2)
var R3 = VectorSpace(Real)(3)

describe('VectorSpace', () => {
  describe('data', () => {
    var v = new R2([0, 1])

    it('is enumerable', () => {
      v.propertyIsEnumerable('data').should.be.ok()
    })

    it('is immutable', () => {
      ;(() => {
        'use strict'
        v.data = [2, 1]
      }).should.throwError()
    })
  })

  describe('addition()', () => {
    var operator = 'addition'

    it('is a static method', staticBinaryOperator(R2, operator, [0, 2], [-1, 3], [-1, 5]))

    it('is a class method', methodBinaryOperator(R2, operator, [0, 1], [1, 1], [1, 2]))

    it('accepts multiple arguments', () => {
      R2.addition([1, -1], [2, -2], [3, -3]).should.deepEqual([6, -6])

      var vector = new R2([1, -1])
      vector.addition([2, -2], [3, -3]).data.should.eql([6, -6])
    })
  })

  describe('subtraction()', () => {
    var operator = 'subtraction'

    it('is a static method', staticBinaryOperator(R2, operator, [0, 2], [-1, 3], [1, -1]))

    it('is a class method', methodBinaryOperator(R2, operator, [0, 1], [1, 1], [-1, 0]))

    it('accepts multiple arguments', () => {
      R2.subtraction([6, -6], [2, -2], [3, -3]).should.deepEqual([1, -1])

      var vector = new R2([6, -6])
      vector.subtraction([2, -2], [3, -3]).data.should.eql([1, -1])
    })
  })

  describe('scalarProduct()', () => {
    it('is a static operator', () => {
      var data = R2.scalarProduct([0, 1], [1, 1])

      data.should.eql(1)
    })

    it('is a class method', () => {
      var vector1 = new R2([0, 1])
      var vector2 = new R2([1, 1])

      var scalar = vector1.scalarProduct(vector2)

      scalar.data.should.be.eql(1)
    })

    it('is returns a scalar', () => {
      var vector1 = new R2([0, 1])
      var vector2 = new R2([1, 1])

      var scalar = vector1.scalarProduct(vector2)

      scalar.data.should.be.eql(1)
    })
  })

  describe('dotProduct()', () => {
    it('is an alias of scalarProduct()', () => {
      R2.scalarProduct.should.be.eql(R2.dotProduct)

      var vector = new R2([0, 1])
      vector.scalarProduct.should.be.eql(vector.dotProduct)
    })
  })

  describe('dot()', () => {
    it('is an alias of scalarProduct()', () => {
      R2.scalarProduct.should.be.eql(R2.dot)

      var vector = new R2([0, 1])
      vector.scalarProduct.should.be.eql(vector.dot)
    })
  })

  describe('dimension', () => {
    it('is a static attribute', () => {
      var vector1 = new R2([0, 1])
      var vector2 = new R3([1, 1, 2])

      vector1.dimension.should.be.eql(2)
      vector2.dimension.should.be.eql(3)

      R2.dimension.should.be.eql(2)
      R3.dimension.should.be.eql(3)
    })
  })

  describe('norm', () => {
    it('is an attribute holding a scalar', () => {
      var vector1 = new R2([0, 1])
      var vector2 = new R3([1, 1, 2])

      vector1.norm.data.should.be.eql(1)
      vector2.norm.data.should.be.eql(6)
    })
  })

  describe('norm()', () => {
    var operator = 'norm'

    it('is a static method', () => {
      staticUnaryOperator(R2, operator, [0, 1], 1)
      staticUnaryOperator(R3, operator, [1, 1, 2], 6)
    })
  })

  describe('crossProduct()', () => {
    var operator = 'crossProduct'

    it('is a static method', () => {
      staticBinaryOperator(R3, operator, [3, -3, 1], [4, 9, 2], [-15, -2, 39])
    })

    it('is a class method', () => {
      methodBinaryOperator(R3, operator, [3, -3, 1], [-12, 12, -4], [0, 0, 0])
    })

    it('is defined only in dimension 3', () => {
      notDefined(R2.cross).should.be.ok()

      var vector = new R2([1, 0])
      notDefined(vector.cross).should.be.ok()
    })
  })

  describe('cross()', () => {
    it('is an alias of crossProduct()', () => {
      R3.crossProduct.should.be.eql(R3.cross)

      var vector = new R3([1, 0, 1])
      vector.crossProduct.should.be.eql(vector.cross)
    })
  })
})
