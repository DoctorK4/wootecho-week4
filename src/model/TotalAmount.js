import { EVENT_CONDITION } from '../constant.js';
import getMenuPrice from '../utils/getMenuPrice.js';
import ChristmasDiscount from './Christmas.js';
import Gift from './Gift.js';
import SpecialDiscount from './Special.js';
import WeekdayDiscount from './Weekdays.js';
import WeekendDiscount from './Weekend.js';

class TotalAmount {
  #totalAmount;

  #gift;

  constructor(orderObject) {
    this.#totalAmount = this.calculateTotalAmountBeforeDiscount(orderObject);
  }

  getTotalAmount() {
    return this.#totalAmount;
  }

  calculateTotalAmountBeforeDiscount(orderObject) {
    return Object.keys(orderObject).reduce((accumulator, currentOrder) => {
      const price = getMenuPrice(currentOrder);

      return accumulator + price * orderObject[currentOrder];
    }, 0);
  }

  isEventTarget() {
    return this.getTotalAmount() >= EVENT_CONDITION.MIN_ORDER_AMOUNT;
  }

  getGiftStatus() {
    this.#gift = new Gift(this.getTotalAmount());

    return this.#gift.getGiftinfo();
  }

  getDiscountList(orderObject, date) {
    if (!this.isEventTarget()) return null;
    return {
      christmas: new ChristmasDiscount(date).getTotalDiscount(),
      weekday: new WeekdayDiscount(date, orderObject).getTotalDiscount(),
      weekend: new WeekendDiscount(date, orderObject).getTotalDiscount(),
      special: new SpecialDiscount(date).getTotalDiscount(),
    };
  }
}

export default TotalAmount;
