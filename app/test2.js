"use strick";
let Calculator = function (a,b){

let read = function() {
  this.a = Number(prompt("Press first number",""));
  this.b = Number(prompt("Press second number",""));
  return this.a, this.b
  };

 function sum () {
    return this.a + this.b
  };

 function mul () {
    return this.a * this.b
  };

}
let calculator = new Calculator();
Calculator.read();

alert( "Sum=" + Calculator.sum() );
alert( "Mul=" + calculator.mul() );

