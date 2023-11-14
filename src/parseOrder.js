const parseOrder = input => {
  const items = input.split(',');
  const order = {};

  items.forEach(item => {
    const [name, quantity] = item.split('-');
    order[name.trim()] = parseInt(quantity, 10);
  });

  return order;
};

export default parseOrder;
