import { useState } from 'react';
import { Link } from 'react-router-dom';
import search_icon from '../Assets/search-icon.png';
import './SearchBar.css';

const SearchBar = ({ setSearchTerm }) => {
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSearchClick = () => {
        setSearchTerm(input);
    };

    return (
        <div className="search-bar">
            <input
                id="user-input"
                type="text"
                placeholder="Search"
                value={input}
                onChange={handleInputChange}
            />
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/inventory">
                <button onClick={handleSearchClick}><img src={search_icon} alt=""/></button>
            </Link>
        </div>
    );
};

export default SearchBar;
