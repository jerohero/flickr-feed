const express = require('express'),
      bodyParser = require('body-parser'),
      https = require('https'),
      http = require('http'),
      cors = require('cors'),
      photoRouter = require('./routes/PhotoRoutes')
require('dotenv').config()

const { FRONTEND_URL, PORT } = process.env

const corsOptions = {
  origin: [FRONTEND_URL]
}

const app = express()

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors(corsOptions))

// Routes
app.use('/api/photo', photoRouter)

// Server
// const httpsServer = https.createServer(app)
// httpsServer.listen(PORT)
const httpServer = http.createServer(app)
httpServer.listen(PORT)
