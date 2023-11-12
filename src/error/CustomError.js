const PREFIX = '[ERROR] ';

class CustomError extends Error {
  constructor(errorMessage) {
    super(PREFIX + errorMessage);
  }
}

export default CustomError;
