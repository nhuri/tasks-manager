const errorHandler = (err, req, res, next) => {
  const code = err.statusCode || 500;
  res.status(code).json({
    status: "fail",
    message: err.message,
  });
};
export default errorHandler;
