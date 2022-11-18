const express = require('express');

const testRouter = require('./TestRouter');
const UserRouter = require('./UserRouter')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/test', testRouter);
  router.use('/user', UserRouter);
}

module.exports = routerApi;