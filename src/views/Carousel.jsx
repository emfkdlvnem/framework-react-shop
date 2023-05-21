import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = () => {
    return (
        <Carousel autoPlay interval={5000}>
        <div>
            <img src="image1.jpg" alt="Image 1" />
            <p className="legend">이미지 설명 1</p>
        </div>
        <div>
            <img src="image2.jpg" alt="Image 2" />
            <p className="legend">이미지 설명 2</p>
        </div>
        <div>
            <img src="image3.jpg" alt="Image 3" />
            <p className="legend">이미지 설명 3</p>
        </div>
        </Carousel>
    );
};

export default MyCarousel;
