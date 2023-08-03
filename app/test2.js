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

function Accumulator (value) {
  value : value,
  
  this.read = function (i) {
    this.value += Number(prompt("Введите числитель",""));
    //this.value += i;
  };

  return this.value
}

let accumulator = new Accumulator(2); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value);