//just print
//for singl eline cmnt: ctrl +/
//for multi line: shift alt a




//console fundamentals
console.log("hello komal")
console.log("25");
console.log(25);
console.log(10 + 20);




//variables (let, var, const)


//let

let name="komal"
console.log(name)             //o/p: komal
// let name="renamed"         (Here will get redeclaration error)
name="tonny stark"            //here variable is updated and not re-declared
console.log(name)             //o/p: tonny stark


let a
console.log(a)               // undefined (bcz it's not initialized)



// let and const are block scoped while var is function scoped



//example 1:
console.log("example 1")
{
    let k=5;
    console.log(k)
}
{
    let k=10;
    console.log(k)      //it's fine and no error as let is scope limited
}

let k="outside scope"
console.log(k)




//example 2
console.log("example 2")
let name1 = "Aman";      // outer scope
if (true) {
let age_test = 17;           //block scope
console.log(name1);          //can access outer variable
console.log(age_test);       //can access own variable
}
console.log(name1);         //works
console.log(age_test);      //error





/* let s=5
s="ks"
console.log(s)  */  //here s will be updated from 5 to ks

/* let x =null
console.log(x)  



let var1=5
var var1=2          //here error
console.log(var1) */

let ages = 17;
console.log(ages);
console.log(ages + 5);
console.log(ages * 2);

//var

//everything fine with var, no restriction

var a1=5
var a1="komal"   //here it's updated and redecalred too which is fine with var
console.log(a1)


var a2
console.log(a2)  //here also undefined, as it's not initialized

//const

/* 
const age=45
age=67   //not possible
console.log(age)
 */

const a3="komals"
console.log(a3)


/* 
const a4;
console.log(a4)  //missing inistialization error */


