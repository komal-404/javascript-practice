// | Error            | Meaning                                         |
// | ---------------- | ----------------------------------------------- |
// | `ReferenceError` | Trying to access something that doesn't exist   |
// | `TypeError`      | Performing an invalid operation on a value/type |
// | `SyntaxError`    | JavaScript syntax is invalid                    |

//try: if any exception occurs, in this section, transfer it to appropriate handler

    //              START
    //                ↓
    //          Enter try block
    //                ↓
    //          Execute statement
    //                ↓
    //         Did exception occur?
    //           /           \
    //         NO             YES
    //         ↓               ↓
    // execute remaining      stop try
    //    try statements         ↓
    //         ↓              catch
    //         ↓                ↓
    //    leave try          handle error
    //         ↓                ↓
    //       continue        continue


try {
    console.log("A");

    console.log(a + b);

    console.log("B");
}
catch (error) {
    console.log("C");
    console.log("Error name:", error.name);
    console.log("Error message:", error.message);
    console.log("Error name:", error.stack);

}

console.log("D");

//error is an object

//error.name
//error.message
//error.stack


try {
    console.log("A");

    try {
        console.log("B");
        console.log(x);
        console.log("C");
    }
    catch (error) {
        console.log("D");
    }

    console.log("E");
}
catch (error) {
    console.log("F");
}

console.log("G");


