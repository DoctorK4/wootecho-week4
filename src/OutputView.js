import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from './constant.js';

const OutputView = {
  greet() {
    Console.print(OUTPUT_MESSAGE.GREET);
  },
  printMenu() {
    Console.print(OUTPUT_MESSAGE.ORDERED_MENU);
  },
};

export default OutputView;
