//addition of two number
function add(a,b){
    let c=a+b;
    console.log(c)
}
add(2,3);


//callback
function one(a,b){
    let r=a+b;
    console.log(r)
}
function multi(c,d){
    let f=c*d;
    console.log(f)
}
function two(callback1){
   callback1(2,3)
}
two(one);
two(multi);

//promise
function test(a,b){
    return new Promise(function(resolve, reject){
        let c=a+b;
        resolve(c);
        let d=a*b;
        reject(d)  //why it did not execute
    })
}
test(2,3)
.then(function(answer){
    console.log(answer);
})
.catch(function(answer2){
    console.log(answer2)
})


//using async await
function add(a,b){
    let c=a+b;
    return c;
    }
z=add(2,3);
console.log(z)

//async
async function komal(k,s){
    let z=await Promise.resolve(k+s)
    console.log(z)

}
komal(2,3)

//
async function test() {
    let result = await  Promise.resolve("Hello"); //here if we remove await then it will give the promise itself, using await will give the result of the promise like in then
    console.log(result);
}
test();