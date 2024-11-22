import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo from '../assets/images/DSC00017.JPG';

const Slideshow: React.FC = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed (in ms)
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, // Auto-play speed (3 seconds)
    arrows: true, // Enable navigation arrows
  };

  const images = [
    '../assets/images/DSC00017.JPG',
    'src/assets/images/DSC01884-2-2.jpg',
    'src/assets/images/DSC01884.jpg',
    'src/assets/images/IMG_8091.jpg',
    '/Users/bennybaesu/Projects/ABGConstruction/src/assets/images/IMG_8091.jpg'
  ];

  return (
    <div>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
