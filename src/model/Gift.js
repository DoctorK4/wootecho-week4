import { EVENT_CONDITION } from '../constant.js';
import getMenuPrice from '../utils/getMenuPrice.js';

class Gift {
  #giftGoods;

  #giftUnit;

  constructor(totalAmountBeforeDiscount) {
    this.canReceiveGift(totalAmountBeforeDiscount);
  }

  canReceiveGift(totalAmountBeforeDiscount) {
    if (totalAmountBeforeDiscount < EVENT_CONDITION.GIFT.MIN_ORDER_AMOUNT) {
      this.#giftGoods = null;
      this.#giftUnit = 0;
    }
    if (totalAmountBeforeDiscount >= EVENT_CONDITION.GIFT.MIN_ORDER_AMOUNT) {
      this.#giftGoods = EVENT_CONDITION.GIFT.GOODS;
      this.#giftUnit = EVENT_CONDITION.GIFT.UNIT;
    }
  }

  getGiftinfo() {
    if (this.#giftGoods === null) return null;

    return { [this.#giftGoods]: this.#giftUnit };
  }

  getGiftPrice() {
    return getMenuPrice(this.#giftGoods);
  }
}

export default Gift;
