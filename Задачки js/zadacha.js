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


// let names = 'Вася, Петя, Маша';
// let arr = names.split(', ');
// for (let name of arr) {
//   alert( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
// }

// let arr1 = 'Вася, Петя, Маша, Саша'.split(', ', 2);
// alert(arr1); // Вася, Петя


// let str = "тест";
// alert( str.split('') ); // т,е,с,т


// let arr2 = ['Вася', 'Петя', 'Маша'];
// let str1 = arr2.join(';'); // объединить массив в строку через ;
// alert( str1 ); // Вася;Петя;Маша


// let arr3 = [1, 2, 3, 4, 5];
// let result = arr3.reduce((sum, current) => sum + current, 0);
// alert(result); // 15


// let army = {
//   minAge: 18,
//   maxAge: 27,
//   canJoin(user) {
//     return user.age >= this.minAge && user.age < this.maxAge;
//   }
// };
// let users = [
//   {age: 16},
//   {age: 20},
//   {age: 23},
//   {age: 30}
// ];
// // найти пользователей, для которых army.canJoin возвращает true
// let soldiers = users.filter(army.canJoin, army);
// alert(soldiers.length); // 2
// alert(soldiers[0].age); // 20
// alert(soldiers[1].age); // 23



// // Итого
// // Шпаргалка по методам массива:
// // Для добавления/удаления элементов:
// // push(...items) – добавляет элементы в конец,
// // pop() – извлекает элемент с конца,
// // shift() – извлекает элемент с начала,
// // unshift(...items) – добавляет элементы в начало.
// // splice(pos, deleteCount, ...items) – начиная с индекса pos удаляет deleteCount элементов и вставляет items.
// // slice(start, end) – создаёт новый массив, копируя в него элементы с индекса start до end (не включая end).
// // concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.
// // Для поиска среди элементов:
// // indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
// // includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
// // find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
// // findIndex похож на find, но возвращает индекс вместо значения.
// // Для перебора элементов:
// // forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.
// // Для преобразования массива:
// // map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
// // sort(func) – сортирует массив «на месте», а потом возвращает его.
// // reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
// // split/join – преобразует строку в массив и обратно.
// // reduce/reduceRight(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.
// // Дополнительно:
// // Array.isArray(arr) проверяет, является ли arr массивом.



// // my-short-string

// function camelize(str) {
//   return str
//     .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//     .map(
//       // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//       // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
// }


// function filterRange(arr, a, b) {
//   // добавлены скобки вокруг выражения для улучшения читабельности
//   return arr.filter(item => (a <= item && item <= b));
// }
// let arr5 = [5, 3, 8, 1];
// let filtered = filterRange(arr5, 1, 4);
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr5 ); // 5,3,8,1 (без изменений)



// function filterRangeInPlace(arr6, a, b) {
//   for (let i = 0; i < arr6.length; i++) {
//     let val = arr6[i];

//     // удалить, если за пределами интервала
//     if (val < a || val > b) {
//       arr6.splice(i, 1);
//       i--;
//     }
//   }

// }

// let arr6 = [5, 3, 8, 1];
// filterRangeInPlace(arr6, 1, 4); // удалены числа вне диапазона 1..4
// alert( arr6 ); // [3, 1]


// let arr8 = [5, 2, 1, -10, 8];
// arr8.sort((a, b) => b - a);
// alert( arr8 );



// function copySorted(arr) {
//   return arr.slice().sort();
// }

// let arr9 = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr9);
// alert( sorted );
// alert( arr9 );


// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users1 = [ vasya, petya, masha ];
// let names1 = users1.map(item => item.name);

// alert( names1 ); // Вася, Петя, Маша





// let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
// let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

// let users2 = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));
// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */
// alert( usersMapped[0].id ); // 1
// alert( usersMapped[0].fullName ); // Вася Пупкин



// function sortByAge(arr) {
//   arr.sort((a, b) => a.age - b.age);
// }

// let vasya2 = { name: "Вася", age: 25 };
// let petya2 = { name: "Петя", age: 30 };
// let masha2 = { name: "Маша", age: 28 };

// let arr11 = [ vasya, petya, masha ];

// sortByAge(arr);

// // теперь отсортировано: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя




// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }
// let vasya3 = { name: "Вася", age: 25 };
// let petya3 = { name: "Петя", age: 30 };
// let masha3 = { name: "Маша", age: 29 };

// let arr111 = [ vasya, petya, masha ];

// alert( getAverageAge(arr) ); // 28



//https://learn.javascript.ru/iterable
// Symbol.iterator


// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     this.current = this.from;
//     return this;
//   },

//   next() {
//     if (this.current <= this.to) {
//       return { done: false, value: this.current++ };
//     } else {
//       return { done: true };
//     }
//   }
// };

// for (let num of range) {
//   alert(num); // 1, затем 2, 3, 4, 5
// }



// for (let char of "test") {
//   // срабатывает 4 раза: по одному для каждого символа
//   alert( char ); // t, затем e, затем s, затем t
// }


// let str = '𝒳😂';
// for (let char of str) {
//     alert( char ); // 𝒳, а затем 😂
// }



// https://learn.javascript.ru/map-set
// Map и Set

// new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.


// let map = new Map();

// map.set("1", "str1");    // строка в качестве ключа
// map.set(1, "num1");      // цифра как ключ
// map.set(true, "bool1");  // булево значение как ключ
// // помните, обычный объект Object приводит ключи к строкам?
// // Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
// alert(map.get(1)); // "num1"
// alert(map.get("1")); // "str1"
// alert(map.size); // 3



// let recipeMap = new Map([
//   ["огурец", 500],
//   ["помидор", 350],
//   ["лук",    50]
// ]);
// // перебор по ключам (овощи)
// for (let vegetable of recipeMap.keys()) {
//   alert(vegetable); // огурец, помидор, лук
// }
// // перебор по значениям (числа)
// for (let amount of recipeMap.values()) {
//   alert(amount); // 500, 350, 50
// }
// // перебор по элементам в формате [ключ, значение]
// for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
//   alert(entry); // огурец,500 (и так далее)
// }



// // массив пар [ключ, значение]
// let map1 = new Map([
//   ['1',  'str1'],
//   [1,    'num1'],
//   [true, 'bool1']
// ]);

// alert( map1.get('1') ); // str1



// let prices = Object.fromEntries([
//   ['banana', 1],
//   ['orange', 2],
//   ['meat', 4]
// ]);

// // prices = { banana: 1, orange: 2, meat: 4 }
// alert(prices.orange); // 2



// // new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// // set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// // set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
// // set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// // set.clear() – удаляет все имеющиеся значения.
// // set.size – возвращает количество элементов в множестве.


// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };
// // считаем гостей, некоторые приходят несколько раз
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);
// // set хранит только 3 уникальных значения
// alert(set.size); // 3
// for (let user of set) {
//   alert(user.name); // John (потом Pete и Mary)
// }


// let set1 = new Set(["апельсин", "яблоко", "банан"]);

// for (let value of set1) alert(value);

// // то же самое с forEach:
// set1.forEach((value, valueAgain, set1) => {
//   alert(value);
// });

// повторяю первую треть

// const myBirthday = '18.04.1982';
// myBirthday = '01.01.2001'; // ошибка, константу нельзя перезаписать!


// // Оператор typeof возвращает тип аргумента. Это полезно, когда мы хотим обрабатывать значения различных типов по-разному или просто хотим сделать проверку.
// // Обычный синтаксис
// typeof 5 // Выведет "number"
// // Синтаксис, напоминающий вызов функции (встречается реже)
// typeof(5) // Также выведет "number"

// продолжение

// let apples = "2";
// let oranges = "3";
// // оба операнда предварительно преобразованы в числа
// alert( +apples + +oranges ); // 5
// // более длинный вариант
// // alert( Number(apples) + Number(oranges) ); // 5


// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);
// alert(a + b); // 3


// alert( 'Я' > 'А' ); // true
// alert( 'Коты' > 'Кода' ); // true
// alert( 'Сонный' > 'Сон' ); // true

// alert( '2' > 1 ); // true, строка '2' становится числом 2
// alert( '01' == 1 ); // true, строка '01' становится числом 1


// let a1 = 0;
// alert( Boolean(a) ); // false
// let b1 = "0";
// alert( Boolean(b) ); // true
// alert(a1 == b1); // true!

// let age = prompt('Возраст?', 18);
// let message = (age < 3) ? 'Здравствуй, малыш!' :
//   (age < 18) ? 'Привет!' :
//   (age < 100) ? 'Здравствуйте!' :
//   'Какой необычный возраст!';
// alert( message );



// let company = prompt('Какая компания создала JavaScript?', '');
// (company == 'Netscape') ?
//    alert('Верно!') : alert('Неправильно.');


//    let name = prompt('Какая компания создала JavaScript?', '');
//    if(name == "ECMAScript"){
//      alert("верно!")
//    } else {
//     alert("неверно лох")
//    }

//    let name2 = prompt('Какая компания создала JavaScript?', '');
//    (name2=="ECMAScript") ?
//    alert("верно!") : alert("бот слит")

// let age3=18
// if(14<=age3 || age3>=90){
//     alert(age3)
// }

// let login = prompt("Кто там?" , "")
// if(login=="Админ"){
//     let password = prompt("пароль" , "")
//     if(password=="Я главный"){
//       alert("я главный")
//     } else {
//         alert("неверный пароль")
//     }
// } else if (login === '' || login === null) {
//     alert( 'Отменено' );
//   } else {
//     alert( "Я вас не знаю" );
//   }
   
// for (let i = 0; i < 10; i++) {
//     // если true, пропустить оставшуюся часть тела цикла
//     if (i % 2 == 0) continue;
  
//     alert(i); // 1, затем 3, 5, 7, 9
//   }


// for (let i = 0; i < 10; i++) {

//     if (i % 2 == 1) {
//       alert( i );
//     }
  
//   }



// for(let i=2;i<=10;i++){
//     if(i%2 == 0){
//   alert(i)
// }
// }


// let i=0
// while(i<3) {
//     alert( `number ${i}!` );
//  i++
// }


// let num = prompt("введите число больше 100", "")
// if(num <= 100 && num){
// while (num <= 100 && num){
//     num = prompt("введите еще раз", "")
// }
// } else {
//     alert("все норм")
// }

// let n=10
// nextPrime:
// for(let j=2;j<=n;j++){
//     for(let i=2;i<j;i++){
//         if(j%i==0) continue nextPrime;
        
//     }
//     alert(j)
// }

// let browser
// if(browser=="Edge"){
//     alert("You've got the Edge!")
// } else if(browser == 'Chrome'
//     || browser == 'Firefox'
//     || browser == 'Safari'
//     || browser == 'Opera'){
//     alert('Okay we support these browsers too')
// } else {
//     alert( 'We hope that this page looks ok!' );
// }

// let number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//   case 0:
//     alert('Вы ввели число 0');
//     break;

//   case 1:
//     alert('Вы ввели число 1');
//     break;

//   case 2:
//   case 3:
//     alert('Вы ввели число 2, а может и 3');
//     break;
// }

// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('А родители разрешили?');
//     }
//   }
  
//   let age = prompt('Сколько вам лет?', 18);
  
//   if ( checkAge(age) ) {
//     alert( 'Доступ получен' );
//   } else {
//     alert( 'Доступ закрыт' );
//   }

//  function min(a,b){
//  if(b>a){
//     return a
//  } else {
//     return b
//  }

// }
// alert(min(3,9))


// function pow(x,n){
// let kaka= x**n
// return kaka
// }
// alert(pow(3,3))

// function pow(x, n) {
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

// // Function Expression
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//    else no();
// }
// function showOk() {
//   alert( "Вы согласны." );
// }

// function showCancel() {
//   alert( "Вы отменили выполнение." );
// }
// // использование: функции showOk, showCancel передаются в качестве аргументов ask
// ask("Вы согласны?", showOk, showCancel);




// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );


// // Function Declaration
// function sum(a, b) {
//   return a + b;
// }
// // Function Expression
// let sum = function(a, b) {
//   return a + b;
// };




// let age = prompt("Сколько Вам лет?", 18);
// let welcome;
// if (age < 18) {

//   welcome = function() {
//     alert("Привет!");
//   };

// } else {

//   welcome = function() {
//     alert("Здравствуйте!");
//   };

// }
// welcome(); // теперь всё в порядке




// let age1 = prompt("Сколько Вам лет?", 18);
// let welcome1 = (age1 < 18) ?
//   function() { alert("Привет!"); } :
//   function() { alert("Здравствуйте!"); };

// welcome1(); // теперь всё в порядке


// стрелочные функции


// let func = (arg1, arg2, ...argN) => expression;

// let func1 = function(arg1, arg2, ...argN) {
//   return expression;
// }
// // одно и то же

// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let age = prompt("Сколько Вам лет?", 18);
// let welcome = (age < 18) ?
//   () => alert('Привет!') :
//   () => alert("Здравствуйте!");

// welcome();
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
//   let result = a + b;
//   return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
// };
// alert( sum(1, 2) ); // 3



// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );


// let opros = (question, yes, no) =>{
//   if (confirm(question)) yes()
//     else no();
// }
// ask(
//   "Вы согласны?",
//   ()=> { alert("Вы согласились."); },
//   ()=> { alert("Вы отменили выполнение."); }
// );


// // Function Declaration
// function sum(a, b) {
//   return a + b;
// }
// // Function Expression
// let sum = function(a, b) {
//   return a + b;
// };




// let age2 = prompt("Сколько Вам лет?", 18);
// let welcome2;
// if (age2 < 18) {

//   welcome = function() {
//     alert("Привет!");
//   };

// } else {

//   welcome = function() {
//     alert("Здравствуйте!");
//   };

// }
// welcome(); // теперь всё в порядке




// let age1 = prompt("Сколько Вам лет?", 18);
// let welcome1 = (age1 < 18) ?
//   function() { alert("Привет!"); } :
//   function() { alert("Здравствуйте!"); };

// welcome1(); // теперь всё в порядке




// let age = prompt('Сколько вам лет?', 18);

// switch (age) {
//   case 18:
//     alert("Так не сработает"); // результатом prompt является строка, а не число

//   case "18":
//     alert("А так сработает!");
//     break;

//   default:
//     alert("Любое значение, неравное значению выше");
// }


// let user = {};
// // присваивание значения свойству
// user["likes birds"] = true;
// // получение значения свойства
// alert(user["likes birds"]); // true
// // удаление свойства
// delete user["likes birds"];


// let user = {
//   name: "John",
//   age: 30
// };
// let key = prompt("Что вы хотите узнать о пользователе?", "name");
// // доступ к свойству через переменную
// alert( user[key] ); // John (если ввели "name")


// let obj = {
//   0: "Тест" // то же самое что и "0": "Тест"
// };
// // обе функции alert выведут одно и то же свойство (число 0 преобразуется в строку "0")
// alert( obj["0"] ); // Тест
// alert( obj[0] ); // Тест (то же свойство)




// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };

// for (let key in user) {
//   // ключи
//   alert( key );  // name, age, isAdmin
//   // значения ключей
//   alert( user[key] ); // John, 30, true
// }




// let codes = {
//   "+49": "Германия",
//   "+41": "Швейцария",
//   "+44": "Великобритания",
//   // ..,
//   "+1": "США"
// };

// for (let code in codes) {
//   alert( +code ); // 49, 41, 44, 1
// }



// // задачи 
// let user 
// user.name="John"
// user.surname ="Smith"
// name= "Pete"
// delete user.name

// // !!!!!!!!!!!!!!!!!!!!
// let salaries22 = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let sum=0
// for(let key in salaries22){
//   sum+=salaries22[key]
// }
// alert(sum)
// // !!!!!!!!!!!!!!!!!!!!!!


// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }
// multiplyNumeric(menu)
// alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// let user33 = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };


// // копируем все свойства из permissions1 и permissions2 в user
// Object.assign(user, permissions1, permissions2);

// // теперь user = { name: "John", canView: true, canEdit: true }



// let user = {
//   // ...
// };

// // сначала, объявляем
// function sayHi() {
//   alert("Привет!");
// }

// // затем добавляем в качестве метода
// user.sayHi = sayHi;

// user.sayHi(); // Привет!



// // эти объекты делают одно и то же

// user = {
//   sayHi: function() {
//     alert("Привет");
//   }
// };

// // сокращённая запись выглядит лучше, не так ли?
// user = {
//   sayHi() { // то же самое, что и "sayHi: function(){...}"
//     alert("Привет");
//   }
// }


// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     // "this" - это "текущий объект".
//     alert(this.name);
//   }

// };
// user.sayHi(); // John

// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let user = {
//   firstName: "Ilya",
//   sayHi() {
//     let arrow = () => alert(this.firstName);
//     arrow();
//   }
// };

// user.sayHi(); // Ilya
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     }
//   };
// }

// let user = makeUser();

// alert( user.ref().name ); // John


// задача
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let calculator2 = {
//   sum(){
//     return this.a + this.b
//    },
//    mul(){
//     return this.a * this.b;
//    },
//  read(){
//   this.a = +prompt("ввкдите 1 значение","")
//   this.b = +prompt("ввкдите 2 значение","")
//  }
 
// };

// calculator2.read();
// alert( calculator.sum() );
// alert( calculator.mul() );
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     alert( this.step );
//     return this;
//   }
// };

// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Jack");

// alert(user.name); // Jack
// alert(user.isAdmin); // false



// // Другими словами, new User(...) делает что-то вроде:

// function User(name) {
//   // this = {};  (неявно)

//   // добавляет свойства к this
//   this.name = name;
//   this.isAdmin = false;

//   // return this;  (неявно)
// }


// function User() {
//   alert(new.target);
// }
// // без "new":
// User(); // undefined
// // с "new":
// new User(); // function User { ... }



// function User(name) {
//   if (!new.target) { // в случае, если вы вызвали меня без оператора new
//     return new User(name); // ...я добавлю new за вас
//   }

//   this.name = name;
// }
// let john2 = User("John"); // переадресовывает вызов на new User
// alert(john2.name); // John



// function BigUser() {

//   this.name = "John";

//   return { name: "Godzilla" };  // <-- возвращает этот объект
// }
// alert( new BigUser().name );  // Godzilla, получили этот объект



// function SmallUser() {

//   this.name = "John";

//   return; // <-- возвращает this
// }
// alert( new SmallUser().name );  // John


// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function User(name) {
//   this.name = name;

//   this.sayHi = function() {
//     alert( "Меня зовут: " + this.name );
//   };
// }

// let john = new User("John");

// john.sayHi(); // Меня зовут: John

// /*
// john = {
//    name: "John",
//    sayHi: function() { ... }
// }
// */
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




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

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user6 = new User("Jack");

// alert(user6.name); // Jack
// alert(user6.isAdmin); // false



// // Другими словами, new User(...) делает что-то вроде:

// function User(name) {
//   // this = {};  (неявно)

//   // добавляет свойства к this
//   this.name = name;
//   this.isAdmin = false;

//   // return this;  (неявно)
// }


// function User() {
//   alert(new.target);
// }
// // без "new":
// User(); // undefined
// // с "new":
// new User(); // function User { ... }



// function User(name) {
//   if (!new.target) { // в случае, если вы вызвали меня без оператора new
//     return new User(name); // ...я добавлю new за вас
//   }

//   this.name = name;
// }
// let john = User("John"); // переадресовывает вызов на new User
// alert(john.name); // John



// function BigUser() {

//   this.name = "John";

//   return { name: "Godzilla" };  // <-- возвращает этот объект
// }
// alert( new BigUser().name );  // Godzilla, получили этот объект



// function SmallUser() {

//   this.name = "John";

//   return; // <-- возвращает this
// }
// alert( new SmallUser().name );  // John


// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function User(name) {
//   this.name = name;

//   this.sayHi = function() {
//     alert( "Меня зовут: " + this.name );
//   };
// }

// let john5 = new User("John");

// john.sayHi(); // Меня зовут: John

// /*
// john = {
//    name: "John",
//    sayHi: function() { ... }
// }
// */
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




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



// let key = "firstName";
// let user1 = {
//   firstName: "John"
// };
// let user2 = null;
// alert( user1?.[key] ); // John
// alert( user2?.[key] ); // undefined

// // obj?.prop – возвращает obj.prop если obj существует, в противном случае undefined.
// // obj?.[prop] – возвращает obj[prop] если obj существует, в противном случае undefined.
// // obj.method?.() – вызывает obj.method(), если obj.method существует, в противном случае возвращает undefined

// let id5 = Symbol("id");
// alert(id); // TypeError: Cannot convert a Symbol value to a string

// let id6 = Symbol("id");
// alert(id.toString()); // Symbol(id), теперь работает

// let id7 = Symbol("id");
// alert(id.description); // id



// let id8 = Symbol("id");
// let user8 = {
//   [id]: 123
// };
// let clone = Object.assign({}, user);
// alert( clone[id] ); // 123


// // читаем символ из глобального реестра и записываем его в переменную
// let id = Symbol.for("id"); // если символа не существует, он будет создан
// // читаем его снова и записываем в другую переменную (возможно, из другого места кода)
// let idAgain = Symbol.for("id");
// // проверяем -- это один и тот же символ
// alert( id === idAgain ); // true



// // получаем символ по имени
// let sym = Symbol.for("name");
// let sym2 = Symbol.for("id");
// // получаем имя по символу
// alert( Symbol.keyFor(sym) ); // name
// alert( Symbol.keyFor(sym2) ); // id




// let user11 = {
//   name: "John",
//   money: 1000,

//   // для хинта равного "string"
//   toString() {
//     return {name: "${this.name}"};
//   },

//   // для хинта равного "number" или "default"
//   valueOf() {
//     return this.money;
//   }

// };
// alert(user); // toString -> {name: "John"}
// alert(+user); // valueOf -> 1000
// alert(user + 500); // valueOf -> 1500




// let user = {
//   name: "John",

//   toString() {
//     return this.name;
//   }
// };
// alert(user); // toString -> John
// alert(user + 500); // toString -> John500




// let obj = {
//   toString() {
//     return "2";
//   }
// };

// alert(obj + 2); // "22" ("2" + 2), преобразование к примитиву вернуло строку => конкатенация




// let roma = {
//   name: "Рома",
//   sayHi: function() {
//     alert("Привет, дружище!");
//   }
// };
// roma.sayHi(); // Привет, дружище!




// let str = "Привет";
// alert( str.toUpperCase() ); // ПРИВЕТ

// let num1 = 1.23456;
// alert( num.toFixed(2) ); // 1.23


// let num2 = 1.23456;
// alert( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

// let num3 = 12.34;
// alert( num.toFixed(1) ); // "12.3"

// let num = 12.34;
// alert( num.toFixed(5) ); // "12.34000", добавлены нули, чтобы получить 5 знаков после запятой

// alert( 0.1 + 0.2 == 0.3 ); 
// // false
// let sum3 = 0.1 + 0.2;
// alert( sum.toFixed(2) ); // "0.30"


// let sum = 0.1 + 0.2;
// alert( sum.toFixed(1) ); // "0.3"


// alert( Math.max(3, 5, -10, 0, 1) ); // 5
// alert( Math.min(1, 2) ); // 1



// alert( Math.pow(2, 10) ); // 2 в степени 10 = 1024



// let a = +prompt("a","1")
// let b = +prompt("b","3")
// result = a + b
// alert(result)


// alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4


//  function readNumber(){
// let a
// do {
//   a = prompt("Введите число", "");
// } while ( !isFinite(a) );

//  if(a == null || a == '') return null
 
//  return +a
// }
// alert(readNumber());



// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }
// alert(i)


// строки

// let guestList = `Guests:
//  * John
//  * Pete
//  * Mary
// `;
// alert(guestList); // список гостей, состоящий из нескольких строк


// let guestList1 = "Guests:\n * John\n * Pete\n * Mary";
// alert(guestList1); // список гостей, состоящий из нескольких строк


// // перевод строки добавлен с помощью символа перевода строки
// let str1 = "Hello\nWorld";
// // многострочная строка, созданная с использованием обратных кавычек
// let str2 = `Hello
// World`;
// alert(str1 == str2); // true



// alert( 'I\'m the Walrus!' ); // I'm the Walrus!
// alert( "I'm the Walrus! "); // I'm the Walrus!

// let str = Hello;
// // получаем первый символ
// alert( str[0] ); // H
// alert( str.at(0) ); // H
// // получаем последний символ
// alert( str[str.length - 1] ); // o
// alert( str.at(-1) ); // o


// let str11 = Hello;
// alert( str11[-2] ); // undefined
// alert( str11.at(-2) ); // l



// for (let char of "Hello") {
//     alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т.д.)
//   }



//   let str3 = 'Hi';
// str3 = 'h' + str[1]; // заменяем строку
// alert( str ); // hi


// alert( 'Interface'.toUpperCase() ); // INTERFACE
// alert( 'Interface'.toLowerCase() ); // interface
// alert( 'Interface'[0].toLowerCase() ); // 'i'


// let str6 = 'Widget with id';
// alert( str6.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
// alert( str6.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру
// alert( str6.indexOf("id") ); // 1, подстрока "id" найдена на позиции 1 (..idget with id)


// let str7 = 'Widget with id';
// alert( str7.indexOf('id', 2) ) // 12


// let str9 = 'Ослик Иа-Иа посмотрел на виадук';
// let target = 'Иа'; // цель поиска
// let pos = 0;
// while (true) {
//   let foundPos = str9.indexOf(target, pos);
//   if (foundPos == -1) break;
//   alert( foundPos );
//   pos = foundPos + 1; // продолжаем со следующей позиции
// }



// let str0 = "Ослик Иа-Иа посмотрел на виадук";
// let target0 = "Иа";

// let pos0 = -1;
// while ((pos0 = str0.indexOf(target0, pos0 + 1)) != -1) {
//   alert( pos0 );
// }


// let str5 = "Widget with id";

// if (str5.indexOf("Widget") != -1) {
//     alert("Совпадение есть"); // теперь работает
// }


// alert( ~2 ); // -3, то же, что -(2+1)
// alert( ~1 ); // -2, то же, что -(1+1)
// alert( ~0 ); // -1, то же, что -(0+1)
// alert( ~-1 ); // 0, то же, что -(-1+1)


// let str55 = "Widget";
// if (~str55.indexOf("Widget")) {
//   alert( 'Совпадение есть' ); // работает
// }


// alert( "Widget with id".includes("Widget") ); // true
// alert( "Hello".includes("Bye") ); // false


// alert( "Midget".includes("id") ); // true
// alert( "Midget".includes("id", 3) ); // false, поиск начат с позиции 3


// alert( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
// alert( "Widget".endsWith("get") ); // true, "get" — окончание "Widget"



// let str4 = "stringify";
// // 'strin', символы от 0 до 5 (не включая 5)
// alert( str4.slice(0, 5) );
// // 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
// alert( str4.slice(0, 1) );


// let str44 = "stringify";
// alert( str44.slice(2) ); // ringify, с позиции 2 и до конца


// let str66 = "stringify";
// // начинаем с позиции 4 справа, а заканчиваем на позиции 1 справа
// alert( str66.slice(-4, -1) ); // gif


// let str22 = "stringify";
// // для substring эти два примера — одинаковы
// alert( str22.substring(2, 6) ); // "ring"
// alert( str22.substring(6, 2) ); // "ring"
// // …но не для slice:
// alert( str22.slice(2, 6) ); // "ring" (то же самое)
// alert( str22.slice(6, 2) ); // "" (пустая строка)



// let str77 = "stringify";
// // ring, получаем 4 символа, начиная с позиции 2
// alert( str77.substr(2, 4) );



// // метод                               выбирает…                    отрицательные значения
// // slice(start, end)      от start до end (не включая end)     можно передавать отрицательные значения
// // substring(start, end)  между start и end (не включая end)     отрицательные значения равнозначны 0
// // substr(start, length)  length символов, начиная от start     значение start может быть отрицательным


// function ucFirst(str){  
//     if(!str) return str
//     return str[0].toUpperCase() + str.slice(1,4)
// }
// alert(ucFirst("вася"))



// // 2string function

// function checkSpam(str){
//     let p = str.toLowerCase()
//     return p.includes('viagra') || p.includes('xxx');

// }
// alert(checkSpam('buy ViAgRA now'))
// alert(checkSpam('free xxxxx'))
// alert(checkSpam('innocent rabbit'))


// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function truncate(str, maxlength){
//     return(str.length>maxlength)?
//         str.slice(0, maxlength - 1) + '…' : str ;
// }
    
// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// function extractCurrencyValue(str) {
//     return +str.slice(1);
//   }
//   alert( extractCurrencyValue('$120'));



//   let arr = new Array();
// let arr1 = [];

// let fruits = ["Яблоко", "Апельсин", "Слива"];
// alert( fruits[0] ); // Яблоко
// alert( fruits[1] ); // Апельсин
// alert( fruits[2] ); // Слива


// // разные типы значений
// let arr3 = [ 'Яблоко', { name: 'Джон' }, true, function() { alert('привет'); } ];
// // получить элемент с индексом 1 (объект) и затем показать его свойство
// alert( arr3[1].name ); // Джон
// // получить элемент с индексом 3 (функция) и выполнить её
// arr[3](); // привет


// let fruits1 = ["Apple", "Orange", "Plum"];
// alert( fruits1[fruits.length-1] ); // Plum

// let fruits11 = ["Apple", "Orange", "Plum"];
// // то же самое, что и fruits[fruits.length-1]
// alert( fruits11.at(-1) ); // Plum


// let fruits2 = ["Яблоко", "Апельсин", "Груша"];
// alert( fruits2.pop() ); // удаляем "Груша" и выводим его
// alert( fruits2 ); // Яблоко, Апельсин


// let fruits22 = ["Яблоко", "Апельсин"];
// fruits22.push("Груша");
// alert( fruits22 ); // Яблоко, Апельсин, Груша


// let fruits3 = ["Яблоко", "Апельсин", "Груша"];
// alert( fruits3.shift() ); // удаляем Яблоко и выводим его
// alert( fruits3 ); // Апельсин, Груша


// let fruits33 = ["Апельсин", "Груша"];
// fruits33.unshift('Яблоко');
// alert( fruits33 ); // Яблоко, Апельсин, Груша


// let fruits4 = ["Яблоко"];
// fruits4.push("Апельсин", "Груша");
// fruits4.unshift("Ананас", "Лимон");
// // ["Ананас", "Лимон", "Яблоко", "Апельсин", "Груша"]
// alert( fruits4 );


// let fruits44 = ["Банан"]
// let arr44 = fruits44; // копируется по ссылке (две переменные ссылаются на один и тот же массив)
// alert( arr44 === fruits44 ); // true
// arr44.push("Груша"); // массив меняется по ссылке
// alert( fruits44 ); // Банан, Груша - теперь два элемента


// let arr5 = ["Яблоко", "Апельсин", "Груша"];
// for (let i = 0; i < arr5.length; i++) {
//   alert( arr5[i] );
// }

// let fruits55 = ["Яблоко", "Апельсин", "Слива"];
// // проходит по значениям
// for (let fruit of fruits55) {
//   alert( fruit55 );
// }


// let arr6 = ["Яблоко", "Апельсин", "Груша"];
// for (let key in arr6) {
//   alert( arr6[key] ); // Яблоко, Апельсин, Груша
// }


// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
//   alert( matrix[1][1] ); // 5, центральный элемент


//   let arr7 = [1, 2, 3];
// alert( arr7 ); // 1,2,3
// alert( String(arr7) === '1,2,3' ); // true


// alert( [] + 1 ); // "1"
// alert( [1] + 1 ); // "11"
// alert( [1,2] + 1 ); // "1,21"

// alert( "" + 1 ); // "1"
// alert( "1" + 1 ); // "11"
// alert( "1,2" + 1 ); // "1,21"


// let styles = ["Джаз","Блюз"]
// styles.push("Рок-н-ролл")
// alert(styles)
// styles[1]="Классика"
// alert(styles)
// styles.shift(styles[0])
// alert(styles)
// styles.unshift("Рэп","Регги")
// alert(styles)

// // !!!!!!!!!!!!!!!!!!!
// function sumInput(){
//     let arr =[]
//     while(true){
//     let b=prompt("введи число","")
//         if( b=== "" || b === null || !isFinite(b))break
     
//      arr.push(+b)
//     }
//     let sum = 0
//     for (let b of arr){
//         sum+=b
//     }
//     return sum
// }
// alert( sumInput() );
// // !!!!!!!!!!!!!!!!!!!


// //methods arr


// let arr = ["I", "go", "home"];
// delete arr[1]; // удалить "go"
// alert( arr[1] ); // undefined
// // теперь arr = ["I",  , "home"];
// alert( arr.length ); // 3


// let arr0 = ["Я", "изучаю", "JavaScript"];
// arr0.splice(1, 1); // начиная с индекса 1, удалить 1 элемент
// alert( arr0 ); // осталось ["Я", "JavaScript"]


// let arr00 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// // удалить 3 первых элемента и заменить их другими
// arr00.splice(0, 3, "Давай", "танцевать");
// alert( arr00 ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]


// let arr000 = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// // удалить 2 первых элемента
// let removed = arr000.splice(0, 2);
// alert( removed ); // "Я", "изучаю" <-- массив из удалённых элементов


// let arr1 = ["Я", "изучаю", "JavaScript"];
// // с индекса 2
// // удалить 0 элементов
// // вставить "сложный", "язык"
// arr1.splice(2, 0, "сложный", "язык");
// alert( arr1 ); // "Я", "изучаю", "сложный", "язык", "JavaScript"


// let arr11 = [1, 2, 5];
// // начиная с индекса -1 (перед последним элементом)
// // удалить 0 элементов,
// // затем вставить числа 3 и 4
// arr11.splice(-1, 0, 3, 4);
// alert( arr11 ); // 1,2,3,4,5


// let arr111 = ["t", "e", "s", "t"];
// alert( arr111.slice(1, 3) ); // e,s (копирует с 1 до 3)
// alert( arr111.slice(-2) ); // s,t (копирует с -2 до конца)


// let arr2 = [1, 2];

// // создать массив из: arr и [3,4]
// alert( arr2.concat([3, 4]) ); // 1,2,3,4
// // создать массив из: arr и [3,4] и [5,6]
// alert( arr2.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
// // создать2 массив из: arr и [3,4], потом добавить значения 5 и 6
// alert( arr2.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6


// let arr22 = [1, 2];
// let arrayLike = {
//   0: "что-то",
//   length: 1
// };
// alert( arr.concat(arrayLike) ); // 1,2,[object Object]


// let arr222 = [1, 2];
// let arrayLike222 = {
//   0: "что-то",
//   1: "ещё",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2
// };
// alert( arr.concat(arrayLike) ); // 1,2,что-то,ещё



// ["Бильбо", "Гэндальф", "Назгул"].forEach((item, index, array) => {
//   alert(item);
// });


// let arr3 = [1, 0, false];
// alert( arr.indexOf(0) ); // 1
// alert( arr.indexOf(false) ); // 2
// alert( arr.indexOf(null) ); // -1
// alert( arr.includes(1) ); // true


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
//   {id: 3, name: "Маша"}
// ];

// // возвращает массив, состоящий из двух первых пользователей
// let someUsers = users.filter(item => item.id < 3);
// alert(someUsers.length); // 2



// let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
// alert(lengths); // 6,8,6


// let arr1111 = [1, 2, 3, 4, 5];
// arr111.reverse();
// alert( arr111 ); // 5,4,3,2,1



// let names = 'Вася, Петя, Маша';
// let arr111111 = names.split(', ');
// for (let name of arr) {
//   alert( name ); // Сообщение получат: Вася (и другие имена)
// }



// let arr2222 = 'Вася, Петя, Маша, Саша'.split(', ', 2);
// alert(arr); // Вася, Петя


// let str8 = "тест";
// alert( str.split('') ); // т,е,с,т



// let arr88 = ['Вася', 'Петя', 'Маша'];
// let str = arr.join(';'); // объединить массив в строку через ;
// alert( str ); // Вася;Петя;Маша



//methods arr2


let lengths12 = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
alert(lengths); // 6,8,6



let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};
let users123 = [
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
let arr4353 = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений)




function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    // удалить, если за пределами интервала
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}
let arr675 = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert( arr ); // [3, 1]




let arr678 = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert( arr );



function copySorted(arr) {
  return arr.slice().sort();
}
let arr47423 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)



let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users786 = [ vasya, petya, masha ];
let names678 = users.map(item => item.name);
alert( names ); // Вася, Петя, Маша