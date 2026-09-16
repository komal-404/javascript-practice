//start include, end excluded

let str="hello javascript";
console.log(str.substring(0, 4));
console.log(str.substring(0, 100));  //full string
console.log(str.substring(100, 4));  //o javascript (doubt)
console.log(str.substring(0, -4));  //empty output

//slice (negative indexing supported)
let str1="javascript";
console.log(str1.slice(-6));

//split()
let str5="this is for test"
console.log(str5.split(" "))

let str6="apple, banana, orange"
console.log(str6.split(","))

console.log("Hello".split());// no argument  ['Hello']

console.log("Hello".split(""))

// trim()       → both
// trimStart()  → beginning
// trimEnd()    → ending

let str7="     komal     "
console.log(str7.trim());
console.log(str7.trimEnd());
console.log(str7.trimStart());

