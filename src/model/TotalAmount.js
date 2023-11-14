import { MENU } from '../constant.js';

class TotalAmount {
  static calculateTotalAmountBeforeDiscount(orderObject) {
    const categories = Object.keys(MENU);
    return Object.keys(orderObject).reduce((accumulator, currentOrder) => {
      let price;
      categories.forEach(category => {
        if (currentOrder in MENU[category]) {
          price = MENU[category][currentOrder];
        }
      });
      return accumulator + price;
    }, 0);
  }
}

export default TotalAmount;
