import React, { useEffect, useState } from "react";

function UseEffect(){
    const [gender,setGender]=useState("");

    useEffect(()=>{
        if(gender === ""){
            alert("you are seeing use effect page")
            console.log("page is called");
        }
        if(gender === "male"){
            alert("gender is changing to male")
        }
        if(gender === "female"){
            alert("gender is changing to female")
        }

    },[gender])

    return(
        <div>
            <h1>UseEffect</h1>
            <h2>Gender</h2>
            <input type="radio" checked={gender === "male"} onClick={()=>{setGender("male")}}></input>
            <label>Male</label>
            <input type="radio" checked={gender=== "female"} onClick={()=>{setGender("female")}}></input>
            <label>Female</label>
        </div>
    )
}

export default UseEffect;