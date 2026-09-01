let a=10;
let b=5;
let c=a+b;
console.log(c);
let d=a-b;
console.log(d);
let e=a*b;
console.log(e);
let f=a/b;
console.log(f);
let g=a%b;
console.log(g);
let h=a**b;
console.log(h);


// Output based on concatenation of strings and numbers
//If either side is a string, + generally becomes concatenation. Otherwise, it performs numeric addition.
let str1="Hello";
let str2="World";
let str3=str1+str2;
console.log(str3);

let str4=str1+" "+str2;
console.log(str4);
let str5=str1+10;
console.log(str5);

let str6=10+str1;
console.log(str6);
let str7=str1+true; // true is converted to string "true"
console.log(str7);

let str8=true+str1; // true is converted to string "true"
console.log(str8);

let str9=str1+null; // null is converted to string "null"
console.log(str9);

let str10=null+str1; // null is converted to string "null"
console.log(str10);

let str11=str1+undefined; // undefined is converted to string "undefined"
console.log(str11);

let str12=undefined+str1; // undefined is converted to string "undefined"
console.log(str12);

let str13=null+undefined; // both are not strings, so it performs numeric addition. null is converted to 0 and undefined is converted to NaN, resulting in NaN.
console.log(str13);



// Output based on arithmetic operations with different data types
let num1=10;
let num2="5";
let num3=num1+num2;
console.log(num3); // Output: "105" (string concatenation)

let num4=num1-num2;
console.log(num4); // Output: 5 (numeric subtraction)

let num5=num1*num2;
console.log(num5); // Output: 50 (numeric multiplication)

let num6=num1/num2;
console.log(num6); // Output: 2 (numeric division)

let num7=num1%num2;
console.log(num7); // Output: 0 (numeric modulo)

let num8=num1**num2;
console.log(num8); // Output: 100000 (numeric exponentiation)

let num9=num1+true; // true is converted to 1
console.log(num9); // Output: 11 (numeric addition)

let num10=num1+false; // false is converted to 0
console.log(num10); // Output: 10 (numeric addition)    

let num11=num1+null; // null is converted to 0
console.log(num11); // Output: 10 (numeric addition)

let num12=num1+undefined; // undefined is converted to NaN
console.log(num12); // Output: NaN (numeric addition)


let test=null-undefined; // null is converted to 0 and undefined is converted to NaN, resulting in NaN.
console.log(test); // Output: NaN (numeric subtraction)

let test1=undefined-null; // undefined is converted to NaN and null is converted to 0, resulting in NaN.
console.log(test1); // Output: NaN (numeric subtraction)

let test2=null-"10"; // null is converted to 0 and "10" is converted to 10, resulting in -10.
console.log(test2); // Output: -10 (numeric subtraction)

let test3=null+"10"; // null is not converted to a number because the + operator is used with a string, resulting in string concatenation.
console.log(test3); // Output: null10 (string concatenation)

// Output based on arithmetic operations with boolean values
let bool1=true;
let bool2=false;
let bool3=bool1+bool2;
console.log(bool3); // Output: 1 (numeric addition, true is converted to 1 and false is converted to 0)

let bool4=bool1-bool2;
console.log(bool4); // Output: 1 (numeric subtraction, true is converted to 1 and false is converted to 0)

// subtraction
let ks5=null-true; // null is converted to 0 and true is converted to 1, resulting in -1.
console.log(ks5); // Output: -1 (numeric subtraction)


console.log([] + []); // empty arrays become empty strings.Concatenating two empty strings results in a single empty string
console.log({} + []); //  the empty object becomes “[object Object]” and the empty array becomes an empty string,
console.log([] + {}); // 
console.log({} + {}); // both becomes “[object Object]”, and concatenating these strings results in “[object Object][object Object]”

console.log(5+[]);
console.log({}+5);
console.log("test"+[]);
console.log({}+"test");


