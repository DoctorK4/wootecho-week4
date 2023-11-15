import { MONTH } from '../constant.js';
import countTargetUnitMenu from '../utils/countTargetMenuUnit.js';

class WeekdayDiscount {
  #totalDiscount;

  #discountPerMenu = 2023;

  #discountCategory = '디저트';

  #discountDate = MONTH.DECEMBER.WEEKDAY;

  constructor(date, orderObject) {
    this.#totalDiscount = this.calculateDiscount(date, orderObject);
  }

  calculateDiscount(date, orderObject) {
    if (!this.isWeekday(date)) return 0;

    return (
      countTargetUnitMenu(orderObject, this.#discountCategory) *
      this.#discountPerMenu
    );
  }

  isWeekday(date) {
    return this.#discountDate.includes(date);
  }

  getTotalDiscount() {
    return this.#totalDiscount;
  }
}

export default WeekdayDiscount;
