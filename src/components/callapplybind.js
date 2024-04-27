
import React from "react";

const Call=()=>{

    let name= {
        firstname:"JyotiRanjan",
        lastname:"Mohanty",
        }
        let printFullName =function(hometown){
            console.log(this.firstname + "" +this.lastname + " From " + hometown );
        }
        printFullName.call(name, "Cuttack");

        let name2={
            firstname:"Suresh",
            lastname:"Das",
        }
    printFullName.call(name2, "Bhubaneswar");
    printFullName.apply(name2,["Puri"]);

    let printmyName = printFullName.bind(name, "Cuttack");
    //console.log(printmyName);
    printmyName();

    //document.getElementById("call").innerHTML=printmyName();

    return(
        <div>
            <h1>Jyoti</h1>
        </div>
    )
}
export default Call;