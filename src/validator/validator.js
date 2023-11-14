import { MENU, MONTH, ORDER_UNIT } from '../constant.js';

const isBeverage = menu => {
  return Object.keys(MENU.음료).includes(menu);
};

const inspectOverlap = (array, set) => {
  return array.reduce((accumulator, item) => {
    if (accumulator) return true;
    const itemName = item.split('-')[0].trim();

    if (set.has(itemName)) return true;
    set.add(itemName);
    return false;
  }, false);
};

function validateOrderFormat(singleMenu) {
  if (!singleMenu.includes('-')) {
    return false;
  }
  const [menuName, unit] = singleMenu.split('-');
  if (!Number.isInteger(Number(unit)) || Number(unit) <= 0) {
    return false;
  }
  return true;
}

const validator = Object.freeze({
  isNumType(input) {
    const regExp = /^[0-9]*$/;
    return regExp.test(input);
  },
  isDayNum(input, eventMonth) {
    return (
      MONTH[eventMonth].MIN_DATE_VALUE <= input &&
      input <= MONTH[eventMonth].MAX_DATE_VALUE
    );
  },
  isInvalidFormat(orderInput) {
    if (orderInput.includes(',')) {
      const orderList = orderInput.split(',').map(item => item.trim());
      return orderList.some(order => !validateOrderFormat(order));
    }
    return !validateOrderFormat(orderInput);
  },
  isInMenu(menuName) {
    return Object.keys(MENU).some(category => menuName in MENU[category]);
  },
  hasWrongUnit(orderList) {
    return Object.keys(orderList).some(
      menu => orderList[menu] < ORDER_UNIT.MIN_UNIT,
    );
  },
  hasOnlyBeverage(orderList) {
    return Object.keys(orderList).every(menu => isBeverage(menu));
  },
  hasOverMaxOrder(orderList) {
    const total = Object.values(orderList).reduce(
      (sum, quantity) => sum + quantity,
      0,
    );
    return total > ORDER_UNIT.MAX_UNIT;
  },
  hasOverlap(orderInput) {
    const inputArray = orderInput.split(',');
    const inputSet = new Set();

    return inspectOverlap(inputArray, inputSet);
  },
});

export default validator;
