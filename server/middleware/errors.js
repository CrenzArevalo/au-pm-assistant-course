function notFound(req, res) {
  res.status(404).json({ error: "Not found." });
}

function errorHandler(err, req, res, next) {
  console.error(err);
  if (res.headersSent) return next(err);
  const status = err.status || 500;
  res.status(status).json({ error: err.expose ? err.message : "Something went wrong." });
}

module.exports = { notFound, errorHandler };
