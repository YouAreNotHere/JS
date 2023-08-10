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