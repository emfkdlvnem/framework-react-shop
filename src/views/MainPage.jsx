import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className="carousel-wrapper">
        <h1>메인 페이지</h1>
        <Carousel autoPlay>
            <div>
            <img src="carousel-image1.jpg" alt="Carousel Image 1" />
            <p className="legend">이미지 설명 1</p>
            </div>
            <div>
            <img src="carousel-image2.jpg" alt="Carousel Image 2" />
            <p className="legend">이미지 설명 2</p>
            </div>
            <div>
            <img src="carousel-image3.jpg" alt="Carousel Image 3" />
            <p className="legend">이미지 설명 3</p>
            </div>
        </Carousel>

        <div>
            <Link to="/page-not-found">바로가기</Link>
        </div>
        </div>
    );
};

export default MainPage;
