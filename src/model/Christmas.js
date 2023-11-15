import { MONTH } from '../constant.js';

class ChristmasDiscount {
  #basicDiscount = 1000;

  #extraDiscount = 100;

  #totalDiscount;

  #discountPeriod = [MONTH.DECEMBER.MIN_DATE_VALUE, MONTH.DECEMBER.CHRISTMAS];

  constructor(date) {
    this.#totalDiscount = this.calculateTotalDiscount(date);
  }

  calculateTotalDiscount(date) {
    if (!this.isDiscountPeriod(date)) return 0;

    return (date - 1) * this.#extraDiscount + this.#basicDiscount;
  }

  isDiscountPeriod(date) {
    return date >= this.#discountPeriod[0] && date <= this.#discountPeriod[1];
  }

  getTotalDiscount() {
    return this.#totalDiscount;
  }
}

export default ChristmasDiscount;
