function logErrors (err, req, res, next) {
  console.error(err.message, err.stack);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: 'Error',
  });
}

module.exports = { logErrors, errorHandler }
