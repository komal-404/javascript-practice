const user={
    uname:"komal",
    amount:100,
    showmessage: function(){
        console.log(`${this.uname},welocme home`)
        console.log(this) //show current context
    }

}
user.showmessage();
console.log(this); //out put is {}, empty as the current context is node



// const testPractice= function (){

// }

//arrow function
//()=>{}
const testPractice=()=>{
        console.log("arrow function")
}
testPractice();

//implicit return
//remove {} and return, it means js will assume to return implicitly

const implicitFunction=()=> console.log("implicit return")