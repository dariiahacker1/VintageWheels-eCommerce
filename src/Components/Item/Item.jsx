import React from 'react';
import {Link} from 'react-router-dom';
import './Item.css'

const Item = (props) => {
    return (
        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/car${props.id}` } onClick={() => window.scrollTo(0, 0)}>
            <div className="item">
                <img src={props.image} alt=""/>
                <p>{props.name}</p>
                <div className="item-price">
                    ${props.price}
                </div>
            </div>
        </Link>
    )
}

export default Item;