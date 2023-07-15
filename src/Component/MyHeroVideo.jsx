import { useSelector } from 'react-redux';
import { getFilm } from '../Store';
import { useEffect, useState } from 'react';


const MyHeroVideo = () => {
  const [isTextScaled, setTextScaled] = useState(false);
  useEffect(() => {
    const scaleTimeout = setTimeout(() => {
      setTextScaled(true);
    }, 100); // Scala il testo dopo 10 secondi

    const restoreTimeout = setTimeout(() => {
      setTextScaled(false);
    }, 12000); // Ripristina il testo alla dimensione originale dopo 12 secondi

    return () => {
      clearTimeout(scaleTimeout);
      clearTimeout(restoreTimeout);
    };
  }, []);

  const [randomFilm, setRandomFilm] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState('');

  const films = useSelector(getFilm);

  const getRandomFilm = () => {
    const randomIndex = Math.floor(Math.random() * films.length);
    const film = films[randomIndex];
    setRandomFilm(film);

    if (film && film.trailer_url) {
      const trailerLink = film.trailer_url;
      const start = trailerLink.indexOf("/d/") + 3;
      const end = trailerLink.indexOf("/", start);
    
      const trailerId = trailerLink.slice(start, end);
      setTrailerUrl(trailerId)
    }
};

  useEffect(() => {
    getRandomFilm();
  }, [films]);

  return (
    <div className="video-container">
    <video src={`https://drive.google.com/uc?export=download&id=${trailerUrl}`} autoPlay muted loop poster={randomFilm?.poster_url} />
    <div className={`infovideohome png d-flex flex-column text-light ${isTextScaled ? 'scaled' : ''}`}>
      <img src={randomFilm?.text_png_url} alt="" className="img-fluid" />
      <p>{randomFilm?.description}</p>
      <div className='d-flex justify-content-center align-items-center'>

      </div>
    </div>
  </div>

  );
};

export default MyHeroVideo;
