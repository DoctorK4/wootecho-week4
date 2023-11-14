import { ERROR_MESSAGE } from '../constant.js';
import CustomError from '../error/CustomError.js';
import validator from './validator.js';
import parseOrder from '../model/parseOrder.js';

const orderInputValidator = orderInput => {
  if (
    validator.isInvalidFormat(orderInput) ||
    validator.hasOverlap(orderInput)
  ) {
    throw new CustomError(ERROR_MESSAGE.WRONG_ORDER);
  }
};

const orderListValidator = orderList => {
  const menuNames = Object.keys(orderList);
  menuNames.forEach(menuName => {
    if (!validator.isInMenu(menuName)) {
      throw new CustomError(ERROR_MESSAGE.WRONG_ORDER);
    }
  });
  if (
    validator.hasWrongUnit(orderList) ||
    validator.hasOnlyBeverage(orderList) ||
    validator.hasOverMaxOrder(orderList)
  ) {
    throw new CustomError(ERROR_MESSAGE.WRONG_ORDER);
  }
};

const orderValidator = orderInput => {
  orderInputValidator(orderInput);
  const orderList = parseOrder(orderInput);
  orderListValidator(orderList);
};

export default orderValidator;
