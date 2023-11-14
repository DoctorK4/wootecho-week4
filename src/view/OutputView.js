import { Console } from '@woowacourse/mission-utils';
import { EVENT_MONTH, OUTPUT_MESSAGE } from '../constant.js';

const OutputView = {
  greet() {
    Console.print(OUTPUT_MESSAGE.GREET);
  },
  printMenu(orderObject) {
    Console.print(`\n${OUTPUT_MESSAGE.TITLE.ORDERED_MENU}`);
    Object.keys(orderObject).forEach(menu => {
      Console.print(`${menu} ${orderObject[menu]}개`);
    });
  },
  printPreviewGuide(date) {
    Console.print(
      `${EVENT_MONTH.num}월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
    );
  },
  printTotalAmountBeforeDiscount(value) {
    Console.print(`\n${OUTPUT_MESSAGE.TITLE.TOTAL_AMOUNT_BEFORE_DISCOUNT}`);
    Console.print(`${value.toLocaleString()}원`);
  },
};

export default OutputView;
