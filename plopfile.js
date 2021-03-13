const _plop = require('./plop-templates/_plop')
const _screen = require('./plop-templates/_screen')
const _page = require('./plop-templates/_page')
const _field = require('./plop-templates/_field')
const _duck = require('./plop-templates/_duck')
const _list = require('./plop-templates/_list')

module.exports = function (plop) {
  // controller generator
plop.setGenerator('screen', _screen)
  plop.setGenerator('page', _page)
  plop.setGenerator('plop', _plop)
  plop.setGenerator('field', _field)
  plop.setGenerator('duck', _duck)
  plop.setGenerator('list', _list)
}
