//Instead of rewriting all the code, we can use inheritance

//class Child extends Parent {}

 class calculator{
    add(a,b){
        return a+b
    }
 }
class newcalculator extends calculator{
    sqr(a){
        return a*a
    }

}
var k=new newcalculator;
console.log(k.add(2,3))
var s=new calculator;
//console.log(s.sqr(5)); //calculator does not gets the things from newcalculator,so error
console.log(s.add(5,7));



//constructor inheritance
class age{
    constructor(ag){
           this.ag=ag;
    }
    vote(){
        if(this.ag>18){
            console.log("eligible to vote")
        }
    }

}
class newage extends age{
    drive(){
        if(this.ag>18){
            console.log("eligible for DL")
        }
    }
}
var v=new age(45)
v.vote();
//v.drive()  //not possible
var n=new newage(32)
n.vote();
n.drive();

//super()

class marks{
    constructor(m){
        this.m=m;
    }
    show(m){
        console.log(`the amrk is ${this.m}`)
    }
}
class marksnew extends marks{
    constructor(m){
        super(m)
    }
    result(m){
        if(this.m>30){
            console.log("pass")
        }
    }
}
var j=new marksnew(40);
j.show();
j.result();

//override  (implicit, explicit, polymerphism, abstraction, encapsulation need to chk)  (4 pillars of oops)
class Calculator1 {

    add1(a1, b1) {
        return a1 + b1;
    }

}

class AdvancedCalculator1 extends Calculator1 {

    add(a1, b1) {
        return super.add1(a1, b1) + 100;
    }

}

var calc = new AdvancedCalculator1();

console.log(calc.add1(10, 20));



//this
class Student {
    constructor(name) {
        this.name = name;
    }

    show() {
        console.log(this.name);
    }
    static school = "ABC School";

    static showSchool() {
        console.log(this.school);
    }
}

//inheritance does not work with static.
// 


var s = new Student("Rahul");
s.show();
Student.showSchool();

//private property
class Calc1 {

    #a2 = 10;

    add5() {
        return this.#a2;
    }

}
var calc=new Calc1;
console.log(calc.add5());
//calc.#a2; won't work























 