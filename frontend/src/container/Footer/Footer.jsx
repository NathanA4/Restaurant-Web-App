import React from 'react';
import image from "../../constants/image";
import './Footer.css';
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => (
    <div className = "footerBox">
        <div className = "logo">
            <img src = {image.Logo1} width = "200" height = "50" alt = "logo" />
        </div>
        <div className = "home">
            Home
        </div>
        <div className = "about">
            About
        </div>
        <div className = "products">
            Products
        </div>
        <div className ="prPolicy">
            Privacy Policy 
        </div>
        <div className = "insta">
            <a href="https://www.instagram.com/sabrosa_yumyum" target="_blank"  rel="noreferrer">
                Instagram
            </a> 
        </div>
        <div className = "linkedin">
            <a href = "https://www.linkedin.com/in/nathaniel-kebere-b7bb74216/" target="_blank" rel="noreferrer">
                Linkedin 
            </a>     
        </div>
        <div className = "copyright">
            <img src = {image.copyright} width = "10" alt = "cRight" />

        </div>
        <div className = "year">
            2023
        </div>
        <div className = "line">
            <img src = {image.Line} width = "375" height = "50" alt = "line" />
        </div>
        <div className = "instaIcon">
            <CiInstagram color ="black"/>

        </div>
        <div className = "linkedinIcon">
            <CiLinkedin color = "black"/>
        </div>
    </div>
);

export default Footer;