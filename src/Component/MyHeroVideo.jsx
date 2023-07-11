import { useSelector } from 'react-redux';
import { getFilm } from '../Store';
import { useEffect, useState } from 'react';

const MyHeroVideo = () => {
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
      <video src={`https://drive.google.com/uc?export=download&id=${trailerUrl}`} autoPlay muted loop poster={randomFilm?.poster_url}/>
     
    </div>
  );
};

export default MyHeroVideo;
