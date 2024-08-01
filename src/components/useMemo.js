import React, { useMemo, useState } from "react";

function UseMemo(){
    const [count,setCount]=useState(0)
    const calculatedValue=useMemo(()=> BigCalculation(count),[count]);
    const [name,setName]=useState("")
    return (
        <div>
            <h1>Use Memo</h1>
            {"calcuated value is "+calculatedValue}<br/>
            {"count is "+count}
            <button onClick={()=>{setCount(count+1)}}>Update count</button>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        </div>
    )
}

function BigCalculation(n){
    console.log("calculated function is calling");
    for(var i=0;i<=10;i++){
        n=n+1
    }
    return n
}

export default UseMemo