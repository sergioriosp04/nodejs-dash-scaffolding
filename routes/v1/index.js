const express = require('express');

const testRouter = require('./TestRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/test', testRouter);
}

module.exports = routerApi;