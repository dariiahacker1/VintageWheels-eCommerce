import React from 'react';
import image from '../Components/Assets/img.png'
import './CSS/OurStory.css'
import {Link} from 'react-router-dom';

const OurStory = () => {
    return (
        <div className="our-story">
            <h1>Our Story</h1>

            <div className="story-content">

                <img src={image} alt=""/>

                <div className="story">
                    <p>
                        In 2010, Vintage Wheels began its journey in   <Link style={{textDecoration: 'none', color: '#909293'}} to="/locations/atlanta">Atlanta, GA </Link>, founded on a passion for classic cars
                        and
                        a dedication to delivering exceptional service. As the appreciation for vintage automobiles
                        grew, so
                        did our vision. We expanded our reach to   <Link style={{textDecoration: 'none', color: '#909293'}} to="/locations/nashville">Nashville, TN </Link>, in 2012, bringing our unique collection
                        of
                        timeless vehicles to a new audience.
                        <br/>
                        <br/>
                        By 2015, the allure of classic cars led us to <Link style={{textDecoration: 'none', color: '#909293'}} to="/locations/dallas">Dallas, TX </Link>, where we established another showroom,
                        solidifying our reputation as a trusted name in the industry. The following year, in 2016, we
                        returned to our roots, opening our <Link style={{textDecoration: 'none', color: '#909293'}} to="/locations/charlotte">Charlotte, NC</Link> location, where our story had originally been
                        inspired.
                        <br/>
                        <br/>
                        Each Vintage Wheels showroom embodies our commitment to quality, authenticity, and customer
                        satisfaction. Our knowledgeable staff shares the same passion for classic cars, ensuring that
                        every
                        visit to our showrooms is an experience as memorable as the vehicles we showcase. Today, with
                        four
                        locations across the U.S., Vintage Wheels stands as a beacon for classic car enthusiasts,
                        offering a
                        curated selection of meticulously maintained vehicles that capture the essence of automotive
                        history.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default OurStory;