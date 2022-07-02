class ExpressError extends Error {
    constructor(message, status) {
      // set a message property on new instances of the class that explains what went wrong
      super();
      this.message = message;
      //  set a status property on new instances of the class that represent the status code
      //  of the error
      this.status = status;
    }
  }
  class BadRequestError extends ExpressError {
    // default message property set to Bad request that can be overriden in the constructor
    constructor(message = "Bad request", status) {
      super(message, 400);
    }
  }
  class NotFoundError extends ExpressError {
    // default message property set to Bad request that can be overriden in the constructor
    constructor(message = "Not found", status) {
      super(message, 404);
    }
  }
  module.exports = {
    ExpressError: ExpressError,
    NotFoundError: NotFoundError,
    BadRequestError: BadRequestError,
  };
