import React from "react";
import './About.css'
import car from '../Assets/car.png'
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div className="about">
            <div className="info">
                <h1>WHO IS VINTAGE WHEELS?</h1>
                <hr/>
                <p>Vintage Wheels is your gateway to the timeless elegance of classic cars. We specialize in sourcing
                    and delivering high-quality vintage vehicles that embody the spirit of a bygone era. Our collection
                    is carefully curated to include only the finest models, ensuring that each car tells its own unique
                    story. Whether you're a seasoned collector or a first-time buyer, our knowledgeable team is here to
                    guide you every step of the way, from selection to purchase. At Vintage Wheels, we don’t just sell
                    cars—we celebrate a legacy.</p>

                <Link style={{textDecoration: 'none', color: 'inherit'}} to="/about"
                      onClick={() => window.scrollTo(0, 0)}>

                    <Link style={{textDecoration: 'none', color: 'inherit'}} to="/about">
                        <button>OUR STORY</button>
                    </Link>
                </Link>
            </div>

            <div className="car">
                <img src={car} alt=""/>

            </div>

        </div>
    )
}

export default About;