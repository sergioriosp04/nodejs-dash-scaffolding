const config = require('./config/env')
const express = require('express')
const router = require('./routes/v1/index')
const { logErrors, errorHandler } = require('./middlewares/ErrorHandler')
const cors = require('cors')
require('./utils/auth/index')

const app = express()
const port = config.port || 8000;

app.use(express.json())

var corsOptions = {
  origin: function (origin, callback) {
    console.log(origin)
    if (config.whiteList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback({
        status: 500,
        message: 'Not allowed by cors'
      })
    }
  }
}

app.use(cors(corsOptions))
router(app)

app.get('/ping', (req, res) => {
  res.send('dashboard')
})

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`app listening on port http://localhost:${port}`)
})