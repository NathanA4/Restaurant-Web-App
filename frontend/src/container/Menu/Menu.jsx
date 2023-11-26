import React, { useState } from 'react';
import data from '../../constants/data';
import image from '../../constants/image';
import './Menu.css';

const Menu = () => {
  const [showPastry, setShowPastry] = useState(false);
  const [showCoffee, setShowCoffee] = useState(false);

  const togglePastry = () => {
    setShowPastry(!showPastry);
    setShowCoffee(false);
  };

  const toggleCoffee = () => {
    setShowCoffee(!showCoffee);
    setShowPastry(false);
  };

  return (
    <div className="appMenu">
      <img src={image.MenuImage} width="100%" height="250px" className="cover" alt="Coffee" />
      <div className="menuText">Products</div>
      <nav className="menu">
        <ul className="appMenuItem">
          <li className="appMenuPastry" onClick={togglePastry}>
            Pastry
            {showPastry && (
              <div className="pastryItem">
                <div className="strawTart">
                    <img 
                        src={image.StrawberryTart} 
                        height='250'
                        width='250'
                        alt="start" 
                    />
                </div>
              </div>
            )}
          </li>
          <li className="appMenuCoffee" onClick={toggleCoffee}>
            Coffee
            {showCoffee && (
              <div className="coffeeItem">
                apple 
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
