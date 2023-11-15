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
  BENEFIT_PREVIEW: '에 우테코 식당에서 받을 이벤트 혜택 미리 보기!',
  TITLE: {
    ORDERED_MENU: '<주문 메뉴>',
    TOTAL_AMOUNT_BEFORE_DISCOUNT: '<할인 전 총주문 금액>',
    GIFT: '<증정 메뉴>',
  },
  NONE: '없음',
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

export const MENU = Object.freeze({
  애피타이저: {
    양송이수프: 6000,
    타파스: 5500,
    시저샐러드: 8000,
  },
  메인: {
    티본스테이크: 55000,
    바비큐립: 54000,
    해산물파스타: 35000,
    크리스마스파스타: 25000,
  },
  디저트: {
    초코케이크: 15000,
    아이스크림: 5000,
  },
  음료: {
    제로콜라: 3000,
    레드와인: 60000,
    샴페인: 25000,
  },
});

export const ORDER_UNIT = Object.freeze({
  MIN_UNIT: 1,
  MAX_UNIT: 20,
});

export const EVENT_CONDITION = Object.freeze({
  GIFT: {
    MIN_ORDER_AMOUNT: 120000,
    GOODS: '샴페인',
    UNIT: 1,
  },
});
