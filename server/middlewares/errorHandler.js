export const errorHanlder = (err, req, res, next) => {
  err.message = err.message;
  err.statusCode = err.statusCode;

  return res.status(err.status).json({ error: err.message });
};
