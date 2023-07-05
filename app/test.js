"use strict";
// var nastyaSpeed = 15;
// var antonSpeed = 14;
// var time = 3;
// var nastyaDistance = nastyaSpeed * time;
// var antonDistance = antonSpeed * time;
// var totalDistance = antonDistance + nastyaDistance;

var calculateDistance = function(time, nastyaSpeed, antonSpeed){
  
var nastyaDistance = nastyaSpeed * time;
var antonDistance = antonSpeed * time;
var totalDistance = antonDistance + nastyaDistance;
  
return totalDistance;
};
//console.log(calculateDistance(3, 12, 15)*3);

var firstDistance = calculateDistance(3,12,14)*3;
var secondDistance = calculateDistance(2,5,13);

console.log(firstDistance, secondDistance);
  
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

var buyBread = function(eggs){
    return eggs ? 13 : 3;
};

console.log(buyBread(true));

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




let counter = 1;
let a = counter++ +2; 

let b = counter+2;

alert(b); 

