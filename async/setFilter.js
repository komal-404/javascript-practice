//SET VS MAP PRACTICALLY (LEARN)
//if array is there why set and map
//learn why we use what practically

var newset=new Set();
newset.add(10);
newset.add(20);
newset.add(30);
newset.add(10);
newset.add(20);
newset.add("ks");
console.log(newset);

//has
console.log(newset.has(20));
console.log(newset.has("ks"));

//delet
newset.delete("ks");
console.log(newset);
console.log(newset.size)

//array to numbers

var ks=["KOmal","komal",1,10,20,10];
var arrayToSet= new Set(ks);
console.log(arrayToSet);

//another
var a1 = new Set([1, 2, 3]);
var b1 = new Set([1, 2, 3]);

console.log(a1 === b1);

var a2 = new Set([]);
var b2 = new Set([]);

console.log(a2 === b2);


//map stores key value pair

var employee=new Map;
employee.set("name","Rahul");
employee.set("age",18);
employee.set("id",2345)

console.log(employee)
console.log(typeof(employee))
console.log(employee.get("name"))
employee.set("age",20)
console.log(employee.get("age"))
console.log(employee.has("name"));

// | Set                   | Map                    |
// | --------------------- | ---------------------- |
// | Stores values         | Stores key-value pairs |
// | Values must be unique | Keys must be unique    |
// | `add()`               | `set()`                |
// | `has()`               | `has()`                |
// | `delete()`            | `delete()`             |
// | `size`                | `size`                 |

var numbers = [10, 20, 30];

var result = numbers.map(function(value) {
    return value + 5;         //return is comulsory in map, bcz return gives in array format
});

console.log(result);


//
var number = [10, 20, 30];

number.map(function(values, index, array) {
    console.log(values);
    console.log(index);
    console.log(array);
});

//filter()

var ktest=[10,12,13,15,18]

var newone=ktest.filter(function(value){
    return value > 10
})
console.log(newone)

//map transforms, filter select/remove elements

var one=[2,4,5,67,8]
var two=[10,20,30,19,34]

var c=one.filter(function(value,index){
    return (value+two[index]) >20 ;
})
console.log(c);  //not working



//reduce
//accumulator
// array.reduce(function(accumulator, value) {
//     return accumulator + value;
// }, initialValue);

var numbs = [10, 20, 30, 40];

var results = numbs.reduce(function(sum, value) {
    return sum + value;
}, 0);

console.log(results);


var main={
    "name":"komal",
    "id":9,
}
var copy={...main}
console.log(copy)

var testc={
    ...copy,
    "age":23
}
console.log(testc);


function ks(...k_numbers) {
    console.log(k_numbers);   //k_numbers is rest parameter
}

add(10, 20, 30);