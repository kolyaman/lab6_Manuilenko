const getPopularCategories = require('../tasks/task1'); // імпортуємо функцію для тестування

describe('getPopularCategories', () => {
  
  test('повертає правильні категорії для товарів з продажами більше 5 разів', () => {
    const products = [
      { name: 'Phone', category: 'Electronics', sales: 10 },
      { name: 'Tablet', category: 'Electronics', sales: 3 },
      { name: 'Shirt', category: 'Clothing', sales: 8 },
      { name: 'Laptop', category: 'Electronics', sales: 12 },
      { name: 'Jacket', category: 'Clothing', sales: 2 },
      { name: 'Shoes', category: 'Footwear', sales: 6 },
      { name: 'Watch', category: 'Electronics', sales: 7 }
    ];

    const result = getPopularCategories(products);

    expect(result).toEqual(['Electronics', 'Clothing', 'Footwear']);
  });

  test('повертає порожній масив, якщо немає товарів з продажами більше 5 разів', () => {
    const products = [
      { name: 'Tablet', category: 'Electronics', sales: 3 },
      { name: 'Jacket', category: 'Clothing', sales: 2 }
    ];

    const result = getPopularCategories(products);

    expect(result).toEqual([]);
  });

  test('повертає категорії у правильному порядку після сортування за кількістю продажів', () => {
    const products = [
      { name: 'Phone', category: 'Electronics', sales: 10 },
      { name: 'Laptop', category: 'Electronics', sales: 15 },
      { name: 'Shoes', category: 'Footwear', sales: 8 },
      { name: 'Shirt', category: 'Clothing', sales: 9 }
    ];

    const result = getPopularCategories(products);

    expect(result).toEqual(['Electronics', 'Clothing', 'Footwear']);
  });

  test('повертає тільки унікальні категорії товарів', () => {
    const products = [
      { name: 'Phone', category: 'Electronics', sales: 10 },
      { name: 'Tablet', category: 'Electronics', sales: 5 },
      { name: 'Shirt', category: 'Clothing', sales: 8 },
      { name: 'Laptop', category: 'Electronics', sales: 12 },
      { name: 'Shoes', category: 'Footwear', sales: 6 },
      { name: 'Watch', category: 'Electronics', sales: 7 }
    ];

    const result = getPopularCategories(products);

    expect(result).toEqual(['Electronics', 'Clothing', 'Footwear']);
  });

  test('повертає порожній масив для порожнього вхідного масиву', () => {
    const products = [];

    const result = getPopularCategories(products);

    expect(result).toEqual([]);
  });

});
