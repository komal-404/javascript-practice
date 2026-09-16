let fruits=["apple","orange","banana","guava","mango","lichi"]
console.log(fruits.length);
console.log(fruits.length-1);


console.log(fruits[2]);
console.log([fruits[fruits.length]]);
console.log([fruits[fruits.length-1]]);
console.log(fruits[-4]); //undefined. JavaScript arrays do not support negative indexing with []
console.log(fruits[100]);


console.log(fruits[fruits.length-4]);  //banana

fruits[1]="potato";
console.log(fruits);
console.log(fruits["rty"]);// underfine

//indexOf()
let fruit = ["Apple", "Banana", "Mango"];

console.log(fruit.indexOf("Banana"));   //1
console.log(fruit.indexOf("Orange"));   //does not exist so -1

if (fruit.indexOf("Mango") !== -1) {
    console.log("Found");
}

//includes()
console.log(fruit.includes("Mango"));  //true

if (fruit.includes("Mango")) {
    console.log("Found");
}


//accessing array elements
let arrk = [10, 20, 30];
for (let value of arrk) {
    console.log(value);                 //value will be printed
}

for (let i = 0; i < arrk.length; i++) {
    console.log(i);                    //index will be printed
}


let arr = [
    11,
    "cat",
    true,
    [1, 2, 3],
    {name: "komal"}
];
console.log(arr);

//nested array
let m=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(m[0][0]);
for(a1 of m){
    let newArray=a1
    console.log(newArray);
    for(j of newArray){
        console.log(j);
    }
}


//print each element
let matrix=[                //matrix[i][j]
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
 for(im=0;im<matrix.length;im++){
  for(jm=0;jm<matrix[im].length;jm++){
    console.log(matrix[im][jm]);
  }
 }


 console.log(Array.isArray(matrix));


//removing elements
 let numArray = [10, 20, 30];
numArray.length = 0;
console.log(arr);  //empty
