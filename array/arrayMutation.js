//push(): returns the length of the array

let numbers=["10","20","30","40"];
numbers.push("50");
console.log(numbers);

let fruits=["apple","orange","banana"];
console.log(fruits.push("lichi"));  //will return length

console.log(fruits.length);


//pop() removes last element
//pop() returns the element that it removed.

numbers.pop();
console.log(numbers);
console.log(fruits);
console.log(fruits.pop("lichi"));  //will show lichi
console.log(fruits);  //will show the array but lichi is removed
fruits.push("mango");
console.log(fruits); 
console.log(fruits.pop("orange"));  //still it will return mango, the last element
console.log(fruits);  //mango is removed


//shift() removes the first elemnet
//shift() returns the removed element
let city=["bbsr","delhi","mumbai","chennai","kolkata"];
console.log(city.shift());  //bbsr
city.shift();
console.log(city);

//unshift() adds new element at the beginning
//unshift() returns length of the new array

let items=["bag","scale","bucket","comb"];
items.unshift("water bottle");
console.log(items);
console.log(items.unshift("kurkure"));
console.log(items);


//split(): string to array

let str="a b c";
str.split(" ");
console.log(str);
console.log(typeof(str));  //here it will be string, as we don't store it in a variable


let str1="a b c";
let result=str1.split(" ");  //space separator
console.log(result);
console.log(typeof(result));  //object type and array
console.log(result[1])


let str2="a,b,c,d,e,f";
let r=str2.split(",");   //comma separator
console.log(r);
console.log(typeof(r)); 
console.log(r[1]);

//map(Number)

let ks="10,20,30".split(",")
console.log(ks);
let s=ks[0]+ks[1];
console.log(s);

let ab="20,20,40".split(",").map(Number);
console.log(ab);
console.log(ab[0]+ab[1]);


//slice()
let states=["od","ap","mp","up","rj"]
let fav= states.slice(1,4); //1 included, 4 excluded
console.log(fav);

//splice() :modifies original






//reverse():change sthe original array
let org=["s","f","h","t","j"]
let org2=org.reverse();
console.log(org2);


//sort  default sorting is lexicographical/string-based.
let arr5 = [10, 2, 30, 4];
arr5.sort();
console.log(arr5);

// If a < b → negative → a before b
// If a > b → positive → b before a
// If a = b → 0 → same order

let arr6=[40,1,23,65,7];
arr6.sort((a,b)=>(a-b));  //ascending
console.log(arr6)

let arr7=[40,1,23,65,7];
arr7.soer((a,b)=>(b-a));  //descending

