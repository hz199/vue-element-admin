const Mock = require('mockjs')

module.exports = function (app) {
  app.get('/api/testOrder', function (req, res) {
    const mock = Mock.mock({
      "code": 0,
      "message": "success",
      "data": {
        "list|10": [
          {
            "county|+20":1000,
            "nameCN":"@name",
            "nameEN":"@cname",
            "nameEN|100-2000": 150,
            "timer|0-1":0.8,
            "key": "@ctitle(5)"
          }
        ],
        'pages': {
          currentPage: 1,
          pageSize: 10,
          totalResults: 101,
        }
      },
      
    })

    res.json(mock)
  })

}
