module.exports = {
  notFound: (req, res, next) => {
    const error = new Error(`Not Found`);
    res.status(404);
    next(error);
  },

  errorHandler: (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
      message: err.message,
    });
  },
};
