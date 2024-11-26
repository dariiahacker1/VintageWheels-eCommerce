import React, {useEffect, useState} from 'react';
import './Featured.css';
import Item from '../Item/Item';
import {Link} from 'react-router-dom';
import carImages from '../Assets/images/carImages'
import { fetchCarsData } from '../Assets/fetchCarData';

const Featured = ({allCars}) => {

    return (
        <div className="featured">
            <h1>FEATURED CLASSIC CARS FOR SALE</h1>
            <div className="featured-item">
                {allCars.slice(1, 5).map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={carImages[item.images[0]]}
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
