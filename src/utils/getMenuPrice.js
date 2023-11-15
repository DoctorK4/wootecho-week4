import { MENU } from '../constant.js';

const getMenuPrice = itemName => {
  const categories = Object.keys(MENU);
  let result;

  categories.forEach(category => {
    const menuItems = MENU[category];
    const itemKeys = Object.keys(menuItems);

    if (itemKeys.includes(itemName)) {
      result = menuItems[itemName];
    }
  });

  return result;
};

export default getMenuPrice;
