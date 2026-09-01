let age=67
let f_name="komal"
let x
let y=null                //null means intentionally no value is there where as undefined means we have notdefined it
let z= BigInt("123")     //123n
let k=Symbol("Hello")   //output: Symbol(Hello)  [Refer chatgpt for symbol]

console.log(age,f_name,x,y,z,k)
//console.log ((typeof(age,f_name,x,z)))    //wrong approch. Here by default it will work for z

console.log(typeof age);
console.log(typeof f_name);
console.log(typeof x);
console.log(typeof y);    //null is object type
console.log(typeof z);    //bigint
console.log(typeof k);   //symbol




const student=
{
    fullname: "komal",
    age: 20,
    cgpa: 8.2,
    isPass:true
}

console.log(student)
console.log(typeof student);




//String

let firstName = "Harry";
let lastName = "Potter";
console.log(firstName + " " + lastName);

let name = "Steafn";
let city = "Kolkata";
let result = name + " lives in " + city;
console.log(result);

let name1 = "Ron";
let age1 = 17;
console.log(`My name is ${name1} and I am ${age1} years old.`);    //template literals. JS puts the value of name into the string.string interpolation.


//Number
let price = 99.99;
console.log(price)


//Boolean
let isStudent = true;
let isAdult = false;

console.log(isStudent)
console.log(isAdult)
console.log(typeof isStudent)

let age5 = 18;
console.log(age5 >= 18);    //true


//BigInt
const population = 123456789012345678901234567890n;
console.log(population);                          //bigint is for large number s and we can't write 12.3n

let a1= 10n;
let b1= 5n;
console.log(a1 + b1);

/* 
let a2 = 10n;
let b2 = 5;

console.log(a2 + b2);      //won't work as we can't add big int with other types */    //(type conversion)


//Date  

let today = new Date();    //JS has a built-in Date object
console.log(today);        //will give both date and time
console.log(typeof today);  //object
let date = new Date("2026-08-17");
console.log(date);


//imp
console.log("10" + 5);   //105 (string concartination)
console.log("10" - 5);   //5 (- is a numeric operator, so JavaScript converts "10" into a number.)


