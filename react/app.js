var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 5000

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({'extended': 'true'}))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/*', function response(req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(port)
console.log('App listing on port ' + port)

module.exports = app