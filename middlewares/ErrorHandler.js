function logErrors (err, req, res, next) {
  // si es un error controlado se responde
  if (err.status) {
    return res.status(err.status).json({
      message: err.message,
      data: {}
    })
  }

  //si no es un error controlado se meustra en consola
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: 'Error comuniquese con un admnistrador',
  });
}

module.exports = { logErrors, errorHandler }
