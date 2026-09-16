// function passed as an argument to another function, which can be executed later by the receiving function.


function test(){
    console.log("hii test");
}

const rty=test;  //give me test
test();          //call test()
console.log(rty);  //[Function: test]

//hii komal

console.log("hii komal");

//using function
function names(){
    console.log("hii komal");
}
names()

//using parameters
function test2 (name1){
    console.log(`hii ${name1}`)
}
test2("komal");

//uisng call back

function mainFunction(myName){
    console.log(`hii ${myName} `)
}
 function  secondFunction(callback1){
    callback1("komal")

 }
secondFunction(mainFunction);

//addition of 2 numbers using call back
function addition(a1,b1){
    console.log(a1+b1)
}
function secondary(callback3){
    callback3(3,4)
}
secondary(addition)

//setTimeout(..., 2000);

console.log



