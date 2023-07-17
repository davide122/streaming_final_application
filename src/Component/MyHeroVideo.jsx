import { useSelector } from 'react-redux';
import { getFilm } from '../Store';
import { useEffect, useRef, useState } from 'react';
import { GiSpeakerOff, GiSpeaker } from "react-icons/gi";


const MyHeroVideo = () => {
  const videoRef = useRef(null);
const[iconplay,seticonplay]= useState(false);
const [filmtimeout, setfilmtimeout] = useState(false);
  const handleToggleAudio = () => {
    videoRef.current.muted = !videoRef.current.muted;
    iconplay?seticonplay(false):seticonplay(true);
  };
  
  
    const [randomFilm, setRandomFilm] = useState(null);
  const [isTextScaled, setTextScaled] = useState(false);
  useEffect(() => {
    const scaleTimeout = setTimeout(() => {
      setTextScaled(true);
    }, 1); // Scala il testo dopo 10 secondi

    const restoreTimeout = setTimeout(() => {
      setTextScaled(false);
    }, 12000); // Ripristina il testo alla dimensione originale dopo 12 secondi

    return () => {
      clearTimeout(scaleTimeout);
      clearTimeout(restoreTimeout);
    };
  }, []);

  
  useEffect(() => {
    const scaleTimeout = setTimeout(() => {
      setfilmtimeout(true);
    }, 100); // Scala il testo dopo 10 secondi

    const restoreTimeout = setTimeout(() => {
      setfilmtimeout(false);
    
    }, 12000); // Ripristina il testo alla dimensione originale dopo 12 secondi

    return () => {
      clearTimeout(scaleTimeout);
      clearTimeout(restoreTimeout);
    };
  }, [filmtimeout]);
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
    <video src={`https://drive.google.com/uc?export=download&id=${trailerUrl}`} autoPlay muted loop  poster={randomFilm?.poster_url} ref={videoRef}/>
    <div className={`infovideohome png d-flex flex-column text-light ${isTextScaled ? 'scaled' : ''}`}>
      <img src={randomFilm?.text_png_url} alt="" className="img-fluid" />
      <p>{randomFilm?.description}</p>
      <div className='d-flex justify-content-center align-items-center'>

      </div>
    </div>
    <div className='playaudio'>
    {!iconplay ? <button onClick={handleToggleAudio} className='btn'><GiSpeaker></GiSpeaker></button> : <button onClick={handleToggleAudio} className='btn'>< GiSpeakerOff></GiSpeakerOff></button>}
    </div>
  
  </div>
  
  );
};

export default MyHeroVideo;
