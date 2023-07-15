import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFilm } from '../Store';

function AddToFavoritesForm() {

  const [removeId, setRemoveId] = useState('');

  
  const handleChangeremove = (event) => {
    const { name, value } = event.target;
    setFilmData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  
  const handleRemove = async (event) => {
    event.preventDefault();

    const selectedFilmId = event.target.value;
  
    try {
      const response = await fetch(`http://localhost:8080/api/film/${removeId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        // Successo, puoi fare qualcosa (ad esempio, visualizzare un messaggio di successo)
        alert("rimosso con successo");
        console.log('Film rimosso con successo');
      } else {
        // Errore nella richiesta, gestiscilo adeguatamente
        console.log('Errore durante la rimozione del film');
      }
    } catch (error) {
      // Errore generico, gestiscilo adeguatamente
      console.log('Errore durante l\'invio della richiesta', error);
    }
  };
  
  const GetAllFilms = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/film/all", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setfilm(data);
      } else {
        console.log("Error occurred with the request");
        alert("An error occurred while fetching movies");
      }
    } catch (error) {
      console.log("Generic error occurred", error);
      alert("An error occurred");
    }
  };
  const[film,setfilm]=useState([]);

  console.log(film);
  const [filmData, setFilmData] = useState({
    description: '',
    title: '',
    anno: '',
    generi: '',
    durata: '',
    rating: '',
    actors: '',
    poster_url: '',
    trailer_url: '',
    text_png_url: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilmData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
useEffect(()=>{
  GetAllFilms();
},[])
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Converto la stringa degli attori in un array
    const actorsArray = filmData.actors.split(',').map(actor => actor.trim());

    // Aggiorno i dati del film con l'array di attori
    const filmDataWithActors = {
      ...filmData,
      actors: actorsArray
    };

    try {
      const response = await fetch('http://localhost:8080/api/film', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(filmDataWithActors)
      });

      if (response.ok) {
        // Successo, puoi fare qualcosa (ad esempio, visualizzare un messaggio di successo)
        console.log('Film aggiunto ai preferiti con successo');
      } else {
        // Errore nella richiesta, gestiscilo adeguatamente
        console.log('Errore durante l\'aggiunta del film ai preferiti');
      }
    } catch (error) {
      // Errore generico, gestiscilo adeguatamente
      console.log('Errore durante l\'invio della richiesta', error);
    }
  };

  return (
    <div className="container-fluid">

    <div className='row'>
<div className="col col-4">

    <form onSubmit={handleSubmit} className="text-center">
      <h1 className='text-light'>Aggiungi film</h1>
      <div className="my-3">
        
        <textarea
          id="description"
          name="description"
          value={filmData.description}
          onChange={handleChange}
          className="Input"
          placeholder='inserisci descrizione'
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          id="title"
          name="title"
          value={filmData.title}
          onChange={handleChange}
          className="Input"
          placeholder='inserisci titolo'
          required
        />
      </div>

      <div className="mb-3">
       
        <input
          type="number"
          id="anno"
          name="anno"
          value={filmData.anno}
          onChange={handleChange}
          className="Input"
          placeholder='inserisci anno es: 1999'
          required
        />
      </div>

      <div className="mb-3">
        <select
          id="generi"
          name="generi"
          value={filmData.generi}
          onChange={handleChange}
          className="Input bg-dark"
          required
        >
           <option value="">Seleziona un genere</option>
          <option value="ACTION">Azione</option>
          <option value="ADVENTURE">Avventura</option>
          <option value="COMEDY">Commedia</option>
          <option value="DRAMA">Drammatico</option>
          <option value="FANTASY">Fantasy</option>
          <option value="HORROR">Horror</option>
          <option value="ROMANCE">Romantico</option>
          <option value="SCIENCE_FICTION">Fantascienza</option>
          <option value="THRILLER">Thriller</option>
        </select>
      </div>
      <span className='text-light'>inserisci durata in minuti es: {filmData.durata} min</span>
      <div className="">
      
        <input
          type="range"
          id="durata"
          name="durata"
          value={filmData.durata}
          onChange={handleChange}
          className="Input"
          min="0"
    max="300"
          placeholder='inserisci durata in minuti es: 120'
          required
        />
        
      </div>
      

      <div className="mb-3">
       
        <input
          type="number"
        
          id="rating"
          name="rating"
          value={filmData.rating}
          onChange={handleChange}
          className="Input"
          placeholder='inserisci rating es: 8.9'
          required
        />
      </div>

      <div className="mb-3">
       
        <input
          type="text"
          id="actors"
          name="actors"
          value={filmData.actors}
          onChange={handleChange}
          className="Input"
          placeholder='inserisci attori separati da virgola ","'
          required
        />
      </div>

      <div className="mb-3">
       
        <input
          type="text"
          id="poster_url"
          name="poster_url"
          value={filmData.poster_url}
          onChange={handleChange}
          className="Input"
          placeholder='inserisci url del poster'
          required
        />
      </div>

      <div className="mb-3">
     
        <input
          type="text"
          id="trailer_url"
          name="trailer_url"
          value={filmData.trailer_url}
          onChange={handleChange}
          className="Input"
          placeholder='inserisci url del trailer'
          required
        />
      </div>

      <div className="mb-3">
       
        <input
          type="text"
          id="text_png_url"
          name="text_png_url"
          value={filmData.text_png_url}
          onChange={handleChange}
          className="Input"
          placeholder='inserisci url del png titolo'
          required
        />
      </div>

      <div className="text-center">
        <button type="submit" className="btn btn-light rounded-1">
          Aggiungi  film
        </button>
      </div>
    </form>
</div>
<div className="col col-4">
          <form onSubmit={handleRemove} className="container-login text-center">
            <h1 className='text-light'>Elimina film</h1>
            <div className="mb-5">
              <label htmlFor="filmId" className="form-label">
                Seleziona un film da rimuovere:
              </label>
              <select
                id="filmId"
                name="filmId"
                className="Input"
                value={removeId}
                onChange={(event) => setRemoveId(event.target.value)}
                required
              >
                <option value="">Seleziona un film</option>
                {film.map((film) => (
                  <option key={film.id} value={film.id}>
                    {film.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-danger">
                Rimuovi film
              </button>
            </div>
          </form>
        </div>


<div className="col col-4">

</div>
    </div>
    </div>
  );
}

export default AddToFavoritesForm;