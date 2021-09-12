class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true; // isOperational will only be present if error generated using AppError, this way you can separate app errors and other errors.

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
