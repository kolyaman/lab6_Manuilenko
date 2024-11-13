'use strict'

// Продовжимо розбиратися з методами масивів


//Метод sort:

"ЧИСЛА"
//1) Базове використання:
let numbers = [30, 4, 100, 22]; // [4, 22, 30, 100]
numbers.sort();
console.log(numbers); // [100, 22, 30, 4]

//2) Правильне сортування:
// Сортування за зростанням
numbers.sort((a, b) => a - b);
console.log(numbers); // [4, 22, 30, 100]

// Сортування за спаданням
numbers.sort((a, b) => b - a);
console.log(numbers); // [100, 30, 22, 4]

"РЯДКИ"
let words = ['Banana', 'apple', 'Cherry'];
words.sort((a, b) => a.localeCompare(b)); // Ігнорує регістр
console.log(words); // ['apple', 'Banana', 'Cherry']

"ОБʼЄКТИ"
let people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 22 },
  { name: 'Jack', age: 35 }
];

// Сортування за зростанням віку
people.sort((a, b) => a.age - b.age);
console.log(people);
// [{ name: 'Jane', age: 22 }, { name: 'John', age: 30 }, { name: 'Jack', age: 35 }]

// Сортування за спаданням віку
people.sort((a, b) => b.age - a.age);
console.log(people);
// [{ name: 'Jack', age: 35 }, { name: 'John', age: 30 }, { name: 'Jane', age: 22 }]

// Використання localeCompare() для сортування рядків з урахуванням локалізації
// localeCompare() дозволяє сортувати рядки відповідно до мовних правил.

let cities = ['Київ', 'Львів', 'Одеса'];
cities.sort((a, b) => a.localeCompare(b, 'uk')); // Сортування для української мови
console.log(cities); // ['Київ', 'Львів', 'Одеса']

"Ланцюжки методів масивів"

// filter, map

const people2 = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 22 },
  { name: 'Jack', age: 35 },
  { name: 'Alice', age: 19 }
];

const youngPeopleNames = people2
  .filter(person => person.age < 30) // Фільтруємо молодих людей [ { name: 'Jane', age: 22 },{ name: 'Alice', age: 19 }]
  .map(person => person.name.toUpperCase()); // Преобразуємо їхні імена у верхній регістр

console.log(youngPeopleNames); // ["JANE", "ALICE"]


//filter, map, sort

const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 700 },
  { name: 'Book', price: 15 },
  { name: 'Pen', price: 5 }
];

const filteredAndSortedProducts = products
  .filter(product => product.price > 20) // Залишаємо товари дорожче 20 доларів
  .map(product => ({
    ...product, // Копіюємо всі властивості
    price: product.price * 2 // Подвоюємо ціну
  }))
  .sort((a, b) => a.price - b.price); // Сортуємо за ціною від найменшої до найбільшої

console.log(filteredAndSortedProducts);
// [{ name: 'Phone', price: 1400 }, { name: 'Laptop', price: 2000 }]


//Метод some() перевіряє, чи хоча б один елемент масиву відповідає умові, 
// яку ми передаємо як колбек. Якщо хоча б один елемент задовольняє умову, 
//метод повертає true, інакше — false.

const students = [
  { name: 'John', age: 18 },
  { name: 'Jane', age: 22 },
  { name: 'Jack', age: 19 },
  { name: 'Alice', age: 23 }
];

const hasOlderStudent = students.some(student => student.age > 25); 
console.log(hasOlderStudent); // Виведе: false

// Метод every() перевіряє, чи всі елементи масиву відповідають умові, яку ми передаємо у вигляді колбек-функції. 
// Якщо всі елементи відповідають умові — метод повертає true, якщо хоча б один не відповідає — повертає false.

const areAllAdults = students.every(student => student.age > 18);
console.log(areAllAdults); // Виведе: false

//Коротко про більшість методів масивів:


"МУТУЮЧІ МЕТОДИ МАСИВІВ (змінюють оригінальний масив)"
// push() – додає елементи в кінець масиву.
// const arr = [1, 2, 3];
// arr.push(4); // arr стає [1, 2, 3, 4]

// pop() – видаляє останній елемент масиву.
// const arr = [1, 2, 3];
// arr.pop(); // arr стає [1, 2]

// shift() – видаляє перший елемент масиву.
// const arr = [1, 2, 3];
// arr.shift(); // arr стає [2, 3]

// unshift() – додає елементи на початок масиву.
// const arr = [1, 2, 3];
// arr.unshift(0); // arr стає [0, 1, 2, 3]

// splice() – додає, видаляє або замінює елементи масиву на місці.
// const arr = [1, 2, 3, 4];
// arr.splice(1, 2, 'a', 'b'); // arr стає [1, 'a', 'b', 4]

// sort() – сортує елементи масиву на місці
// const arr = [3, 1, 2];
// arr.sort(); // arr стає [1, 2, 3]

// reverse() – змінює порядок елементів масиву на місці.
// const arr = [1, 2, 3];
// arr.reverse(); // arr стає [3, 2, 1]

// fill() – заповнює масив одним значенням.
// const arr = [1, 2, 3];
// arr.fill(0); // arr стає [0, 0, 0]

"HEМУТУЮЧІ МЕТОДИ МАСИВІВ (Немутуючі методи не змінюють оригінальний масив, а повертають новий.)"
// map() – створює новий масив, виконуючи функцію для кожного елемента.
// const arr = [1, 2, 3];
// const newArr = arr.map(x => x * 2); // newArr = [2, 4, 6]

// filter() – створює новий масив, включаючи лише елементи, що відповідають умові.
// const arr = [1, 2, 3];
// const newArr = arr.filter(x => x > 1); // newArr = [2, 3]

// slice() – повертає новий масив, витягуючи частину оригінального масиву.
// const arr = [1, 2, 3, 4];
// const newArr = arr.slice(1, 3); // newArr = [2, 3]

// concat() – повертає новий масив, об'єднуючи оригінальний масив з іншим масивом або елементами.
// const arr = [1, 2];
// const newArr = arr.concat([3, 4]); // newArr = [1, 2, 3, 4]

// join() – об'єднує всі елементи масиву в рядок.
// const arr = [1, 2, 3];
// const str = arr.join('-'); // str = "1-2-3"

// find() – знаходить і повертає перший елемент, що відповідає умові.
// const arr = [1, 2, 3];
// const found = arr.find(x => x > 1); // found = 2

// findIndex() – знаходить і повертає індекс першого елемента, що відповідає умові.
// const arr = [1, 2, 3];
// const index = arr.findIndex(x => x > 1); // index = 1

// some() – перевіряє, чи є хоча б один елемент, що відповідає умові.
// const arr = [1, 2, 3];
// const hasEven = arr.some(x => x % 2 === 0); // hasEven = true

// every() – перевіряє, чи всі елементи відповідають умові.
// const arr = [1, 2, 3];
// const allPositive = arr.every(x => x > 0); // allPositive = true
