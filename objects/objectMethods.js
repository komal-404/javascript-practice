//function inside a object is method


const student = {
    name: "komal",

    wish: function () {
        console.log("Good Morning!");
    }
};

student.wish();

//this
const person = {
    name: "komal",

    fun() {
        console.log("Hello " + this.name);
    }
};

person.fun();

//
const detail = {
    name: "komal",
    marks: 30,

    fun2() {
        console.log(
            "My name is " + this.name +
            " and my marks are " + this.marks
        );
    }
};

detail.fun2();

const calculator = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a * b;
    }
};

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));

const tru={};   //empty object
console.log(tru);

const students = {
    name: "Rahul",
    subjects: ["Math", "Physics", "Computer Science"]
};
console.log(students.subjects[0]);
let key= "subjects";
console.log(students[key]);
console.log(students.key);  //undefined


let key1 = "name";

const person1 = {
    [key]: "Rahul"
};

console.log(person1.name);