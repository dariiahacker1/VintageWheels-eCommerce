import React from 'react';
import './Featured.css';
import all_cars from '../Assets/all_cars';
import Item from '../Item/Item';
import {Link} from 'react-router-dom';

const Featured = () => {
    const left = 2;
    const right = 6;

    return (
        <div className="featured">
            <h1>FEATURED CLASSIC CARS FOR SALE</h1>
            <div className="featured-item">
                {all_cars.slice(left, right).map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.images[0]}
                        price={item.price}
                    />
                ))}
            </div>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to="/inventory" onClick={() => window.scrollTo(0, 0)}>
                <button>VIEW COMPLETE INVENTORY</button>
            </Link>
        </div>
    );
};

export default Featured;
