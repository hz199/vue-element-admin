const orderMock = require('./order')

const server = function (app) {
  orderMock(app)
}

module.exports = server
