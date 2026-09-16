//array_name[Symbol.iterator]()
//iterator is an object with a next() method that returns an object containing value and done
// {
//     value: 10,
//     done: false
// }
//when  value: undefined then done: true
//iterable is an object whose elements can be accessed one by one: array,set,mAP,string

var newArray=[10,20,30,48.32]
var normal=newArray[Symbol.iterator]()
console.log(normal.next());
console.log(normal.next());
console.log(normal.next());
console.log(normal.next());
console.log(normal.next());
console.log(normal.next());



var testArray=["komal","sahu"];
var i=testArray[Symbol.iterator]();
// a=console.log(i.next());
// b=console.log(i.next());
// c=a+b;  NaN
//console.log(c);
var k=i.next().value;
console.log(k);   //why console.log change sthe o/p   //{ value: "komal", done: false }
var s=i.next().value;
var names=k+s;
console.log(names);






