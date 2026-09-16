function add(a,b){
    let c= a+b;
    console.log(`the addition of ${a} and ${b} is ${c}`);

}
add(2,3);


function person(name,place,age){
    console.log(`${name} is from ${place} and is ${age} years old`);
}
person("komal", "odisha", 18);

//JavaScript doesn't automatically know that you intended the opposite order


function noParameter(name){
    console.log(name);
}
noParameter();   //undefined

