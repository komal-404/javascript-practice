class calculator{         //js creats a class blueprint
    constructor(){
        console.log("will run automatically")
    }
    add (a,b){
        return a+b;
    }
     sub (a,b){
        return a-b;
    }
   
}

var c=new calculator();   //c is a object created for class
console.log(c)  //returns an empty object caluclator{}
console.log(c.add(2,3))
console.log(c.sub(4,3))

//constructor() A constructor is a special method that runs automatically when an object is created.

class discount{
    constructor(d){
        this.d=d;
    }
    dis(){
        console.log(`the discount is ${this.d}`)
    }
}
var q=new discount(10);
q.dis()