import { useSelector } from "react-redux";
import { getFilm } from "../Store";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaPlay,FaCircleInfo,FaPlus,FaPause } from "react-icons/fa6";

import MyNav from "./MyNav";
import CircleProgressbar from "./CircleProgressbar";
import MyCarousel from "./MyCarousel";
import { useRef, useState } from "react";

const FilmDetails = () =>{
   
    const [isVideoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef(null);
    const filmDetails = useSelector(getFilm);
    
    const trailerLink = filmDetails?.trailer_url;

    const start = trailerLink.indexOf("/d/") + 3; //Recupero solo l'id perchè il drive di google non restituisce il giusto link per vedere il video, e ho fatto un paio di magheggi
const end = trailerLink.indexOf("/", start);
const trailerId = trailerLink.slice(start, end);
    console.log(trailerId); 



    const handlePlayVideo = () => {
        setVideoPlaying(true);
        videoRef.current.play();

      };
      const handlePauseVideo = () => {
        setVideoPlaying(false);
        videoRef.current.pause();
      };
    const handleSubmit = async (event) => {
        event.preventDefault();

        
    
        
        try {
            const response = await fetch("http://localhost:8080/api/film/favourites/add", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `${localStorage.getItem("token")}`,
              },
              body: JSON.stringify(filmDetails),
            });
      
            if (response.ok) {
              const data = await response.json();
              console.log(data);
             alert("film added successfully")
    
            } else {
              console.log("Error occurred with the request");
              alert("problema con l'aggiunta del film alla tua lista");
            }
          } catch (error) {
            console.log("Generic error occurred", error);
            alert(error);
          }
      
          
        };
  
        const posterUrl = isVideoPlaying ? "" : filmDetails?.poster_url;
    return(
        <>
        <MyNav></MyNav>
<div className="DetailsContainer">
<div className="container-fluid">
    <div className="row textonvideo">
        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 justify-content-start align-items-center d-flex">
            <div className="w-100 ms-2 details">
                <div className="png">
                     <img src={filmDetails?.text_png_url} alt="" className="w-100" />
                     
                </div>
                <h1 className="d-none">{filmDetails?.title}</h1>
                <p>{filmDetails?.anno}-{filmDetails?.durata} min</p>
                     <p className="">{filmDetails?.description?.slice(0,120)}...</p>
                <button className="mybutton me-4 mb-2"> <FaPlay className="me-1"></FaPlay><strong>Riproduci</strong></button>
                <button data-tooltip="Aggiungi alla tua lista dei preferiti"  className="mybuttoninfo me-4 mb-2 tooltip-button" onClick={handleSubmit}> <strong><FaPlus></FaPlus>Aggiungi alla lista</strong></button>
          
                <div>
      {/* Altri contenuti */}

    </div>

            </div>
        </div>
        <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 my-2">
        {!isVideoPlaying ? (
          <button className="playvideo tooltip-button" onClick={handlePlayVideo}  data-tooltip="trailer">
            <FaPlay />
          </button>
        ):(<button className="pausevideo" onClick={handlePauseVideo}>
        <FaPause />
      </button>)}
<video src={`https://drive.google.com/uc?export=download&id=${trailerId}`} alt="" poster={posterUrl} className="w-100 h-100 FILTER"   ref={videoRef}> </video>
        </div>
    </div>
</div>
<img src={filmDetails?.poster_url} alt="" className="modifyposter position-absolute top-0"/>

</div>

        </>
    )
}
export default FilmDetails;