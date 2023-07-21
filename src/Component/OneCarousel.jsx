import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import freccia from "../image/freccia.gif"
const OneCarousel = ({ title, films, fristaccess, onFilmClick }) => {
  const carouselRefs = React.useRef();

  const handleScrollLeft = () => {
    carouselRefs.current.scrollBy({
      left: -500,
      behavior: 'smooth',
    });
  };

  const handleScrollRight = () => {
    carouselRefs.current.scrollBy({
      left: 500,
      behavior: 'smooth',
    });
  };

  return (
    <div className='mb-5'>
    <h4 className='titlecategory'>{title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}</h4>

    <button className='carousel-button carousel-button-left' onClick={handleScrollLeft}>
      <FaAngleLeft className='text-light iconsize' />
    </button>

    <button className='carousel-button carousel-button-right' onClick={handleScrollRight}>
      <FaAngleRight className='text-light iconsize' />
    </button>

    <div className='d-flex Carousel' ref={carouselRefs}>
      {/* Aggiungiamo un controllo per verificare se films è un array prima di utilizzare map */}
      {Array.isArray(films) &&
        films.map((film) => (
          <div key={film.id} className='carouselitem'>
            {fristaccess && <img src={freccia} className='rowfristaccess' alt='freccia' />}
            <img src={film.movie?(film.movie.poster_url):(film.poster_url)} alt={film.movie?(film.movie.title):(film.title)} width={100} onClick={() => onFilmClick(film)} />
          </div>
        ))}
    </div>
  </div>
  );
};

export default OneCarousel;
