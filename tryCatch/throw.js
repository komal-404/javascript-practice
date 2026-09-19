var a = 10;
var b = 20;

try {

   if (a >= 100 || b >= 10) {
        throw new Error("Both values must be greater then 100");
    }

    var result = a + b;

    console.log(result);
}
catch (error) {
    console.log(error.message);
}


