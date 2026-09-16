const person={
    name: "komal",
    num: 45678756689,
    sub:["math","eng","science"],
    marks:4.5,
    isEmployee:true
}

console.log(person)

const student=new Object()
student.name="komal"
student.id=5;
console.log(student)

const employee={
    name:"komal",
    id:500,
    address:{
        city:"gnpr",
        country:"india"

    }
}

console.log(person.name);
console.log(person.sub[1]);
console.log(employee.address.city);
console.log(student["name"]);


const test={
    name:"ks",
    id:3,
   "fav subj":"history"
}
let key="name";
console.log(person.key); //undefined
console.log(key); //name
console.log(person[key]);  //komal //"value stored inside key"
console.log(test["fav subj"]);

//adding properties
test.age=23;
console.log(test)
test.name="ks";

//deleting properties
delete test.age;
console.log(test);

//error
const user = {
    name: "Rahul"
};
//console.log(user.address.city);

console.log(user.address?.city)

