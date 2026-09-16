//mainly used to iterate over the keys/property names of an object.

const employee=
{
name:"komal",
id:5,
branch:"it"
}

for(key in employee){
    console.log(key);
}

console.log("___p2____");

const students={
    nm:"ks",
    rno:4,
    school:"slnm"
}

for(std in students){
    console.log(`here ${std} is ${students[std]}`);
}

