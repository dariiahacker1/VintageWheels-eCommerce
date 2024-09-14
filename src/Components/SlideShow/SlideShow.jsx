import React, { useState, useEffect } from 'react';
import './SlideShow.css';

import image2 from '../Assets/slideshow/red_car.jpg';
import image1 from '../Assets/slideshow/blue_car.jpg';
import image3 from '../Assets/slideshow/cars.jpg';

const SlideShow = () => {
    const slides = [
        { image: image1, text: 'The Nation’s #1 Classic Car Dealer' },
        { image: image2, text: 'Red Hot Deals' },
        { image: image3, text: 'Drive Your Dreams' }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [slides.length]);

    return (
        <div className="slide-show">
            <div className="slide-show-container">
                <img src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
                <div className="text-overlay">
                    {slides[currentIndex].text}
                </div>
            </div>
            <div className="dots-container">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default SlideShow;
