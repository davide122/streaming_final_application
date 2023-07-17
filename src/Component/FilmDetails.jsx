import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getFavourites, getFilm } from "../Store";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaPlay, FaCircleInfo, FaPlus, FaPause, FaMinus } from "react-icons/fa";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import MyNav from "./MyNav";

const FilmDetails = () => {
  
  const modalVideoRef = useRef(null);
  const [show, setShow] = useState(false);
  const navigation = useNavigate();
  const filmDetails = useSelector(getFilm);
  const filmfavourite = useSelector(getFavourites);
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const trailerLink = filmDetails?.trailer_url;
  const start = trailerLink?.indexOf("/d/") + 3;
  const end = trailerLink?.indexOf("/", start);
  const trailerId = trailerLink?.slice(start, end);
  const location = useLocation();
  const isFavourite = new URLSearchParams(location.search).get("favorite");
  const favoriteid = new URLSearchParams(location.search).get("favoriteId");

  
  const handlePlayVideo = () => {
    const currentTime = localStorage.getItem(filmDetails.id);
    
    if (currentTime) {
      const playbackTime = parseInt(currentTime, 10);
      videoRef.current.currentTime = playbackTime;
    }
    setVideoPlaying(true);
    videoRef.current.play();
  };
  
  const handlePauseVideo = () => {
    setVideoPlaying(false);
    videoRef.current.pause();
    localStorage.setItem(filmDetails.id, videoRef.current.currentTime.toString());
  };

  const handleModalVideoPause = () => {
    modalVideoRef.current.pause();
    localStorage.setItem(filmDetails.id, modalVideoRef.current.currentTime.toString());
  };
  
  const handleModalVideoPlay = () => {
    const currentTime = localStorage.getItem(filmDetails.id);
    
    if (currentTime) {
      const playbackTime = parseInt(currentTime, 10);
      modalVideoRef.current.currentTime = playbackTime;
      localStorage.removeItem(filmDetails.id);
    }
    setVideoPlaying(true);
    modalVideoRef.current.play();
  };
  const handleRemoveFromFavourites = () => {
    fetch(`http://localhost:8080/favorites/film/${favoriteid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Film rimosso dai preferiti");
          navigation("/home");
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
      const response = await fetch(`http://localhost:8080/favorites/film/${filmDetails.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(filmDetails),
      });

      if (response.ok) {
        <Alert variant="success">
          Aggiunto correttamente alla tua lista dei preferiti.
        </Alert>;
      } else {
        <Alert variant="danger">errore durante l'aggiunta</Alert>;
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
                  <span>{filmDetails?.description}</span>
                  
                </div>
<div className="d-flex align-items-center  ">
                <p className="me-3">
                  {filmDetails?.anno}-{filmDetails?.durata} min
                </p>
                {filmDetails.generi==="HORROR" && <img data-tooltip={"Film vietato ai minori di 14 anni"} src="https://upload.wikimedia.org/wikipedia/commons/0/04/Bollino_rosso_TV.svg" alt="" width={40} className="img-fluid mb-3  tooltip-button" />}
               <button  data-tooltip={"Il rating è la media delle persone a cui è piaciuto il film"} className= {` btn rounded-5 mb-3 mt-1 tooltip-button ms-3 ${filmDetails.rating<=5?"btn-warning":"btn-success"}` }>
                    {filmDetails?.rating*10}%
                  </button>

</div>
                <p className="">{filmDetails?.description}...</p>
                <button className="mybutton me-4 mb-2" onClick={() => setShow(true)}>
                  <FaPlay className="me-1"></FaPlay>
                  <strong>Riproduci</strong>
                </button>
                <button
                  data-tooltip={isFavourite ? "Togli dai preferiti" : "Aggiungi alla tua lista dei preferiti"}
                  className="mybuttoninfo me-4 mb-2 tooltip-button"
                  onClick={isFavourite ? handleRemoveFromFavourites : handleSubmit}
                >
                  <strong>
                    {isFavourite ? <FaMinus /> : <FaPlus />}{" "}
                    {isFavourite ? "Togli dai preferiti" : "Aggiungi preferiti"}
                  </strong>
                </button>

                <div>{/* Altri contenuti */}</div>
              </div>
            </div>
            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 my-2">
              {!isVideoPlaying ? (
                <button
                  className="playvideo tooltip-button"
                  onClick={handlePlayVideo}
                  data-tooltip="trailer"
                >
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
        <img
          src={filmDetails?.poster_url}
          alt=""
          className="modifyposter position-absolute top-0"
        />
      </div>

      <Modal
        show={show}
        onHide={() => {
          setShow(false);
          handleModalVideoPause();
        }}
        dialogClassName="modal-90w "
        aria-labelledby="example-custom-modal-styling-title"
        fullscreen
        className="carousel-modal"
      >
        <Modal.Body closeButton className="bg-black m-0 p-0">
          <video
            src={`https://drive.google.com/uc?export=download&id=${trailerId}`}
            alt=""
            poster={posterUrl}
            className="w-100 h-100 realfilmvideo"
            ref={modalVideoRef}
            controls
            controlsList="nodownload"
            onPlay={handleModalVideoPlay}
            onPause={handleModalVideoPause}
     
          >
            <track kind="captions" />
            <source
              src={`https://drive.google.com/uc?export=download&id=${trailerId}`}
              type="video/mp4"
            />
          </video>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FilmDetails;
