import { MENU } from '../constant.js';

const countTargetUnitMenu = (orderObject, targetCategory) => {
  const menuArray = Object.keys(orderObject);
  let targetMenuUnit;
  menuArray.forEach(menu => {
    if (MENU[targetCategory].includes(menu)) {
      targetMenuUnit += orderObject[menu];
    }
  });

  return targetMenuUnit;
};

export default countTargetUnitMenu;
