import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Inventory from './Pages/Inventory'
import Locations from './Pages/Locations'
import LoginSignup from "./Pages/LoginSignup";
import Footer from './Components/Footer/Footer'
import LocationTemplate from "./Pages/LocationTemplate";
import './Components/Assets/locations'
import locations from './Components/Assets/locations'
import {useState} from "react";
import OurStory from './Pages/OurStory'
import FAQ from './Pages/FAQ'
import CarTemplate from './Pages/CarTemplate';
import all_cars from "./Components/Assets/all_cars";

function App() {

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <BrowserRouter basename="/VintageWheels-Ecommerce">
                <Navbar setSearchTerm={setSearchTerm}/>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/inventory" element={<Inventory searchTerm={searchTerm}/>} />
                    <Route path="/locations" element={<Locations />} />

                    {locations.map((location) => (
                        <Route
                            key={location.id}
                            path={location.path}
                            element={
                                <LocationTemplate
                                    title={location.location}
                                    image={location.image}
                                    description={location.description}
                                    address={location.address}
                                    phone={location.phone}
                                    email={location.email}
                                />
                            }
                        />
                    ))}

                    {all_cars.map((car) => (
                        <Route
                            key={car.id}
                            path={`/car${car.id}`}
                            element={<CarTemplate {...car} />}
                        />
                    ))}

                    <Route path="/about" element={<OurStory />} />
                    <Route path='/faq' element={<FAQ />} />
                    <Route path="/login" element={<LoginSignup />}/>
                </Routes>

                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
