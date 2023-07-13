import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getFilm } from "../Store";

const Quiz = () => {
  const [risposte, setRisposte] = useState([]);
  const [risultato, setRisultato] = useState("");
  const [filtrato,setfiltrato] = useState([]);
  const film = useSelector(getFilm);
  const aggiungiRisposta = (risposta, punti) => {
    setRisposte([...risposte, { risposta, punti }]);
  };

  const calcolaRisultato = () => {
    // Inizializza le variabili per i punti
    let puntiCommedia = 0;
    let puntiHorror = 0;
    let puntiAzione = 0;
    let puntiThriller = 0;
    let puntiRecenti = 0;
    let puntiClassici = 0;
    let puntiLunghi = 0;
    let puntiCorti = 0;
  

    // Calcola i punti per ogni risposta
    risposte.forEach((risposta) => {
      const { risposta: categoria, punti } = risposta;

      switch (categoria) {
        case "commedia":
          puntiCommedia += punti;
          break;
        case "horror":
          puntiHorror += punti;
          break;
        case "azione":
          puntiAzione += punti;
          break;
        case "thriller":
          puntiThriller += punti;
          break;
        case "recenti":
          puntiRecenti += punti;
          break;
        case "classici":
          puntiClassici += punti;
          break;
        case "lunghi":
          puntiLunghi += punti;
          break;
        case "corti":
          puntiCorti += punti;
          break;
        default:
          break;
      }
    });

    let risultato = "Risultato generico";
    console.log(puntiAzione, puntiHorror, puntiClassici,puntiAzione, puntiLunghi, puntiRecenti);
    // Logica per il calcolo del risultato in base alle risposte

    if (
      puntiRecenti > puntiClassici &&
      puntiCommedia > puntiHorror &&
      puntiCommedia > puntiAzione &&
      puntiCommedia > puntiThriller
    ) {
      risultato = "Ti piacciono i film di commedia recenti!";
    } else if (
      puntiClassici > puntiRecenti &&
      puntiCommedia > puntiHorror &&
      puntiCommedia > puntiAzione &&
      puntiCommedia > puntiThriller
    ) {
      risultato = "Ti piacciono i film di commedia classici!";
    } else if (
      puntiRecenti > puntiClassici &&
      puntiHorror > puntiCommedia &&
      puntiHorror > puntiAzione &&
      puntiHorror > puntiThriller
    ) {
      risultato = "Ti piacciono i film di Horror recenti!";
    } else if (
      puntiRecenti > puntiClassici &&
      puntiAzione > puntiCommedia &&
      puntiAzione > puntiHorror &&
      puntiAzione > puntiThriller
    ) {
      risultato = "Ti piacciono i film di Azione recenti!";
    } else if (
      puntiRecenti > puntiClassici &&
      puntiThriller > puntiCommedia &&
      puntiThriller > puntiHorror &&
      puntiThriller > puntiAzione
    ) {
      risultato = "Ti piacciono i film di Thriller recenti!";
    } else if (
      puntiClassici > puntiRecenti &&
      puntiClassici > puntiCommedia &&
      puntiClassici > puntiHorror &&
      puntiClassici > puntiAzione &&
      puntiClassici > puntiThriller
    ) {
      risultato = "Ti piacciono i film classici!";
    } else if (puntiLunghi > puntiCorti) {
      risultato = "Preferisci i film con durata più lunga!";
    } else if (puntiCorti > puntiLunghi) {
      risultato = "Preferisci i film con durata più corta!";
    }

    setRisultato(risultato);

    const filmFiltrati = film.filter((film) => {
      if (risultato.includes("commedia")) {
        return film.generi.includes("COMEDY");
      } else if (risultato.includes("horror")) {
        return film.generi.includes("HORROR");
      } else if (risultato.includes("azione")) {
        return film.generi.includes("ACTION");
      } else if (risultato.includes("thriller")) {
        return film.generi.includes("THRILLER");
      } else if (risultato.includes("classici")) {
        return film.anno < 2000;
      } else if (risultato.includes("recenti")) {
        return film.anno >= 2000;
      } else if (risultato.includes("lunghi")) {
        return film.durata > 120;
      } else if (risultato.includes("corti")) {
        return film.durata <= 120;
      }
      return true; // Restituisce tutti i film se non ci sono criteri di filtro specifici
    });

    console.log(filmFiltrati);
setfiltrato(filmFiltrati);
    setRisultato(risultato);
  };
 
  
  return (
    
    <div className="d-flex justify-content-center align-items-center flex-column text-center text-light">
      <h1>Quiz sui film</h1>

      {risultato ? (
         <div>
         <h2>Risultato: {risultato}</h2>
         <h3>Film corrispondenti:</h3>
         <div className="film-list">
           {filtrato?.map((film) => (
             <div key={film.id} className="film-item">
               <img src={film.poster_url} alt={film.title} />
               <h4>{film.title}</h4>
               <p>{film.description}</p>
               {/* Altri dettagli del film */}
             </div>
           ))}
         </div>
       </div>
      ) : (
        <div>
          
          <div className="my-2">
          <h2>Che tipo di film ti piacciono?</h2>
          <button className="mybutton mx-2 my-2" onClick={() => aggiungiRisposta("commedia", 1) }>Commedia</button>
          <button className="mybutton mx-2 my-2" onClick={() => aggiungiRisposta("horror", 1)}>Horror</button>
          <button className="mybutton mx-2 my-2" onClick={() => aggiungiRisposta("azione", 1)}>Azione</button>
          <button className="mybutton my-2" onClick={() => aggiungiRisposta("thriller", 1)}>Thriller</button>
          </div>
          <hr />
<div className="my-2">
  
          <h2>Preferisci film recenti o classici?</h2>
          <button className="mybutton mx-2 my-2" onClick={() => aggiungiRisposta("recenti", 1)}>Recenti</button>
          <button className="mybutton mx-2 my-2"onClick={() => aggiungiRisposta("classici", 1)}>Classici</button>

</div>
<hr />
<div>
          <h2>Ti piacciono i film con durata più lunga o corta?</h2>
          <button className="mybutton mx-2 my-2" onClick={() => aggiungiRisposta("lunghi", 1)}>Lunghi</button>
          <button className="mybutton mx-2 my-2" onClick={() => aggiungiRisposta("corti", 1)}>Corti</button>

</div>

          <button className="mybutton mx-2 my-2" onClick={calcolaRisultato}>Mostra risultato</button>

        </div>
      )}
    </div>
  );
};

export default Quiz;
