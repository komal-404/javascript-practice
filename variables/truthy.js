//Truthy
//truthy value is a value that JavaScript treats as true when used in a Boolean context.
//eg1:
if ("Hello") 
{
console.log("Runs1");

}

//eg2
if (10)    //10 is truthy.
{
console.log("Runs2");
}

//eg3
if (-5)   //-5 is truthy.
{
console.log("Runs3");
}



//eg4
if ([]) 
{
console.log("YES");    //empty array is truthy
}

//eg5
if ({}) 
{
console.log("YES");   //empty object is truthy
}


//Falsy
/* false
0
-0
0n
null
undefined
empty string i.e " "
NaN */

//eg1:
if (0)    //10 is falsy.
{
console.log("Runs4");
}


//eg2:
if (0n)    //0n is falsy.
{
console.log("Runs4");
}



//eg3:
if ("") 
{
console.log("YES");
} 
else 
{
console.log("NO");  //prints NO
}


//eg4:
let x5;
if (x5) {
console.log("YES");
} else {
console.log("NO end");
}

//eg5
