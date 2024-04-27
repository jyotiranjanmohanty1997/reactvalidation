import { render } from "@testing-library/react";
import React, { useState } from "react";

const Color=()=>{
    //buttons = document.querySelectorAll(".h4")
    let [color,setColor] = useState();
    
    return (
        <section>
            <div className="container">
                <h2 className="text-info mt-3 mb-3">Body-Color Changer</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <h4 className="p-2 border shadow-lg bg-primary" id="Blue" onClick={setColor=>("blue")}>Blue</h4>
                    </div>
                    <div className="col-lg-4">
                        <h4 className="p-2 border shadow-lg bg-danger" id="Red">Red</h4>
                    </div>
                    <div className="col-lg-4">
                        <h4 className="p-2 border shadow-lg bg-success" id="Green">Green</h4>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Color;