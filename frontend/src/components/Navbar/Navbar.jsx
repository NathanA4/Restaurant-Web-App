import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdBakeryDining } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLogin } from "react-icons/md";
import { GoChecklist } from "react-icons/go";

import image from '../../constants/image';

import'./Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return(
    <nav className = "appNavbar"> 
        <Link to='/' className = "appNavbarLogo">
            <img src={image.Logo1} alt="Logo" />
        </Link>
        <ul className='appNavbarLinks'>
            <li className="font"><Link to ="/">Home</Link></li>
            <li className='font'><Link to="/About">AboutUs & Location</Link></li>
            <li className='font'><Link to="/Products">Products</Link></li>
            <li className='font'><Link to="/Contact">Contact</Link></li>
        </ul>
        <div className='appNavbarLogin'>
            <MdOutlineLogin color = "#B22222"/>
            <Link to="/LogIn" className='font'>Log In</Link>
            <div />
            <GoChecklist color = "#B22222"/>
            <Link to="/reservation" className='font'>Book Table</Link>
        </div>
        <div className='appNavbarMobile'>
            <GiHamburgerMenu color='#B22222' fontSize={20} onClick={() => setToggleMenu(true)}/>
            {toggleMenu && (
                <div className='appNavbarMobileOverlay flex_center slide-bottom'>
                <MdBakeryDining fontSize={20} className='overlayClose' onClick = {() => setToggleMenu(false)}/>
                <ul className='appNavbarMobileLinks'>
                    <li className="font"><Link to="/">Home</Link></li>
                    <li className='font'><Link to="/About">AboutUs & Location</Link></li>
                    <li className='font'><Link to="/Products">Products</Link></li>
                    <li className='font'><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>  
            )}  
        </div>
    </nav>
    )
};

export default Navbar;
