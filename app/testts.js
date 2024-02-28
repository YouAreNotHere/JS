// const numberArr : number[] = [1,2,3,4,5];
// const numberArr2 : Array<number> = [2,4,8,18];
//
// //tuple
// const contact : [string, number] = ["Anton", 89220274819];
//
// //any
// let variable : any = "Variable";
// variable = 123;
//
// //void = функция ничего не возвращает
// function sayMyName (name : string){
//     console.log(name)
// }
// sayMyName("Anton");
//
// //never = функция, которая не выполнится (будет ошибка или бесконечный цикл)
// function returnThrow (someArg : string) :never{
//     throw new Error("Some Error")
// }
// //returnThrow("Wow");
//
// //type для создание собственного типа
// type Login = string;
// const userName : Login = "Malferety";
// const userName2 : Login = 2;
//
// type Birthday = string | number;
// const myBirthday : Birthday = 1997;
// const nasyaBirthday : Birthday = "Тысяча девятьсот девяносто девятый";
// const antonBirthday : Birthday = true;
//
// //interface
//
// interface Rect{
//     readonly id : number //опция readonly - только для чтения
//     color? : string //? делает поле не обязательным параметром
//     size: {
//         width : number;
//         height : number;
//     }
// }
//
// const rect1 : Rect = {
//     id : 1234,
//     size :{
//         width : 100,
//         height: 200,
//     },
//     something : 12233,
// }
//
// rect1.color = "white";
// rect1.id = 223;
//
// const rect2 = {} as Rect;
// const rect3 = <Rect>{};
//
// //extends расширяет как класс
// interface RectWithArea extends Rect{
//     getNumber: () => number
// }
// const rect4 : RectWithArea = {
//     id : 5,
//     size : {
//         width : 33,
//         height : 10,
//     },
//     getNumber(): number {
//         return this.size.width * this.size.height
//     },
// }
// //implements позволяет наследовать классу
//
// interface IClock{
//     time : Date
//     setTime (date : Date) : void
// }
//
// class Clock implements IClock{
//     time: Date = new Date();
//     setTime(date: Date): void {
//         this.time = date;
//     }
// }
//
// //В квадратных скобках интерфейса можно указать тип поля, если нет возможности указать все возможные варианты полей.
//
// interface Styles{
//     [key : string]: string
// }
//
// const css : Styles ={
//     border : "2x, 2x, 2x, 2x",
//     marginTop : "100px",
//     borderRadius : "5px",
// }
//
// //Enum сущность для создания разнообразных объектов
//
// enum Membership{
//     Simple,
//     Standart,
//     Pro
// }
//
// const membership = Membership.Standart
// console.log(membership) //будет выведено 1, т.к. Standart второй элемент (0,1,2)
// const membership2 = Membership[2]
// console.log(membership2) //Будет выведено Pro
//
// enum SocialMedia {
//     VK = "VK",
//     INSTAGRAM = "Instagram",
//     YOUTUBE = "Youtube",
// }
//
// const social = SocialMedia.INSTAGRAM
// console.log(social)
//
// //functions
//
// function add (a: number, b : number): number{
//     return a+b
// }
//
// function toUpperCase (str: string): string{
//     return str.trim().toUpperCase()
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Обозначаем, заранее, если такие-то переменные переданы, должен возвратиться такой то объект
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, b: undefined, default: a.toString() };
    }
    if (a && b) {
        return { x: a, y: b };
    }
}
console.log("Empty:", position());
console.log("One param:", position(40));
console.log("Two param:", position(40, 20));
//Классы
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[".concat(name, ": Typescript version is ").concat(this.version);
    };
    return Typescript;
}());
//class Car{
//readonly model: string //Не смотря на то, что model имеет readonly,
//мы можем его перезапесать, но только внутри конструктора
//readonly numberOfWheels : number = 4
//constructor(theModel: string) {
//this.model = theModel;
//}
//}
//Более короткая запись того же самого класса Car
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
    }
    return Car;
}());
//Модификаторы классов
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = ""; //К этой строке можно иметь доступ из самого класса
        //и наследуемых классов и объектов. Например нельзя поменять через Animal.voice
        this.color = "black"; //Полный доступ, модификатор по умолчанию
        this.go();
    } //Будет работать
    Animal.prototype.go = function () {
        console.log("Go");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice; //Обращаемся к protected свойству voice
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.setVoice("test"); // Работает
cat.color; // Work
//Абстрактные классы - классы, которые не отображаются в JS, нужны только для наследования
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log("Render");
    };
    AppComponent.prototype.info = function () {
        return "Some str";
    };
    return AppComponent;
}(Component));
