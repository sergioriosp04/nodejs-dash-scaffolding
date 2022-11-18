const config = require('./config/env')
const express = require('express')
const router = require('./routes/v1/index')
const { logErrors, errorHandler } = require('./middlewares/ErrorHandler')

const app = express()
const port = config.port || 8000;

app.use(express.json())

app.get('/ping', (req, res) => {
  res.send('dashboard')
})

router(app)

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`app listening on port http://localhost:${port}`)
})