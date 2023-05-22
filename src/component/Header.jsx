import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function Header({ toggleTheme }) {
    const [isRotating, setIsRotating] = useState(false);
    const isDarkModeStored = localStorage.getItem('isDarkMode');
    const [isDarkMode, setIsDarkMode] = useState(isDarkModeStored === null ? true : JSON.parse(isDarkModeStored));
    const [currentIcon, setCurrentIcon] = useState(isDarkMode ? faMoon : faSun);

    useEffect(() => {
        setCurrentIcon(isDarkMode ? faMoon : faSun);
        // toggleTheme(isDarkMode);  // <-- Remove this line
    }, [isDarkMode]);

    const handleButtonClick = () => {
        setIsRotating(true);
        const nextMode = !isDarkMode;
        setIsDarkMode(nextMode);

        setTimeout(() => {
            setIsRotating(false);
        }, 500);

        toggleTheme(nextMode);  // <-- Call toggleTheme here instead
    };

    useEffect(() => {
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    return (
        <header className={`px-4 py-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h1>
            <Link to="/">React Shop</Link>
        </h1>
        <nav>
            <ul className="flex">
            <li>
                <Link to="/fasion">패션</Link>
            </li>
            <li>
                <Link to="/accessory">액세서리</Link>
            </li>
            <li>
                <Link to="/digital">디지털</Link>
            </li>
            </ul>
        </nav>
        <button
            onClick={handleButtonClick}
            className={`transition-transform duration-500 ease-in-out transform-gpu ${
            isRotating ? 'rotate-45' : ''
            }`}
            style={{ transformOrigin: 'center' }}
        >
            <FontAwesomeIcon
            icon={currentIcon}
            className={`${isDarkMode ? 'text-white' : 'text-black'}`}
            />
        </button>
        </header>
    );
}

Header.propTypes = {
    toggleTheme: PropTypes.func.isRequired,
};

export default Header;
