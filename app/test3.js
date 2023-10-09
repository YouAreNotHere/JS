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


let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  function printList(list){
    if (this.next == null) { // случай (1)
        alert(this.value);
        next = null;
      } else { // случай (2)
        let sum = 0;
        for (let values of Object.values(list)) {
          printList(list); // рекурсивно вызывается для подотделов, суммируя результаты
        }
      }
  }

  printList(list);