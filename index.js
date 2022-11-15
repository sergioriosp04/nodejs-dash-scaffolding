require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.APP_PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`app listening on port http://localhost:${port}`)
})