var algebra = require('algebra')

var C = algebra.Complex

var methodBinaryOperator = require('./features/methodBinaryOperator')
var methodUnaryOperator = require('./features/methodUnaryOperator')
var staticBinaryOperator = require('./features/staticBinaryOperator')
var staticUnaryOperator = require('./features/staticUnaryOperator')

describe('Complex', () => {
  var operator

  describe('zero', () => {
    it('is static', () => {
      C.zero.should.eql([0, 0])
    })
  })

  describe('one', () => {
    it('is static', () => {
      C.one.should.eql([1, 0])
    })
  })

  describe('addition', () => {
    operator = 'addition'

    it('is a static method', staticBinaryOperator(C, operator, [2, 1], [2, 3], [4, 4]))

    it('is a class method', methodBinaryOperator(C, operator, [1, 2], [1, -1], [2, 1]))
  })

  describe('subtraction', () => {
    operator = 'subtraction'

    it('is a static method', staticBinaryOperator(C, operator, [2, 1], [2, 3], [0, -2]))

    it('is a class method', methodBinaryOperator(C, operator, [0, 2], [1, -2], [-1, 4]))
  })

  describe('multiplication', () => {
    operator = 'multiplication'

    it('is a static method', staticBinaryOperator(C, operator, [2, 1], [2, -1], [5, 0]))

    it('is a class method', methodBinaryOperator(C, operator, [1, 2], [-1, 2], [-5, 0]))
  })

  describe('division', () => {
    operator = 'division'

    it('is a static method', staticBinaryOperator(C, operator, [2, 4], [2, 0], [1, 2]))

    it('is a class method', methodBinaryOperator(C, operator, [5, 0], [2, -1], [2, 1]))
  })

  describe('negation', () => {
    operator = 'negation'

    it('is a static method', staticUnaryOperator(C, operator, [-2, 1], [2, -1]))

    it('is a class method', methodUnaryOperator(C, operator, [1, 8], [-1, -8]))
  })

  describe('conjugation', () => {
    operator = 'conjugation'

    it('is a static method', staticUnaryOperator(C, operator, [2, 1], [2, -1]))

    it('is a class method', methodUnaryOperator(C, operator, [1, 7], [1, -7]))
  })
})
