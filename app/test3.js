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


function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return currentSum;
  }

//   f.toString = function() {
//     return currentSum;
//   };

//   return f;
 
}

alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15