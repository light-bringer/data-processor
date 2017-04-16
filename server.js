const express = require('express')
,  bodyParser = require('body-parser')
, _ = require('lodash')
, app = express()


app.set('port', process.env.PORT || 50000)
app.use(bodyParser.json(
  {
    limit: '50mb'
  })
)

app.use(function(req, res, next) {
 res.header('Access-Control-Allow-Origin', '*')
 res.header( "Access-Control-Allow-Methods" , "GET,POST,PUT,DELETE,OPTIONS")
 res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
 if (req.method === 'OPTIONS') return res.send(200)
 next()
})

let server =  app.listen(app.get('port'))
