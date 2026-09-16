let s="komal";
console.log(typeof s);
console.log(`the string is ${s}`);

console.log(s[0]);
console.log(s[1]+s[2]);

console.log(s.length);  //length is a property not method

console.log(s.charAt(2));
console.log(s.charAt(200));  //empty string
console.log(s.charCodeAt(4));
console.log("Hello".charCodeAt(1));

let str="TEST";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let str2="123qw"
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());

//indexOf() finds first occurance

let str3="komal sahu";
console.log(str3.indexOf(" "));
console.log(str3.indexOf("a"));
console.log(str3.indexOf("z"));  //-1

//lastIndexOf() find last occurance
let str5="leopard is in the forest";
console.log(str5.lastIndexOf("o"));
