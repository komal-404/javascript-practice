let age = 20;
console.log(age >= 18 && age <= 60); //t

let age1 = 17;
console.log(age1< 18 || age1 > 60); //t

console.log(!true);

let age2 = 20;
let marks = 85;
console.log(age2 >= 18 && marks >= 40); //t

//JavaScript's && and || don't necessarily return only true or false. They can return one of the operands.
//&& — returns the first falsy value, otherwise the last value
//|| — returns the first truthy value

let result = "hello" && "world";
console.log(result);           //world  //chk


let result2 = 10 && 0 && 20;
console.log(result2);   //0

let result3 = 0 || 20;
console.log(result3); //20

let result4 = 10 || 20;
console.log(result4);  //10


let username = "";
let name = username || "Guest";
console.log(name);

console.log(!"");
console.log(!"hello");
console.log(!!10);











//short-circuit evaluation.
// Since AND requires both conditions to be true, if the first condition is already false, JavaScript doesn't need to evaluate the
// second part in many cases.
// Similarly:
// true || something
// is already guaranteed to be true.

// This behavior is called short-circuit evaluation.