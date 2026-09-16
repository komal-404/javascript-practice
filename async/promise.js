// Pending

// Still working.

// Fulfilled

// Successfully completed.

// Rejected

// Failed

//create->consume

//I'm creating a Promise. I need to do some work. If it succeeds, I'll call resolve(). If it fails, I'll call reject().

var result = new Promise(function (resolve, reject) {

    var marks = 70;

    if (marks >= 40) {
        resolve("Pass");
    } else {
        reject("Fail");
    }

});

result.then(function (message) {

    console.log(message);

});


//test
const voter=new Promise(function(resolve,reject){
    let age=19
    if(age>18){
        resolve("able to vote")
    }
    else{
        reject("note able to vote")
    }
})
voter.then(function(statement){
    console.log(statement);
});
voter.catch(function(statement1){
    console.log(statement1)
});

//use of setTimeout()
//diff between call back, promise, async and their work pattern

const marks=new Promise(function(resolve,reject){
    let marks=50
    if(marks>30){
        resolve("pass")
    }
    else{
        reject("fail")
    }
})
marks.then(function(context){
    console.log (context)
})
marks.catch(function(context1){
    console.log(context1)
})

//promise with function
//here we will store promise inside a function instead of variable

function testFunction(){

    return new Promise(function(resolve, reject){
        let totalStudents=50;
        if(totalStudents>40){
            resolve("it's a school")
        }
        else{
            reject("it's a coaching")
        }
    })
.testFunction()
     .then(function(reply1){
        console.log(reply1)
     })
     .catch(function(reply2){
        console.log(reply2)
     })









}