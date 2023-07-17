import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getFilm } from "../Store";
import MyNav from "./MyNav";

const Quiz = () => {
  const [risposte, setRisposte] = useState([]);
  const [risultato, setRisultato] = useState("");
  const [filtrato, setFiltrato] = useState([]);
  const film = useSelector(getFilm);

  const aggiungiRisposta = (risposta, punti) => {
    setRisposte([...risposte, { risposta, punti }]);
  };

  const calcolaRisultato = () => {
    let puntiCommedia = 0;
    let puntiHorror = 0;
    let puntiAzione = 0;
    let puntiThriller = 0;
    let puntiRecenti = 0;
    let puntiClassici = 0;
    let puntiLunghi = 0;
    let puntiCorti = 0;
    let puntiDramma = 0;
    let puntiRomantico = 0;
    let puntiFantasy = 0;
    let puntiAdventure = 0;

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
        case "dramma":
          puntiDramma += punti;
          break;
        case "romantico":
          puntiRomantico += punti;
          break;
        case "fantasy":
          puntiFantasy += punti;
          break;
        case "adventure":
          puntiAdventure += punti;
          break;
        default:
          break;
      }
    });

    let risultato = "Risultato generico";

    if (
      puntiRecenti > puntiClassici &&
      puntiCommedia > puntiHorror &&
      puntiCommedia > puntiAzione &&
      puntiCommedia > puntiThriller &&
      puntiCommedia > puntiDramma &&
      puntiCommedia > puntiRomantico &&
      puntiCommedia > puntiFantasy &&
      puntiCommedia > puntiAdventure
    ) {
      risultato = "Ti piacciono i film di commedia recenti!";
    } else if (
      puntiClassici > puntiRecenti &&
      puntiCommedia > puntiHorror &&
      puntiCommedia > puntiAzione &&
      puntiCommedia > puntiThriller &&
      puntiCommedia > puntiDramma &&
      puntiCommedia > puntiRomantico &&
      puntiCommedia > puntiFantasy &&
      puntiCommedia > puntiAdventure
    ) {
      risultato = "Ti piacciono i film di commedia classici!";
    } else if (
      puntiRecenti > puntiClassici &&
      puntiHorror > puntiCommedia &&
      puntiHorror > puntiAzione &&
      puntiHorror > puntiThriller &&
      puntiHorror > puntiDramma &&
      puntiHorror > puntiRomantico &&
      puntiHorror > puntiFantasy &&
      puntiHorror > puntiAdventure
    ) {
      risultato = "Ti piacciono i film di Horror recenti!";
    } else if (
      puntiRecenti > puntiClassici &&
      puntiAzione > puntiCommedia &&
      puntiAzione > puntiHorror &&
      puntiAzione > puntiThriller &&
      puntiAzione > puntiDramma &&
      puntiAzione > puntiRomantico &&
      puntiAzione > puntiFantasy &&
      puntiAzione > puntiAdventure
    ) {
      risultato = "Ti piacciono i film di Azione recenti!";
    } else if (
      puntiRecenti > puntiClassici &&
      puntiThriller > puntiCommedia &&
      puntiThriller > puntiHorror &&
      puntiThriller > puntiAzione &&
      puntiThriller > puntiDramma &&
      puntiThriller > puntiRomantico &&
      puntiThriller > puntiFantasy &&
      puntiThriller > puntiAdventure
    ) {
      risultato = "Ti piacciono i film di Thriller recenti!";
    } else if (
      puntiClassici > puntiRecenti &&
      puntiClassici > puntiCommedia &&
      puntiClassici > puntiHorror &&
      puntiClassici > puntiAzione &&
      puntiClassici > puntiThriller &&
      puntiClassici > puntiDramma &&
      puntiClassici > puntiRomantico &&
      puntiClassici > puntiFantasy &&
      puntiClassici > puntiAdventure
    ) {
      risultato = "Ti piacciono i film classici!";
    } else if (
      puntiDramma > puntiRecenti &&
      puntiDramma > puntiClassici &&
      puntiDramma > puntiCommedia &&
      puntiDramma > puntiHorror &&
      puntiDramma > puntiAzione &&
      puntiDramma > puntiThriller &&
      puntiDramma > puntiRomantico &&
      puntiDramma > puntiFantasy &&
      puntiDramma > puntiAdventure
    ) {
      risultato = "Ti piacciono i film di Dramma!";
    } else if (
      puntiRomantico > puntiRecenti &&
      puntiRomantico > puntiClassici &&
      puntiRomantico > puntiCommedia &&
      puntiRomantico > puntiHorror &&
      puntiRomantico > puntiAzione &&
      puntiRomantico > puntiThriller &&
      puntiRomantico > puntiDramma &&
      puntiRomantico > puntiFantasy &&
      puntiRomantico > puntiAdventure
    ) {
      risultato = "Ti piacciono i film Romantici!";
    } else if (
      puntiFantasy > puntiRecenti &&
      puntiFantasy > puntiClassici &&
      puntiFantasy > puntiCommedia &&
      puntiFantasy > puntiHorror &&
      puntiFantasy > puntiAzione &&
      puntiFantasy > puntiThriller &&
      puntiFantasy > puntiDramma &&
      puntiFantasy > puntiRomantico &&
      puntiFantasy > puntiAdventure
    ) {
      risultato = "Ti piacciono i film Fantasy!";
    } else if (
      puntiAdventure > puntiRecenti &&
      puntiAdventure > puntiClassici &&
      puntiAdventure > puntiCommedia &&
      puntiAdventure > puntiHorror &&
      puntiAdventure > puntiAzione &&
      puntiAdventure > puntiThriller &&
      puntiAdventure > puntiDramma &&
      puntiAdventure > puntiRomantico &&
      puntiAdventure > puntiFantasy
    ) {
      risultato = "Ti piacciono i film d'Avventura!";
    } else if (puntiLunghi > puntiCorti) {
      risultato = "Preferisci i film con durata più lunga!";
    } else if (puntiCorti > puntiLunghi) {
      risultato = "Preferisci i film con durata più corta!";
    }

    setRisultato(risultato);

    const filmFiltrati = film.filter((film) => {
      let risultatoFiltraggio = true;

      risposte.forEach((risposta) => {
        const { risposta: categoria } = risposta;

        if (
          categoria === "commedia" &&
          !film.generi.includes("COMEDY")
        ) {
          risultatoFiltraggio = false;
        } else if (
          categoria === "horror" &&
          !film.generi.includes("HORROR")
        ) {
          risultatoFiltraggio = false;
        } else if (
          categoria === "azione" &&
          !film.generi.includes("ACTION")
        ) {
          risultatoFiltraggio = false;
        } else if (
          categoria === "thriller" &&
          !film.generi.includes("THRILLER")
        ) {
          risultatoFiltraggio = false;
        } else if (
          categoria === "classici" &&
          film.anno >= 2000
        ) {
          risultatoFiltraggio = false;
        } else if (
          categoria === "recenti" &&
          film.anno < 2000
        ) {
          risultatoFiltraggio = false;
        } else if (
          categoria === "lunghi" &&
          film.durata <= 120
        ) {
          risultatoFiltraggio = false;
        } else if (
          categoria === "corti" &&
          film.durata > 120
        ) {
          risultatoFiltraggio = false;
        } else if (
          categoria === "dramma" &&
          !film.generi.includes("DRAMA")
        ) {
          risultatoFiltraggio = false;
        } else if (
          categoria === "romantico" &&
          !film.generi.includes("ROMANCE")
        ) {
          risultatoFiltraggio = false;
        } else if (
          categoria === "fantasy" &&
          !film.generi.includes("FANTASY")
        ) {
          risultatoFiltraggio = false;
        } else if (
          categoria === "adventure" &&
          !film.generi.includes("ADVENTURE")
        ) {
          risultatoFiltraggio = false;
        }
      });

      return risultatoFiltraggio;
    });

    setFiltrato(filmFiltrati);
  };

  return (
    <>  <MyNav></MyNav>
    <div className="d-flex justify-content-center align-items-center flex-column text-center text-light">
      <h1>Quiz sui film</h1>

      {risultato ? (
        <div className="container-fluid">
          <h2>Risultato: {risultato}</h2>
          <h3>Film corrispondenti:</h3>
          <div className="row">
            {filtrato.map((film) => (
              <div key={film.id} className="col-md-6">
                <div className="film-item">
                  <img src={film.poster_url} alt={film.title} className="img" />
                  <h4>{film.title}</h4>
                  <p>{film.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="my-2">
            <h2>Che tipo di film ti piacciono?</h2>
            <button className="mybutton mx-2 my-2" onClick={() => aggiungiRisposta("commedia", 1)}>
              Commedia
            </button>
            <button className="mybutton mx-2 my-2" onClick={() => aggiungiRisposta("horror", 1)}>
              Horror
            </button>
            <button className="mybutton mx-2 my-2" onClick={() => aggiungiRisposta("azione", 1)}>
              Azione
            </button>
            <button className="mybutton mx-2 my-2" onClick={() => aggiungiRisposta("thriller", 1)}>
              Thriller
            </button>
            <button className="mybutton mx-2 my-2" onClick={() => aggiungiRisposta("dramma", 1)}>
              Dramma
            </button>
            <button className="mybutton mx-2 my-2" onClick={() => aggiungiRisposta("romantico", 1)}>
              Romantico
            </button>
            <button className="mybutton mx-2 my-2" onClick={() => aggiungiRisposta("fantasy", 1)}>
              Fantasy
            </button>
            <button className="mybutton mx-2 my-2" onClick={() => aggiungiRisposta("adventure", 1)}>
              Adventure
            </button>
          </div>
          <hr />
          <div className="my-2">
            <h2>Preferisci film recenti o classici?</h2>
            <button className="mybutton mx-2 my-2" onClick={() => aggiungiRisposta("recenti", 1)}>
              Recenti
            </button>
            <button className="mybutton mx-2 my-2" onClick={() => aggiungiRisposta("classici", 1)}>
              Classici
            </button>
          </div>
          <hr />
          <div>
            <h2>Ti piacciono i film con durata più lunga o corta?</h2>
            <button className="mybutton mx-2 my-2" onClick={() => aggiungiRisposta("lunghi", 1)}>
              Lunghi
            </button>
            <button className="mybutton mx-2 my-2" onClick={() => aggiungiRisposta("corti", 1)}>
              Corti
            </button>
          </div>

          <button className="mybutton mx-2 my-2" onClick={calcolaRisultato}>
            Mostra risultato
          </button>
        </div>
      )}
    </div></>
  
  );
};

export default Quiz;
