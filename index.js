require('strict-mode')(function () {
  var iterateCayleyDickson = require('cayley-dickson')
  var realField = require('./src/realField')
  var createScalar = require('./src/createScalar')

  var K0 = iterateCayleyDickson(realField, 0)
  var K1 = iterateCayleyDickson(realField, 1)
  var K2 = iterateCayleyDickson(realField, 2)
  var K3 = iterateCayleyDickson(realField, 3)

  exports.Real = createScalar([K0.zero, K0.one], K0)
  exports.Complex = createScalar([K1.zero, K1.one], K1)
  exports.Quaternion = createScalar([K2.zero, K2.one], K2)
  exports.Octonion = createScalar([K3.zero, K3.one], K3)

  exports.VectorSpace = require('./src/VectorSpace')
  exports.MatrixSpace = require('./src/MatrixSpace')
  exports.TensorSpace = require('./src/TensorSpace')
})
