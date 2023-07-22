import React, { useEffect, useState } from 'react';
import { addToFavourites, setCategories, setFilm } from '../Store';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import OneCarousel from './OneCarousel';

const MyCarousel = () => {
  const location = useLocation();
  const fristaccess = new URLSearchParams(location.search).get("fristaccess");
fristaccess&&console.log("primo accesso!")
  const [filter, setfilter] = useState([]);
    const Dispatch=useDispatch()
  const [allfilm, setAllfilm] = useState([]);
  const [favourites, setFavourites] = useState([]);
  console.log("favoriti",favourites);
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
Dispatch(setCategories(filmsByCategory));



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
      const responsefavourites = await fetch("http://localhost:8080/favorites/film/all", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (responsefavourites.ok) {
        const data = await responsefavourites.json();
        console.log(" ui",data);
        setFavourites(data);
        console.log("stai attento",favourites) // Assegna i dati a favourites
        Dispatch(addToFavourites(data));
      } else {
        console.log("Error films not found");
       
      }
    } catch (error) {
      console.log("Generic error occurred", error);
      alert("An error occurred");
    }
  };



  useEffect(() => {
    GetAllFilms();
    GetAllFavourites();
  
  }, [],[favourites]);

  const handleFilmClick = (film) => {
    Dispatch(setFilm(film));
    navigation(`/details/${film.id}${fristaccess&&"?fristaccess=true"}?dettagli=true`);
    
  };


  const handleFilmClickfavorite = (film)=>{
    Dispatch(setFilm(film.movie));
    const filmid = film.movie.id;
  const favoriteId = film.id;
  

    navigation(`/details/${filmid}?favorite=true&favoriteId=${favoriteId}`);
  }

  
  return (
    <>
    {Object.entries(filter).map(([category, films], index) => (
      <OneCarousel
        key={category}
        title={category}
        films={films}
        fristaccess={fristaccess}
        onFilmClick={handleFilmClick}
      />
    ))}

{Array.isArray(favourites) && favourites.length > 0 && (
            <OneCarousel
            key={favourites}
            title={"I tuoi preferiti"}
            films={favourites}
            fristaccess={fristaccess}
            onFilmClick={handleFilmClickfavorite}
          />
      )}

  </>
        
  );
};

export default MyCarousel;
