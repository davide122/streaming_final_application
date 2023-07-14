import { useSelector } from "react-redux";
import { getFavourites, getFilm } from "../Store";
import { useLocation, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaPlay, FaCircleInfo, FaPlus, FaPause } from "react-icons/fa";
import Alert from 'react-bootstrap/Alert';

import MyNav from "./MyNav";

import { useRef, useState } from "react";
import { FaMinus } from "react-icons/fa6";

const FilmDetails = () => {
  const filmDetails = useSelector(getFilm);
const filmfavourite = useSelector(getFavourites)
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const trailerLink = filmDetails?.trailer_url;
  const start = trailerLink?.indexOf("/d/") + 3;
  const end = trailerLink?.indexOf("/", start);
  const trailerId = trailerLink?.slice(start, end);
  const location = useLocation();
  const isFavourite = new URLSearchParams(location.search).get("favorite");
  const favoriteid = new URLSearchParams(location.search).get("favoriteId")
console.log("qyu dei guarda",filmfavourite);
  const handlePlayVideo = () => {
    setVideoPlaying(true);
    videoRef.current.play();
  };

  const handlePauseVideo = () => {
    setVideoPlaying(false);
    videoRef.current.pause();
  };

  const handleRemoveFromFavourites = () => {
    // Esegui la chiamata fetch per rimuovere il film dai preferiti nell'API
    fetch(`http://localhost:8080/favorites/film/${favoriteid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          // Aggiorna lo stato o esegui altre azioni necessarie dopo la rimozione
          console.log("Film rimosso dai preferiti");
        } else {
          console.log("Errore durante la rimozione del film dai preferiti");
        }
      })
      .catch((error) => {
        console.log("Errore generico", error);
        alert("Si è verificato un errore durante la rimozione del film dai preferiti");
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Esegui la chiamata fetch per aggiungere il film ai preferiti nell'API
      const response = await fetch(`http://localhost:8080/favorites/film/${filmDetails.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(filmDetails),
      });

      if (response.ok) {
        
        <Alert  variant="success">
       Aggiunto correttamente alla tua lista dei preferiti.
      </Alert>
      } else {
        <Alert  variant="danger">
errore durante l'aggiunta
       </Alert>
      }
    } catch (error) {
      console.log("Errore generico", error);
      alert("Si è verificato un errore durante l'aggiunta del film ai preferiti");
    }
  };

  const posterUrl = isVideoPlaying ? "" : filmDetails?.poster_url;

  return (
    <>
      <MyNav />
      <div className="DetailsContainer">
        <div className="container-fluid">
          <div className="row textonvideo">
            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 justify-content-start align-items-center d-flex">
              <div className="w-100 ms-2 details">
                <div className="png">
                  {filmDetails.text_png_url ? (
                    <img src={filmDetails?.text_png_url} alt="" className="w-100" />
                  ) : (
                    <h1>{filmDetails?.title}</h1>
                  )}
                </div>

                <div className="d-flex d-none">
                  <h1 className="d-flex">{filmDetails?.title}</h1>
                  <button className="btn rounded-5 text-dark bg-light ms-3">{filmDetails?.rating}</button>
                </div>

                <p>
                  {filmDetails?.anno}-{filmDetails?.durata} min
                </p>
                <p className="">{filmDetails?.description?.slice(0, 120)}...</p>
                <button className="mybutton me-4 mb-2">
                  <FaPlay className="me-1"></FaPlay>
                  <strong>Riproduci</strong>
                </button>
                <button
  data-tooltip={isFavourite ? "Togli dai preferiti" : "Aggiungi alla tua lista dei preferiti"}
  className="mybuttoninfo me-4 mb-2 tooltip-button"
  onClick={isFavourite ? handleRemoveFromFavourites : handleSubmit}
>
  <strong>{isFavourite ? <FaMinus /> : <FaPlus />} {isFavourite ? "Togli dai preferiti" : "Aggiungi preferiti"}</strong>
</button>

                <div>{/* Altri contenuti */}</div>
              </div>
            </div>
            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 my-2">
              {!isVideoPlaying ? (
                <button className="playvideo tooltip-button" onClick={handlePlayVideo} data-tooltip="trailer">
                  <FaPlay />
                </button>
              ) : (
                <button className="pausevideo" onClick={handlePauseVideo}>
                  <FaPause />
                </button>
              )}
              <video
                src={`https://drive.google.com/uc?export=download&id=${trailerId}`}
                alt=""
                poster={posterUrl}
                className="w-100 h-100 FILTER"
                ref={videoRef}
              ></video>
            </div>
          </div>
        </div>
        <img src={filmDetails?.poster_url} alt="" className="modifyposter position-absolute top-0" />
      </div>
    </>
  );
};

export default FilmDetails;
