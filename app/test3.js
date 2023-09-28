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


// let user = {
//   name: "Василий Иванович",
//   age: 35
// };

// let str = JSON.stringify(user);
// let user2 = JSON.parse(str);
// alert(typeof(user2));
// alert(user2.name);


// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//   place: room
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// // const huy = JSON.stringify(meetup, function replacer(key, value){
// //   return (value == "meetup") ? undefined : value;
// // });

// // alert(huy);

// alert( JSON.stringify(meetup, function replacer(key, value) {
//   return (key != "" && value == meetup) ? undefined : value;
// }));

// alert( JSON.stringify(meetup, function replacer(key, value) {
//   return (key != "" && value == meetup) ? undefined : value;
// }));


function sum(a,b){
  const c = a + b;
  sum(a,b);
  return c;
}

alert(sum(2,3));