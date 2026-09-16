//hoisting: declaration is processed first in js befor eexecution

//var
console.log(x);
var x=7;


//let
// console.log(y);
// let y = 10;  //reference error

//period between entering the scope and reaching the declaration is called the: Temporal Dead Zone (TDZ)

//var is initialized  before declartion, so undefined. let an dconst are not initialoszed before decaraltion, so refrence error

//function declarations are hoisted with their function definition available.

// greet12();

// var greet12 = function () {
//     console.log("Hello");
// };  //type error

// greet23();

// let greet23 = function () {
//     console.log("Hello");
// };
 //ReferenceError

 //shadowing
 let k= 10;

function testk1() {
    console.log(k);

    let x = 20;
}

testk1();

//object refrence
const atest = {
    name: "Ron"
};

const btest = atest;

btest.name = "harry";

console.log(btest.name);


//
const user = {
    name: "Rahul",
    age: 20
};

console.log("age" in user);
console.log(user.hasOwnProperty("age")) //chk whether it's own or inherited