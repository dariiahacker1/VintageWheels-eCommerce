import React from 'react';
import './CSS/LocationTemplate.css'
import locationImages from '../Components/Assets/locations/locationImages'

const getImageFromDbString = (imageName) => {
    return locationImages[imageName] || null;
};

const LocationTemplate = ({title, image, description, address, phone, email}) => {
    return (
        <div className="location-template">
            <div className="banner">
                <img src={getImageFromDbString(image)} alt={title}></img>
                <div className="banner-title">
                    <h1>{title}</h1>
                </div>

                <div className="address">
                    <p>{address}</p>
                </div>

            </div>


            <div className="horizontal-container">
                <div className="description">
                    <p>{description}</p>
                </div>

                <div className="information">

                    <div className="hours">
                        <p className="title">HOURS</p>
                        <hr/>

                        <p className="names">MONDAY-FRIDAY:</p>
                        <p className="sub">9am - 6pm</p>
                        <br/>
                        <p className="names">SATURDAY-SUNDAY:</p>
                        <p className="sub"> 10am - 5pm</p>
                    </div>


                    <div className="contact">
                        <p className="title">BY PHONE/MAIL</p>
                        <hr/>

                        <p className="names">PHONE:</p>
                        <p className="sub">{phone}</p>
                        <br/>
                        <p className="names">EMAIL:</p>
                        <p className="sub"> {email}</p>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default LocationTemplate