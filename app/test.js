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
//Если идёт сравнение, знак вопроса и последующие тру и фолс можно
//опустить, т.к. сравнение уже само себе подразумеват тру и фолс
//типа:

// let alcoholAllowed 
// let age = prompt("How old a u?", "");

// alcoholAllowed = age>18;

// alert(alcoholAllowed);


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



let userName = prompt("Press ur login name","");
let userPassword;

if (userName == "Админ"){
    userPassword = prompt("Press ur password","");
    if (userPassword == "Я главный"){
        alert("Здравствуйте");
    }
    else if (userPassword == NaN || undefined){
        alert("Отменено");
    }
    else if (!(userPassword == "Я главный")) {
        alert("Неверный пароль");
    }
}
else if (userName == undefined||NaN){
    alert("Отменено");
}
else if (!(userName =="Админ")){
    alert("Я Вас не знаю");
};

