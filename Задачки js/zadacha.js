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


let num = 1.23456;
alert( num.toFixed(2) ); // 1.23


let billion = 1e9;  // 1 миллиард, буквально: 1 и 9 нулей
alert( 7.3e9 );  // 7.3 миллиарда (7,300,000,000)

let ms = 1e-6; // шесть нулей слева от 1


let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");
alert( a + b );


let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
alert(guestList); // список гостей, состоящий из нескольких строк



// перевод строки добавлен с помощью символа перевода строки
let str1 = "Hello\nWorld";
// многострочная строка, созданная с использованием обратных кавычек
let str2 = `Hello
World`;
alert(str1 == str2); // true



function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
alert( ucFirst("вася") ); // Вася



function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );


