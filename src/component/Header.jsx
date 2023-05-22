import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function Header({ isDarkMode, toggleTheme }) {
    const [isRotating, setIsRotating] = useState(false);
    const [clickedIcon, setClickedIcon] = useState(faSun);
    
    const handleButtonClick = () => {
        setIsRotating(true);
        setClickedIcon(faMoon);
        toggleTheme();
        setTimeout(() => {
            setIsRotating(false);
            setClickedIcon(faSun);
        }, 500);
    };
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
                    icon={isDarkMode ? faSun : faMoon}
                    className={`${isDarkMode ? 'text-white' : 'text-black'}`}
                />
            </button>
        </header>
    );
}
Header.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
    toggleTheme: PropTypes.func.isRequired
};
export default Header;
