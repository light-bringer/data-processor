module.exports = {
  server:{
    port: 4002,
    host: 'dev.cherrywork.in'
  },
  database: {
    name: "cw",
    path: "mongodb://localhost:27017/",
    host: "127.0.0.1",
    port: "27017"
  },
  aws: {
    s3bucket: 'cherrywork'
  },
  web: {
    url: "http://hrapps.britindia.com"
  },
  ldap: {
    host: "ldap://192.168.12.25",
    port: "389",
    baseDN: "dc=BRITBLR,dc=com"
  },
  piServer: {
    url: "http://hrapps.britindia.com/piserver"
  },
  pushNotification: {
    ios: {
      passphrase: '',                 /* A passphrase for the Key file */
      gateway: 'gateway.sandbox.push.apple.com',/* gateway address */
      port: 2195,                       /* gateway port */
      production: false
    }
  }, 
  staticFileStorage: {
    differentSystem: false,
    serverUrl: "http://0.0.0.0:4004"
  }
}
