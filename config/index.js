'use strict';

const isThere = require('is-there')
    , currentEnv = process.env.NODE_ENV || 'development'
    , envFilePath = __dirname + "/env/" + currentEnv + ".js"

var environmentOptions
  , projectName

if(!isThere(envFilePath))
  console.log("Environment file missing")
else
  environmentOptions = require(envFilePath) 
  projectName = environmentOptions.projectName || "cw-platform"
module.exports = {
  port: environmentOptions.server.port,
  serverHost: environmentOptions.server.host + ':' +environmentOptions.server.port,
  databaseUrl: environmentOptions.database.path + environmentOptions.database.name,
  databaseHost: environmentOptions.database.host,
  databasePort: environmentOptions.database.port,
  databaseName: environmentOptions.database.name,
  s3bucket: environmentOptions.aws.s3bucket,
  webAppUrl: environmentOptions.web.url,
  ldapUrl: environmentOptions.ldap.host + ":" + environmentOptions.ldap.port,
  ldapBaseDN: environmentOptions.ldap.baseDN,
  piUrl: environmentOptions.piServer.url,
  pushNotification: environmentOptions.pushNotification,
  staticFileStorage: environmentOptions.staticFileStorage,
  appDir: __dirname.match(new RegExp("(.*\/("+ projectName +")\/)(.*)$"))[1]
}  