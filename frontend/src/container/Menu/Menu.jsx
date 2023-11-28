import React from 'react';
import image from '../../constants/image';
import './Menu.css';

const MenuItem = ({ title, imageSrc, ingredients, price }) => (
    <div className="menuItem">
        <img 
          src={imageSrc} 
          alt={title} 
          width='150'
          height='150'
          className="menuItemImage" />
        <div className="menuItemDetails">
            <div className="menuItemTitle">{title}</div>
            <div className="menuItemIngredients">{ingredients}</div>
            <div className="menuItemPrice">{price}</div>
        </div>
    </div>
);

const Menu = () => {
    return (
        <div className="appMenu">
            <img src={image.MenuImage} width="100%" height="250px" className="cover" alt="Coffee" />
            <div className="menuText">Product</div>

            <div className="menuCategory">Pastries</div>
            <MenuItem
                title="Strawberry Tart"
                imageSrc={image.StrawberryTart}
                ingredients="Flour, Butter, Sugar, Salt, Egg, Vanilla Extract, Lemon zest, Strawberries, Red Currant Jam"
                price="CAD$5.00"
            />
            <MenuItem
                title="Raspberry & Custard Danish"
                imageSrc={image.RaspberryDanish}
                ingredients="Frozen puff pastry, Cream, Cheese, Raspberry Jam, Egg"
                price="CAD$3.50"
            />
            <MenuItem
                title="Chocolate Croissant"
                imageSrc={image.ChocoCroissants}
                ingredients="Description of ingredients"
                price="CAD$3.75"
            />
            <MenuItem
                title="Peach Scone"
                imageSrc={image.PeachScones}
                ingredients="Description of ingredients"
                price="CAD$2.90"
            />

            <div className="menuCategory">Coffees</div>
            <MenuItem
                title="Americano"
                imageSrc={image.Americano}
                price="CAD$5.56"
            />
            <MenuItem
                title="Black Coffee"
                imageSrc={image.BlackCoffee}
                price="CAD$4.30"
            />
            <MenuItem
                title="Cappuccino"
                imageSrc={image.Cappuccino}
                price="CAD$7.00"
            />
            <MenuItem
                title="Macchiato"
                imageSrc={image.Macchiato}
                price="CAD$4.50"
            />
            <MenuItem
                title="Latte"
                imageSrc={image.Latte}
                price="CAD$3.60"
            />
            <MenuItem
                title="Espresso"
                imageSrc={image.Espresso}
                price="CAD$3.70"
            />
        </div>
    );
};

export default Menu;
