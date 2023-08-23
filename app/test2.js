"use strick";
// function Calculator(a,b) {

// this.readNumber = function () {
//   this.a = Number(prompt("Press first number",""));
//   this.b = Number(prompt("Press second number",""));
//   return this.a, this.b
//   };

//  this.sum = function () {
//     return this.a + this.b
//   };

//  this.mul  = function () {
//     return this.a * this.b
//   };

// }

// let calculator = new Calculator();
// calculator.readNumber();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


// function Accumulator (){
//   let n = Number(prompt("Сколько чисел вы хотите прибавить?",""));
//   let value = 1;

//   for (let i; n >= 1 ;n--){
//     i = Number(prompt("Введите число",""));
//     value += i;
//   }
//   return value;
// }
// alert(Accumulator())

// function Accumulator (startingValue=1) {
//   this.value = startingValue;
//   this.read = function (startingValue) {
//     this.value =+ Number(prompt("Введите числитель",""));
//     //alert(this.value);
//   };


// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

// alert(accumulator.value);


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


// от безопасный способ получить доступ к user.address.street, используя ?.:

// let user = {}; // пользователь без адреса

// alert( user?.address?.street ); // undefined (без ошибки)


// let userAdmin = {
//   admin() {
//     alert("Я админ");
//   }
// };

// let userGuest = {};

// userAdmin.admin?.(); // Я админ

// userGuest.admin?.(); // ничего не произойдет (такого метода нет)


// let key = "firstName";

// let user1 = {
//   firstName: "John"
// };

// let user2 = null;

// alert( user1?.[key] ); // John
// alert( user2[key]?. ); // undefined


// let user = {};

// user.name = "John"; // Ошибка, не работает
// // то же самое что написать undefined = "John"

// alert(user?.name.huy);


// let id = Symbol("id");

// let user = {
//   name: "Вася",
//   [id]: 123 // просто "id: 123" не сработает
// };

// Свойства, чьи ключи – символы, не перебираются циклом for..in.

// Например:

// let id = Symbol("id");
// let user = {
//   name: "Вася",
//   age: 30,
//   [id]: 123
// };

// for (let key in user) alert(key); // name, age (свойства с ключом-символом нет среди перечисленных)

// // хотя прямой доступ по символу работает
// alert( "Напрямую: " + user[id] );


// А вот Object.assign, в отличие от цикла for..in, копирует и строковые, и символьные свойства:

// let id = Symbol("id");
// let user = {
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


// let globalSymbol = Symbol.for("name");
// let localSymbol = Symbol("name");

// alert( Symbol.keyFor(globalSymbol) ); // name, глобальный символ
// alert( Symbol.keyFor(localSymbol) ); // undefined для неглобального символа

// alert( localSymbol.description ); // name


// let user = {
//   name : "Anton",
//   age : "26",
//   birthDate : 1997,
// }

// alert(user.toString());

// // let user = {
// //   name: "John",
// //   money: 1000,

// //   [Symbol.toPrimitive](hint) {
// //     alert(`hint: ${hint}`);
// //     return hint == "string" ? `{name: "${this.name}"}` : this.money;
// //   }
// // };

// // // демонстрация результатов преобразований:
// // alert(user); // hint: string -> {name: "John"}
// // alert(+user); // hint: number -> 1000
// // alert(user + 500); // hint: default -> 1500


// let user = {
//   name: "John",
//   money: 1000,

//   // для хинта равного "string"
//   toString() {
//     return `{name: "${this.name}"}`;
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


// let ms = 1e-6; // шесть нулей, слева от 1


// let a = 0b11111111; // бинарная форма записи числа 255
// let b = 0o377; // восьмеричная форма записи числа 255

// alert( a == b ); // true, с двух сторон число 255


// let num = 255;

// alert( num.toString(16) );  // ff
// alert( num.toString(2) );   // 11111111

// Обратите внимание, что результатом toFixed является строка. Если десятичная часть короче, чем необходима, будут добавлены нули в конец строки:

// let num = 12.34;
// alert( num.toFixed(5) ); // "12.34000", добавлены нули, чтобы получить 5 знаков после


// Иногда isFinite используется для проверки, содержится ли в строке число:

// let num = +prompt("Enter a number", '');

// // вернёт true всегда, кроме ситуаций, когда аргумент - Infinity/-Infinity или не число
// alert( isFinite(num) );
// Помните, что пустая строка интерпретируется как 0 во всех числовых функциях, включаяisFinite.



// alert( Number.isNaN(NaN) ); // true
// alert( Number.isNaN("str" / 2) ); // true

// // Обратите внимание на разный результат:
// alert( Number.isNaN("str") ); // false, так как "str" является строкой, а не числом
// alert( isNaN("str") ); // true, так как isNaN сначала преобразует строку "str" в число и в результате преобразования получает NaN



// Существует специальный метод Object.is, который сравнивает значения примерно как ===, но более надёжен в двух особых ситуациях:

// Работает с NaN: Object.is(NaN, NaN) === true, здесь он хорош.
// Значения 0 и -0 разные: Object.is(0, -0) === false, это редко используется, но технически эти значения разные.
// Во всех других случаях Object.is(a, b) идентичен a === b.


//alert( parseInt('a123') ); // NaN, на первом символе происходит остановка чтения

// function mul () {
//     let x = Number(prompt("Press x",""));
//     let y = Number(prompt("Press y",""));
//     let z = x*y;
//     alert(z);
// }
// mul();

// function readNumber (){
//     for (let x;isNaN(x);){
//     x = prompt("Введи число","");
//     if (x === null) return null;
//     if (isFinite(x)) return x;
//     }
//     return x;
// }
// alert(readNumber());


// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }

// function random(min, max) {
//     return Math.round(min + (Math.random() * Math.random()) * (max - min));
//   }
  
//   alert( random(1, 5) );
//   alert( random(3, 5) );
//   alert( random(5, 7) );


//   let str = `Hello`;

// // получаем первый символ
// alert( str[0] ); // H
// alert( str.at(0) ); // H

// // получаем последний символ
// alert( str[str.length - 1] ); // o
// alert( str.at(-1) ); // o

// let str = `Hello`;

// alert( str[-2] ); // undefined
// alert( str.at(-2) ); // l


//Также можно перебрать строку посимвольно, используя for..of:
// let str = "hello";

// for (let char of str) {
//   alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т.д.)



//   Можно создать новую строку и записать её в ту же самую переменную вместо старой.

// Например:

// let str = 'Hi';

// str = 'h' + str[1]; // заменяем строку

// alert( str ); // hi
// }

// alert( 'Interface'[0].toLowerCase() ); // 'i'



// let str = 'Widget with something id \n pizda';
// alert(str);

// alert( str.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
// //alert( str.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру

// alert( str.indexOf("id") ); // 1, подстрока "id" найдена на позиции 1 (..idget with id)
// alert( str.indexOf("pizda") );
// alert( str.indexOf("something") );
// alert( str.indexOf("with") );

// Например, первое вхождение "id" — на позиции 1. Для того, чтобы найти следующее, начнём поиск с позиции 2:

// let str = 'Widget with id';

// alert( str.indexOf('id', 2) ) // 12


// Чтобы найти все вхождения подстроки, нужно запустить indexOf в цикле. Каждый раз, получив очередную позицию, начинаем новый поиск со следующей:

// let str = 'Ослик Иа-Иа посмотрел на виадук';

// let target = 'Иа'; // цель поиска

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   alert( `Найдено тут: ${foundPos}` );
//   pos = foundPos + 1; // продолжаем со следующей позиции
//}

// Тот же алгоритм можно записать и короче:

// let str = "Ослик Иа-Иа посмотрел на виадук";
// let target = "Иа";

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   alert( pos );
// }

// Также есть похожий метод str.lastIndexOf(substr, position), который ищет с конца строки к её началу.

// Он используется тогда, когда нужно получить самое последнее вхождение: перед концом строки или начинающееся до (включительно) определённой позиции.

// Мы ищем подстроку "Widget", и она здесь есть, прямо на позиции 0. Но alert не показывается, т. к. str.indexOf("Widget") возвращает 0, и if решает, что тест не пройден.

// Поэтому надо делать проверку на -1:

// let str = "Widget with id";

// if (str.indexOf("Widget") != -1) {
//     alert("Совпадение есть"); // теперь работает
// }


// Таким образом, ~n равняется 0 только при n == -1 (для любого n, входящего в 32-разрядные целые числа со знаком).

// Соответственно, прохождение проверки if ( ~str.indexOf("…") ) означает, что результат indexOf отличен от -1, совпадение есть.

// Это иногда применяют, чтобы сделать проверку indexOf компактнее:

// let str = "Widget";

// if (~str.indexOf("Widget")) {
//   alert( 'Совпадение есть' ); // работает
// }



// function unFirst(str) {
//   let firstStrPart = str.slice(0,1);
//   let secondStrPart = str.slice(1);
//   firstStrPart = firstStrPart.toUpperCase();
//   str = firstStrPart + secondStrPart;
//   return str;
// }

// alert(unFirst("abhazia"));

//БОЛЕЕ ЭЛЕГАНТНЫЙ ВАРИАНТ
// function ucFirst(str) {
//   if (!str) return str;

//   return str[0].toUpperCase() + str.slice(1);
// }

// alert( ucFirst("вася") ); // Вася


// function checkSpam(messege){
//   messege = messege.toLowerCase();
//   if ((messege.includes("viagra")) || (messege.includes("xxx"))){
//     return true;
//     };
//       return false;
//   };

//   alert(checkSpam("vIagra"));


// function truncate(str, maxlength){
//   newStr = str.slice(0,maxlength-1);
//   if ((str.localeCompare(newStr))===1){
//   alert((str.slice(0,maxlength-1))+"...");
//   } else {
//     alert (str);
//   }
// }

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 1000);


// function extractCurrencyValue(str){
//   return +str.slice(1);
//   return +str;
// }

// alert((extractCurrencyValue("$5000")+15))





// //Массивы
// let arr = new Array();
// let arr = [];


// let fruits = ["Яблоко", "Апельсин", "Слива"];

// alert( fruits[0] ); // Яблоко
// alert( fruits[1] ); // Апельсин
// alert( fruits[2] ); // Слива
// fruits[2] = 'Груша'; // теперь ["Яблоко", "Апельсин", "Груша"]

// let fruits = ["Яблоко", "Апельсин", "Слива"];

// alert( fruits.length ); // 3
// alert( fruits ); // Яблоко, Апельсин, Слива

// // разные типы значений
// let arr = [ 'Яблоко', { name: 'Джон' }, true, function() { alert('привет'); } ];

// // получить элемент с индексом 1 (объект) и затем показать его свойство
// alert( arr[1].name ); // Джон

// // получить элемент с индексом 3 (функция) и выполнить её
// arr[3](); // привет



// let fruits = ["Apple", "Orange", "Plum"];
// // то же самое, что и fruits[fruits.length-1]
// alert( fruits.at(-1) ); // Plum


// let fruits = ["Яблоко", "Апельсин", "Груша"];

// alert( fruits.pop() ); // удаляем "Груша" и выводим его

// alert( fruits ); // Яблоко, Апельсин




// let fruits = ["Яблоко", "Апельсин"];

// fruits.push("Груша");

// alert( fruits ); // Яблоко, Апельсин, Груша




// let fruits = ["Яблоко", "Апельсин", "Груша"];

// alert( fruits.shift() ); // удаляем Яблоко и выводим его

// alert( fruits ); // Апельсин, Груша


// let fruits = ["Апельсин", "Груша"];

// fruits.unshift('Яблоко');

// alert( fruits ); // Яблоко, Апельсин, Груша


// let fruits = ["Яблоко"];

// fruits.push("Апельсин", "Груша");
// fruits.unshift("Ананас", "Лимон");

// // ["Ананас", "Лимон", "Яблоко", "Апельсин", "Груша"]
// alert( fruits );

// Варианты неправильного применения массива:

// Добавление нечислового свойства, например: arr.test = 5.
// Создание «дыр», например: добавление arr[0], затем arr[1000] (между ними ничего нет).
// Заполнение массива в обратном порядке, например: arr[1000], arr[999] и т.д.


// let arr = ["Яблоко", "Апельсин", "Груша"];

// for (let i = 0; i < arr.length; i++) {
//   alert( arr[i] );
// }

//Но для массивов возможен и другой вариант цикла, for..of:

// let fruits = ["Яблоко", "Апельсин", "Слива"];

// // проходит по значениям
// for (let fruit of fruits) {
//   alert( fruit );
// }

// alert(fruits.length);


// let arr = [1, 2, 3, 4, 5];

// arr.length = 2; // укорачиваем до двух элементов
// alert( arr ); // [1, 2]

// arr.length = 5; // возвращаем length как было
// alert( arr[3] ); // undefined: значения не восстановились


// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// alert( matrix[0][1] ); // 5, центральный элемент

// let arr = [1, 2, 3];

// alert( arr ); // 1,2,3
// alert( String(arr) === '1,2,3' ); // true


// function arrCicle(){
//     let arr = ["Яблоко", "Апельсин", "Груша"];

// for (let fruit of arr) {
//   return fruit;
// }

// }

// alert(arrCicle());


// let styles = [
//   "Jazz",
//   "Bluzz",
// ]

// styles.push("RockNRoll");
// styles[1] = "Classic";
// alert(styles.shift());
// styles.unshift("Reggy");
// styles.unshift("Rap");
// alert(styles);


// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// });

// arr[2](); // ?



//for (let num;num ?? true;){
//  for (let num;((num === undefined) || (num === null));){
// function sumInput(){
//   let x = 0;
//   let arr = [];
//   for (let num;(!(num === undefined) || !(num === null));){
//   num = prompt("Press number","");
//   if ((num === undefined) || (num === null)) break;
//   num = +num;
//   arr.push(num);
//   };
//   // for (let key = 0; key < arr.length; key++){
//   //   x += arr[key];
//   // };
//   for (let key of arr){
//     x+=key;
//   };
//   return x;
// }

// alert(sumInput());



// function getMaxSubSum(){
//   let zhopa = [];
//   let arr = [1, 21, 33, -54, -29, 76];
//   if ((Math.max(...arr)<0)) {
//     alert(0);
//     return
//   }
//   for (let x = 0; 0 < arr.length;){
//     x = 0;
//   for (let i = 0; i < arr.length; i++){
//     x += arr[i];
//     zhopa.push(x);
//   }
//     zhopa.push(x);
//     //alert(x);
//     arr.shift();
//     //alert(arr);
// }
//   alert(Math.max(...zhopa));
// }

// getMaxSubSum();

// Более элегантный вариант
// function getMaxSubSum(arr) {
//   let maxSum = 0; // если элементов не будет - возвращаем 0

//   for (let i = 0; i < arr.length; i++) {
//     let sumFixedStart = 0;
//     for (let j = i; j < arr.length; j++) {
//       sumFixedStart += arr[j];
//       maxSum = Math.max(maxSum, sumFixedStart);
//     }
//   }

//   return maxSum;
// }



function getMaxSubSum() {
  let arr = [-100,202,-3,-4,15]
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
  }

  return maxSum;
}

alert(getMaxSubSum());