import React from "react";
import App from "./App";

function FirstComponent(){
    let a="hello"
    return(
        <div>
            <h1 style={{color:"red",fontSize:"12px"}}>{a} this is first component</h1>
            <App/>
        </div>
    )
}



export default FirstComponent