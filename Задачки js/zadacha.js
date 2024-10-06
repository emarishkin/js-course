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

// let fruits = ["Банан"]
// let arr = fruits; // копируется по ссылке (две переменные ссылаются на один и тот же массив)
// alert( arr === fruits ); // true
// arr.push("Груша"); // массив меняется по ссылке
// alert( fruits ); // Банан, Груша - теперь два элемента

// // перебор
// let arr1 = ["Яблоко", "Апельсин", "Груша"];
// for (let i = 0; i < arr1.length; i++) {
//   alert( arr1[i] );
// }

// // Но для массивов возможен и другой вариант цикла, for..of:
// let fruits1 = ["Яблоко", "Апельсин", "Слива"];
// // проходит по значениям
// for (let fruit of fruits1) {
//   alert( fruit );
// }

// let arr2 = ["Яблоко", "Апельсин", "Груша"];
// for (let key in arr2) {
//   alert( arr2[key] ); // Яблоко, Апельсин, Груша
// }

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// alert( matrix[1][1] ); // 5, центральный элемент

// //Мы можем использовать массив как двустороннюю очередь, используя следующие операции:

// // push(...items)добавляет items в конец массива.
// // pop() удаляет элемент в конце массива и возвращает его.
// // shift() удаляет элемент в начале массива и возвращает его.
// // unshift(...items) добавляет items в начало массива.
// // Чтобы пройтись по элементам массива:

// // for (let i=0; i<arr.length; i++) – работает быстрее всего, совместим со старыми браузерами.
// // for (let item of arr) – современный синтаксис только для значений элементов (к индексам нет доступа).
// // for (let i in arr) – никогда не используйте для массивов!



// // Создайте массив styles с элементами «Джаз» и «Блюз».
// // Добавьте «Рок-н-ролл» в конец.
// // Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// // Удалите первый элемент массива и покажите его.
// // Вставьте Рэп и Регги в начало массива.
// let massiv=["Джаз","Блюз"]
// let copy=massiv
// copy.push("Рок-н-ролл")
// massiv[(massiv.length - 1) / 2] = "Классика";
// alert( massiv);
// massiv.unshift("рэп","регги")
// alert( massiv);


// //очень интересно
// // Напишите функцию sumInput(), которая:
// // Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// // Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// // Подсчитывает и возвращает сумму элементов массива.
// // P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
// function sumInput() {
//   let numbers = [];
//   while (true) {
//     let value = prompt("Введите число", 0);
//     // Прекращаем ввод?
//     if (value === "" || value === null || !isFinite(value)) break;
//     numbers.push(+value);
//   }
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }
// alert( sumInput() );



// https://learn.javascript.ru/array-methods
// Методы массивов

// arr.push(...items) – добавляет элементы в конец,
// arr.pop() – извлекает элемент из конца,
// arr.shift() – извлекает элемент из начала,
// arr.unshift(...items) – добавляет элементы в начало.

// splice
// Как удалить элемент из массива?
// Так как массивы – это объекты, то можно попробовать delete:
// let arr = ["I", "go", "home"];
// delete arr[1]; // удалить "go"
// alert( arr[1] ); // undefined
// // теперь arr = ["I",  , "home"];
// alert( arr.length ); // 3


// let arr1 = ["Я", "изучаю", "JavaScript"];
// arr1.splice(1, 1); // начиная с индекса 1, удалить 1 элемент
// alert( arr1 ); // осталось ["Я", "JavaScript"]


// let arr2 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// // удалить 3 первых элемента и заменить их другими
// arr2.splice(0, 3, "Давай", "танцевать");
// alert( arr2 ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]


// let arr3 = ["Я", "изучаю", "JavaScript"];
// // с индекса 2
// // удалить 0 элементов
// // вставить "сложный", "язык"
// arr3.splice(2, 0, "сложный", "язык");
// alert( arr3 ); // "Я", "изучаю", "сложный", "язык", "JavaScript"


// let arr4 = [1, 2, 5];
// // начиная с индекса -1 (перед последним элементом)
// // удалить 0 элементов,
// // затем вставить числа 3 и 4
// arr4.splice(-1, 0, 3, 4);
// alert( arr4 ); // 1,2,3,4,5


// // slice
// // Метод arr.slice намного проще, чем похожий на него arr.splice.
// // Синтаксис:
// arr5.slice([start], [end])


// let arr6 = ["t", "e", "s", "t"];
// alert( arr6.slice(1, 3) ); // e,s (копирует с 1 до 3)
// alert( arr6.slice(-2) ); // s,t (копирует с -2 до конца)


// // concat
// // Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.
// // Синтаксис:
// // arr.concat(arg1, arg2...)

// let arr7 = [1, 2];
// // создать массив из: arr и [3,4]
// alert( arr7.concat([3, 4]) ); // 1,2,3,4
// // создать массив из: arr и [3,4] и [5,6]
// alert( arr7.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
// // создать массив из: arr и [3,4], потом добавить значения 5 и 6
// alert( arr7.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6



// let arr8 = [1, 2];
// let arrayLike = {
//   0: "что-то",
//   1: "ещё",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2
// };
// alert( arr8.concat(arrayLike) ); // 1,2,что-то,ещё


// // Вызов alert для каждого элемента
// ["Бильбо", "Гэндальф", "Назгул"].forEach(alert);


// ["Бильбо", "Гэндальф", "Назгул"].forEach((item, index, array) => {
//   alert(`У ${item} индекс ${index} в ${array}`);
// });


// // arr.indexOf(item, from) ищет item начиная с индекса from и возвращает номер индекса, на котором был найден искомый элемент, в противном случае -1.
// // arr.includes(item, from) ищет item начиная с индекса from и возвращает true, если поиск успешен.
// let arr9 = [1, 0, false];
// alert( arr9.indexOf(0) ); // 1
// alert( arr9.indexOf(false) ); // 2
// alert( arr9.indexOf(null) ); // -1
// alert( arr9.includes(1) ); // true


// let fruits = ['Яблоко', 'Апельсин', 'Яблоко']
// alert( fruits.indexOf('Яблоко') ); // 0 (первый 'Яблоко')
// alert( fruits.lastIndexOf('Яблоко') ); // 2 (последний 'Яблоко')


// let users = [
//   {id: 1, name: "Вася"},
//   {id: 2, name: "Петя"},
//   {id: 3, name: "Маша"}
// ];
// let user = users.find(item => item.id == 1);
// alert(user.name); // Вася



// let users1 = [
//   {id: 1, name: "Вася"},
//   {id: 2, name: "Петя"},
//   {id: 3, name: "Маша"},
//   {id: 4, name: "Вася"}
// ];
// // Найти индекс первого Васи
// alert(users1.findIndex(user => user.name == 'Вася')); // 0
// // Найти индекс последнего Васи
// alert(users1.findLastIndex(user => user.name == 'Вася')); // 3


// let users2 = [
//   {id: 1, name: "Вася"},
//   {id: 2, name: "Петя"},
//   {id: 3, name: "Маша"}
// ];
// // возвращает массив, состоящий из двух первых пользователей
// let someUsers = users2.filter(item => item.id < 3);
// alert(someUsers.length); // 2


// let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
// alert(lengths); // 6,8,6


// function compareNumeric(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }
// let arr11 = [ 1, 2, 15 ];
// arr11.sort(compareNumeric);
// alert(arr11);  // 1, 2, 15


// // reverse
// // Метод arr.reverse меняет порядок элементов в arr на обратный.
// // Например:
// let arr12 = [1, 2, 3, 4, 5];
// arr12.reverse();
// alert( arr12 ); // 5,4,3,2,1

// second methods


let names = 'Вася, Петя, Маша';
let arr = names.split(', ');
for (let name of arr) {
  alert( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
}

let arr1 = 'Вася, Петя, Маша, Саша'.split(', ', 2);
alert(arr1); // Вася, Петя


let str = "тест";
alert( str.split('') ); // т,е,с,т


let arr2 = ['Вася', 'Петя', 'Маша'];
let str1 = arr2.join(';'); // объединить массив в строку через ;
alert( str1 ); // Вася;Петя;Маша


let arr3 = [1, 2, 3, 4, 5];
let result = arr3.reduce((sum, current) => sum + current, 0);
alert(result); // 15


let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};
let users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];
// найти пользователей, для которых army.canJoin возвращает true
let soldiers = users.filter(army.canJoin, army);
alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23



// Итого
// Шпаргалка по методам массива:
// Для добавления/удаления элементов:
// push(...items) – добавляет элементы в конец,
// pop() – извлекает элемент с конца,
// shift() – извлекает элемент с начала,
// unshift(...items) – добавляет элементы в начало.
// splice(pos, deleteCount, ...items) – начиная с индекса pos удаляет deleteCount элементов и вставляет items.
// slice(start, end) – создаёт новый массив, копируя в него элементы с индекса start до end (не включая end).
// concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.
// Для поиска среди элементов:
// indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
// includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
// find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
// findIndex похож на find, но возвращает индекс вместо значения.
// Для перебора элементов:
// forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.
// Для преобразования массива:
// map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
// sort(func) – сортирует массив «на месте», а потом возвращает его.
// reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
// split/join – преобразует строку в массив и обратно.
// reduce/reduceRight(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.
// Дополнительно:
// Array.isArray(arr) проверяет, является ли arr массивом.



// my-short-string

function camelize(str) {
  return str
    .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}


function filterRange(arr, a, b) {
  // добавлены скобки вокруг выражения для улучшения читабельности
  return arr.filter(item => (a <= item && item <= b));
}
let arr5 = [5, 3, 8, 1];
let filtered = filterRange(arr5, 1, 4);
alert( filtered ); // 3,1 (совпадающие значения)
alert( arr5 ); // 5,3,8,1 (без изменений)



function filterRangeInPlace(arr6, a, b) {
  for (let i = 0; i < arr6.length; i++) {
    let val = arr6[i];

    // удалить, если за пределами интервала
    if (val < a || val > b) {
      arr6.splice(i, 1);
      i--;
    }
  }

}

let arr6 = [5, 3, 8, 1];
filterRangeInPlace(arr6, 1, 4); // удалены числа вне диапазона 1..4
alert( arr6 ); // [3, 1]


let arr8 = [5, 2, 1, -10, 8];
arr8.sort((a, b) => b - a);
alert( arr8 );



function copySorted(arr) {
  return arr.slice().sort();
}

let arr9 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr9);
alert( sorted );
alert( arr9 );


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users1 = [ vasya, petya, masha ];
let names1 = users1.map(item => item.name);

alert( names1 ); // Вася, Петя, Маша





let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users2 = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/
alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // Вася Пупкин



function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };

let arr11 = [ vasya, petya, masha ];

sortByAge(arr);

// теперь отсортировано: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя




function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 29 };

let arr111 = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // 28




