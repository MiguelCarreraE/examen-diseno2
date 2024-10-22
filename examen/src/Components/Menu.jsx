import React, { useState, useEffect } from 'react';
import '../styles/Menu.css';
export const Menu = ({ addToOrder }) => {
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        fetch('https://api-menu-9b5g.onrender.com/menu')
            .then(response => response.json())
            .then(data => setMenuItems(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="menu-container">
            <h2>Menú</h2>
            <div className="menu-items">
                {menuItems.map((item, index) => (
                    index < 10 && (
                        <div key={`${item.id}-${index}`} className="menu-card">
                            <h3>{item.id}.- {item.name}</h3>
                            <p>{item.description}</p>   
                            <p>$ {item.price}</p>
                            <button className="add-button" onClick={() => addToOrder(item)}>Agregar</button>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

