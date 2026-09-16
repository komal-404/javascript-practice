const original = {
    name: "Rahul",
    age: 20
};

const copy = { ...original };
console.log(original.name);
copy.name="komal";
console.log(original.name);
console.log(copy.name);


//
const original1 = {
    name: "Rahul",
    address: {
        city: "Cuttack"
    }
};

const copy1 = { ...original1 };

copy1.address.city = "Bhubaneswar";

console.log(original1.address.city);




//TEST
const mainobject = {
  x1: 10,
  obj: {
    y1: 20
  }
};

const copyobject = { ...mainobject };


copyobject.obj.y1 = 200;
console.log(copyobject.obj.y1)//200
console.log(mainobject.obj.y1)  //200

copyobject.x1 = 100; 
console.log(copyobject.x1) //100   
console.log(mainobject.x1) //  how 10 ?

//spread operator