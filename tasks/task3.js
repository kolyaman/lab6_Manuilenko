// Маємо об'єкт з інформацією про види спорту, кількість представників і кількість медалей. 
// Необхідно додати нове поле percentOfSuccess, яке буде показувати відсоток завойованих медалей від загальної кількості спортсменів у кожному виді спорту.
"ВИКОРИСТОВУВАТИ ЛИШЕ МЕТОДИ МАСИВІВ filter, map, sort та інші, які є в файлі methods.js."
"Можливо в цій задачі доведеться в методі map розкривати фігурні дужки для роботи з обʼєктом."
// Щось тиру Array.map(item => {
//   blablabla
//  .. return ЩОСЬ)
// })
"Для заокруглення числа можна до десятих використовуйте .toFixed(1)"

function addSuccessPercent(olympicRepresentation) {
  return olympicRepresentation.map(item=>{
    const persentsuc = Math.round((item.medals/item.athletes)*100);
    return {
      item,percentOfSuccess: persentsuc};
  });
}

const olympicRepresentation = [
  { sport: 'Swimming', athletes: 20, medals: 6 },
  { sport: 'Gymnastics', athletes: 10, medals: 2 },
  { sport: 'Boxing', athletes: 15, medals: 5 },
  { sport: 'Athletics', athletes: 25, medals: 3 }
];

console.log(addSuccessPercent(olympicRepresentation));
module.exports = addSuccessPercent;