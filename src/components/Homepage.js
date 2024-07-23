import React from "react";
import NavBar from "./NavBar";

function HomePage(props){
    return (
        <div>
            <NavBar/>
            <h1>Welcome to HomePage {props.username}</h1>
            <button onClick={()=>{props.setFlag(false)}}>Logout</button>
        </div>
    )
}

export default HomePage