import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faShoppingBasket  } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header({ toggleTheme }) {
    const [isRotating, setIsRotating] = useState(false);
    const isDarkModeStored = localStorage.getItem('isDarkMode');
    const [isDarkMode, setIsDarkMode] = useState(
        isDarkModeStored === null ? true : JSON.parse(isDarkModeStored)
    );
    const [currentIcon, setCurrentIcon] = useState(isDarkMode ? faMoon : faSun);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        setCurrentIcon(isDarkMode ? faMoon : faSun);
    }, [isDarkMode]);

    const handleButtonClick = () => {
        setIsRotating(true);
        const nextMode = !isDarkMode;
        setIsDarkMode(nextMode);

        setTimeout(() => {
            setIsRotating(false);
        }, 500);

        toggleTheme(nextMode);
    };

    useEffect(() => {
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    return (
        <header className={`${isDarkMode ? 'bg-header-dark-mode text-white' : 'bg-white'}`}>
            <div className="header-left">
                <h1>
                    <Link to="/">React Shop</Link>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/fashion" className={`nav-link ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                                패션
                            </Link>
                        </li>
                        <li>
                            <Link to="/accessory" className={`nav-link ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                                액세서리
                            </Link>
                        </li>
                        <li>
                            <Link to="/digital" className={`nav-link ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                                디지털
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header-right">
                <ul>
                    <li>
                        <button
                            onClick={handleButtonClick}
                            className={`transition-transform duration-500 ease-in-out transform-gpu ${
                                isRotating ? 'rotate-45' : ''
                            }`}
                            style={{ transformOrigin: 'center' }}
                        >
                            <FontAwesomeIcon
                                icon={currentIcon}
                                className={`text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                            />
                        </button>

                    </li>
                    <li>
                        <div>
                            <input type="text" placeholder="검색" className={`${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} h-10 rounded-md px-2`} />
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to="/cart">
                                <button>
                                    <FontAwesomeIcon
                                        icon={faShoppingBasket }
                                        className={`text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                                    />
                                </button>
                            </Link>
                            <span className="absolute top-5 right-9 px-3 py-1 rounded-full bg-red-500 text-xs font-bold leading-none text-gray-200 transform translate-x-1/2 -translate-y-1/2">
                                {cartCount}
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
}

Header.propTypes = {
    toggleTheme: PropTypes.func.isRequired,
};

export default Header;
