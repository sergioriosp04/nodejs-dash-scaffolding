const config = require('./config/env')
const express = require('express')
const router = require('./routes/v1/index')

const app = express()
const port = config.port || 8000;

app.get('/ping', (req, res) => {
  res.send('dashboard')
})

router(app)

app.listen(port, () => {
  console.log(`app listening on port http://localhost:${port}`)
})