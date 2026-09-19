class names{
    detail(){
        console.log("komal")
    }
    get title(){          
        console.log("sahu")
    }
}
var s=new names()
s.detail()
s.title  //There is a getter called title, so let me execute it.



//
class employee{
    set e_name(value){
        console.log(value)
    }
}
var k=new employee()
k.e_name="komal"

//

class calculator{
    
}
var c=new calculator();
