import React, { useRef } from "react";

function UseRef(){
    const btnRef=useRef()
    const inpRef=useRef()
    return(
        <div>
            <h1>Use Ref</h1>
            <input type="text" ref={inpRef}></input>
            <input type="file" ref={btnRef}></input>
            <div></div>
            <button onClick={()=>{btnRef.current.click()}}>duplicate File</button>
            <button onClick={()=>{inpRef.current.focus()}}>Focus</button>
        </div>
    )
}

export default UseRef