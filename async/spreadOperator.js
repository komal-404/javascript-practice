//spread out into individual values
var a = [10, 20, 30];
console.log(...a);
var b = [3, 4];
var c = [...a, ...b];
console.log(c);


var m = [10, 20, 30];
var n= [...m]
console.log(m);
console.log(m===n);
