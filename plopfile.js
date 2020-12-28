const _plop = require('./plop-templates/_plop')
const _field = require('./plop-templates/_field')
const _duck = require('./plop-templates/_duck')

module.exports = function (plop) {
  // controller generator
  plop.setGenerator('plop', _plop)
  plop.setGenerator('field', _field)
  plop.setGenerator('duck', _duck)
}
