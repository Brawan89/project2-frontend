import React from 'react';
import "./style.css";
import {BsTwitter , BsGithub , BsFacebook , BsInstagram} from "react-icons/bs"

 const Footer = () => {
    return (
        <div className="social-icons">
            <ul>
                <li> <BsFacebook /> </li>
                <li> <BsGithub /> </li>
                <li> <BsInstagram/> </li>
                <li> <BsTwitter /> </li>
            </ul>
        </div>
    )
}

export default Footer;
