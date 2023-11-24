import React from "react";
import image from "../../constants/image";

import "./Header.css";

const Header = () => (
  <div className="appHeader" id="Home">
    <img src={image.HeaderBakery} width= "100%" height="250px" className = "cover"alt="HeaderBakery" />
    <div className="headerBakeryText headerfont" >SABROSA</div>
    <div className="BakeryText header1font" >Home Sweet Bakery</div>
    <button className="buttonHeader" onClick={() => {}}>Products</button>
    <div className="bestSellersText">Best Sellers</div>
    <div className="bestSellers">
      <div className="sTart">
        <img
          src={image.StrawberryTart}
          height="250"
          width="250"
          alt="tart"
        />
        <div className="sTartText">Strawberry Tart</div>
        <div className="sTartText2">CAD$5.00</div>
        <button className="sTartButton" onClick={() => {}}>Products</button>
      </div>
      <div className="pScones">
        <img 
          src={image.PeachScones} 
          height="250" 
          width="250" 
          alt="scone" />
        <div className="pSconesText">Peach Scones by the Dozen</div>
        <div className="pSconesText2">CAD$37.99</div>
        <button className="pSconesButton" onClick={() => {}}>Products</button>
      </div>
      <div className="chCroiss">
        <img
          src={image.ChocoCroissants}
          height="250"
          width="250"
          alt="croissant"
        />
        <div className="chCroissText">Chocolate Croissants</div>
        <div className="chCroissText2">CAD$4.20</div>
        <button className="chCroissButton" onClick={() => {}}>Products</button>
      </div>
    </div>
  </div>
);

export default Header;