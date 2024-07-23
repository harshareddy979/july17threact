import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar(){
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

export default NavBar