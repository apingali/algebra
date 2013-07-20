
function AlgebraElement(data, field) {

    if (typeof data === 'undefined')
      data = field.one

    this.data = data

    this.field = field
}

function addition(element) {
  this.data = this.field.addition(this, element)
  return this
}
AlgebraElement.prototype.addition = addition
AlgebraElement.prototype.add      = addition

function subtraction(element) {
  this.data = this.field.subtraction(this, element)
  return this
}
AlgebraElement.prototype.subtraction = subtraction
AlgebraElement.prototype.sub         = subtraction

function equal(element) {
    return this.field.equal(this, element)
}
AlgebraElement.prototype.equal = equal
AlgebraElement.prototype.eq    = equal

function notEqual(element) {
    return this.field.notEqual(this, element)
}
AlgebraElement.prototype.equal = notEqual
AlgebraElement.prototype.eq    = notEqual

module.exports = AlgebraElement
