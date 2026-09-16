//Asynchronous programming means starting a task that may take time without stopping the rest of the program from continuing
//js is synchronus, execute code one by one
//single threaded
//async alwz returns promise
//For a non-Promise value, it behaves as though the value were already fulfilled.

async function testFunction(){
    //return("output"); //rturn means by deafult resolve
    return Promise.reject("xyz")
}
testFunction().catch(function(result){
    console.log(result)      //why it gave output as well as undefined
})

//example 2

async function test23() {

    console.log("A");  

    await Promise.resolve();

    console.log("B");

}
test23();


//addition of 2 number
async function komal(k,s){
    let z=await Promise.resolve(k+s)
    console.log(z)

}
komal(2,3)



//ASYNC FUNCTION CHAING
async function getUser() {

    return "Rahul";

}

async function getMessage() {

    var user = await getUser();

    return "Hello " + user;

}

async function display() {

    var message = await getMessage();

    console.log(message);

}

display();



//WHY
//WITHOUT ASYNC, CAN WE USE AWAIT
//MULTIPLE ASYNC AWAIT IN A BLOCK 
//WHERE ASYNC AWAIT
//CALL BACK VS PROMISE VS ASYNC AWAIT
//CALL BACK HELL
