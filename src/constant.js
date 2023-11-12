export const EVENT_MONTH = Object.freeze({
  str: 'DECEMBER',
  num: 12,
});

export const INPUT_GUIDE_MESSAGE = Object.freeze({
  VISIT_DATE:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  MENU: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  GREET: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  ORDERED_MENU: '<주문 메뉴>',
});

export const ERROR_MESSAGE = Object.freeze({
  WRONG_DATE: '유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  WRONG_ORDER: '유효하지 않은 주문입니다. 다시 입력해 주세요.',
});

export const MONTH = Object.freeze({
  DECEMBER: {
    MIN_DATE_VALUE: 1,
    MAX_DATE_VALUE: 31,
  },
});
