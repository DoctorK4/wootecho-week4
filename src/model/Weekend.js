import { MONTH } from '../constant.js';
import countTargetUnitMenu from '../utils/countTargetMenuUnit.js';

class WeekendDiscount {
  #totalDiscount;

  #discountPerMenu = 2023;

  #discountCategory = '메인';

  #discountDate = MONTH.DECEMBER.WEEKEND;

  constructor(date, orderObject) {
    this.#totalDiscount = this.calculateDiscount(date, orderObject);
  }

  calculateDiscount(date, orderObject) {
    if (!this.isWeekend(date)) return 0;

    return (
      countTargetUnitMenu(orderObject, this.#discountCategory) *
      this.#discountPerMenu
    );
  }

  isWeekend(date) {
    return this.#discountDate.includes(date);
  }

  getTotalDiscount() {
    return this.#totalDiscount;
  }
}

export default WeekendDiscount;
