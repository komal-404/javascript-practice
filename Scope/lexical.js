let names = "Rahul";

function outer() {

    let age = 18;

    function inner() {
        console.log(names);
        console.log(age);
    }

    inner();
}

outer();

//scope chaining

let a = 10;

function outerscope() {

    let b = 20;

    function innerscope() {

        let c = 30;

        console.log(a); //10
        console.log(b); //20
        console.log(c); //30
    }

    innerscope();
}

outerscope();
