import React, { useEffect, useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { getUserData, setFilm } from '../Store';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Spinner from 'react-bootstrap/Spinner';
import IntersectionObserverComponent from './IntersectionObserverComponent';

const MyCarousel = () => {
  const [filter, setfilter] = useState([]);
    const Dispatch=useDispatch()
  const carouselRef = useRef(null);
  const user = useSelector(getUserData);
  const [allfilm, setAllfilm] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [loading, setloading]= useState(false)
  const navigation = useNavigate();
  const GetAllFilms = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/film/all", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setloading(true);
        console.log(data);
        setAllfilm(data); // Assegna i dati a allfilm
        Dispatch(setFilm(data));

        const filmsByCategory = data.reduce((acc, film) => {
          if (film.generi in acc) {
            acc[film.generi].push(film);
          } else {
            acc[film.generi] = [film];
          }
          return acc;
        }, {});
        console.log("guarda qui ",filmsByCategory);
setfilter(filmsByCategory);

      } else {
        console.log("Error occurred with the request");
        alert("An error occurred while fetching movies");
      }
    } catch (error) {
      console.log("Generic error occurred", error);
      alert("An error occurred");
    }
  };

  const GetAllFavourites = async () => {
    try {
      const responsefavourites = await fetch("http://localhost:8080/api/film/favourites/all", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        },
      });

      if (responsefavourites.ok) {
        const data = await responsefavourites.json();
        console.log(data);
        setFavourites(data); // Assegna i dati a favourites
      } else {
        console.log("Error occurred with the request");
        alert("An error occurred while fetching movies");
      }
    } catch (error) {
      console.log("Generic error occurred", error);
      alert("An error occurred");
    }
  };

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
  }, []);

  const handleFilmClick = (film) => {
    Dispatch(setFilm(film));
    navigation(`/details/${film.id}`);
    
  };
  return (
    loading ? (
      <div className='mb-5'>
        <button className="carousel-button carousel-button-left" onClick={handleScrollLeft}>
          <FaAngleLeft className="text-light iconsize" />
        </button>
        <button className="carousel-button carousel-button-right" onClick={handleScrollRight}>
          <FaAngleRight className="text-light iconsize" />
        </button>
        {Object.entries(filter).map(([category, films]) => (
          <div key={category} className="d-flex Carousel" ref={carouselRef}>
            {films?.map((film) => (
              <div key={film.id} className="carouselitem">
                <img
                  src={film.poster_url}
                  alt={film.title}
                  width={100}
                  onClick={() => handleFilmClick(film)}
                />
                {/* Aggiungi elementi */}
            
              </div>
            ))}
          </div>
        ))}
      </div>
    ) : (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  )
};

export default MyCarousel;
