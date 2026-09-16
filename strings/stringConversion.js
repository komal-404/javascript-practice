let str="123abc";
let num=Number(str);
console.log(num);  //NaN
console.log(typeof num);
console.log(parseInt(str)); //123

console.log(parseFloat("12.50"));
console.log(Number("12.5"));


console.log (isNaN (num));

//string to array
let str2="hello";
console.log(str2.split(""));
let str3="the test is fine";
console.log(str3.split(" "))

//string to array
let k="komal";
q=k.split("");
console.log(q);
q=q.reverse();
console.log(q)
t=q.join("")
console.log(t);

// split() → String → Array
// join()  → Array → String

//all in one

let w="  i love travelling  "
h=w.trim().toUpperCase().replace("TRAVELLING","animals")
console.log(h);

console.log(h.inludes("TRAVELLING"));


//REVERSING A TSRING

// let str8 = "hello";

// let reversed = str8.split("").reverse().join("");

// console.log(reversed);



