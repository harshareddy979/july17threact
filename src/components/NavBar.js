import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar(){
    console.log("navbar is getting called");
    return(
        <div className="navbar">
            <Link to="/">Main</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/homepage">HomePage</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default memo(NavBar)