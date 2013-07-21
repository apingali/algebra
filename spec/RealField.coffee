
algebra = require '../index.js'

AlgebraField = algebra.AlgebraField
RealField    = algebra.RealField

real = new RealField()

describe 'RealField', ->
  describe 'inheritance', ->
    it 'is an AlgebraField', ->
      real.should.be.instanceof AlgebraField

  describe 'attributes', ->
    describe '#one', ->
      it 'should be 1', ->
        real.one.should.equal 1

      it 'cannot be overridden', ->
        (() ->
          real.one = 5
        ).should.throwError()

    describe '#zero', ->
      it 'should be 0', ->
        real.zero.should.equal 0

      it 'cannot be overridden', ->
        (() ->
          real.zero = 5
        ).should.throwError()

  describe 'methods', ->
    describe '#addition()', ->
      it 'implements +', ->
        real.addition(4, 3).should.equal 7

    describe '#subtraction()', ->
      it 'implements -', ->
        real.subtraction(4, 3).should.equal 1

