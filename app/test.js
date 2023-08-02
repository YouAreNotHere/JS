"use strict";
// var nastyaSpeed = 15;
// var antonSpeed = 14;
// var time = 3;
// var nastyaDistance = nastyaSpeed * time;
// var antonDistance = antonSpeed * time;
// var totalDistance = antonDistance + nastyaDistance;

// var calculateDistance = function(time, nastyaSpeed, antonSpeed){
  
// var nastyaDistance = nastyaSpeed * time;
// var antonDistance = antonSpeed * time;
// var totalDistance = antonDistance + nastyaDistance;
  
// return totalDistance;
//};
//console.log(calculateDistance(3, 12, 15)*3);

// var firstDistance = calculateDistance(3,12,14)*3;
// var secondDistance = calculateDistance(2,5,13);

// console.log(firstDistance, secondDistance);
  
//document.write(calculatelDistance);

// var buyBread = function(eggs){
//     if (eggs){
//         return 10;
//     }
//     else{
//         return 1;
//     }
//     //Можно без else, просто return
// };

// var buyBread = function(eggs){
//     return eggs ? 13 : 3;
// };
//Если идёт сравнение, знак вопроса и последующие тру и фолс можно
//опустить, т.к. сравнение уже само себе подразумеват тру и фолс
//типа:

// let alcoholAllowed 
// let age = prompt("How old a u?", "");

// alcoholAllowed = age>18;

// alert(alcoholAllowed);


//console.log(buyBread(true));

//Задания
// var userName = "John";
// var admin;
// admin = userName;
// alert(admin);

// let isGreater = 4 > 5;

// alert( isGreater ); // true (результатом сравнения будет "да")



// let result = prompt("Введите Ваше имя", ["Пидор"]);
// let finalResult = confirm(`Ваше имя ${result}?`);

// if(finalResult){
//     alert(`Добро пожаловать, ${result}`)
// }
// else{
//     alert(`Пошёл нахуй, ${result}`)
// }



//let age = Number (prompt('Сколько тебе лет?', 26)); //Number преобразовывает результат в числа, т.к. промт (вопрос алертом) записывает значение переменной в строку.

// alert(`Тебе ${age} лет!`); 

//let age = prompt("How old a u?",[26]);

//age = Number(age);
//alert(typeof age);
//Но проще так
//alert(Number(age))


// let a = 4;
// let b = 2;

// let c = 3 - (a = b + a);

// alert( a ); // 3
// alert( c ); // 0




// let n = 2;
// n += 5; // теперь n = 7 (работает как n = n + 5)
// n *= 2; // теперь n = 14 (работает как n = n * 2)

// alert( n ); // 14



// let n = 2;

// n *= 3 + 5;

// alert( n ); // 16  (сначала выполнится правая часть, выражение идентично n *= 8)




// let a = Number(prompt("Первое число?", ["1"]));
// let b = Number(prompt("Второе число?", ["2"]));

// alert(a + b); // 12




// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// if (year < 2015) {
//   alert( 'Это слишком рано...' );
// } else if (year > 2015) {
//   alert( 'Это поздновато' );
// } else {
//   alert( 'Верно!' );
// }

// let age = prompt('Возраст?', 18);

// let message = (age < 3) ? 'Здравствуй, малыш!' :
//   (age < 18) ? 'Привет!' :
//   (age < 100) ? 'Здравствуйте!' :
//   'Какой необычный возраст!';

// alert( message );


// let company = prompt('Какая компания создала JavaScript?', '');

// (company == 'Netscape') ?
//    alert('Верно!') : alert('Неправильно.');


// let answer = prompt("Какое «официальное» название JavaScript?","");
// let correctAnswer = "ECMAScript";

// if (answer == correctAnswer){
//     alert("Верно!");
// }
// else{
//     alert("Ты не знал? Это ж ECMAScript!")
// }

// (answer == "ECMAScript") ? alert("Poshel nahuy") : alert ("Ti tupoy?")
//Можно было без переменной коррект ансуэ, просто (answer == Ecmascript) ?...


// let someNumber = Number (prompt("Press any number",""));

// if (someNumber<0){
//     alert("-1");
// }
// else if (someNumber==0){
//     alert("0");
// }
// else{
//     alert("1");
// }
// ;

// (someNumber<0) ? alert("-1"):
// (someNumber==0) ? alert("0"):
// alert("1");


// let result = (a+b<4) ? Мало: Много;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// let login = prompt("Введите вашу должность","");

// let message = (login == "Сотрудник") ? "Привет":
// (login == "Директор") ? "Здравствуйте":
// (login == "") ? "Нет логина":
// "";
// alert(message);

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }



// alert( 1 || 0 ); // 1
// alert( true || 'no matter what' ); // true

// alert( null || 1 ); // 1 (первое истинное значение)
// alert( null || 0 || 1 ); // 1 (первое истинное значение)
// alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)




// let x;

// true || (x = 1);

// alert(x); // undefined, потому что (x = 1) не вычисляется


// let hour = 12;
// let minute = 30;

// if (hour == 12 && minute == 30) {
//   alert( 'The time is 12:30' );
// }
// Как и в случае с ИЛИ, любое значение допускается в качестве операнда И:

// if (1 && 0) { // вычисляется как true && false
//   alert( "не сработает, так как результат ложный" );
//}

// let x = -1;

// alert(x > 0) && alert( 'Greater than zero!' );

// (age>=18)&&(age<=90);
// if (age>=18)&&(age<=90){
// };

// if (!(age >= 14 && age <= 90)){ //Не в диапазоне от 14 до 90.
// }

// if (age>90)&&(age<14){
// };



// let userName = prompt("Press ur login name","");
// let userPassword;

// if (userName == "Админ"){
//     userPassword = prompt("Press ur password","");
//     if (userPassword == "Я главный"){
//         alert("Здравствуйте");
//     }
//     else if (userPassword === undefined || userPassword === NaN || userPassword ===null || userPassword === ""){
//         alert("Отменено");
//     }
//     else if (!(userPassword == "Я главный")) {
//         alert("Неверный пароль");
//     }
// }
// else if (userName == undefined ||userName == NaN || userName == null || userName == ""){
//     alert("Отменено");
// }
// else if (!(userName =="Админ")){
//     alert("Я Вас не знаю");
// };

// Как проще!!

// let userName = prompt("Кто там?", '');

// if (userName === 'Админ') {

//   let pass = prompt('Пароль?', '');

//   if (pass === 'Я главный') {
//     alert( 'Здравствуйте!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );
// }




// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   alert( i );
//   i++;
// }

// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);

// for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
//     alert(i);
//   }




// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );


// let a = 3;
// for (; a < 1000000000; ++a){
//     if (a!==1000000000) continue;

//     alert(a);
// }
// alert (a);


// let i = 0;
//while (++i < 5) alert( i );
//Можно зашить ++ прямо в условия цикла!!!

// let i = 0;
// while (i++ < 5) alert( i );
// Первое значение: i = 1. Остановимся на нём подробнее. Оператор i++ увеличивает i, возвращая старое значение, так что в сравнении i++ < 5 будет участвовать старое i = 0.

// Но последующий вызов alert уже не относится к этому выражению, так что получит новый i = 1.


// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }


// zhopa: for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {
  
//       let input = prompt(`Значение на координатах (${i},${j})`, '');
//       if (!(input)) continue zhopa;
  
//     }
//   }
  
//   alert('Готово!');



// gg: for (;!(answer>99);) {
//     answer = +prompt("Введи число больше ста","");
//     if (answer === null) break gg;
//     for (;!(answer>99);){
//     answer = +prompt("Не, попробуй ещё","");
//     if (answer === null) break gg;
//     }
// }
// alert("Well done!");


// for (;(n%n)==1 || (n%1)==n;n++){
//     alert(n);
// }


// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

//   let Browser = prompt("Choose ur browser","");
//   if (Browser == "Edge"){
//     alert("You've got the Edge!");
//   }
//   else if(Browser=="Chrome" || Browser=="Firefox" || Browser=="Safari" || Browser=="Opera"){
//     alert( 'Okay we support these browsers too' );
//   }
//   else if(Browser== "Opera"){
//     alert( 'Okay we support these browsers too' );
//   }
//   else{
//     alert( 'We hope that this page looks ok!' );
//   }


// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');


// const number = +prompt("Введите число","");
//   switch(number){
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//   };

// function showMessage() {
//     alert( 'Всем привет!' );
//   };

//   showMessage();


// let userName = 'Вася';

// function showMessage() {
//   userName = "Петя"; // (1) изменяем значение внешней переменной

//   let message = 'Привет, ' + userName;
//   alert(message);
// }

// alert( userName ); // Вася перед вызовом функции

// showMessage();

// alert( userName ); // Петя, значение внешней переменной было изменено функцией
//Но если захуярить let перед userName, создав новую локальную переменную, внешняя не поменяется.

// let from; let text;
// function showMessage(from, text) { // параметры: from, text
//     alert(from + ': ' + text);
//   }
  
//   showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
//   showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)
  
//   alert(from);
//   alert(text);





//   function showMessage(from, text = "текст не добавлен") {
//     alert( from + ": " + text );
//   }
  
//   showMessage("Аня"); // Аня: текст не добавлен
//  alert( showMessage() === undefined )

//   function showMessage(from, text = anotherFunction()) {
    // anotherFunction() выполнится только если не передан text
    // результатом будет значение text
  //}

//   function sum(a, b) {
//     return a + b;
//   }
  
//   let result = sum(1, 2);
//   alert( result ); // 3
//   alert(sum);
//   alert(sum);


// function checkAge(age) {
//     age = prompt('Сколько вам лет?', 18);
//     if (age >= 18) {
//       alert( 'Доступ получен' );
//       return true;
//     } else {
//       return confirm('А родители разрешили?');
//     }
//   }

//   function showMovie(age) {
//     if ( !checkAge(age) ) {
//       alert( 'Доступ закрыт' );
//       return;
//     }
  
//     alert( "Вам показывается кино" ); // (*)
//     // ...
//   }
//   showMovie();


// function showPrimes(n) {

//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     alert(i);  // простое
//   }
// }

// function isPrime(j) {
//   for (let i = 2; i < j; i++) {
//     if ( j % i == 0) return false;
//   }
//   return true;
// }

// showPrimes(10);


// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }


// function checkAge(age) {
//   age = prompt("How old a u?","");
//   (age>17) || confirm("Родители разрешили?");
// }

// function checkAge(age) {
//   age = prompt("How old a u?","");
//   (age>17) ? alert("Well come to the gym, body!") : confirm("Родители разрешили?");
// }

// checkAge();

// function min(a,b){
//   return (a>b) ? a : b;
// }
// alert(min(101*3,52));



// var summation = function (num) {
//   let x=num-1;
//   let z=num+x;
//   for (;1<num;num--){
//     x-=1; 
//     z+=x; 
//   }
//   return z;
// }
// alert(summation(5));


// function sayHi(x,y) {   // (1) создаём
//   alert( "Привет" );
//   x=y+y;
//   return(x);
// }

// let func = sayHi(1,2);    // (2) копируем

// alert(func); // Привет     // (3) вызываем копию (работает)!
// sayHi(); // Привет    //     эта тоже все ещё работает (почему бы и нет)




// ask("Вы согласны?", showOk, showCancel);

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// function showOk() {
//   alert( "Вы согласны." );
// }

// function showCancel() {
//   alert( "Вы отменили выполнение." );
// }

// // использование: функции showOk, showCancel передаются в качестве аргументов ask



//Мы можем переписать этот пример значительно короче, используя Function Expression:




// ask(
//   "Вы согласны?",
//  function showOk() { alert("Вы согласились."); },
//  function showError() { alert("Вы отменили выполнение."); }
// );

// showOk();




// let ask = function (question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }


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


// function welcome(age){
//   age = prompt("Сколько Вам лет?", 18);
//   (age>17) ? alert("18+") : alert("18-");
// }

// welcome();



//function getNumber(){
//   let x = prompt("Write a number","");
//   let n = prompt("Write pow of this number","");
//   alert (pow(x,n));
//   return x,n;
// }

// function pow(x, n){
//   let z = x * x;
//     if (n > 2){
//       for (;n > 2;n--){
//         z = z * x;
//     } 
//  }
//  return z;
// };
//getNumber();


// describe("pow", function() {

//   describe("возводит x в степень 3", function() {

//     function makeTest(x) {
//       let expected = x * x * x;
//       it(`${x} в степени 3 будет ${expected}`, function() {
//         assert.equal(pow(x, 3), expected);
//       });
//     }

//     for (let x = 1; x <= 5; x++) {
//       makeTest(x);
//     }

//   });

//   describe("возводит x в степень 4", function() {

//     function makeTest(x) {
//       let expected = x * x * x * x;
//       it(`${x} в степени 4 будет ${expected}`, function() {
//         assert.equal(pow(x, 4), expected);
//       });
//     }

//     for (let x = 1; x <= 5; x++) {
//       makeTest(x);
//     }

//   });

//   describe("pow", function() {

//     // ...
  
//     it("для отрицательных n возвращает NaN", function() {
//       assert.isNaN(pow(2, -1));
//     });
  
//     it("для дробных n возвращает NaN", function() {
//       assert.isNaN(pow(2, 1.5));
//     });
  
//   });
//   ... другие тесты. Можно писать и describe, и it блоки.
//   describe("тест", function() {

//     before(() => alert("Тестирование началось – перед тестами"));
//     after(() => alert("Тестирование закончилось – после всех тестов"));
  
//     beforeEach(() => alert("Перед тестом – начинаем выполнять тест"));
//     afterEach(() => alert("После теста – заканчиваем выполнение теста"));
  
//     it('тест 1', () => alert(1));
//     it('тест 2', () => alert(2));
  
//   });
// });



// let sum = (a, b) => a + b;

// /* Эта стрелочная функция представляет собой более короткую форму:

// let sum = function(a, b) {
//   return a + b;
// };
// */

// alert( sum(1, 2) ); // 3


// let age = prompt("Сколько Вам лет?", 18);

// let welcome = (age < 18) ?
//   () => alert('Привет!') :
//   () => alert("Здравствуйте!");

// welcome();


// let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
//   let result = a + b;
//   return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
// };

//alert( sum(1, 2) ); // 3


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }


// let ask = (question, yes, no) => (confirm(question)) ? yes() : no();

// ask(
//   "Вы согласны?",
//   () => { alert("Вы согласились."); },
//   () => { alert("Вы отменили выполнение."); }
// )

  

// alert("После этого сообщения ждите ошибку");

// [1, 2].forEach(alert)

//alert ("1"<"a");


// function hello(name) {
//   let phrase = `Привет, ${name}!`;

//   debugger;  // <-- тут отладчик остановится

//   say(phrase);
// }



// function hello(name) {
//   let phrase = `Hello, ${name}!`;

//   say(phrase);
// }

// function say(phrase) {
//   alert(`** ${phrase} **`);
//}


// let user = {     // объект
//   name: "John",  // под ключом "name" хранится значение "John"
//   age: 30,        // под ключом "age" хранится значение 30
//   "suck Ass" : true
// };

// user.isAdmin = true;

// alert(user.isAdmin);
// delete user.age;
// alert(user.suck Ass);

//  let user = {
//   key: "suck a dick",
//  };

// // присваивание значения свойству
// user["likes birds"] = true;

// // получение значения свойства
// alert(user["likes birds"]); // true

// // удаление свойства
// delete user["likes birds"];


// то же самое, что и user["likes birds"] = true;
// user[key] = true;

// alert(user["suck a dick"]);



// let user = {
//   name: "John",
//   age: 30
// };

// let key = prompt("Что вы хотите узнать о пользователе?", "name");

// // доступ к свойству через переменную
// //Запись «через точку» такого не позволяет
// alert( user[key] ); // John (если ввели "name")




// let fruit = prompt("Какой фрукт купить?", "apple");

// let bag = {
//   [fruit]: 5, // имя свойства будет взято из переменной fruit
// };

// alert( bag.apple ); // 5, если fruit="apple"

// let fruit = 'apple';
// let bag = {
//   [fruit + 'Computers']: 5 // bag.appleComputers = 5
// };



// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age
//     // ...другие свойства
//   };
// }

// let user = makeUser("John", 30);
// alert(user.name); // John



//Вместо name:name мы можем написать просто name:

// function makeUser(name, age) {
//   return {
//     name, // то же самое, что и name: name
//     age   // то же самое, что и age: age
//     // ...
//   };
// }
// //Мы можем использовать как обычные свойства, так и короткие в одном и том же объекте:

// let user = {
//   name,  // тоже самое, что и name:name
//   age: 30
// };


// let obj = {
// __proto__ : 5, // присвоим число
// };
// alert(obj.__proto__);



// let user = { name: "John", age: 30 };

// alert( "age" in user ); // true, user.age существует
// alert( "blabla" in user ); // false, user.blabla не существует

// let user = { age: 30 };

// let key = "age";
// alert( key in user ); // true, имя свойства было взято из переменной key


// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };

// for (let huy in user) {
//   // ключи
//   alert( huy );  // name, age, isAdmin
//   // значения ключей
//   alert( user[huy] ); // John, 30, true
// }


// alert(Number("1.2")+2);




// let user = {};
// user.name = "John";
// user.surName = "Smith";
// user.name = "Pete";
// delete user.name;

// alert(user.surName);


// let schedule = {};

// schedule["8:30"] = "get up";

// // alert( isEmpty(schedule) ); // false

// let isEmpty = (schedule) => ("8:30" in schedule) ? false : true;

// alert( isEmpty(schedule) ); // true


// let schedule = {};

// schedule["8:30"] = "get up";

// let isEmpty = (schedule) => { for (let key in schedule){
//   return false;
// }
// return true;
// }

// alert( isEmpty(schedule) ); // true



// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let calculateSalaries = () => {
//   let sum = salaries.John+salaries.Ann+salaries.Pete;
//   for (let key in salaries){
//     return sum;
//   }
//   return 0;
// }

//alert(calculateSalaries());

// let salaries = {
//   John: 100,
//   //Ann: 160,
//   Pete: 130
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// alert(salaries[key]); // 390



// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

// let multiplyNumeric = () => {
// menu.width*=2;
// menu.height*=2;
// }

// // // после вызова функции
// // menu = {
// //   width: 400,
// //   height: 600,
// //   title: "My menu"
// // };

// multiplyNumeric();
// alert(menu.width);

// let multiplyNumeric = () => {
//   for (let key in menu){
//    if (typeof menu[key]==="Number") {
//     menu[key]*=2;
//    }
//   }
// }
// multiplyNumeric();
// alert(menu.height);

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }

// let user = {
//   name: "John",
//   age: 30
// };

// let clone = {}; // новый пустой объект

// // давайте скопируем все свойства user в него
// for (let key in user) {
//   clone[key] = user[key];
// }

// // теперь clone это полностью независимый объект с тем же содержимым
// clone.name = "Pete"; // изменим в нём данные

// alert( user.name ); // все ещё John в первоначальном объекте


// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // копируем все свойства из permissions1 и permissions2 в user
// Object.assign(user, permissions1, permissions2);

// // теперь user = { name: "John", canView: true, canEdit: true }


// let user = { name: "John" };

// Object.assign(user, { name: "Pete" });

// alert(user.name); // теперь user = { name: "Pete" }


// Мы также можем использовать Object.assign для замены цикла for..in для простого клонирования:

// let user = {
//   name: "John",
//   age: 30
// };

// let clone = Object.assign({}, user);
// Он копирует все свойства user в пустой объект и возвращает его.


// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// alert( user.sizes.height ); // 182


// var objects = [{ 'a': 1 }, { 'b': 2 }];
 
// var deep = _.cloneDeep(objects);
// console.log(deep[0] === objects[0]);
// // => false


// function marry(man, woman) {
//   woman.husband = man;
//   man.wife = woman;

//   return {
//     father: man,
//     mother: woman
//   }
// }

// let family = marry({
//   name: "John"
// }, {
//   name: "Ann"
// });
// Функция marry «женит» два объекта, давая им ссылки друг на друга, и возвращает новый объект, содержащий ссылки на два предыдущих.

// В результате получаем такую структуру памяти:

// let user = {
//   name: "John",
//   age: 30
// };

// user.sayHi = function() {
//   alert("Привет!");
// };

// user.sayHi(); // Привет!

// Конечно, мы могли бы использовать заранее объявленную функцию в качестве метода, вот так:

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


// эти объекты делают одно и то же

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
// };


// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     // "this" - это "текущий объект".
//     alert(this.name);
//   }

// };

// user.sayHi(); // John


// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   alert( this.name );
// }

// // используем одну и ту же функцию в двух объектах
// user.f = sayHi;
// admin.f = sayHi;

// // эти вызовы имеют  разное значение this
// // "this" внутри функции - это объект "перед точкой"
// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)

// admin['f'](); // Admin (нет разницы между использованием точки или квадратных скобок для доступа к объекту)


// let user = {
//   name : "Pidor",
//   fuckYou : function() {
//     alert(`Fuck you ${this.name}`);
//   }
// }

// user.fuckYou();

// let user = {
//   firstName: "Ilya",
//   sayHi() {
//     let arrow = () => alert(this.firstName);
//     arrow();
//   }
// };

// user.sayHi(); // Ilya
// Это особенность стрелочных функций. Она полезна, когда мы на самом деле не хотим иметь отдельное this, а скорее хотим взять его из внешнего контекста. Позже в главе Повторяем стрелочные функции мы увидим больше примеров на эту тему.


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

// let calculator = {
//   userFunction : prompt("Сложение, вычитание, деление или умножение?",""),

//   firstNumber : Number(prompt(`Введиие первое число для того, чтобы совершить ${this.userFunction}`,"")),
//   secondNumber : Number(prompt(`Введиие второе число для того, чтобы совершить ${this.userFunction}`,"")),

//   sum () {
//     return this.secondNumber+this.firstNumber
//   },

//   mul () {
//     return this.firstNumber*this.secondNumber
//   },

//   minus (){
//     return this.firstNumber-this.secondNumber
//   },

//   dash (){
//     return this.firstNumber/this.secondNumber
//   },

// calculate (){
// if ((this.userFunction === "сложение") || (this.userFunction === "Сложение")) { 
//   alert(this.sum())
// } if ((this.userFunction === "умножение") || (this.userFunction === "Умножение")) {
//  alert(this.mul())
// }
// if ((this.userFunction === "вычетание") || (this.userFunction === "Вычетание")){
//   alert(this.minus())
// }
// if ((this.userFunction === "деление") || (this.userFunction === "Деление")){
//   alert(this.dash())
// }
// // else{
// //   alert("Ты, по-моему, что-то перепутала.")
// // }
// }
// }
// calculator.calculate();



// Решение состоит в том, чтобы возвращать сам объект из каждого вызова.

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



// Другими словами, new User(...) делает что-то вроде:

// function User(name) {
//   // this = {};  (неявно)

//   // добавляет свойства к this
//   this.name = name;
//   this.isAdmin = false;

//   // return this;  (неявно)
//}


// Если в нашем коде присутствует большое количество строк, создающих один сложный объект, то мы можем обернуть их в функцию-конструктор, которая будет немедленно вызвана, вот так:

// // создаём функцию и сразу же вызываем её с помощью new
// let user = new function() {
//   this.name = "John";
//   this.isAdmin = false;

//   // ...другой код для создания пользователя
//   // возможна любая сложная логика и инструкции
//   // локальные переменные и так далее
//};

// Такой конструктор не может быть вызван снова, так как он нигде не сохраняется, просто создаётся и тут же вызывается. 
// Таким образом, этот трюк направлен на инкапсуляцию кода, который создаёт отдельный объект, 
// без возможности повторного использования в будущем.


// function User() {
//   alert(new.target);
// }

// // без "new":
// User(); // undefined

// // с "new":
// new User(); // function User { ... }


// Также мы можем сделать, чтобы вызовы с new и без него делали одно и то же:

// function User(name) {
//   if (!new.target) { // в случае, если вы вызвали меня без оператора new
//     return new User(name); // ...я добавлю new за вас
//   }

//   this.name = name;
// }

// let john = User("John"); // переадресовывает вызов на new User
// alert(john.name); // John


// При вызове return с объектом, вместо this вернётся объект.
// При вызове return с примитивным значением, оно проигнорируется.
// Другими словами, return с объектом возвращает этот объект, во всех остальных случаях возвращается this.

// К примеру, здесь return замещает this, возвращая объект:

// function BigUser() {

//   this.name = "John";

//   return { name: "Godzilla" };  // <-- возвращает этот объект
// }

// alert( new BigUser().name );  // Godzilla, получили этот объект

// А вот пример с пустым return (или мы могли бы поставить примитив после return, неважно):

// function SmallUser() {

//   this.name = "John";

//   return; // <-- возвращает this
// }

// alert( new SmallUser().name );  // John



// function User(name) {
//   this.name = name;

//   this.sayHi = function() {
//     alert( "Меня зовут: " + this.name );
//   };
// }

// let john = new User("John");

// john.sayHi(); // Меня зовут: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/



function Calculator (a,b){
  read (){
  this.a : Number(prompt("Press first number","")),
  this.b : Number(prompt("Press second number","")),
  },
  sum{
    return this.a + this.b
  },
  mul {
    return this.a * this.b
  },
}
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
