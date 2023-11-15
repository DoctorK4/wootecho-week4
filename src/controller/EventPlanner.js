import { Console } from '@woowacourse/mission-utils';
import dateValidator from '../validator/dateValidator.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import orderValidator from '../validator/orderValidator.js';
import parseOrder from '../utils/parseOrder.js';
import TotalAmount from '../model/TotalAmount.js';

class EventPlanner {
  #visitDate;

  #orderObject;

  #totalAmount;

  #discountStatus;

  #giftStatus;

  #badge;

  async eventPlan() {
    await this.receiveReservation();
    this.showOrder();
    this.showBenefits();
    this.showBadge();
  }

  async receiveReservation() {
    OutputView.greet();
    this.#visitDate = await this.readDateWithRetry();
    const orderedMenu = await this.readMenuWithRetry();
    this.#orderObject = parseOrder(orderedMenu);
  }

  showOrder() {
    OutputView.printPreviewGuide(this.#visitDate);
    OutputView.printMenu(this.#orderObject);
    this.#totalAmount = new TotalAmount(this.#orderObject);
    const totalAmountBeforeDiscount = this.#totalAmount.getTotalAmount();
    OutputView.printTotalAmountBeforeDiscount(totalAmountBeforeDiscount);
  }

  showBenefits() {
    this.#giftStatus = this.#totalAmount.getGiftStatus();
    OutputView.printGift(this.#giftStatus);

    this.#discountStatus = this.#totalAmount.getDiscountList(
      this.#orderObject,
      this.#visitDate,
    );
    OutputView.printBenefit(this.#discountStatus, this.#giftStatus);

    OutputView.printEstimatedCharge(
      this.#discountStatus,
      this.#totalAmount.getTotalAmount(),
    );
  }

  showBadge() {
    OutputView.printEventBadge(this.#discountStatus, this.#giftStatus);
  }

  async readDateWithRetry() {
    while (true) {
      try {
        const visitDate = await InputView.readDate();
        dateValidator(visitDate);
        return visitDate;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async readMenuWithRetry() {
    while (true) {
      try {
        const orderedMenu = await InputView.readMenu();
        orderValidator(orderedMenu);
        return orderedMenu;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default EventPlanner;
