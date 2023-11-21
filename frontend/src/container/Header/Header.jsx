import React from "react";
import image from "../../constants/image";

import './Header.css';
import { Subheading } from "../../components";

const Header = () => (
    <div className="appHeader appWrapper sectionPadding" id="Home">
        <div className="appWrapperInfo">
            <Subheading title="Home Sweet Bakery"/>
            <h1 className="appHeaderH1">Savor the Moment, Taste the Goodness</h1>
            <p className="font"></p>
            <button type="button" className="headerButton">Prouducts</button>
        </div>
        <div className="appWrapperImg">
            <img src= {image.MainPageCoffee} alt="Coffee" />

        </div>
    </div>
);

export default Header;