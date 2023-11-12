import { Console } from '@woowacourse/mission-utils';
import { INPUT_GUIDE_MESSAGE } from './constant.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(INPUT_GUIDE_MESSAGE.VISIT_DATE);
    return input;
  },
  async readMenu() {
    const input = await Console.readLineAsync(INPUT_GUIDE_MESSAGE.MENU);
    return input;
  },
};

export default InputView;
