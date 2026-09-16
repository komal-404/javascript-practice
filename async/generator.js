function add(a,b){
    c=a+b;
    console.log(c)

    d=a+b;
    console.log(d)
}

add(2,3);

//generator

function* addition(k,s){
    p=k+s;
    yield p;
}
var g=addition(2,3);  //here g works as an iterator
console.log(g);  //Object [Generator] {}
m=g.next();
console.log(m.value)    
//console.log(g.next()) //{ value: 5, done: false }
//console.log(g.next().value) //here it gives undefined, bcz, once yiled is exhausted by one next(), another next() becomes undefined


function* sub(a, b) {
    console.log("generator");

    yield a - b;
}

var gen = sub(100, 20);

console.log("not from generator");

console.log(gen.next());


//yield  → gives value and pauses

//return → finishes generator

function* sum(p, q) {
    yield p + q;
    return p * q;
}
var generators = sum(10, 20);

console.log(generators.next());  //{ value: 30, done: false }
console.log(generators.next());  //{ value: 200, done: false }
console.log(generators.next()); //undefined, true


//console
function* myGen1() {
  yield console.log("Hello");  //here console pronts hello but the valu eis not hello, so it returns undefined
  return console.log("komal")
}

const gen1 = myGen1();
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());



//so if we wantto print value that is yielded

function* kFunction() {
  const value = "Hello";
  console.log(value);
  yield value;
}
const kf=kFunction();
console.log(kf.next());
console.log(kf.next());

//passing values in nxt()
function* table() {
    var a1 = yield;
    var b1 = yield;

    yield a1 + b1;
}

var generator = table();

console.log(generator.next());
console.log(generator.next(10));
console.log(generator.next(20));


//passing function parameters

function* trial(a2, b2) {
    yield a2 + b2;
    return a2 * b2;
}

var abcd = trial(5, 10);

console.log(abcd.next());
console.log(abcd.next());
console.log(abcd.next());

//date time
function* getDateTime() {
    var now = new Date();

    yield now.getDate();
    yield now.getMonth() + 1;
    yield now.getFullYear();
}

var generator = getDateTime();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
