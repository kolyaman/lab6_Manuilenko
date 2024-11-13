const getMostFuelEfficientCars = require('../tasks/task4');

describe('getMostFuelEfficientCars', () => {

  test('повертає економічні машини для бренду Toyota, коли всі машини мають витрату менше 6 л/100 км', () => {
    const cars = [
      { brand: 'Toyota', model: 'Corolla', fuelConsumption: 5.2 },
      { brand: 'Toyota', model: 'Camry', fuelConsumption: 5.5 },
    ];

    const result = getMostFuelEfficientCars(cars, 'Toyota');

    expect(result).toEqual([
      { brand: 'Toyota', model: 'Corolla', fuelConsumption: 5.2 },
      { brand: 'Toyota', model: 'Camry', fuelConsumption: 5.5 }
    ]);
  });

  test('повертає економічні машини для бренду Honda, коли всі машини мають витрату менше 6 л/100 км', () => {
    const cars = [
      { brand: 'Honda', model: 'Civic', fuelConsumption: 5.9 },
      { brand: 'Honda', model: 'Accord', fuelConsumption: 5.8 },
    ];

    const result = getMostFuelEfficientCars(cars, 'Honda');

    expect(result).toEqual([
      { brand: 'Honda', model: 'Accord', fuelConsumption: 5.8 },
      { brand: 'Honda', model: 'Civic', fuelConsumption: 5.9 }
    ]);
  });

  test('повертає економічні машини для бренду Audi, коли всі машини мають витрату менше 6 л/100 км', () => {
    const cars = [
      { brand: 'Audi', model: 'A3', fuelConsumption: 5.4 },
      { brand: 'Audi', model: 'Q5', fuelConsumption: 5.7 },
    ];

    const result = getMostFuelEfficientCars(cars, 'Audi');

    expect(result).toEqual([
      { brand: 'Audi', model: 'A3', fuelConsumption: 5.4 },
      { brand: 'Audi', model: 'Q5', fuelConsumption: 5.7 }
    ]);
  });

  test('повертає економічні машини для бренду Dodge, коли всі машини мають витрату менше 6 л/100 км', () => {
    const cars = [
      { brand: 'Dodge', model: 'Charger', fuelConsumption: 5.8 },
      { brand: 'Dodge', model: 'Durango', fuelConsumption: 5.6 },
    ];

    const result = getMostFuelEfficientCars(cars, 'Dodge');

    expect(result).toEqual([
      { brand: 'Dodge', model: 'Durango', fuelConsumption: 5.6 },
      { brand: 'Dodge', model: 'Charger', fuelConsumption: 5.8 }
    ]);
  });

  test('повертає порожній масив, коли не всі машини мають витрату менше 6 л/100 км', () => {
    const cars = [
      { brand: 'Ford', model: 'Focus', fuelConsumption: 6.1 },
      { brand: 'Toyota', model: 'Corolla', fuelConsumption: 5.2 },
    ];

    const result = getMostFuelEfficientCars(cars, 'Toyota');

    expect(result).toEqual([]);
  });

  test('повертає порожній масив для бренду, коли всі машини перевищують 6 л/100 км', () => {
    const cars = [
      { brand: 'Ford', model: 'Focus', fuelConsumption: 6.1 },
      { brand: 'Ford', model: 'Fusion', fuelConsumption: 6.2 },
    ];

    const result = getMostFuelEfficientCars(cars, 'Ford');

    expect(result).toEqual([]);
  });

  test('повертає економічні машини для бренду Toyota з кількох брендів, коли всі мають витрату менше 6 л/100 км', () => {
    const cars = [
      { brand: 'Toyota', model: 'Camry', fuelConsumption: 5.5 },
      { brand: 'Honda', model: 'Civic', fuelConsumption: 5.9 },
      { brand: 'Toyota', model: 'Corolla', fuelConsumption: 5.2 },
    ];

    const result = getMostFuelEfficientCars(cars, 'Toyota');

    expect(result).toEqual([
      { brand: 'Toyota', model: 'Corolla', fuelConsumption: 5.2 },
      { brand: 'Toyota', model: 'Camry', fuelConsumption: 5.5 }
    ]);
  });

  test('повертає порожній масив, якщо немає економічних машин для даного бренду', () => {
    const cars = [
      { brand: 'Ford', model: 'Focus', fuelConsumption: 6.1 },
      { brand: 'Honda', model: 'Accord', fuelConsumption: 6.3 },
    ];

    const result = getMostFuelEfficientCars(cars, 'Audi');

    expect(result).toEqual([]);
  });

});