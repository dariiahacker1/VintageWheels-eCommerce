import React, {useState} from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = ({setSearchTerm}) => {
    const [menu, setMenu] = useState("home");
    const [dropdown, setDropdown] = useState(null);

    const handleMouseEnter = (dropdownName) => {
        setDropdown(dropdownName);
    };

    const handleMouseLeave = () => {
        setDropdown(null);
    };

    return (
        <div className="navbar">
            <Link style={{textDecoration: 'none', color: 'inherit'}} to="/">
                <img
                    src={logo}
                    alt="Logo"
                    onClick={() => setMenu("home")}
                />
            </Link>

            <SearchBar setSearchTerm={setSearchTerm}/>

            <ul className="nav-menu">
                <li
                    onClick={() => setMenu("inventory")}
                >
                    <Link style={{textDecoration: 'none', color: 'inherit'}} to="/inventory">
                        INVENTORY
                    </Link>
                    {menu === "inventory" ? <hr/> : null}
                </li>

                <div
                    className="dropdown"
                    onMouseEnter={() => handleMouseEnter('locations')}
                    onMouseLeave={handleMouseLeave}
                >
                    <li onClick={() => setMenu("")}>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to="/locations">
                            LOCATIONS &#x25BC;
                        </Link>
                    </li>
                    {dropdown === 'locations' && (
                        <div className="drop">
                            <ul className="menu">
                                <Link style={{textDecoration: 'none', color: 'inherit'}} to="/locations/atlanta">
                                    <li onClick={() => setMenu("")} className="menu-item">ATLANTA</li>
                                </Link>
                                <Link style={{textDecoration: 'none', color: 'inherit'}} to="/locations/nashville">
                                    <li onClick={() => setMenu("")} className="menu-item">NASHVILLE</li>
                                </Link>
                                <Link style={{textDecoration: 'none', color: 'inherit'}} to="/locations/dallas">
                                    <li onClick={() => setMenu("")} className="menu-item">DALLAS</li>
                                </Link>
                                <Link style={{textDecoration: 'none', color: 'inherit'}} to="/locations/charlotte">
                                    <li onClick={() => setMenu("")} className="menu-item">CHARLOTTE</li>
                                </Link>
                            </ul>
                        </div>
                    )}
                </div>

                <div
                    className="dropdown"
                    onMouseEnter={() => handleMouseEnter('about')}
                    onMouseLeave={handleMouseLeave}
                >
                    <li onClick={() => setMenu("")}>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to="/about">
                            ABOUT &#x25BC;
                        </Link>
                    </li>
                    {dropdown === 'about' && (
                        <div className="drop">
                            <ul className="menu">
                                <Link style={{textDecoration: 'none', color: 'inherit'}} to="/about">
                                    <li onClick={() => setMenu("")} className="menu-item">OUR STORY</li>
                                </Link>

                                <Link style={{textDecoration: 'none', color: 'inherit'}} to="/faq">
                                    <li onClick={() => setMenu("")} className="menu-item">FAQ</li>
                                </Link>
                            </ul>
                        </div>
                    )}
                </div>
            </ul>

            <div className="nav-login" onClick={() => setMenu("")}>
                <Link style={{textDecoration: 'none', color: 'inherit'}} to="/login">
                    <button>Login</button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
