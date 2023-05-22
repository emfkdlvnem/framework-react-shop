import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Carousel.css';

import img_shop1 from '../assets/img_shop_fashion.jpeg';
import img_shop2 from '../assets/img_shop_digital.jpeg';
import img_shop3 from '../assets/img_shop_grocery.jpeg';

const VisualCarousel = () => {
    const slides = useMemo(
        () => [
            {
                image: img_shop1,
                title: '물빠진 청바지',
                description: '이제 막 도착한 패션 청바지를 구경해 보세요.',
                link: '/fashion',
            },
            {
                image: img_shop2,
                title: '신속한 업무처리!',
                description: '다양한 디지털 상품을 둘러보세요.',
                link: '/digital',
            },
            {
                image: img_shop3,
                title: '신선한 식품!',
                description: '농장 직배송으로 더욱 신선한 식료품을 만나보세요.',
                link: '/grocery',
            },
        ],[]
    );

    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const goToNextSlide = useCallback(() => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, [slides]);

    useEffect(() => {
        const intervalId = setInterval(goToNextSlide, 5000);

        return () => {
        clearInterval(intervalId);
        };
    }, [goToNextSlide]);

    return (
        <div className="carousel">
            <button className="carousel__button carousel__button--prev" onClick={goToPreviousSlide}>
                <FontAwesomeIcon icon={faCaretLeft} />
            </button>
            <div className="carousel__slide">
                {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`carousel__image ${index === currentSlide ? 'active' : ''}`}
                >
                    <img src={slide.image} alt={slide.title} />
                    <div className="carousel__content">
                        <h2>{slide.title}</h2>
                        <p>{slide.description}</p>
                        <Link to={slide.link} className="link">
                            바로가기
                            <FontAwesomeIcon icon={faArrowRight} className="link-arrow" />
                        </Link>
                    </div>
                </div>
                ))}
            </div>
            <button className="carousel__button carousel__button--next" onClick={goToNextSlide}>
                <FontAwesomeIcon icon={faCaretRight} />
            </button>
            <div className="carousel__indicators">
                {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`carousel__indicator ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                ></div>
                ))}
            </div>
        </div>
    );
};

export default VisualCarousel;
