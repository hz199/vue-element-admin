const mockServer = require('./mock')

module.exports = {
  productionSourceMap: false,
  devServer: {
    setup: function (app) {
      mockServer(app)
    }
  },
}
