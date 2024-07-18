import React from "react";
import "./secondComponent.css"

function SecondComponent(){
    var b="hi"
    return(
        <div>
            <h1 className="header">{b} this is second component</h1>
        </div>
    )
}

export default SecondComponent