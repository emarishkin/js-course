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



// //methods arr2


// let lengths12 = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
// alert(lengths); // 6,8,6



// let army = {
//   minAge: 18,
//   maxAge: 27,
//   canJoin(user) {
//     return user.age >= this.minAge && user.age < this.maxAge;
//   }
// };
// let users123 = [
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
// let arr4353 = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)




// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     // удалить, если за пределами интервала
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }

// }
// let arr675 = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// alert( arr ); // [3, 1]




// let arr678 = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// alert( arr );



// function copySorted(arr) {
//   return arr.slice().sort();
// }
// let arr47423 = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)



// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users786 = [ vasya, petya, masha ];
// let names678 = users.map(item => item.name);
// alert( names ); // Вася, Петя, Маша


// //methods arr3

// let vasya66 = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya56 = { name: "Петя", surname: "Иванов", id: 2 };
// let masha5 = { name: "Маша", surname: "Петрова", id: 3 };

// let users456 = [ vasya, petya, masha ];
// let usersMapped = users.map(user => ({
//   fullName: user.name ,
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

// let vasya4454 = { name: "Вася", age: 25 };
// let petya345 = { name: "Петя", age: 30 };
// let masha345 = { name: "Маша", age: 28 };

// let arr43535 = [ vasya, petya, masha ];

// sortByAge(arr);

// // теперь отсортировано: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя




// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }
// let arr344 = [1, 2, 3];
// shuffle(arr);
// alert(arr);



// let range = {
//   from: 1,
//   to: 5
// };

// // 1. вызов for..of сначала вызывает эту функцию
// range[Symbol.iterator] = function() {

//   // ...она возвращает объект итератора:
//   // 2. Далее, for..of работает только с этим итератором,
//   // запрашивая у него новые значения
//   return {
//     current: this.from,
//     last: this.to,

//     // 3. next() вызывается на каждой итерации цикла for..of
//     next() {
//       // 4. он должен вернуть значение в виде объекта {done:.., value :...}
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     }
//   };
// };

// // теперь работает!
// for (let num of range) {
//   alert(num); // 1, затем 2, 3, 4, 5
// }


// // map и set

// let map = new Map();

// map.set("1", "str1");    // строка в качестве ключа
// map.set(1, "num1");      // цифра как ключ
// map.set(true, "bool1");  // булево значение как ключ

// // помните, обычный объект Object приводит ключи к строкам?
// // Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
// alert(map.get(1)); // "num1"
// alert(map.get("1")); // "str1"

// alert(map.size); // 3




// let john = { name: "John" };
// // давайте сохраним количество посещений для каждого пользователя
// let visitsCountMap = new Map();
// // объект john - это ключ для значения в объекте Map
// visitsCountMap.set(john, 123);
// alert(visitsCountMap.get(john)); // 123



// // map.keys() – возвращает итерируемый объект по ключам,
// // map.values() – возвращает итерируемый объект по значениям,
// // map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.



// let recipeMap = new Map([
//     ["огурец", 500],
//     ["помидор", 350],
//     ["лук",    50]
//   ]);
//   // перебор по ключам (овощи)
//   for (let vegetable of recipeMap.keys()) {
//     alert(vegetable); // огурец, помидор, лук
//   }
//   // перебор по значениям (числа)
//   for (let amount of recipeMap.values()) {
//     alert(amount); // 500, 350, 50
//   }
//   // перебор по элементам в формате [ключ, значение]
//   for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
//     alert(entry); // огурец,500 (и так далее)
//   }




//   // массив пар [ключ, значение]
// let map1 = new Map([
//     ['1',  'str1'],
//     [1,    'num1'],
//     [true, 'bool1']
//   ]);
  
//   alert( map.get('1') ); // str1




//   let obj = {
//     name: "John",
//     age: 30
//   };
  
//   let map2 = new Map(Object.entries(obj));
//   alert( map.get('name') ); // John



//   let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
//   ]);
//   // prices = { banana: 1, orange: 2, meat: 4 }
//   alert(prices.orange); // 2



//   let map23 = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('meat', 4);

// let obj2 = Object.fromEntries(map23); // создаём обычный объект (*)
// // готово!
// // obj = { banana: 1, orange: 2, meat: 4 }
// alert(obj.orange); // 2



// let set = new Set();

// let john2 = { name: "John" };
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



// let set11 = new Set(["апельсин", "яблоко", "банан"]);

// for (let value of set) alert(value);

// // то же самое с forEach:
// set.forEach((value, valueAgain, set) => {
//   alert(value);
// });



// // set.values() – возвращает перебираемый объект для значений,
// // set.keys() – то же самое, что и set.values(), присутствует для обратной совместимости с Map,
// // set.entries() – возвращает перебираемый объект для пар вида [значение, значение], присутствует для обратной совместимости с Map.



// function unique(arr) {
//     return Array.from(new Set(arr));
//   }
//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
//   alert( unique(values) ); // Hare,Krishna,:-O


//   function aclean(arr) {
//     let map = new Map();
//     for (let word of arr) {
//       // разбиваем слово на буквы, сортируем и объединяем снова в строку
//       let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//       map.set(sorted, word);
//     }

//     return Array.from(map.values());
//   }
//   let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//   alert( aclean(arr) );


//   let sorted = arr[i] // PAN
//   .toLowerCase() // pan
//   .split("") // ["p","a","n"]
//   .sort() // ["a","n","p"]
//   .join(""); // anp



//   function aclean(arr) {
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//       let sorted = arr[i].toLowerCase().split("").sort().join("");
//       obj[sorted] = arr[i];
//     }
  
//     return Object.values(obj);
//   }
//   let arr34 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

//   alert( aclean(arr) );



// let map8 = new Map();
// map.set("name", "John");
// let keys = Array.from(map.keys());
// keys.push("more");
// alert(keys); // name, more



// // WeakMap и WeakSet


// let john = { name: "John" };
// // объект доступен, переменная john — это ссылка на него
// // перепишем ссылку
// john = null;
// // объект будет удалён из памяти



// let john1 = { name: "John" };
// let array = [ john ];
// john = null; // перезаписываем ссылку на объект
// // объект john хранится в массиве, поэтому он не будет удалён сборщиком мусора
// // мы можем взять его значение как array[0]



// let john3 = { name: "John" };
// let map = new Map();
// map.set(john, "...");
// john = null; // перезаписываем ссылку на объект
// // объект john сохранён внутри объекта `Map`,
// // он доступен через map.keys()


// let weakMap = new WeakMap();
// let obj = {};
// weakMap.set(obj, "ok"); // работает (объект в качестве ключа)
// // нельзя использовать строку в качестве ключа
// weakMap.set("test", "Whoops"); // Ошибка, потому что "test" не объект



// let john34 = { name: "John" };
// let weakMap3 = new WeakMap();
// weakMap.set(john, "...");
// john = null; // перезаписываем ссылку на объект
// // объект john удалён из памяти!



// // В WeakMap присутствуют только следующие методы:

// // weakMap.get(key)
// // weakMap.set(key, value)
// // weakMap.delete(key)
// // weakMap.has(key)


// let visitedSet = new WeakSet();

// let john8 = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// visitedSet.add(john); // John заходил к нам
// visitedSet.add(pete); // потом Pete
// visitedSet.add(john); // John снова

// // visitedSet сейчас содержит двух пользователей
// // проверим, заходил ли John?
// alert(visitedSet.has(john)); // true
// // проверим, заходила ли Mary?
// alert(visitedSet.has(mary)); // false
// john = null;
// // структура данных visitedSet будет очищена автоматически (объект john будет удалён из visitedSet)



// // WeakMap – это Map-подобная коллекция, позволяющая использовать в качестве ключей только объекты, и автоматически удаляющая их вместе с соответствующими значениями, как только они становятся недостижимыми иными путями.
// // WeakSet – это Set-подобная коллекция, которая хранит только объекты и удаляет их, как только они становятся недостижимыми иными путями.
// // Обе этих структуры данных не поддерживают методы и свойства, работающие со всем содержимым сразу или возвращающие информацию о размере коллекции. Возможны только операции на отдельном элементе коллекции.
// // WeakMap и WeakSet используются как вспомогательные структуры данных в дополнение к «основному» месту хранения объекта. Если объект удаляется из основного хранилища и нигде не используется, кроме как в качестве ключа в WeakMap или в WeakSet, то он будет удалён автоматически.


// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
// ];
// let readMessages = new WeakSet();
// // Два сообщения были прочитаны
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
// // readMessages содержит 2 элемента
// // ...давайте снова прочитаем первое сообщение!
// readMessages.add(messages[0]);
// // readMessages до сих пор содержит 2 элемента
// // Вопрос: было ли сообщение message[0] прочитано?
// alert("Read message 0: " + readMessages.has(messages[0])); // true
// messages.shift();
// // теперь readMessages содержит 1 элемент (хотя технически память может быть очищена позже)




// let messages223 = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
//   ];
  
//   let readMap = new WeakMap();
  
//   readMap.set(messages[0], new Date(2017, 1, 1));
// // Объект Date мы рассмотрим позднее



// // Object.keys, values, entries


// // Object.keys(obj) – возвращает массив ключей.
// // Object.values(obj) – возвращает массив значений.
// // Object.entries(obj) – возвращает массив пар [ключ, значение].


// let user23 = {
//     name: "John",
//     age: 30
//   };
  
//   // перебор значений
//   for (let value of Object.values(user)) {
//     alert(value); // John, затем 30
//   }


//   let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
//   };
//   let doublePrices = Object.fromEntries(
//     // преобразовать в массив, затем map, затем fromEntries (обратно в объект)
//     Object.entries(prices).map(([key, value]) => [key, value * 2])
//   );

//   alert(doublePrices.meat); // 8



// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
//   function sumSalaries(salaries){
//     let sum=0
//     for(let salary  of Object.values(salaries)){
//         sum+=salary 
//     }
//     return sum
//   }
//   alert(sumSalaries(salaries)); // 650




//   function count(obj) {
//     return Object.keys(obj).length;
//   }
//   let user = {
//     name: 'John',
//     age: 30
//   };
  
//   alert( count(user) ); // 2


// // Деструктурирующее присваивание

// // у нас есть массив с именем и фамилией
// let arr = ["Ilya", "Kantor"];
// // деструктурирующее присваивание
// // записывает firstName = arr[0]
// // и surname = arr[1]
// let [firstName, surname] = arr;
// alert(firstName); // Ilya
// alert(surname);  // Kantor


// let [firstName1, surname1] = "Ilya Kantor".split(' ');
// alert(firstName); // Ilya
// alert(surname);  // Kantor


// // второй элемент не нужен
// let [firstName2233, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// alert( title ); // Consul


// let user = {};
// [user.name, user.surname] = "Ilya Kantor".split(' ');
// alert(user.name); // Ilya
// alert(user.surname); // Kantor



// let user65 = {
//     name: "John",
//     age: 30
//   };

//   // цикл по ключам и значениям
//   for (let [key, value] of Object.entries(user)) {
//     alert(`${key}:${value}`); // name:John, затем age:30
//   }




//   let user8796 = new Map();
// user.set("name", "John");
// user.set("age", "30");

// // Map перебирает как пары [ключ, значение], что очень удобно для деструктурирования
// for (let [key, value] of user) {
//   alert(`${key}:${value}`); // name:John, затем age:30
// }



// let guest = "Jane";
// let admin = "Pete";

// // Давайте поменяем местами значения: сделаем guest = "Pete", а admin = "Jane"
// [guest, admin] = [admin, guest];
// alert(`${guest} ${admin}`); // Pete Jane (успешно заменено!)



// let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// alert(name1); // Julius
// alert(name2); // Caesar
// // Дальнейшие элементы нигде не присваиваются




// let [name123, name223, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// // rest это массив элементов, начиная с 3-го
// alert(rest[0]); // Consul
// alert(rest[1]); // of the Roman Republic
// alert(rest.length); // 2



// let [name1234, name22342, ...titles] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// // теперь titles = ["Consul", "of the Roman Republic"]


// // значения по умолчанию
// let [name = "Guest", surname44 = "Anonymous"] = ["Julius"];

// alert(name);    // Julius (из массива)
// alert(surname); // Anonymous (значение по умолчанию)


// // prompt запустится только для surname
// let [name34 = prompt('name?'), surname23423 = prompt('surname?')] = ["Julius"];
// alert(name);    // Julius (из массива)
// alert(surname); // результат prompt



// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
//   };
  
//   let {title2, width, height} = options;
  
//   alert(title);  // Menu
//   alert(width);  // 100
//   alert(height); // 200



//   let options3 = {
//     title: "Menu",
//     width: 100,
//     height: 200
//   };
  
//   // { sourceProperty: targetVariable }
//   let {width: w, height: h, title3} = options;
  
//   // width -> w
//   // height -> h
//   // title -> title
  
//   alert(title);  // Menu
//   alert(w);      // 100
//   alert(h);      // 200





//   let options232 = {
//     title: "Menu"
//   };
  
//   let {width3 = 100, height3 = 200, title33} = options;
  
//   alert(title);  // Menu
//   alert(width);  // 100
//   alert(height); // 200



//   let options234 = {
//     title: "Menu"
//   };
//   let {width234 = prompt("width?"), title21 = prompt("title?")} = options;

//   alert(title);  // Menu
//   alert(width);  // (результат prompt)



//   let options2345 = {
//     title: "Menu"
//   };
  
//   let {width: w43 = 100, height: h24 = 200, title6} = options;
  
//   alert(title);  // Menu
//   alert(w);      // 100
//   alert(h);      // 200



//   let options315 = {
//     title: "Menu",
//     height: 200,
//     width: 100
//   };
  
//   // title = свойство с именем title
//   // rest = объект с остальными свойствами
//   let {title343, ...rest145} = options;
  
//   // сейчас title="Menu", rest={height: 200, width: 100}
//   alert(rest.height);  // 200
//   alert(rest.width);   // 100



//   let title7874, width4678, height436;
// // сейчас всё работает
// ({title, width, height} = {title: "Menu", width: 200, height: 100});
// alert( title ); // Menu



// let options325345 = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };

// // деструктуризация разбита на несколько строк для ясности
// let {
//   size: { // положим size сюда
//     width342,
//     height342
//   },
//   items24: [item1, item2], // добавим элементы к items
//   title34 = "Menu" // отсутствует в объекте (используется значение по умолчанию)
// } = options;

// alert(title);  // Menu
// alert(width);  // 100
// alert(height); // 200
// alert(item1);  // Cake
// alert(item2);  // Donut



// // мы передаём объект в функцию
// let options676 = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };

// // ...и она немедленно извлекает свойства в переменные
// function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//   // title, items – взято из options,
//   // width, height – используются значения по умолчанию
//   alert( `${title} ${width} ${height}` ); // My Menu 200 100
//   alert( items ); // Item1, Item2
// }
// showMenu(options);




// let options3455243 = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };

// function showMenu({
//   title = "Untitled",
//   width: w = 100,  // width присваиваем в w
//   height: h = 200, // height присваиваем в h
//   items: [item1, item2] // первый элемент items присваивается в item1, второй в item2
// }) {
//   alert( `${title} ${w} ${h}` ); // My Menu 100 200
//   alert( item1 ); // Item1
//   alert( item2 ); // Item2
// }

// showMenu(options);


// let user1 = {
//   name11: "John",
//   years: 30
// };

//  let {name11,years:age,isAdmin=false }=user1

//  alert( name11 ); // John
// alert( age ); // 30
// alert( isAdmin ); // false



// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// function topSalary(salaries) {
//   let max=0
//   let maxName=null
//   for (let [name,salary] of Object.entries(salaries)){
//     if(max<salary){
//      max=salary
//      maxName=name
//     }
//   }
//   return maxName
// }
// alert(topSalary(salaries))


// // date


// let now = new Date();
// alert( now ); // показывает текущие дату и время


// // 0 соответствует 01.01.1970 UTC+0
// let Jan01_1970 = new Date(0);
// alert( Jan01_1970 );

// // теперь добавим 24 часа и получим 02.01.1970 UTC+0
// let Jan02_1970 = new Date(24 * 3600 * 1000);
// alert( Jan02_1970 );


// // 31 декабря 1969 года
// let Dec31_1969 = new Date(-24 * 3600 * 1000);
// alert( Dec31_1969 );



// let date = new Date("2017-01-26");
// alert(date);
// // Время не указано, поэтому оно ставится в полночь по Гринвичу и
// // меняется в соответствии с часовым поясом места выполнения кода
// // Так что в результате можно получить
// // Thu Jan 26 2017 11:00:00 GMT+1100 (восточно-австралийское время)
// // или
// // Wed Jan 25 2017 16:00:00 GMT-0800 (тихоокеанское время)


// new Date(2011, 0, 1, 0, 0, 0, 0); // // 1 Jan 2011, 00:00:00
// new Date(2011, 0, 1); // то же самое, так как часы и проч. равны 0


// let date2 = new Date(2011, 0, 1, 2, 3, 4, 567);
// alert( date ); // 1.01.2011, 02:03:04.567


// // getFullYear()
// // Получить год (4 цифры)
// // getMonth()
// // Получить месяц, от 0 до 11.
// // getDate()
// // Получить день месяца, от 1 до 31, что несколько противоречит названию метода.
// // getHours(), getMinutes(), getSeconds(), getMilliseconds()
// // Получить, соответственно, часы, минуты, секунды или миллисекунды.



// // текущая дата
// let date22 = new Date();
// // час в вашем текущем часовом поясе
// alert( date.getHours() );
// // час в часовом поясе UTC+0 (лондонское время без перехода на летнее время)
// alert( date.getUTCHours() );



// getTimezoneOffset()
// // Возвращает разницу в минутах между UTC и местным часовым поясом:

// // если вы в часовом поясе UTC-1, то выводится 60
// // если вы в часовом поясе UTC+3, выводится -180
// alert( new Date().getTimezoneOffset() );



// let today = new Date();
// today.setHours(0);
// alert(today); // выводится сегодняшняя дата, но значение часа будет 0
// today.setHours(0, 0, 0, 0);
// alert(today); // всё ещё выводится сегодняшняя дата, но время будет ровно 00:00:00.



// let date3= new Date(2013, 0, 32); // 32 Jan 2013 ?!?
// alert(date); // ...1st Feb 2013!



// let date33 = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 2);
// alert( date ); // 1 Mar 2016


// let date4 = new Date();
// date.setSeconds(date.getSeconds() + 70);
// alert( date ); // выводит правильную дату


// function diffSubtract(date1, date2) {
//   return date2 - date1;
// }

// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//   let date1 = new Date(0);
//   let date2 = new Date();

//   let start = Date.now();
//   for (let i = 0; i < 100000; i++) f(date1, date2);
//   return Date.now() - start;
// }

// alert( 'Время diffSubtract: ' + bench(diffSubtract) + 'мс' );
// alert( 'Время diffGetTime: ' + bench(diffGetTime) + 'мс' );



// let date222= new date(2012,1,20,3,12)
// alert(date)



// function getWeekDay(date){
// let dayweek=['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
// return dayweek[date.getDay()];
// }
// let date123 = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date123) ); 




// let date2222 = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getLocalDay(date) );       // вторник, нужно показать 2
// function getLocalDay(date) {

//   let day = date.getDay();

//   if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
//     day = 7;
//   }

//   return day;
// }



// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month + 1, 0);
//   return date.getDate();
// }

// alert( getLastDayOfMonth(2012, 0) ); // 31
// alert( getLastDayOfMonth(2012, 1) ); // 29
// alert( getLastDayOfMonth(2013, 1) ); // 28



// // json


// let user = {
//   name: "John",
//   age: 30,

//   toString() {
//     return `{name: "${this.name}", age: ${this.age}}`;
//   }
// };
// alert(user); // {name: "John", age: 30}


// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let student = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js'],
//   wife: null
// };

// let json = JSON.stringify(student);

// alert(typeof json); // мы получили строку!

// alert(json);
// /* выведет объект в формате JSON:
// {
//   "name": "John",
//   "age": 30,
//   "isAdmin": false,
//   "courses": ["html", "css", "js"],
//   "wife": null
// }
// */
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // JSON.stringify для преобразования объектов в JSON.
// // JSON.parse для преобразования JSON обратно в объект.


// let user1 = {
//   sayHi() { // будет пропущено
//     alert("Hello");
//   },
//   [Symbol("id")]: 123, // также будет пропущено
//   something: undefined // как и это - пропущено
// };
// alert( JSON.stringify(user) ); // {} (пустой объект)



// let meetup = {
//   title: "Conference",
//   room: {
//     number: 23,
//     participants: ["john", "ann"]
//   }
// };
// alert( JSON.stringify(meetup) );
// /* вся структура преобразована в строку:
// {
//   "title":"Conference",
//   "room":{"number":23,"participants":["john","ann"]},
// }
// */



// let room = {
//   number: 23
// };

// let meetup3 = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup ссылается на room
// };
// room.occupiedBy = meetup; // room ссылается на meetup
// alert( JSON.stringify(meetup, ['title', 'participants']) );
// // {"title":"Conference","participants":[{},{}]}




// let room = {
//   number: 23
// };

// let meetup1 = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup ссылается на room
// };

// room.occupiedBy = meetup; // room ссылается на meetup

// alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
// /*
// {
//   "title":"Conference",
//   "participants":[{"name":"John"},{"name":"Alice"}],
//   "place":{"number":23}
// }
// */



// let user3 = {
//   name: "John",
//   age: 25,
//   roles: {
//     isAdmin: false,
//     isEditor: true
//   }
// };
// alert(JSON.stringify(user, null, 2));
// /* отступ в 2 пробела:
// {
//   "name": "John",
//   "age": 25,
//   "roles": {
//     "isAdmin": false,
//     "isEditor": true
//   }
// }
// */
// /* для JSON.stringify(user, null, 4) результат содержит больше отступов:
// {
//     "name": "John",
//     "age": 25,
//     "roles": {
//         "isAdmin": false,
//         "isEditor": true
//     }
// }
// */



// let room = {
//   number: 23
// };
// let meetup34 = {
//   title: "Conference",
//   date: new Date(Date.UTC(2017, 0, 1)),
//   room
// };
// alert( JSON.stringify(meetup) );
// /*
//   {
//     "title":"Conference",
//     "date":"2017-01-01T00:00:00.000Z",  // (1)
//     "room": {"number":23}               // (2)
//   }
// */


// let room = {
//   number: 23,
//   toJSON() {
//     return this.number;
//   }
// };
// let meetup5 = {
//   title: "Conference",
//   room
// };

// alert( JSON.stringify(room) ); // 23

// alert( JSON.stringify(meetup) );
// /*
//   {
//     "title":"Conference",
//     "room": 23
//   }
// */


// let user7 = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
// user = JSON.parse(user);
// alert( user.friends[1] ); // 1


// // let json = `{
// //   name: "John",                     // Ошибка: имя свойства без кавычек
// //   "surname": 'Smith',               // Ошибка: одинарные кавычки в значении (должны быть двойными)
// //   'isAdmin': false,                 // Ошибка: одинарные кавычки в ключе (должны быть двойными)
// //   "birthday": new Date(2000, 2, 3), // Ошибка: не допускается конструктор "new", только значения
// //   "gender": "male"                  // Ошибка: отсутствует запятая после непоследнего свойства
// //   "friends": [0,1,2,3],             // Ошибка: не должно быть запятой после последнего свойства
// // }`;


// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup2 = JSON.parse(str, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });

// alert( meetup.date.getDate() ); // 30 - теперь работает!
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!



// let schedule = `{
//   "meetups": [
//     {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//     {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//   ]
// }`;
// schedule = JSON.parse(schedule, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });
// alert( schedule.meetups[1].date.getDate() ); // 18 - отлично!



// let userr = {
//   name: "Василий Иванович",
//   age: 35
// };

// let json1=JSON.stringify(userr)
// alert(json1)
// let userr1=JSON.parse(json1)
// alert(userr1)



// let room = {
//   number: 23
// };

// let meetup222 = {
//   title: "Совещание",
//   occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//   place: room
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// alert( JSON.stringify(meetup, function replacer(key, value) {
//   return (key != "" && value == meetup) ? undefined : value;
// }));

// /* в результате должно быть:
// {
//   "title":"Совещание",
//   "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
//   "place":{"number":23}
// }
// */



// // recursion

// function pow(x, n) {
//   let result = 1;
//   // умножаем result на x n раз в цикле
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }
// alert( pow(2, 3) ); // 8



// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }
// alert( pow(3, 4) ); // 81


// function pow(x, n) { return (n == 1)? x:(x * pow(x, n - 1))}
// alert( pow(2, 5) );




// let company = { // тот же самый объект, сжатый для краткости
//   sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//   development: {
//     sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//     internals: [{name: 'Jack', salary: 1300}]
//   }
// };

// // Функция для подсчёта суммы зарплат
// function sumSalaries(department) {
//   if (Array.isArray(department)) { // случай (1)
//     return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
//   } else { // случай (2)
//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
//     }
//     return sum;
//   }
// }
// alert(sumSalaries(company)); // 6700



// function sumTo(n) { 
//   let sum=0
//    for(let i=0;i<=n;i++){
//     sum+=i
//    }
//    return sum
//  }

// alert( sumTo(100) ); // 5050



// function sumTo(n) {return (n==1)?1:(n+sumTo(n-1)) }
// alert( sumTo(100) ); // 5050


// function sumTo(n) {
//   return n * (n + 1) / 2;
// }
// alert( sumTo(100) );



// function factorial(n) {return (n==1)?1:(n*factorial(n-1)) }
// alert( factorial(5) ); 




// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// alert( fib(3) ); // 2
// alert( fib(7) ); // 13



// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList(list) {

//   alert(list.value); // выводим текущий элемент

//   if (list.next) {
//     printList(list.next); // делаем то же самое для остальной части списка
//   }

// }

// printList(list);



// // function-object


// function ask(question, ...handlers) {
//     let isYes = confirm(question);
  
//     for(let handler of handlers) {
//       if (handler.length == 0) {
//         if (isYes) handler();
//       } else {
//         handler(isYes);
//       }
//     }
  
//   }
//   // для положительных ответов вызываются оба типа обработчиков
//   // для отрицательных - только второго типа
//   ask("Вопрос?", () => alert('Вы ответили да'), result => alert(result));



//   function sayHi() {
//     alert("Hi");
//     // давайте посчитаем, сколько вызовов мы сделали
//     sayHi.counter++;
//   }
//   sayHi.counter = 0; // начальное значение
//   sayHi(); // Hi
//   sayHi(); // Hi
//   alert( sayHi.counter ); // Вызвана 2 раза



//   function makeCounter() {
//     // вместо
//     // let count = 0
  
//     function counter() {
//       return counter.count++;
//     };
//     counter.count = 0;
//     return counter;
//   }

//   let counter = makeCounter();
//   alert( counter() ); // 0
//   alert( counter() ); // 1



  
  
//   let sayHi = function func(who) {
//     if (who) {
//       alert(Hello, who);
//     } else {
//       func("Guest"); // Теперь всё в порядке
//     }
//   };
//   let welcome = sayHi;
//   sayHi = null;
//   welcome(); // Hello, Guest (вложенный вызов работает)



  

//   function makeCounter() {
//     let count = 0;
  
//     function counter() {
//       return count++;
//     }
//     counter.set = value => count = value;
//     counter.decrease = () => count--;
//     return counter;
//   }
  
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function sum(a){

// let currentSum = a

// function f(b){
//     currentSum+=b
//     return f
// }
// f.toString = function() {
//     return currentSum;
//   };
// return f
// }
// alert( sum(1)(21) ); // 3
// alert( sum(5)(-1)(2) ); // 6
// alert( sum(6)(-1)(-2)(-3) ); // 0
// alert( sum(0)(1)(2)(3)(4)(5) ); // 15
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!



// // new-function and settimeout-setinterval


// let func = new Function([arg1, arg2, ...argN], functionBody);


// let sum = new Function('a', 'b', 'return a + b');
// alert( sum(1, 2) ); // 3


// let sayHi = new Function('alert("Hello")');
// sayHi(); // Hello


// function sayHi(phrase, who) {
//     alert( phrase + ', ' + who );
//   }
//   setTimeout(sayHi, 1000, "Привет", "Джон"); // Привет, Джон




//   // повторить с интервалом 2 секунды
// let timerId = setInterval(() => alert('tick'), 2000);
// // остановить вывод через 5 секунд
// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);



// let start = Date.now();
// let times = [];
// setTimeout(function run() {
//   times.push(Date.now() - start); // запоминаем задержку от предыдущего вызова
//   if (start + 100 < Date.now()) alert(times); // показываем задержку через 100 мс
//   else setTimeout(run); // если нужно ещё запланировать
// });
// // пример вывода:
// // 1,1,1,1,9,15,20,24,30,35,40,45,50,55,59,64,70,75,80,85,90,95,100


// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  function printNumbers(from, to){
//   let current=from
//     let timerId = setInterval(function() {
//     alert(current);
//     if(current==to){
//      clearInterval(timerId)
//     }
//      current++
//     },1000)

//  }



//  function printNumbers(from, to) {
//   let current = from;
//   setTimeout(function go() {
//     alert(current);
//     if (current < to) {
//       setTimeout(go, 1000);
//     }
//     current++;
//   }, 1000);
// }
// // использование:
// printNumbers(5, 10);
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



// // bind

// function sayHi() {
//     alert(this.name);
//   }
  
//   let user = { name: "John" };
//   let admin = { name: "Admin" };
  
//   // используем 'call' для передачи различных объектов в качестве 'this'
//   sayHi.call( user ); // John
//   sayHi.call( admin ); // Admin
  
  
  
  
  
//   function say(phrase) {
//     alert(this.name + ': ' + phrase);
//   }
//   let user3 = { name: "John" };
//   // 'user' становится 'this', и "Hello" становится первым аргументом
//   say.call( user, "Hello" ); // John: Hello
  
  
  
  
//   let user33 = {
//     firstName: "Вася",
//     sayHi() {
//       alert(Привет, this.firstName);
//     }
//   };
//   setTimeout(function() {
//     user.sayHi(); // Привет, Вася!
//   }, 1000);
  
  
  
//   let user12 = {
//     firstName: "Вася"
//   };
//   function func() {
//     alert(this.firstName);
//   }
//   let funcUser = func.bind(user);
//   funcUser(); // Вася
  
  
  
//   let user11 = {
//     firstName: "Вася"
//   };
//   function func(phrase) {
//     alert(phrase + ', ' + this.firstName);
//   }
//   // привязка this к user
//   let funcUser11 = func.bind(user);
//   funcUser("Привет"); // Привет, Вася (аргумент "Привет" передан, при этом this = user)
  
  
  
  
//   let user22 = {
//     firstName: "Вася",
//     sayHi() {
//       alert(Привет, this.firstName);
//     }
//   };
//   let sayHi = user.sayHi.bind(user); // (*)
//   sayHi(); // Привет, Вася!
//   setTimeout(sayHi, 1000); // Привет, Вася!
  
  
  
  
//   let user333 = {
//     firstName: "Вася",
//     say(phrase) {
//       alert(phrase, this.firstName);
//     }
//   };
//   let say = user.say.bind(user);
//   say("Привет"); // Привет, Вася (аргумент "Привет" передан в функцию "say")
//   say("Пока"); // Пока, Вася (аргумент "Пока" передан в функцию "say")
  
  
  
  
//   function mul(a, b) {
//     return a * b;
//   }
//   let double = mul.bind(null, 2);
//   alert( double(3) ); // = mul(2, 3) = 6
//   alert( double(4) ); // = mul(2, 4) = 8
//   alert( double(5) ); // = mul(2, 5) = 10
  
  
  
//   function mul(a, b) {
//     return a * b;
//   }
//   let triple = mul.bind(null, 3);
//   alert( triple(3) ); // = mul(3, 3) = 9
//   alert( triple(4) ); // = mul(3, 4) = 12
//   alert( triple(5) ); // = mul(3, 5) = 15
  
  
  
  
//   function f() {
//     alert(this.name);
//   }
//   f = f.bind( {name: "Вася"} ).bind( {name: "Петя"} );
//   f(); // Вася
  
  
  
  
//   function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//   }
//   let user111 = {
//     name: 'Вася',
  
//     loginOk() {
//       alert(this.name );
//     },
  
//     loginFail() {
//       alert(this.name );
//     },
  
//   };
//   askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
  
  
  
  
  
//   function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//   }
  
//   let user123 = {
//     name: 'John',
  
//     login(result) {
//       alert( this.name + (result ? ' logged in' : ' failed to log in') );
//     }
//   };
  
//   askPassword(() => user.login(true), () => user.login(false));
  
//   askPassword(user.login.bind(user, true), user.login.bind(user, false));


// 
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
  
//     showList() {
//       this.students.forEach(
//         student => alert(this.title + ': ' + student)
//       );
//     }
//   };
//   group.showList();
  
  
  
  
//   function defer(f, ms) {
//     return function() {
//       setTimeout(() => f.apply(this, arguments), ms)
//     };
//   }
//   function sayHi(who) {
//     alert('Hello, ' + who);
//   }
//   let sayHiDeferred = defer(sayHi, 10000);
//   sayHiDeferred("John"); // выводит "Hello, John" через 10 секунды



// //   property-descriptors

// let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
// // obj
// // Объект, из которого мы получаем информацию.
// // propertyName
// // Имя свойства.



// let user = {
//     name: "John"
//   };
//   let descriptor1 = Object.getOwnPropertyDescriptor(user, 'name');
//   alert( JSON.stringify(descriptor, null, 2 ) );
//   /* дескриптор свойства:
//   {
//     "value": "John",
//     "writable": true,
//     "enumerable": true,
//     "configurable": true
//   }
//   */


//   Object.defineProperty(obj, propertyName, descriptor)
// //   obj, propertyName
// //   Объект и его свойство, для которого нужно применить дескриптор.
// //   descriptor
// //   Применяемый дескриптор.



// let user1 = {};

// Object.defineProperty(user, "name", {
//   value: "John"
// });
// let descriptor2 = Object.getOwnPropertyDescriptor(user, 'name');
// alert( JSON.stringify(descriptor, null, 2 ) );
// /*
// {
//   "value": "John",
//   "writable": false,
//   "enumerable": false,
//   "configurable": false
// }
//  */



// let user = { };
// Object.defineProperty(user, "name", {
//   value: "John",
//   // для нового свойства необходимо явно указывать все флаги, для которых значение true
//   enumerable: true,
//   configurable: true
// });
// alert(user.name); // John
// user.name = "Pete"; // Ошибка



// let user = {
//     name: "John",
//     toString() {
//       return this.name;
//     }
//   };
//   // По умолчанию оба свойства выведутся:
//   for (let key in user) alert(key); // name, toString




//   let user = {
//     name: "John",
//     toString() {
//       return this.name;
//     }
//   };
//   Object.defineProperty(user, "toString", {
//     enumerable: false
//   });
//   // Теперь наше свойство toString пропало из цикла:
//   for (let key in user) alert(key); // name




//   let descriptor23 = Object.getOwnPropertyDescriptor(Math, 'PI');

// alert( JSON.stringify(descriptor, null, 2 ) );
// /*
// {
//   "value": 3.141592653589793,
//   "writable": false,
//   "enumerable": false,
//   "configurable": false
// }
// */


// let user = {
//     name: "John"
//   };
//   Object.defineProperty(user, "name", {
//     configurable: false
//   });
//   user.name = "Pete"; // работает
//   delete user.name; // Ошибка



//   Object.defineProperties(user, {
//     name: { value: "John", writable: false },
//     surname: { value: "Smith", writable: false },
//     // ...
//   });



// //   Object.preventExtensions(obj)
// // Запрещает добавлять новые свойства в объект.
// // Object.seal(obj)
// // Запрещает добавлять/удалять свойства. Устанавливает configurable: false для всех существующих свойств.
// // Object.freeze(obj)
// // Запрещает добавлять/удалять/изменять свойства. Устанавливает configurable: false, writable: false для всех существующих свойств.
// // А также есть методы для их проверки:

// // Object.isExtensible(obj)
// // Возвращает false, если добавление свойств запрещено, иначе true.
// // Object.isSealed(obj)
// // Возвращает true, если добавление/удаление свойств запрещено и для всех существующих свойств установлено configurable: false.
// // Object.isFrozen(obj)
// // Возвращает true, если добавление/удаление/изменение свойств запрещено, и для всех текущих свойств установлено configurable: false, writable: false.



// // property-accessors


// let user = {
//     name: "John",
//     surname: "Smith",
  
//     get fullName() {
//       return `${this.name} ${this.surname}`;
//     }
//   };
//   alert(user.fullName); // John Smith



// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   let user1 = {
//     name: "John",
//     surname: "Smith",
  
//     get fullName() {
//       return `${this.name} ${this.surname}`;
//     },
//     set fullName(value) {
//       [this.name, this.surname] = value.split(" ");
//     }
//   };
//   // set fullName запустится с данным значением
//   user.fullName = "Alice Cooper";
//   alert(user.name); // Alice
//   alert(user.surname); // Cooper
//   // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//   let user = {
//     name: "John",
//     surname: "Smith"
//   }; 
//   Object.defineProperty(user, 'fullName', {
//     get() {
//       return `${this.name} ${this.surname}`;
//     },
//     set(value) {
//       [this.name, this.surname] = value.split(" ");
//     }
//   });
//   alert(user.fullName); // John Smith
//   for(let key in user) alert(key); // name, surname



 
//   let user = {
//     get name() {
//       return this._name;
//     },
//     set name(value) {
//       if (value.length < 4) {
//         alert("Имя слишком короткое, должно быть более 4 символов");
//         return;
//       }
//       this._name = value;
//     }
//   };
//   user.name = "Pete";
//   alert(user.name); // Pete
//   user.name = ""; // Имя слишком короткое...




//   function User(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   let john = new User("John", 25);
//   alert( john.age ); // 25



// // prototype-inheritance


// let animal = {
//     eats: true,
//     walk() {
//       alert("Animal walk");
//     }
//   };
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
//   let longEar = {
//     earLength: 10,
//     __proto__: rabbit
//   };
//   // walk взят из цепочки прототипов
//   longEar.walk(); // Animal walk
//   alert(longEar.jumps); // true (из rabbit)




//   let animal1 = {
//     eats: true,
//     walk() {
//       /* этот метод не будет использоваться в rabbit */
//     }
//   };
//   let rabbit1 = {
//     __proto__: animal
//   };
//   rabbit.walk = function() {
//     alert("Rabbit! Bounce-bounce!");
//   };
//   rabbit.walk(); // Rabbit! Bounce-bounce!
  



// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   let user = {
//     name: "John",
//     surname: "Smith",
  
//     set fullName(value) {
//       [this.name, this.surname] = value.split(" ");
//     },
//     get fullName() {
//       return `${this.name} ${this.surname}`;
//     }
//   };
//   let admin = {
//     __proto__: user,
//     isAdmin: true
//   };
//   alert(admin.fullName); // John Smith (*)
//   // срабатывает сеттер!
//   admin.fullName = "Alice Cooper"; // (**)
//   alert(admin.name); // Alice
//   alert(admin.surname); // Cooper
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




// // prototype-inheritance
// let animal4 = {
//     walk() {
//       if (!this.isSleeping) {
//         alert(`I walk`);
//       }
//     },
//     sleep() {
//       this.isSleeping = true;
//     }
//   };
//   let rabbit = {
//     name: "White Rabbit",
//     __proto__: animal
//   };
//   // модифицирует rabbit.isSleeping
//   rabbit.sleep();
//   alert(rabbit.isSleeping); // true
//   alert(animal.isSleeping); // undefined (нет такого свойства в прототипе)




//   let animal78 = {
//     eats: true
//   };
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
//   // Object.keys возвращает только собственные ключи
//   alert(Object.keys(rabbit)); // jumps
//   // for..in проходит и по своим, и по унаследованным ключам
//   for(let prop in rabbit) alert(prop); // jumps, затем eats




//   let animal23 = {
//     eats: true
//   };
  
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
  
//   for(let prop in rabbit) {
//     let isOwn = rabbit.hasOwnProperty(prop);
  
//     if (isOwn) {
//       alert(`Our: ${prop}`); // Our: jumps
//     } else {
//       alert(`Inherited: ${prop}`); // Inherited: eats
//     }
//   }



// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   let head = {
//     glasses: 1
//   };
  
//   let table = {
//     pen: 3,
//     __proto__: head
//   };
  
//   let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
//   };
  
//   let pockets = {
//     money: 2000,
//     __proto__: bed
//   };
  
//   alert( pockets.pen ); // 3
//   alert( bed.glasses ); // 1
//   alert( table.money ); // undefined
//   // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!





//   let hamster = {
//     stomach: [],
  
//     eat(food) {
//       // присвоение значения this.stomach вместо вызова this.stomach.push
//       this.stomach = [food];
//     }
//   };
  
//   let speedy = {
//      __proto__: hamster
//   };
  
//   let lazy = {
//     __proto__: hamster
//   };
  
//   // Шустрый хомяк нашёл еду
//   speedy.eat("apple");
//   alert( speedy.stomach ); // apple
  
//   // Живот ленивого хомяка пуст
//   alert( lazy.stomach ); // <ничего>



// // F.prototype


// let animal = {
//     eats: true
//   };
  
//   function Rabbit(name) {
//     this.name = name;
//   }
//   Rabbit.prototype = animal;
//   let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
//   alert( rabbit.eats ); // true



//   function Rabbit() {}
// // по умолчанию:
// // Rabbit.prototype = { constructor: Rabbit }
// alert( Rabbit.prototype.constructor == Rabbit ); // true




// function User(name) {
//     this.name = name;
//   }
  
//   let user = new User('John');
//   let user2 = new user.constructor('Pete');
  
//   alert( user2.name ); // Pete (сработало!)



// // native-prototypes


// let obj = {};
// alert(obj.__proto__ === Object.prototype); // true
// // obj.toString === obj.__proto__.toString === Object.prototype.toString


// function f() {}
// alert(f.__proto__ == Function.prototype); // true
// alert(f.__proto__.__proto__ == Object.prototype); // true, наследует от Object



// if (!String.prototype.repeat) { // Если такого метода нет
//     // добавляем его в прототип
  
//     String.prototype.repeat = function(n) {
//       // повторить строку n раз
  
//       // на самом деле код должен быть немного более сложным
//       // (полный алгоритм можно найти в спецификации)
//       // но даже неполный полифил зачастую достаточно хорош для использования
//       return new Array(n + 1).join(this);
//     };
//   }
//   alert( "La".repeat(3) ); // LaLaLa



//   let obj0 = {
//     0: "Hello",
//     1: "world!",
//     length: 2,
//   };
//   obj.join = Array.prototype.join;
//   alert( obj.join(',') ); // Hello,world!



//   Function.prototype.defer = function(ms) {
//     setTimeout(this, ms);
//   };
//   function f() {
//     alert("Hello!");
//   }
//   f.defer(1000); // выведет "Hello!" через 1 секунду


  

//   Function.prototype.defer = function(ms) {
//     let f = this;
//     return function(...args) {
//       setTimeout(() => f.apply(this, args), ms);
//     }
//   };
//   // check it
//   function f(a, b) {
//     alert( a + b );
//   }
//   f.defer(1000)(1, 2); // выведет 3 через 1 секунду.




//   let animal = {
//     eats: true
//   };
  
//   let rabbit = Object.create(animal, {
//     jumps: {
//       value: true
//     }
//   });
  
//   alert(rabbit.jumps); // true




//   let obj = Object.create(null);
// let key = prompt("What's the key?", "__proto__");
// obj[key] = "some value";
// alert(obj[key]); // "some value"


// function Rabbit(name) {
//     this.name = name;
//   }
//   Rabbit.prototype.sayHi = function() {
//     alert( this.name );
//   }
//   let rabbit5 = new Rabbit("Rabbit");
//   rabbit.sayHi();                        // Rabbit
//   Rabbit.prototype.sayHi();              // undefined
//   Object.getPrototypeOf(rabbit).sayHi(); // undefined
//   rabbit.__proto__.sayHi();              // undefined



// {
//   // выполняем некоторые действия с локальной переменной, которые не должны быть видны снаружи

//   let message = "Hello"; // переменная видна только в этом блоке

//   alert(message); // Hello
// }
// alert(message); // ReferenceError: message is not defined



// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++; // есть доступ к внешней переменной "count"
//   };
// }
// let counter = makeCounter();
// alert( counter() ); // 0
// alert( counter() ); // 1
// alert( counter() ); // 2



// // !!!!!!!!!!!!!!!!!!!
// function Counter1() {
//   let count = 0;

//   this.up = function() {
//     return ++count;
//   };

//   this.down = function() {
//     return --count;
//   };
// }

// let counter1 = new Counter();
// alert( counter.up() ); // 1
// alert( counter.up() ); // 2
// alert( counter.down() ); // 1
// // !!!!!!!!!!!!!!!!!!!




// function sum(a) {
//   return function(b) {
//     return a + b; // берёт "a" из внешнего лексического окружения
//   };

// }
// alert( sum(1)(2) ); // 3
// alert( sum(5)(-1) ); // 4



// function inBetween(a, b) {
//   return function(x) {
//     return x >= a && x <= b;
//   };
// }
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6



// function inArray(arr) {
//   return function(x) {
//     return arr.includes(x);
//   };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2




// let users = [
//   { name: "Иван", age: 20, surname: "Иванов" },
//   { name: "Пётр", age: 18, surname: "Петров" },
//   { name: "Анна", age: 19, surname: "Каренина" }
// ];
// // по имени (Анна, Иван, Пётр)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// // по возрасту (Пётр, Анна, Иван)
// users.sort((a, b) => a.age > b.age ? 1 : -1);






// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let shooter = function() { // функция shooter
//       alert( i ); // должна выводить порядковый номер
//     };
//     shooters.push(shooter); // и добавлять стрелка в массив
//     i++;
//   }

//   // ...а в конце вернуть массив из всех стрелков
//   return shooters;
// }

// let army = makeArmy();

// // все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
// army[0](); // 10 от стрелка с порядковым номером 0
// army[1](); // 10 от стрелка с порядковым номером 1
// army[2](); // 10 ...и т.д.




// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//       let j = i;
//       let shooter = function() { // функция shooter
//         alert( j ); // должна выводить порядковый номер
//       };
//     shooters.push(shooter);
//     i++;
//   }

//   return shooters;
// }

// let army1 = makeArmy();
// // теперь код работает правильно
// army[0](); // 0
// army[5](); // 5



// // class

// let date= new Date();

// console.log(date.getFullYear())
// console.log(date.getMonth()+1)
// console.log(date.getDate())
// console.log(date.getHours())

// date.setFullYear(2922)
// console.log(date.getFullYear())


// let arr = [5,3,2,6]
// console.log(arr.join("  ,  "))
// console.log(arr.sort())
// console.log(arr.reverse())
// let stroka= arr.sort().join(", ")

// console.log(stroka.split(", "))
// console.log(arr.sort().join(".."))


// class Person {
//     constructor(name, age,happiness){
//         this.name=name
//         this.age=age
//         this.happiness=happiness
//     }
//     info(){
//         console.log("Возраст:"+ this.age + "счастлив ли он:"+ this.happiness)
//         }
// }

 
// let alex = new Person("Alex","20","true")
// let Bob = new Person("Bob","11","false")

// alex.info()
// Bob.info()


// console.log(alex.age)
// console.log(Bob.name)





// function makeClass(phrase) {
//     // объявляем класс и возвращаем его
//     return class {
//       sayHi() {
//         alert(phrase);
//       };
//     };
//   }
  
//   // Создаём новый класс
//   let User = makeClass("Привет");
  
//   new User().sayHi(); // Привет






//   class User1 {

//     constructor(name) {
//       // вызывает сеттер
//       this.name = name;
//     }
//     get name() {
//       return this._name;
//     }
//     set name(value) {
//       if (value.length < 4) {
//         alert("Имя слишком короткое.");
//         return;
//       }
//       this._name = value;
//     }
  
//   }
//   let user = new User("Иван");
//   alert(user.name); // Иван
//   user = new User(""); // Имя слишком короткое.






// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// class Animal {
//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
//     run(speed) {
//       this.speed = speed;
//       alert(`${this.name} бежит со скоростью ${this.speed}.`);
//     }
//     stop() {
//       this.speed = 0;
//       alert(`${this.name} стоит неподвижно.`);
//     }
//   }
  
//   let animal = new Animal("Мой питомец");


//   class Rabbit extends Animal {
//     hide() {
//       alert(`${this.name} прячется!`);
//     }
//   }
  
//   let rabbit = new Rabbit("Белый кролик");
  
//   rabbit.run(5); // Белый кролик бежит со скоростью 5.
//   rabbit.hide(); // Белый кролик прячется!
// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//   function f(phrase) {
//     return class {
//       sayHi() { alert(phrase); }
//     };
//   }
  
//   class User extends f("Привет") {}
  
//   new User().sayHi(); // Привет






//   class Animal {

//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
  
//     run(speed) {
//       this.speed = speed;
//       alert(`${this.name} бежит со скоростью ${this.speed}.`);
//     }
  
//     stop() {
//       this.speed = 0;
//       alert(`${this.name} стоит.`);
//     }
  
//   }
  
//   class Rabbit extends Animal {
//     hide() {
//       alert(`${this.name} прячется!`);
//     }
  
//     stop() {
//       super.stop(); // вызываем родительский метод stop
//       this.hide(); // и затем hide
//     }
//   }
  
//   let rabbit1 = new Rabbit("Белый кролик");
  
//   rabbit.run(5); // Белый кролик бежит со скоростью 5.
//   rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!





//   class Animal {

//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
  
//     // ...
//   }
//   class Rabbit extends Animal {
  
//     constructor(name, earLength) {
//       super(name);
//       this.earLength = earLength;
//     }
  
//     // ...
//   }
//   // теперь работает
//   let rabbit11 = new Rabbit("Белый кролик", 10);
//   alert(rabbit.name); // Белый кролик
//   alert(rabbit.earLength); // 10



// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   class Animal {
//     showName() {  // вместо this.name = 'animal'
//       alert('animal');
//     }
  
//     constructor() {
//       this.showName(); // вместо alert(this.name);
//     }
//   }
  
//   class Rabbit extends Animal {
//     showName() {
//       alert('rabbit');
//     }
//   }
  
//   new Animal(); // animal
//   new Rabbit(); // rabbit
// //   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!





// class Animal {

//     constructor(name) {
//       this.name = name;
//     }
  
//   }
  
//   class Rabbit extends Animal {
//     constructor(name) {
//       super(name);
//       this.created = Date.now();
//     }
//   }
  
//   let rabbit232 = new Rabbit("Белый кролик"); // ошибки нет
//   alert(rabbit.name); // White Rabbit





// class Article {
//     constructor(title, date) {
//       this.title = title;
//       this.date = date;
//     }
  
//     static compare(articleA, articleB) {
//       return articleA.date - articleB.date;
//     }
//   }
  
//   // использование
//   let articles = [
//     new Article("HTML", new Date(2019, 1, 1)),
//     new Article("CSS", new Date(2019, 0, 1)),
//     new Article("JavaScript", new Date(2019, 11, 1))
//   ];
  
//   articles.sort(Article.compare);
  
//   alert( articles[0].title ); // CSS





//   class Article {
//     constructor(title, date) {
//       this.title = title;
//       this.date = date;
//     }
  
//     static createTodays() {
//       // помним, что this = Article
//       return new this("Сегодняшний дайджест", new Date());
//     }
//   }
  
//   let article = Article.createTodays();
  
//   alert( article.title ); // Сегодняшний дайджест





//   class Article {
//     static publisher = "Илья Кантор";
//   }
//   alert( Article.publisher ); // Илья Кантор







// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   class Animal {

//     constructor(name, speed) {
//       this.speed = speed;
//       this.name = name;
//     }
  
//     run(speed = 0) {
//       this.speed += speed;
//       alert(`${this.name} бежит со скоростью ${this.speed}.`);
//     }
  
//     static compare(animalA, animalB) {
//       return animalA.speed - animalB.speed;
//     }
  
//   }
  
//   // Наследует от Animal
//   class Rabbit extends Animal {
//     hide() {
//       alert(`${this.name} прячется!`);
//     }
//   }
  
//   let rabbits = [
//     new Rabbit("Белый кролик", 10),
//     new Rabbit("Чёрный кролик", 5)
//   ];
  
//   rabbits.sort(Rabbit.compare);
  
//   rabbits[0].run(); // Чёрный кролик бежит со скоростью 5.
//   // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!





//   class Rabbit {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   let rabbit = new Rabbit("Rab");
  
//   // метод hasOwnProperty от Object.prototype
//   alert( rabbit.hasOwnProperty('name') ); // true




//   class Rabbit extends Object {
//     constructor(name) {
//       super(); // надо вызвать конструктор родителя, когда наследуемся
//       this.name = name;
//     }
//   }
  
//   let rabbit2 = new Rabbit("Кроль");
  
//   alert( rabbit.hasOwnProperty('name') ); // true



// // extend-natives


// // добавим один метод (можно более одного)
// class PowerArray extends Array {
//     isEmpty() {
//       return this.length === 0;
//     }
//   }
  
//   let arr = new PowerArray(1, 2, 5, 10, 50);
//   alert(arr.isEmpty()); // false
  
//   let filteredArr = arr.filter(item => item >= 10);
//   alert(filteredArr); // 10, 50
//   alert(filteredArr.isEmpty()); // false





//   class PowerArray extends Array {
//     isEmpty() {
//       return this.length === 0;
//     }
  
//     // встроенные методы массива будут использовать этот метод как конструктор
//     static get [Symbol.species]() {
//       return Array;
//     }
//   }
  
//   let arr32 = new PowerArray(1, 2, 5, 10, 50);
//   alert(arr.isEmpty()); // false
  
//   // filter создаст новый массив, используя arr.constructor[Symbol.species] как конструктор
//   let filteredArr234 = arr.filter(item => item >= 10);
  
//   // filteredArr не является PowerArray, это Array
//   alert(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function




//   // примесь
// let sayHiMixin = {
//     sayHi() {
//       alert(`Привет, ${this.name}`);
//     },
//     sayBye() {
//       alert(`Пока, ${this.name}`);
//     }
//   };
  
//   // использование:
//   class User {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   // копируем методы
//   Object.assign(User.prototype, sayHiMixin);
  
//   // теперь User может сказать Привет
//   new User("Вася").sayHi(); // Привет, Вася!




// // примесь custom-errors
// let sayHiMixin = {
//     sayHi() {
//       alert(Привет, this.name);
//     },
//     sayBye() {
//       alert(Пока, this.name);
//     }
//   };
  
//   // использование:
//   class User {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   // копируем методы
//   Object.assign(User.prototype, sayHiMixin);
  
//   // теперь User может сказать Привет
//   new User("Вася").sayHi(); // Привет, Вася!
  
  
  
  
  
//   let sayMixin = {
//     say(phrase) {
//       alert(phrase);
//     }
//   };
  
//   let sayHiMixin1 = {
//     proto: sayMixin, // (или мы можем использовать Object.setPrototypeOf для задания прототипа)
  
//     sayHi() {
//       // вызываем метод родителя
//       super.say(Привет, this.name); // (*)
//     },
//     sayBye() {
//       super.say(Пока, this.name); // (*)
//     }
//   };
  
//   class User {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   // копируем методы
//   Object.assign(User.prototype, sayHiMixin);
  
//   // теперь User может сказать Привет
//   new User("Вася").sayHi(); // Привет, Вася!
  
  
  
  
//   let json = "{ некорректный JSON }";
//   try {
//     let user = JSON.parse(json); // <-- тут возникает ошибка...
//     alert( user.name ); // не сработает
  
//   } catch (e) {
//     // ...выполнение прыгает сюда
//     alert( "Извините, в данных ошибка, мы попробуем получить их ещё раз." );
//     alert( e.name );
//     alert( e.message );
//   }
  
  
  
  
//   let json1 = '{ "age": 30 }'; // данные неполны
//   try {
//     let user = JSON.parse(json); // <-- выполнится без ошибок
//     if (!user.name) {
//       throw new SyntaxError("Данные неполны: нет имени"); // (*)
//     }
//     alert( user.name );
//   } catch(e) {
//     alert( "JSON Error: " + e.message ); // JSON Error: Данные неполны: нет имени
//   }


// // callbacks

// loadScript('/my/script.js', function() {
//   // эта функция вызовется после того, как загрузится скрипт
//   newFunction(); // теперь всё работает  
// });


// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(null, script);
// //   script.onerror = () => callback(new Error(Не удалось загрузить скрипт ${src}));

//   document.head.append(script);
// }



// loadScript('1.js', function(error, script) {
//   if (error) {
//     handleError(error);
//   } else {
//     // ...
//     loadScript('2.js', function(error, script) {
//       if (error) {
//         handleError(error);
//       } else {
//         // ...
//         loadScript('3.js', function(error, script) {
//           if (error) {
//             handleError(error);
//           } else {
//             // ...и так далее, пока все скрипты не будут загружены (*)
//           }
//         });

//       }
//     })
//   }
// });


// loadScript('1.js', step1);

// function step1(error, script) {
//   if (error) {
//     handleError(error);
//   } else {
//     // ...
//     loadScript('2.js', step2);
//   }
// }

// function step2(error, script) {
//   if (error) {
//     handleError(error);
//   } else {
//     // ...
//     loadScript('3.js', step3);
//   }
// }

// function step3(error, script) {
//   if (error) {
//     handleError(error);
//   } else {
//     // ...и так далее, пока все скрипты не будут загружены (*)
//   }
// };


// // promise
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("done!"), 1000);
//   });
  
//   // resolve запустит первую функцию, переданную в .then
//   promise.then(
//     result => alert(result), // выведет "done!" через одну секунду
//     error => alert(error) // не будет запущена
//   );
  
  
//   let promise1 = new Promise(function(resolve, reject) {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//   });
  
//   // reject запустит вторую функцию, переданную в .then
//   promise.then(
//     result => alert(result), // не будет запущена
//     error => alert(error) // выведет "Error: Whoops!" спустя одну секунду
//   );
  
  
  
  
//   let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Ошибка!")), 1000);
//   });
//   // .catch(f) это то же самое, что promise.then(null, f)
//   promise.catch(alert); // выведет "Error: Ошибка!" спустя одну секунду
  
  
  
//   new Promise((resolve, reject) => {
//     /* сделать что-то, что займёт время, и после вызвать resolve или может reject */
//   })
//     // выполнится, когда промис завершится, независимо от того, успешно или нет
//     // .finally(() => остановить индикатор загрузки)
//     // таким образом, индикатор загрузки всегда останавливается, прежде чем мы продолжим
//     // .then(result => показать результат, err => показать ошибку)
  
  
  
  
//     new Promise((resolve, reject) => {
//       setTimeout(() => resolve("value"), 2000);
//     })
//       .finally(() => alert("Промис завершён")) // срабатывает первым
//       .then(result => alert(result)); // <-- .then показывает "value"
  
  
  
//       new Promise((resolve, reject) => {
//         throw new Error("error");
//       })
//         .finally(() => alert("Промис завершён")) // срабатывает первым
//         .catch(err => alert(err));  // <-- .catch показывает ошибку
  
  
  
  
//         function loadScript(src, callback) {
//           let script = document.createElement('script');
//           script.src = src;
        
//           script.onload = () => callback(null, script);
//         //   script.onerror = () => callback(new Error(Ошибка загрузки скрипта ${src}));
        
//           document.head.append(script);
//         }
  
  
  
  
//         let promise3 = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
//       promise.then(
//     // script => alert(${script.src} загружен!),
//     // error => alert(Ошибка: ${error.message})
//   );
//   promise.then(script => alert('Ещё один обработчик...'));
  
  
//   // Промисы  Колбэки
//   // Промисы позволяют делать вещи в естественном порядке. Сперва мы запускаем loadScript(script), и затем (.then) мы пишем, что делать с результатом.  У нас должна быть функцияcallback на момент вызова loadScript(script, callback). Другими словами, нам нужно знать что делать с результатом до того, как вызовется loadScript.
//   // Мы можем вызывать .then у Promise столько раз, сколько захотим. Каждый раз мы добавляем нового «фаната», новую функцию-подписчика в «список подписок». Больше об этом в следующей главе: Цепочка промисов.  Колбэк может быть только один.
  
  
//   function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
//   delay(3000).then(() => alert('выполнилось через 3 секунды'));



// https://learn.javascript.ru/generators
// generators

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
// "функция-генератор" создаёт объект "генератор"
let generator = generateSequence();
alert(generator); // [object Generator]




function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
let generator1 = generateSequence();
let one = generator1.next();
alert(JSON.stringify(one)); // {value: 1, done: false}


let three = generator.next();
alert(JSON.stringify(three)); // {value: 3, done: true}



function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
let generator2 = generateSequence();
for(let value of generator) {
  alert(value); // 1, затем 2
}



function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}
let generator3 = generateSequence();
for(let value of generator) {
  alert(value); // 1, затем 2, затем 3
}



function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}
let sequence = [0, ...generateSequence()];
alert(sequence); // 0, 1, 2, 3