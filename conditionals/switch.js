// switch (expression) {
//     case value1:
//         // code
//         break;

//     case value2:
//         // code
//         break;

//     default:
//         // code
// }


let num=10;
switch(num){
    case 1:
        console.log("a");
        break;
    case 2:
        console.log("b");
        break;
    case 3:
        console.log("c");
        break;
    default:
        console.log("out of value")
}


//fall-through (switch without break)

let day="sunday"

switch (day){

    case "monday":
        console.log(office);
    case "tuesday":
        console.log("ofc")
    case "sunday":
        console.log("weekend")
    case "saturday":
        console.log("party")
    default:
        console.log("out")

}

//multiple block

let mark=90;

switch (mark){
    case 90:
    case 100:
        console.log ("good mark")
        break;
    default:
        console.log("not good")
}





