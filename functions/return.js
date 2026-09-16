//Send this value back to whoever called the function
function addition(a,b){
    return a+b;
}

let results=addition(3,4);
console.log(results);


function multi(c,d){
    return c*d;
}

let e= multi(3,4);
console.log(e);


//console.log() vs return
// console.log() isplays something in the console.
// return send a value back from function

function test(k,s){
    console.log(k+s);   //ye sirf result diplay karega
}
let r=test(6,3);  //9
console.log(r);   //undefined  bcz ye rturn hi nhi diya


//now

function add(l,m){
    return l+m;       //ye return karega jo dubara use ho sake
}
let result = add(10, 20);   //ye function bulayega and 31, 32 chalega
console.log(result);    //return phenkega 30 and conole catch kar k print karega
console.log(result*3);












