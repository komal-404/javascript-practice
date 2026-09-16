let a = [10, 20, 30];

let b = a;

b.push(40);

console.log(a);
console.log(b);

let b1 = Array.from(a);
b1.push(100);
console.log(b1);
console.log(a);