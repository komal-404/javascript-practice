// |           | `for...in`                  | `for...of`                                    |
// | --------- | --------------------------- | --------------------------------------------- |
// | Gives     | Keys/indexes                | Values                                        |
// | Objects   | ✅ Commonly used             | ❌ Ordinary objects aren't iterable by default |
// | Arrays    | Possible, but usually avoid | ✅ Excellent                                   |
// | Strings   | Can iterate indexes         | Can iterate characters                        |
// | Main idea | "Which property?"           | "What value?"                                 |


let a=["apple","orange","banana"];
for (i of a){
    console.log(i);//value
}
for(j in a){
    console.log(j);//index
}



console.log("___object___")

let student={
    name:"komal",
    class:"10th",
    roll:"05"
}

for(let s of Object.values(student)){    //values
    console.log(s)
}

for(let[k,v] of Object.keys(student)){   //keys
    console.log(k,v);
}

for (let [key, value] of Object.entries(student)) {   
    console.log(key, value);              //both key and value
}