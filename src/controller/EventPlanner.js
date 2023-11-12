import { Console } from '@woowacourse/mission-utils';
import dateValidator from '../validator/dateValidator.js';
import InputView from '../InputView.js';
import OutputView from '../OutputView.js';

class EventPlanner {
  async receiveReservation() {
    OutputView.greet();
    const visitDate = await this.readDateWithRetry();
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
}

export default EventPlanner;
