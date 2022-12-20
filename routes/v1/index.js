const express = require('express')

const testRouter = require('./TestRouter')
const UserRouter = require('./UserRouter')
const AuthRouter = require('./AuthRouter')

function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/test', testRouter)
  router.use('/user', UserRouter)
  router.use('/auth', AuthRouter)
}

module.exports = routerApi;