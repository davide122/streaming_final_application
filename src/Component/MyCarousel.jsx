import React, { useEffect, useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { getUserData } from '../Store';

const MyCarousel = () => {
  const carouselRef = useRef(null);
  const user = useSelector(getUserData);
const [allfilm, setallfilm] = useState();
const [favourites, setfavourites] = useState();
  const GetAllFilms = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/film/all", {
        headers: {
          "Content-Type": "application/json",
        
        },
      });

    

      if (response.ok ) {
        const data = await response.json();
        console.log(data);
        setallfilm(response);
      } else {
        console.log("Error occurred with the request");
        alert("An error occurred while fetching movies");
      }
    } catch (error) {
      console.log("Generic error occurred", error);
      alert("An error occurred");
    }
  };

const GetAllFavourites = async () =>{
    try {
        const responsefavourites = await fetch("http://localhost:8080/api/film/favourites/all", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
          },
        });
  
      
  
        if (responsefavourites.ok ) {
          const data = await responsefavourites.json();
          console.log(data);
          setfavourites(responsefavourites);
        } else {
          console.log("Error occurred with the request");
          alert("An error occurred while fetching movies");
        }
      } catch (error) {
        console.log("Generic error occurred", error);
        alert("An error occurred");
      }
}



  const handleScrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -500,
      behavior: 'smooth',
    });
  };

  const handleScrollRight = () => {
    carouselRef.current.scrollBy({
      left: 500,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    GetAllFilms();
    GetAllFavourites();
  },[] ); 

  return (
    <>
      <button className="carousel-button carousel-button-left" onClick={handleScrollLeft}>
        <FaAngleLeft className="text-light iconsize" />
      </button>
      <button className="carousel-button carousel-button-right" onClick={handleScrollRight}>
        <FaAngleRight className="text-light iconsize" />
      </button>
      <div className="d-flex Carousel" ref={carouselRef}>
       
        {/* Aggiungi  elementi */}
      </div>
    </>
  );
};

export default MyCarousel;
