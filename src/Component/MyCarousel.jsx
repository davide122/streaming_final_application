import React, { useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const MyCarousel = () => {
  const carouselRef = useRef(null);

  const handleScrollLeft = () => {
    carouselRef.current.scrollLeft -= 250; // Spostamento di 250 pixel a sinistra
  };

  const handleScrollRight = () => {
    carouselRef.current.scrollLeft += 250; // Spostamento di 250 pixel a destra
  };

  return (
    <>
      <button className="carousel-button  carousel-button-left" onClick={handleScrollLeft}>
        <FaAngleLeft className='text-light iconsize'></FaAngleLeft>
      </button>
      <button className="carousel-button  carousel-button-right" onClick={handleScrollRight}>
        <FaAngleRight className='text-light iconsize'></FaAngleRight>
      </button>
    <div className="d-flex Carousel" ref={carouselRef}>
        
      <div className="carouselitem">
        <img
          src="http://4everstatic.com/immagini/850xX/astratti/astratto,-sfondo-rosso-235819.jpg"
          alt=""
          width={100}
        />
      </div>
      {/* Aggiungi altri elementi del carosello qui */}

      <div className="carouselitem">
        <img
          src="http://4everstatic.com/immagini/850xX/astratti/astratto,-sfondo-rosso-235819.jpg"
          alt=""
          width={100}
        />
      </div>
      <div className="carouselitem">
        <img
          src="http://4everstatic.com/immagini/850xX/astratti/astratto,-sfondo-rosso-235819.jpg"
          alt=""
          width={100}
        />
      </div>
      <div className="carouselitem">
        <img
          src="http://4everstatic.com/immagini/850xX/astratti/astratto,-sfondo-rosso-235819.jpg"
          alt=""
          width={100}
        />
      </div>
      <div className="carouselitem">
        <img
          src="http://4everstatic.com/immagini/850xX/astratti/astratto,-sfondo-rosso-235819.jpg"
          alt=""
          width={100}
        />
      </div>
      <div className="carouselitem">
        <img
          src="http://4everstatic.com/immagini/850xX/astratti/astratto,-sfondo-rosso-235819.jpg"
          alt=""
          width={100}
        />
      </div>
      <div className="carouselitem">
        <img
          src="https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/haifoto/original/77812_foo-fighters.jpg"
          alt=""
          width={100}
        />
      </div>
      <div className="carouselitem">
        <img
          src="https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/haifoto/original/77812_foo-fighters.jpg"
          alt=""
          width={100}
        />
      </div>
      <div className="carouselitem">
        <img
          src="https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/haifoto/original/77812_foo-fighters.jpg"
          alt=""
          width={100}
        />
      </div>
      <div className="carouselitem">
        <img
          src="https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/haifoto/original/77812_foo-fighters.jpg"
          alt=""
          width={100}
        />
      </div>
      <div className="carouselitem">
        <img
          src="https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/haifoto/original/77812_foo-fighters.jpg"
          alt=""
          width={100}
        />
      </div>
      <div className="carouselitem">
        <img
          src="https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/haifoto/original/77812_foo-fighters.jpg"
          alt=""
          width={100}
        />
      </div>
      {/* ... Aggiungi altri elementi del carosello qui ... */}

    </div>

    </>
  );
};

export default MyCarousel;