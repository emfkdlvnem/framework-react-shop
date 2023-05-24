import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCcVisa,
    faCcMastercard,
    faCcAmex,
    faCcPaypal,
    faCcDinersClub,
    faCcDiscover,
    faFacebookF,
    faInstagram,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';

function Footer({ isDarkMode, toggleTheme }) {
    const cardList = ['visa', 'mastercard', 'amex', 'paypal', 'diners-club', 'discover'];
    const socialMediaList = [
        { icon: faFacebookF, link: 'https://www.facebook.com/' },
        { icon: faInstagram, link: 'https://www.instagram.com/' },
        { icon: faGithub, link: 'https://github.com/' },
    ];

    const date = new Date();
    const thisYear = date.getFullYear();

    return (
        <footer className={`border-t py-8 ${isDarkMode ? 'bg-header-dark-mode text-white' : 'bg-white text-black shadow-lg'}`}>
        <div className="container mx-auto">
            <div className="text-center">
                <a href="https://zero-base.co.kr/" target="_blank" rel="noopener noreferrer" className="text-gray-500">
                    제로베이스
                </a>
            </div>
            <div className="text-center text-2xl">
            {cardList.map((card) => (
                <FontAwesomeIcon
                key={card}
                icon={
                    card === 'visa'
                    ? faCcVisa
                    : card === 'mastercard'
                    ? faCcMastercard
                    : card === 'amex'
                    ? faCcAmex
                    : card === 'paypal'
                    ? faCcPaypal
                    : card === 'diners-club'
                    ? faCcDinersClub
                    : faCcDiscover
                }
                className="m-2 hover:text-sky-400"
                />
            ))}
            </div>

            <div className="text-center text-2xl">
            {socialMediaList.map((social) => (
                <a
                key={social.icon.iconName}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400"
                >
                <FontAwesomeIcon icon={social.icon} className="m-2" />
                </a>
            ))}
            </div>
            <div className="text-center">© {thisYear} ZB</div>
        </div>
        </footer>
    );
}
Footer.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
    toggleTheme: PropTypes.func.isRequired,
};
export default Footer;
