import { useState } from "react";

const BackOffice = () =>{

    const [filmData, setFilmData] = useState({
        description: '',
        name: '',
        anno: '',
        generi: '',
        durata: '',
        rating: '',
        actors: [],
        poster_url: '',
        trailer_url: '',
        text_png_url: '',
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'actors') {
          const actors = value.split(',').map((actor) => actor.trim());
          setFilmData((prevData) => ({
            ...prevData,
            actors,
          }));
        } else {
          setFilmData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch('http://localhost:8080/api/film', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
           
            },
            body: JSON.stringify(filmData),
          });
    
          // Resto del codice per gestire la risposta...
        } catch (error) {
          // Gestione degli errori...
        }
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="description">Descrizione:</label>
          <textarea id="description" name="description" value={filmData.description} onChange={handleChange} required />
    
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" value={filmData.name} onChange={handleChange} required />
    
          <label htmlFor="anno">Anno:</label>
          <input type="number" id="anno" name="anno" value={filmData.anno} onChange={handleChange} required />
    
          <label htmlFor="generi">Generi:</label>
          <input type="text" id="generi" name="generi" value={filmData.generi} onChange={handleChange} required />
    
          <label htmlFor="durata">Durata:</label>
          <input type="number" id="durata" name="durata" value={filmData.durata} onChange={handleChange} required />
    
          <label htmlFor="rating">Rating:</label>
          <input type="number" id="rating" name="rating" value={filmData.rating} onChange={handleChange} required />
    
          <label htmlFor="actors">Attori:</label>
          <input type="text" id="actors" name="actors" value={filmData.actors} onChange={handleChange} required />
    
          <label htmlFor="poster_url">URL del poster:</label>
          <input type="text" id="poster_url" name="poster_url" value={filmData.poster_url} onChange={handleChange} required />
    
          <label htmlFor="trailer_url">URL del trailer:</label>
          <input type="text" id="trailer_url" name="trailer_url" value={filmData.trailer_url} onChange={handleChange} required />
    

          <label htmlFor="text_png_url">URL del testo PNG:</label>
      <input type="text" id="text_png_url" name="text_png_url" value={filmData.text_png_url} onChange={handleChange} required />
          <button type="submit">Aggiungi ai preferiti</button>
        </form>
      );
}
export default BackOffice;