import React from 'react';
import './CSS/Locations.css'

import {Link} from 'react-router-dom';
import locationImages from '../Components/Assets/locations/locationImages'

const getImageFromDbString = (imageName) => {
    return locationImages[imageName] || null;
};

const Locations = ({allLocations}) => {
    return (
        <div className="locations">
            <h1>VINTAGE WHEELS LOCATIONS</h1>

            <div className="locations-container">

                {
                    allLocations.map((location) => (

                            <Link style={{textDecoration: 'none', color: 'inherit'}} to={`/locations/${location.name.toLowerCase()}`}>
                                <div className="location">
                                    <img src={getImageFromDbString(location.image)} alt=""/>
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