const { constants } = require('../constants');

const errorHandler = (err, req, res, next) => {
  const statusCode = res?.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: 'Validation Error',
        message: err.message,
        stack: err.stack,
      });
      break;
    case constants.UNAUTHORIZED_ERROR:
      res.json({
        title: 'Unauthorized',
        message: err.message,
        stack: err.stack,
      });
      break;
    case constants.FORBIDDEN_ERROR:
      res.json({
        title: 'Forbidden',
        message: err.message,
        stack: err.stack,
      });
      break;
    case constants.NOT_FOUND_ERROR:
      res.json({
        title: 'Not Found',
        message: err.message,
        stack: err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: 'Internal Server Error',
        message: err.message,
        stack: err.stack,
      });
      break;
    default:
      console.log('No error found.');
  }
};

module.exports = errorHandler;
