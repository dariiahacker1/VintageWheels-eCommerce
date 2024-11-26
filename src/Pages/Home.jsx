import React from 'react';
import SlideShow from '../Components/SlideShow/SlideShow'
import Featured from '../Components/Featured/Featured'
import './CSS/Home.css'
import About from '../Components/About/About'

const Home = ({allCars}) => {
    return(
        <div className="home">
            <SlideShow />
            <Featured allCars={allCars} />
            <About />
        </div>
    )
}

export default Home;