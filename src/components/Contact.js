import React from "react";
import NavBar from "./NavBar";
import { FaFacebook,FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


function ContactPage(){
    return(
        <div>
            <NavBar/>
            <div style={{display:"grid",placeContent:"center",background:"lightBlue"}}>
                <h1>Contact Page</h1>
                <label>Facebook</label>
                <Link to="https://www.facebook.com/BesantTechnologies/"><FaFacebook /></Link>
                <label>Instagram</label>
                <Link to="https://www.instagram.com/besant_technologies/"><FaInstagram /></Link>
                <label>Gmail(besant@gmail.com)</label>
                <SiGmail />
                <label>phone(88888888888)</label>
                <FaPhoneAlt />
            </div>
        </div>
    )
}

export default ContactPage