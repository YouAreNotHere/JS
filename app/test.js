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



let age = Number (prompt('Сколько тебе лет?', 26)); //Number преобразовывает результат в числа, т.к. промт (вопрос алертом) записывает значение переменной в строку.

// alert(`Тебе ${age} лет!`); 

//let age = prompt("How old a u?",[26]);

//age = Number(age);
alert(typeof age);
//Но проще так
//alert(Number(age))