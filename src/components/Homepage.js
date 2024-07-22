import React from "react";

function HomePage(props){
    return (
        <div>
            <h1>Welcome to HomePage {props.username}</h1>
            <button onClick={()=>{props.setFlag(false)}}>Logout</button>
        </div>
    )
}

export default HomePage