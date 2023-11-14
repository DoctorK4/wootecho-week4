import { Console } from '@woowacourse/mission-utils';
import { EVENT_MONTH, OUTPUT_MESSAGE } from '../constant.js';

const OutputView = {
  greet() {
    Console.print(OUTPUT_MESSAGE.GREET);
  },
  printMenu() {
    Console.print(OUTPUT_MESSAGE.ORDERED_MENU);
    Console.print();
  },
  printPreviewGuide(date) {
    Console.print(
      `${EVENT_MONTH.num}월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
    );
  },
};

export default OutputView;
