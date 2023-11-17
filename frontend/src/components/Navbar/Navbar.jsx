import React from 'react';
import { IoMdCafe } from "react-icons/io";
import { MdBakeryDining } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLogin } from "react-icons/md";
import { GoChecklist } from "react-icons/go";

import image from '../../constants/image';

import'./Navbar.css';

const Navbar = () => (
    <nav className = "appNavbar"> 
        <div className="appNavbarLogo">
            <img src={image.Logo1} alt="Logo" />
        </div> 
        <ul className='appNavbarLinks'>
            <li className="font"><a href="#Home">Home</a></li>
            <li className='font'><a href="#About">About</a></li>
            <li className='font'><a href="#Menu">Menu</a></li>
            <li className='font'><a href="#Contact">Contact</a></li>
        </ul>
        <div className='appNavbarLogin'>
            <MdOutlineLogin color = "#B22222"/>
            <a href="/" className='font'>Log In</a>
            <div />
            <GoChecklist color = "#B22222"/>
            <a href="#reservation" className='font'>Reservation</a>
        </div>
        <div className='appNavbarMobile'>
            <GiHamburgerMenu color='white' fontSize={20} onClick={() => {}}/>
            <div className='appNavbarMobileOverlay flex_center slide-bottom'>
                <MdBakeryDining fontSize={20} className='overlayClose' onClick = {() => {}}/>
                <ul className='appNavbarMobileLinks'>
                    <li className="font"><a href="#Home">Home</a></li>
                    <li className='font'><a href="#About">About</a></li>
                    <li className='font'><a href="#Menu">Menu</a></li>
                    <li className='font'><a href="#Contact">Contact</a></li>
                </ul>
            </div>      
        </div>
    </nav>
);

export default Navbar;
