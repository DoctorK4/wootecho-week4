import { MONTH } from '../constant.js';

class SpecialDiscount {
  #totalDiscount;

  #discount = 1000;

  #discountPeriod = MONTH.DECEMBER.SPECIAL;

  constructor(date) {
    this.#totalDiscount = this.calculateDiscount(date);
  }

  calculateDiscount(date) {
    if (!this.isSpecialDay(date)) return 0;

    return this.#discount;
  }

  isSpecialDay(date) {
    return this.#discountPeriod.includes(date);
  }

  getTotalDiscount() {
    return this.#totalDiscount;
  }
}

export default SpecialDiscount;
