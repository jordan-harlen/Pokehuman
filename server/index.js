if (!process.env.NODE_ENV || process.env.NODE_ENV == 'development') {
  const envConfig = require('dotenv').config()
  if (envConfig.error) throw envConfig.error
}

const server = require('./server')
const PORT = process.env.PORT || 8080

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
