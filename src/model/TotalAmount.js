import { MENU } from '../constant.js';
import Gift from './Gift.js';

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
    const categories = Object.keys(MENU);
    return Object.keys(orderObject).reduce((accumulator, currentOrder) => {
      let price;
      categories.forEach(category => {
        if (currentOrder in MENU[category]) {
          price = MENU[category][currentOrder];
        }
      });
      return accumulator + price * orderObject[currentOrder];
    }, 0);
  }

  getGiftStatus() {
    const gift = new Gift(this.getTotalAmount());

    return gift.getGiftinfo();
  }
}

export default TotalAmount;
