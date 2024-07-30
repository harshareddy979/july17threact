import React, { useReducer, useState } from "react";
import SecondComponent from "../secondComponent";
import HomePage from "./Homepage";
import NavBar from "./NavBar";
import { initialState, ValuesReducer } from "./reducer";
import { useNavigate } from "react-router-dom";

function LoginPage(){
    const [loginUsername,setLoginUserName]=useState("")
    const [password,setPassword]=useState("")
    const [flag,setFlag]=useState(false)
    const [reducerValues,dipatch]=useReducer(ValuesReducer,initialState)
    const navigate=useNavigate()
    function checkLoginDetails(){
        if(loginUsername === reducerValues["username"]){
            if(password === reducerValues["password"]){
                alert("Login sucess")
                navigate("/homepage")
                setFlag(true)     
            }
            else{
                alert("password is mismatch")
            }
        }
        else{
            alert("loginUsername is mismatch")
        }
    }
    

    return(
        <div>
            <NavBar/>
        <div style={{display:"grid",placeContent:"center"}}>
            <h1>Login Page</h1>
            <label>Username</label>
            <input type="text" value={loginUsername} onChange={(e)=>{setLoginUserName(e.target.value)}}></input>
            <label>password</label>
            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button onClick={()=>{checkLoginDetails()}}>Login</button>
            {/* {flag ? <HomePage username={loginUsername} setFlag={setFlag}/> :"login to see details"} */}
        </div>
        </div>
    )
}
export default LoginPage;