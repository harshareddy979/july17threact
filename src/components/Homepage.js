import React, { useState } from "react";
import NavBar from "./NavBar";
import "./homepage.css"

function HomePage(props){
    var fruitsArray=["apple","banana","grapes","pineapple","orange"]
    var fruitsObject={"name":"apple","color":"red","taste":"sweet"}
    const [gender,setGender]=useState("");
    return (
        <div>
            <NavBar/>
            <h1>Welcome to HomePage {props.username}</h1>
            <h2>Gender</h2>
            <input type="radio" checked={gender === "male"} onClick={()=>{setGender("male")}}></input>
            <label>Male</label>
            <input type="radio" checked={gender=== "female"} onClick={()=>{setGender("female")}}></input>
            <label>Female</label>
            {gender === "" ? <p>please select some gender to see content</p>:
            gender === "male" ? <div>
             <h2>Fruits Array</h2>
            <div className="homepageMain">
            {fruitsArray.map((ele,index)=>{
                return <div className="homepage">{ele+index}</div>
            })}
            </div>
            </div> :  <> <h2>fruits object</h2>
            <div className="homepageMain">
            {Object.entries(fruitsObject).map(([keys,values],index)=>{
                return <div className="homepage">{keys+" : "+values}</div>
            })}
            </div></> }
            {/* <button onClick={()=>{props.setFlag(false)}}>Logout</button> */}
        </div>
    )
}

export default HomePage