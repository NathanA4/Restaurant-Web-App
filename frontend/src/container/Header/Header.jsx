import React from "react";
import image from "../../constants/image";

import "./Header.css";
import { Subheading } from "../../components";

const Header = () => (
  <div className="appHeader" id="Home">
    <img src={image.HeaderBakery} width= "100%" height="250"alt="HeaderBakery" />
    <div className="headerBakeryText headerfont" >SABROSA</div>
    <div className="BakeryText header1font" >Home Sweet Bakery</div>
    <button className="buttonHeader" onClick={() => {}}>Products</button>
    <div className="bestSellers">
      <div className="sTart">
        <img
          src={image.StrawberryTart}
          height="250"
          width="250"
          alt="tart"
        />
        <div className="sTartText">Strawberry Tart</div>
      </div>
      <div className="pScones">
        <img src={image.PeachScones} height="250" width="250" alt="pSc" />
        <div className="pSconesText">Peach Scones</div>
      </div>
      <div className="chCroiss">
        <img
          src={image.ChocoCroissants}
          height="250"
          width="250"
          alt="chCr"
        />
        <div className="chCroissText">Chocolate Croissants</div>
      </div>
    </div>
  </div>
);

export default Header;