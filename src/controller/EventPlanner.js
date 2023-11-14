import { Console } from '@woowacourse/mission-utils';
import dateValidator from '../validator/dateValidator.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import orderValidator from '../validator/orderValidator.js';
import parseOrder from '../parseOrder.js';

class EventPlanner {
  async receiveReservation() {
    OutputView.greet();
    const visitDate = await this.readDateWithRetry();
    const orderedMenu = await this.readMenuWithRetry();
    const orderObject = parseOrder(orderedMenu);
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
