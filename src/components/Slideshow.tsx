import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slideshow: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const images = [
    require("../assets/images/DSC00017.JPG"),
    require("../assets/images/DSC01884-2-2.jpg"),
    require("../assets/images/DSC01884.jpg"),
    require("../assets/images/IMG_8091.jpg"),
  ];

  return (
    <div
      style={{
        width: '100vw',
        height: '70vh', // Adjust height as needed to fit well with your layout
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Slider {...settings} style={{ width: '100%', height: '100%' }}>
        {images.map((src, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
