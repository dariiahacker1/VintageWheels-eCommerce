import React from 'react';
import './CSS/Locations.css'
import locations from '../Components/Assets/locations'
import {Link} from 'react-router-dom';

const Locations = () => {
    return (
        <div className="locations">
            <h1>VINTAGE WHEELS LOCATIONS</h1>

            <div className="locations-container">

                {
                    locations.map((location) => (

                            <Link style={{textDecoration: 'none', color: 'inherit'}} to={location.path}>
                                <div className="location">
                                    <img src={location.image} alt=""/>
                                    <div className="location-name">
                                        <p>{location.name}</p>
                                    </div>
                                </div>
                            </Link>

                        )
                    )
                }

            </div>

        </div>
    )
}

export default Locations;