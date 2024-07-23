import React, { useState } from "react";
import LoginPage from "./Login";
import NavBar from "./NavBar";

function RegisterPage(){
    const [registerUsername,setRegisterUserName]=useState("")
    const [password,setPassword]=useState("")
    const [mobileNumber,setMobileNumber]=useState("")
    const [address,setAddress]=useState("")
    const [flag,setFlag]=useState(false)

    function checkRegisterDetails(){
        if(registerUsername !== ""){
            if(password !== ""){
                if(mobileNumber !== ""){
                    if(address !==""){
                            alert("registration sucess")
                            setFlag(true)
                    }else{
                        alert("address is required")
                    }
                }else{
                    alert("mobile number is required")
                }
            }
            else{
                alert("password is required")
            }
        }
        else{
            alert("username is required")
        }
    }

    return(
        <div>
            <NavBar/>
        <div style={{display:"grid",placeContent:"center"}}>
            <h1>Registration Page</h1>
            <label>Username</label>
            <input type="text" value={registerUsername} onChange={(e)=>{setRegisterUserName(e.target.value)}}></input>
            <label>password</label>
            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <label>mobile number</label>
            <input type="number" value={mobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}}></input>
            <label>address</label>
            <input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}}></input>
            <button onClick={()=>{checkRegisterDetails()}}>Register</button>
            {flag ? <LoginPage mobileNumber={mobileNumber} registerUsername={registerUsername} registerPassword={password}/> :"please register to see details"}
        </div>
        </div>
    )
}
export default RegisterPage;