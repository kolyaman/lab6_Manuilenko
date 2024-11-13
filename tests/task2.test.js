const getProductsNotInPriceRange = require('../tasks/task2')

describe('getProductsNotInPriceRange', () => {

  test('повертає правильні товари поза діапазоном цін', () => {
    const products = [
      { name: 'Laptop', price: 800 },
      { name: 'Phone', price: 250 },
      { name: 'Shirt', price: 30 },
      { name: 'Watch', price: 120 },
      { name: 'Tablet', price: 550 },
      { name: 'Shoes', price: 75 }
    ];

    const result = getProductsNotInPriceRange(products);

    expect(result).toEqual(['Laptop', 'Shirt', 'Tablet', 'Shoes']);
  });

  test('повертає порожній масив, якщо всі товари в діапазоні цін', () => {
    const products = [
      { name: 'Phone', price: 250 },
      { name: 'Shirt', price: 150 },
      { name: 'Watch', price: 300 }
    ];

    const result = getProductsNotInPriceRange(products);

    expect(result).toEqual([]);
  });

  test('повертає товари з цінами меншими за 100 або більшими за 500', () => {
    const products = [
      { name: 'Laptop', price: 900 },
      { name: 'Shoes', price: 30 }
    ];

    const result = getProductsNotInPriceRange(products);

    expect(result).toEqual(['Laptop', 'Shoes']);
  });

  test('повертає порожній масив для порожнього вхідного масиву', () => {
    const products = [];

    const result = getProductsNotInPriceRange(products);

    expect(result).toEqual([]);
  });

  test('повертає правильний результат, якщо ціна товару дорівнює 100 або 500 (межа діапазону)', () => {
    const products = [
      { name: 'Laptop', price: 100 },
      { name: 'Phone', price: 500 }
    ];

    const result = getProductsNotInPriceRange(products);

    expect(result).toEqual([]);
  });

});