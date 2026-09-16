// | Keyword | Scope           |
// | ------- | --------------- |
// | `var`   | Function scoped |
// | `let`   | Block scoped    |
// | `const` | Block scoped    |



//scope:where a variable can be accessed.

let names = "komal";

function f1() {
    console.log(names);
}

f1();

//

let count = 5;

function test() {
    console.log(count);
}

function test2() {
    console.log(count);
}

test();
test2();

//

if (true) {
    let x = 100;
    console.log(x);
}

//console.log(x); //referenceerror

{
    const name = "komal";

    console.log(name);
}

//console.log(name); // ERROR

{
    var z = 10;
}

console.log(z);

//function scope

function testks() {
    var k = 10;

    console.log(k);
}

testks();

//console.log(k);


//practice
function calculate() {
    let x = 10;
    let y = 20;

    console.log(x + y);
}

calculate();

//
let a1 = 10;

function test() {
    let b1 = 20;

    console.log(a1); //10
    console.log(b1); //20
}

test();

console.log(a1); //10
//console.log(b1); //error