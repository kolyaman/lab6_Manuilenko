const addSuccessPercent = require('../tasks/task3')

describe('addSuccessPercent', () => {
  
  test('повертає правильний відсоток успіху для кожного виду спорту', () => {
    const olympicRepresentation = [
      { sport: 'Swimming', athletes: 20, medals: 6 },
      { sport: 'Gymnastics', athletes: 10, medals: 2 },
      { sport: 'Boxing', athletes: 15, medals: 5 },
      { sport: 'Athletics', athletes: 25, medals: 3 }
    ];

    const result = addSuccessPercent(olympicRepresentation);

    expect(result).toEqual([
      { sport: 'Swimming', athletes: 20, medals: 6, percentOfSuccess: '30.0%' },
      { sport: 'Gymnastics', athletes: 10, medals: 2, percentOfSuccess: '20.0%' },
      { sport: 'Boxing', athletes: 15, medals: 5, percentOfSuccess: '33.3%' },
      { sport: 'Athletics', athletes: 25, medals: 3, percentOfSuccess: '12.0%' }
    ]);
  });

  test('повертає правильний відсоток успіху навіть для одного виду спорту', () => {
    const olympicRepresentation = [
      { sport: 'Basketball', athletes: 12, medals: 3 }
    ];

    const result = addSuccessPercent(olympicRepresentation);

    expect(result).toEqual([
      { sport: 'Basketball', athletes: 12, medals: 3, percentOfSuccess: '25.0%' }
    ]);
  });

  test('повертає порожній масив для порожнього вхідного масиву', () => {
    const olympicRepresentation = [];

    const result = addSuccessPercent(olympicRepresentation);

    expect(result).toEqual([]);
  });

  test('правильне обчислення для випадку, коли немає медалей у спорті', () => {
    const olympicRepresentation = [
      { sport: 'Fencing', athletes: 8, medals: 0 }
    ];

    const result = addSuccessPercent(olympicRepresentation);

    expect(result).toEqual([
      { sport: 'Fencing', athletes: 8, medals: 0, percentOfSuccess: '0.0%' }
    ]);
  });

  test('правильне обчислення для випадку, коли кількість медалей більша за кількість спортсменів', () => {
    const olympicRepresentation = [
      { sport: 'Wrestling', athletes: 5, medals: 8 }
    ];

    const result = addSuccessPercent(olympicRepresentation);

    expect(result).toEqual([
      { sport: 'Wrestling', athletes: 5, medals: 8, percentOfSuccess: '160.0%' }
    ]);
  });

  test('повертає правильний відсоток для кількості медалей і спортсменів, що дорівнюють нулю', () => {
    const olympicRepresentation = [
      { sport: 'Archery', athletes: 0, medals: 0 }
    ];

    const result = addSuccessPercent(olympicRepresentation);

    expect(result).toEqual([
      { sport: 'Archery', athletes: 0, medals: 0, percentOfSuccess: '0%' }
    ]);
  });

  test('правильне обчислення для випадку, коли кількість медалей і спортсменів не дорівнюють нулю, але медалей значно менше', () => {
    const olympicRepresentation = [
      { sport: 'Judo', athletes: 30, medals: 2 }
    ];

    const result = addSuccessPercent(olympicRepresentation);

    expect(result).toEqual([
      { sport: 'Judo', athletes: 30, medals: 2, percentOfSuccess: '6.7%' }
    ]);
  });

});