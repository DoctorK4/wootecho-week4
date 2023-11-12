import { MONTH } from '../constant.js';

const validator = {
  isNumType(input) {
    const regExp = /^[0-9]*$/;
    return regExp.test(input);
  },
  isDayNum(input, month) {
    return (
      MONTH[month].MIN_DATE_VALUE <= input &&
      input <= MONTH[month].MAX_DATE_VALUE
    );
  },
};

export default validator;
