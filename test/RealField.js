var AlgebraField, RealField, algebra, real;

algebra = require('../index.js');

AlgebraField = algebra.AlgebraField;

RealField = algebra.RealField;

real = new RealField();

describe('RealField', function() {
  describe('inheritance', function() {
    return it('is an AlgebraField', function() {
      return real.should.be["instanceof"](AlgebraField);
    });
  });
  describe('attributes', function() {
    describe('#one', function() {
      it('should be 1', function() {
        return real.one.should.equal(1);
      });
      return it('cannot be overridden', function() {
        return (function() {
          return real.one = 5;
        }).should.throwError();
      });
    });
    return describe('#zero', function() {
      it('should be 0', function() {
        return real.zero.should.equal(0);
      });
      return it('cannot be overridden', function() {
        return (function() {
          return real.zero = 5;
        }).should.throwError();
      });
    });
  });
  return describe('methods', function() {
    describe('#addition()', function() {
      return it('implements +', function() {
        return real.addition(4, 3).should.equal(7);
      });
    });
    return describe('#subtraction()', function() {
      return it('implements -', function() {
        return real.subtraction(4, 3).should.equal(1);
      });
    });
  });
});
