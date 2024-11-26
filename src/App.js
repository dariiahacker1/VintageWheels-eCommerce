import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Inventory from './Pages/Inventory'
import Locations from './Pages/Locations'
import LoginSignup from "./Pages/LoginSignup";
import Footer from './Components/Footer/Footer'
import LocationTemplate from "./Pages/LocationTemplate";
import {useState, useEffect} from "react";
import OurStory from './Pages/OurStory'
import FAQ from './Pages/FAQ'
import CarTemplate from './Pages/CarTemplate';
import { fetchCarsData } from './Components/Assets/fetchCarData';
import { fetchLocations } from './Components/Assets/fetchLocations';

function App() {

    const [searchTerm, setSearchTerm] = useState('');
    const [allCars, setCars] = useState([]);
    const [allLocations, setLocations] = useState([]);

    useEffect(() => {
        const getCars = async () => {
            try {
                const carsData = await fetchCarsData();
                setCars(carsData);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };

        getCars();
    }, []);

    useEffect(() => {
        const getLocations = async () => {
         try{
             const locationsData = await fetchLocations();
             setLocations(locationsData);
         } catch (error) {
             console.error('Error fetching locations:', error);
         }
        };
        getLocations();
    },[])

    return (
        <div>
            <BrowserRouter basename="/VintageWheels-Ecommerce">
                <Navbar setSearchTerm={setSearchTerm}/>

                <Routes>
                    <Route path="/" element={<Home allCars={allCars}/>} />
                    <Route path="/inventory" element={<Inventory allCars={allCars} searchTerm={searchTerm}/>} />
                    <Route path="/locations" element={<Locations allLocations={allLocations}/>} />

                    {allLocations.map((location) => (
                        <Route
                            key={location.id}
                            path={`/locations/${location.name.toLowerCase()}`}
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

                    {allCars.map((car) => (
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
