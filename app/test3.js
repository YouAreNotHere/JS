"use strick";
// let user = {
//     name: "John",
//     age: 25,
//     roles: {
//       isAdmin: false,
//       isEditor: true
//     }
//   };
  
//   alert(JSON.stringify(user, null, "А"));



// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });

// alert( meetup.date.getDate() ); // 30 

// // for (key in Object.values(meetup)){
// //     alert(key);
// // }

// alert(Object.entries(meetup));


// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };

// let secondList = list.next.next;
// list.next.next = null;
// list.next.next = secondList;

// alert(list.next.next);
// alert(secondList);


// function sumTo(n){
//     let sum = 0;
//     for (let i = 0; i < n+1; i++){
//         sum += i;
//     }
//     alert(sum);
// }

// sumTo(100);

// function sumTo(n){
//     if (n == 1){
//         return 1;
//     }
//     else {
//      return n + sumTo(n-1);
//     }};

// alert(sumTo(100));

// function sumTo(n){
//     return (n*(n+1))/2
// }

// alert(sumTo(3));


// function factorial(n){
//     if (n == 1) {
//         return 1;
//     }
//     else {
//         return n * factorial(n-1);
// }}

// alert(factorial(5));


// function fib(n){
//     if (n <= 2){
//         return 1;
//     }
//     else {
//        return fib(n-1) + fib(n-2);
//     }
// }

// alert(fib(6));


// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };

//   function printList(huy){
//     alert (huy.value);
//     if (huy.next == null) return
//     printList(huy.next);
//   }

// printList(list);

// function printList(list){
//     if (list.next){
//     printList(list.next);
//     }
//     alert(list.value)
// };

// function printList(list){
//     let tm = list;
//     for (;tm;){

//         tm = tm.next;
//     }
//     for (;tm;){
//         alert(tm.value);
//     }
// }


// function huy(a,b){
    
//     return function zhopa(a,b){ 
//         return a+a+b
//     }
// }

// alert(huy(7,3));


// function f() {
//     let value = Math.random();
  
//     return function() { alert(value); };
//   }
  
//   // 3 функции в массиве, каждая из которых ссылается на лексическое окружение
//   // из соответствующего вызова f()
//   let arr = [f(), f(), f()];

// //  for (let key of arr){
// //     key();
// //   }

// alert(arr[0]());



// function flow () {
//     let value = Math.random();
  
//     function g() {
//       debugger; // в консоли: напишите alert(value); Такой переменной нет!
//     }
//   alert(value);
//     return g;
//   }
  
//   let g = flow();
//   g();


// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi(); // что будет показано: "John" или "Pete"?

// name = "Pidor";



// function sum (a){
//     //let a = a;
//     return function c (b){
//         return a+b;
//     }
// }

// alert(sum(1)(2));


//let x = 1;

// function func() {
//     alert(x);
//   console.log(x); // ReferenceError: Cannot access 'x' before initialization
//   //let x = 2;
// }

// func();


//  let arr = [1, 2, 3, 4, 5, 6, 7];

// let someArr = [1,2,7];

// let us = arr.filter(item => someArr.includes(item));
// alert(us);


// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];
  
  // возвращает массив, состоящий из двух первых пользователей

//   function zhopa (a){
//     return function f(x){
//         return x.id<a;
//     }
//   };

//  // let someUsers = users.filter(zhopa(3));
  

//   alert(someUsers.length); // 2


// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
//   ];


// function byField (Name){
//     return function f (a,b){
//         return a[Name] > b[Name] ? 1 : -1;
//     }
// }

// users.sort(byField('age'));

// // function zhopa (arr){
// //     if (Array.isArray(arr)) {
// //         zhopa(item);
// //     }
// //     alert(arr.name);
// // }

// let json = JSON.stringify(users);
// alert(json);


// function makeCounter() {
//   let count = 0;

//   return function() {
//     return ++count;
//   };
// }

// let counter = makeCounter();
// alert(makeCounter()());
// alert(counter());


// function makeArmy() {
//   let shooters = [];

//   for (let i = 0; i < 10;i++){
//     function shooter (){
//       alert(i);
//     }
//     shooters.push(shooter);
//   }



// let i = 0;
// while (i < 10) {
//   let h = i;
//   let shooter = function() { // функция shooter
//     alert( h ); // должна выводить порядковый номер
//   };
//   shooters.push(shooter); // и добавлять стрелка в массив
//   i++;
// }


// //   // ...а в конце вернуть массив из всех стрелков
//    return shooters;
//  }

// let army = makeArmy();

// army[0](); // 10 от стрелка с порядковым номером 0
// army[4](); // 10 от стрелка с порядковым номером 1
// army[2]();


// function reverseWords(str){
//   arr = str.split(" ")
//   revArr =  arr.reverse()
//     return revArr.join(" "); // reverse those words
// }

// alert(reverseWords("Я вчера порезал вены и забрызгал"));


// function ask(question, ...handlers) {
//   let isYes = confirm(question);

//   for(let handler of handlers) {
//     if (handler.length == 0) {
//       if (isYes) handler();
//     } else {
//       handler(isYes);
//     }
//   }

// }

// // для положительных ответов вызываются оба типа обработчиков
// // для отрицательных - только второго типа
// ask("Вопрос?", () => alert('Вы ответили да'), result => alert(result));


// function makeCounter() {

//   function counter() {
//     return counter.count++;
//   };

//   counter.count = 0;
  
//   counter.set = (value) => {
//     counter.count = value;
//     return counter.count;
//   }

//   counter.decrease = () => --counter.count;

//   return counter;
// }

// let counter = makeCounter();
// alert(counter.set(15));
// alert(counter.decrease());


// function sum(a) {

//   let currentSum = a;

//   function f(b) {
//     currentSum += b;
//     return currentSum;
//   }

// //   f.toString = function() {
// //     return currentSum;
// //   };

// //   return f;
 
// }

// alert( sum(5)(-1)(2) ); // 6
// alert( sum(6)(-1)(-2)(-3) ); // 0
// alert( sum(0)(1)(2)(3)(4)(5) ); // 15


// function some(a,b){
//   return function(){
//     return a+b;
//   }
// };

// alert(some(1,2)());


// function Person (name,age) {
//   //return this.name + "age is" + this.age;
//   this.name = name;
//   this.age = age;
//   function constructor (name, age){
//     return name + age;
//   }
// };

// const john = new Person("John", "34");

// alert(john.constructor);


// let arr = [1,-2,-3,4,5,6,7,-8,-9,10];

// function positiveSum(arr) {
//   const result = arr.reduce((sum, current) => (current > 0) ? current + sum : sum,0);
//   return result;
// }

// alert(positiveSum(arr));



// let i = 0;
// let sum = 0;

// function culc (n){
//   i++;
//   sum += i;
//   if (sum < n){
//     culc(n);
//   }
//   return i;
// }

// alert(culc(11));


// const f = {
//   someMethod(){
//     return "Wow"
//   },

//   slow(...arguments){
//   alert(arguments[0] + " " + this.someMethod());
//   alert(arguments[1] + " " + this.someMethod());
//   },

// }

// function delay (func, time){
//   return function (){
//     let savedThis = this;
//     return setTimeout(() => func.apply(this, arguments), time);
//     //return setTimeout(func.call(this, ...arguments), time);
//   }
// }

// f.slow = delay(f.slow, 10000);


// f.slow("test", "script"); // показывает "test" после 1000 мс


//!!!Почему вообще this передается из ссылки? Как delay(f.slow("test","script")); передает this??


// let user = {
//   firstName: "Ilya",
//   sayHi() {
//     function arrow () { alert(this.firstName)};
//     arrow.call();
//   }
// };

// user.sayHi(); // Ilya


// let func = (x) => alert (x);

// function debounce(func, ms) {
//   let timeout;
//   return function() {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, arguments), ms);
//   };
// }

// a = debounce(func, 5000);
// d = debounce(func, 300);
// c = debounce(func, 400);

// a(1);
// d(2);
// c(3);

// let arr = [78,56,232,12,8];

// let SmallestIntegerFinder = (arr) =>{
//   return arr.reduce((small, current) => (small > current) ? small = current : small)
// }

// alert(SmallestIntegerFinder(arr));



// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x = 3) {
//     // здесь может быть страшно тяжёлая задача для процессора
//     //alert("Called with " + x);
//     alert( x * this.someMethod()); // (*)
//   }
// };

// worker.slow(2);
// //worker.slow = worker.slow(4);
// // function someFunction (func, time){
// //   func(3);
// //   alert(time);
// // }
// // someFunction(worker.slow,200);
// // setTimeout(worker.slow,10000); // Почему теряется контекст, хотя если вызывать без setTimeout не теряется.

// f = function(){
//   return worker.slow();
// }
// f();


// function mul(a, b) {
//   let c = a * b;
//   return function (x){
//     return x+c;
//   }
// }

// let double = mul.bind(null, 2);
// alert(double(3)(4));



// function partial(func, ...argsBound) {
//   return function(...args) { // (*)
//     let newFunc = func.bind(this, ...argsBound, ...args);
//     return newFunc();
//   }
// }

//использование:
// let user = {
//   firstName: "John",
//   say(time, phrase) {
//     alert(`[${time}] ${this.firstName}: ${phrase}!`);
//   },
//   //sayNow : this.say.bind(this, new Date().getHours() + ':' + new Date().getMinutes()),
// };

// user.sayNow = user.say.call(this, new Date().getHours() + ':' + new Date().getMinutes());
// // //user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

// user.sayNow("Hello");
// alert(newSayNow.say);

// // более простой пример
// function foo(p1,p2) {
// 	this.val =  p1 + p2;
// }

// var bar = foo.bind( null, 1 );

// var baz = new bar( 2);

// alert(baz.val); // p1p2



// const disemvowel = (str) => { 
//   const vowels = ["e", "y", "u", "i", "o", "a"];
//   let arr = str.split(" ");
//   let newArr = [];
  
//   for (let word of arr){
//     word = word
//     .split("")
//     .filter(item => !(vowels.includes(item.toLowerCase())))
//     .join("");
//     newArr.push(word);
// };
  
//   return newArr.join(" ");
// }

// alert(disemvowel("This website is for losers LOL!"))



function highAndLow(numbers){
  let firtsAndLastLetter = [];
  let set = new Set();
  let arr = numbers.split(" ");
  arr = arr.map(item => Number(item));
  arr = arr.sort((a,b) => b - a);
  for (let key of arr){
    (key === arr[0] || key === arr.at(-1)) ? set.add(key) : key
  };
  for (let value of set){
    firtsAndLastLetter.push(value)
  };
  
  return firtsAndLastLetter.join(" ");
}
//set не подходит, нужно чтобы свойства коллекции дублировались, но один раз

alert(highAndLow("8 3 -5 42 -1 0 0 -9 4 0 0 0 7 4 -4 0 0 0"));
alert(highAndLow("42 42 42 42"));