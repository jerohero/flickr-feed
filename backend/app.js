const express = require('express'),
      bodyParser = require('body-parser'),
      https = require('https'),
      cors = require('cors'),
      fs = require('fs'),
      photoRouter = require('./routes/photoRoutes')
require('dotenv').config()

const PORT = process.env.PORT || 3001

const corsOptions = {
  origin: process.env.FRONTEND_URL
}

const app = express()

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors(corsOptions))

// Routes
app.use('/api/photo', photoRouter)

// Server
const httpsServer = https.createServer({
  key: fs.readFileSync(process.env.PRIVKEY_PATH),
  cert: fs.readFileSync(process.env.FULLCHAIN_PATH),
}, app)

httpsServer.listen(PORT,() => {
  console.log(`Server running at port: ${PORT}`);
})
