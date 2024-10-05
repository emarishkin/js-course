// // https://learn.javascript.ru/object-methods
// // Методы объекта, "this"

// // function showMessage() {
// //     alert( 'Всем привет!' );
// //   }
  
// //   showMessage();


// //   function sum(a, b) {
// //     return a + b;
// //   }
  
// //   let result = sum(1, 2);
// //   alert( result ); // 3

// //   function checkAge(age) {
// //     if (age >= 18) {
// //       return true;
// //     } else {
// //       return confirm('А родители разрешили?');
// //     }
// //   }
  
// //   let age = prompt('Сколько вам лет?', 18);
// //   if ( checkAge(age) ) {
// //     alert( 'Доступ получен' );
// //   }
// //     showMessage()     // показывает сообщение
// // getAge()          // возвращает возраст (получая его каким-то образом)
// // calcSum()         // вычисляет сумму и возвращает результат
// // createForm()      // создаёт форму (и обычно возвращает её)
// // checkPermission() // проверяет доступ, возвращая true/false


// // function checkAge(age) {
// //     if (age > 18) {
// //       return true;
// //     } else {
// //       return confirm('Родители разрешили?');
// //     }
// //   }
// //   checkAge(20)


// //   function min(a, b) {
// //     if (a < b) {
// //       return a;
// //     } else {
// //       return b;
// //     }
// //   }
// //   min(7, 5)


//   function pow(x, n) {
//     let result = x;
  
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
  
//   if (n >= 1 && n % 1 == 0) {
//     alert( pow(x, n) );
//   } else {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
//   }

// // https://learn.javascript.ru/object-methods
// //  Методы объекта, "this"

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   user.sayHi = function() {
//     alert("Привет!");
//   };
  
//   user.sayHi(); // Привет!

  
//   let calculator = {
//     sum() {
//       return this.a + this.b;
//     },
  
//     mul() {
//       return this.a * this.b;
//     },
  
//     read() {
//       this.a = +prompt('a?', 0);
//       this.b = +prompt('b?', 0);
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );


//   let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep() {
//       alert( this.step );
//       return this;
//     }
//   };

//   ladder.up().up().down().showStep().down().showStep();

// https://learn.javascript.ru/constructor-new
// Конструктор, оператор "new"

// function Calculator() {

//   this.read = function() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   };

//   this.sum = function() {
//     return this.a + this.b;
//   };

//   this.mul = function() {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = function() {
//     this.value += +prompt('Сколько нужно добавить?', 0);
//   };

// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);

// https://learn.javascript.ru/symbol#simvoly
// Тип данных Symbol

// let id1 = Symbol("id");
// let user1 = {
//   name: "Вася",
//   age: 30,
//   [id1]: 123
// };
// for (let key in user1) alert(key); // name, age (свойства с ключом-символом нет среди перечисленных)
// // хотя прямой доступ по символу работает
// alert( "Напрямую: " + user[id1] );



// let id = Symbol("id");
// let user = {
//   [id]: 123
// };

// let clone = Object.assign({}, user);

// alert( clone[id] ); // 123



// https://learn.javascript.ru/data-types
// type d


// let num = 1.23456;
// alert( num.toFixed(2) ); // 1.23


// let billion = 1e9;  // 1 миллиард, буквально: 1 и 9 нулей
// alert( 7.3e9 );  // 7.3 миллиарда (7,300,000,000)

// let ms = 1e-6; // шесть нулей слева от 1


// let a = +prompt("Введите первое число", "");
// let b = +prompt("Введите второе число", "");
// alert( a + b );


// let guestList = `Guests:
//  * John
//  * Pete
//  * Mary
// `;
// alert(guestList); // список гостей, состоящий из нескольких строк



// // перевод строки добавлен с помощью символа перевода строки
// let str1 = "Hello\nWorld";
// // многострочная строка, созданная с использованием обратных кавычек
// let str2 = `Hello
// World`;
// alert(str1 == str2); // true



// function ucFirst(str) {
//   if (!str) return str;
//   return str[0].toUpperCase() + str.slice(1);
// }
// alert( ucFirst("вася") ); // Вася



// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();
//   return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }
// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );


// https://learn.javascript.ru/array
// Массивы

// let fruits = ["Apple", "Orange", "Plum"];
// alert( fruits[fruits.length-1] ); // Plum

// let fruits1 = ["Apple", "Orange", "Plum"];
// // то же самое, что и fruits[fruits.length-1]
// alert( fruits1.at(-1) ); // Plum

// // pop
// // Удаляет последний элемент из массива и возвращает его:
// let fruits2 = ["Яблоко", "Апельсин", "Груша"];
// alert( fruits2.pop() ); // удаляем "Груша" и выводим его
// alert( fruits2 ); // Яблоко, Апельсин

// // push
// // Добавляет элемент в конец массива:
// let fruits3 = ["Яблоко", "Апельсин"];
// fruits3.push("Груша");
// alert( fruits3 ); // Яблоко, Апельсин, Груша
// // Вызов fruits.push(...) равнозначен fruits[fruits.length] = ...

// // shift
// // Удаляет из массива первый элемент и возвращает его:
// let fruits4 = ["Яблоко", "Апельсин", "Груша"];
// alert( fruits4.shift() ); // удаляем Яблоко и выводим его
// alert( fruits4 ); // Апельсин, Груша

// // unshift
// // Добавляет элемент в начало массива:
// let fruits5 = ["Апельсин", "Груша"];
// fruits5.unshift('Яблоко');
// alert( fruits5 ); // Яблоко, Апельсин, Груша

// // Методы push и unshift могут добавлять сразу несколько элементов:
// let fruits6 = ["Яблоко"];
// fruits6.push("Апельсин", "Груша");
// fruits6.unshift("Ананас", "Лимон");
// // ["Ананас", "Лимон", "Яблоко", "Апельсин", "Груша"]
// alert( fruits6 );

// Массивы2

let fruits = ["Банан"]
let arr = fruits; // копируется по ссылке (две переменные ссылаются на один и тот же массив)
alert( arr === fruits ); // true
arr.push("Груша"); // массив меняется по ссылке
alert( fruits ); // Банан, Груша - теперь два элемента

// перебор
let arr1 = ["Яблоко", "Апельсин", "Груша"];
for (let i = 0; i < arr1.length; i++) {
  alert( arr1[i] );
}

// Но для массивов возможен и другой вариант цикла, for..of:
let fruits1 = ["Яблоко", "Апельсин", "Слива"];
// проходит по значениям
for (let fruit of fruits1) {
  alert( fruit );
}

let arr2 = ["Яблоко", "Апельсин", "Груша"];
for (let key in arr2) {
  alert( arr2[key] ); // Яблоко, Апельсин, Груша
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
alert( matrix[1][1] ); // 5, центральный элемент

//Мы можем использовать массив как двустороннюю очередь, используя следующие операции:

// push(...items)добавляет items в конец массива.
// pop() удаляет элемент в конце массива и возвращает его.
// shift() удаляет элемент в начале массива и возвращает его.
// unshift(...items) добавляет items в начало массива.
// Чтобы пройтись по элементам массива:

// for (let i=0; i<arr.length; i++) – работает быстрее всего, совместим со старыми браузерами.
// for (let item of arr) – современный синтаксис только для значений элементов (к индексам нет доступа).
// for (let i in arr) – никогда не используйте для массивов!



// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.
let massiv=["Джаз","Блюз"]
let copy=massiv
copy.push("Рок-н-ролл")
massiv[(massiv.length - 1) / 2] = "Классика";
alert( massiv);
massiv.unshift("рэп","регги")
alert( massiv);


//очень интересно
// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
function sumInput() {
  let numbers = [];
  while (true) {
    let value = prompt("Введите число", 0);
    // Прекращаем ввод?
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
alert( sumInput() );