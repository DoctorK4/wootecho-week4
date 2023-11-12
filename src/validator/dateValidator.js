import validator from './validator.js';
import { ERROR_MESSAGE, EVENT_MONTH } from '../constant.js';
import CustomError from '../error/CustomError.js';

const dateValidator = dateInput => {
  const formattedInput = Number(dateInput);
  if (
    !validator.isNumType(dateInput) ||
    !validator.isDayNum(formattedInput, EVENT_MONTH.str)
  ) {
    throw new CustomError(ERROR_MESSAGE.WRONG_DATE);
  }
};

export default dateValidator;
