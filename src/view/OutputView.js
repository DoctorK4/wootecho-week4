import { Console } from '@woowacourse/mission-utils';
import { EVENT_MONTH, OUTPUT_MESSAGE } from '../constant.js';
import getMenuPrice from '../utils/getMenuPrice.js';

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
  printGift(giftStatus) {
    Console.print(`\n${OUTPUT_MESSAGE.TITLE.GIFT}`);
    if (giftStatus === null) Console.print(OUTPUT_MESSAGE.NONE);
    if (giftStatus) {
      Object.keys(giftStatus).forEach(item => {
        Console.print(`${item} ${giftStatus[item]}개`);
      });
    }
  },
  getGiftValue(giftStatus) {
    if (!giftStatus) return 0;
    let totalGiftValue = 0;
    Object.keys(giftStatus).forEach(item => {
      totalGiftValue += getMenuPrice(item) * giftStatus[item];
    });
    return totalGiftValue;
  },
  printGiftValue(giftStatus) {
    const giftValue = OutputView.getGiftValue(giftStatus);
    if (giftValue > 0) {
      Console.print(
        `${OUTPUT_MESSAGE.DISCOUNT.GIFT} -${giftValue.toLocaleString()}원`,
      );
    }
  },
  printDiscountPrices(discountStatus) {
    Console.print(`\n${OUTPUT_MESSAGE.TITLE.BENEFIT_LIST}`);
    if (discountStatus === null) Console.print(OUTPUT_MESSAGE.NONE);
    if (discountStatus !== null) {
      Object.keys(discountStatus).forEach(discountType => {
        if (discountStatus[discountType] !== 0) {
          const upperDiscountType = discountType.toUpperCase();
          const stringprice = discountStatus[discountType].toLocaleString();
          Console.print(
            `${OUTPUT_MESSAGE.DISCOUNT[upperDiscountType]} -${stringprice}원`,
          );
        }
      });
    }
  },
  getTotalDiscount(discountStatus) {
    if (!discountStatus) return 0;

    const totalDiscount = Object.values(discountStatus).reduce(
      (acc, value) => acc + value,
      0,
    );
    return totalDiscount;
  },
  printTotalBenefitAmount(discountStatus, giftStatus) {
    const totalDiscount = OutputView.getTotalDiscount(discountStatus);
    const giftValue = OutputView.getGiftValue(giftStatus);
    const totalBenefitAmount = totalDiscount + giftValue;
    Console.print(`\n${OUTPUT_MESSAGE.TITLE.TOTAL_BENEFIT_AMOUNT}`);
    Console.print(`-${totalBenefitAmount.toLocaleString()}원`);
  },
  printEstimatedCharge(discountStatus, totalAmountBeforeDiscount) {
    const estimatedAmount =
      totalAmountBeforeDiscount - OutputView.getTotalDiscount(discountStatus);
    Console.print(`\n${OUTPUT_MESSAGE.TITLE.TOTAL_AMOUNT_AFTER_DISCOUNT}`);
    Console.print(`${estimatedAmount.toLocaleString()}원`);
  },
  printBenefit(discountStatus, giftStatus) {
    OutputView.printDiscountPrices(discountStatus);
    if (giftStatus) OutputView.printGiftValue(giftStatus);
    OutputView.printTotalBenefitAmount(discountStatus, giftStatus);
  },
};

export default OutputView;
