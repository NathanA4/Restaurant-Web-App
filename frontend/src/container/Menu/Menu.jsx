import React from 'react';
import image from '../../constants/image';
import './Menu.css';

const MenuItem = ({ title, imageSrc, price }) => (
    <div className="menuItem">
        <img 
          src={imageSrc} 
          alt={title} 
          width='300'
          height='300'
          className="menuItemImage" />
        <div className="menuItemDetails">
            <div className="menuItemTitle">{title}</div>
            
            <div className="menuItemPrice">{price}</div>
        </div>
    </div>
);

const Menu = () => {
    return (
        <div className="appMenu">
            <img src={image.MenuImage} width="100%" height="250px" className="cover" alt="Coffee" />
            <div className="menuText">Product</div>
            {/* <button className='menuTextButton'>Filter Product</button> */}
            <div className="menuCategory">Pastries</div>
            <div className= "pastriesContainer">
            <MenuItem
                className = "strawberryTart"
                title="Strawberry Tart"
                imageSrc={image.StrawberryTart}
                price="CAD$5.00"
            />
            <MenuItem
                title="Raspberry & Custard Danish"
                div className = "raspberryDanish"
                imageSrc={image.RaspberryDanish}
                price="CAD$3.50"
            />
            
            <MenuItem
                className = "chocoCroissant"
                title="Chocolate Croissant"
                imageSrc={image.ChocoCroissants}
                price="CAD$3.75"
            />
            <MenuItem
                className = "peachScone"
                title="Peach Scone"
                imageSrc={image.PeachScones}
                
                price="CAD$2.90"
            />
            </div>
            
           
            <div className="menuCategory">Coffees</div>
            <div className = "coffeeContainer">
            <MenuItem
                className = "americano"
                title="Americano"
                imageSrc={image.Americano}
                price="CAD$5.56"
            />
            <MenuItem
                className = "blackCoffee"
                title="Black Coffee"
                imageSrc={image.BlackCoffee}
                price="CAD$4.30"
            />
            <MenuItem
                className = "cappuccino"
                title="Cappuccino"
                imageSrc={image.Cappuccino}
                price="CAD$7.00"
            />
            <MenuItem
                className = "macchiato"
                title="Macchiato"
                imageSrc={image.Macchiato}
                price="CAD$4.50"
            />
            <MenuItem
                className = "latte"
                title="Latte"
                imageSrc={image.Latte}
                price="CAD$3.60"
            />
            <MenuItem
                className = "espresso"
                title="Espresso"
                imageSrc={image.Espresso}
                price="CAD$3.70"
            />
            </div>

            
           
        </div>
    );
};

export default Menu;