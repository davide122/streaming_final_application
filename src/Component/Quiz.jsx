import React, { useState } from "react";

const Quiz = () => {
  const [risposte, setRisposte] = useState([]);
  const [risultato, setRisultato] = useState("");

  const aggiungiRisposta = (risposta, punti) => {
    setRisposte([...risposte, { risposta, punti }]);
  };

  const calcolaRisultato = () => {
    // Calcola il risultato in base alle risposte
    // Puoi definire le tue logiche per assegnare un risultato in base alle risposte date dall'utente

    // Inizializza le variabili per i punti
    let puntiCommedia = 0;
    let puntiHorror = 0;
    let puntiAzione = 0;
    let puntiThriller = 0;
    let puntiRecenti = 0;
    let puntiClassici = 0;
    let puntiStranieri = 0;
    let puntiItaliani = 0;

    // Calcola i punti per ogni risposta
    risposte.forEach((risposta) => {
      const { punti } = risposta;

      switch (risposta.risposta) {
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
        case "stranieri":
          puntiStranieri += punti;
          break;
        case "italiani":
          puntiItaliani += punti;
          break;
        default:
          break;
      }
    });

    // Determina il risultato in base ai punti
    let risultato = "Risultato generico";

    if (puntiCommedia > puntiHorror && puntiCommedia > puntiAzione && puntiCommedia > puntiThriller) {
      risultato = "Ti piacciono i film di commedia!";
    } else if (puntiHorror > puntiCommedia && puntiHorror > puntiAzione && puntiHorror > puntiThriller) {
      risultato = "Ti piacciono i film horror!";
    } else if (puntiAzione > puntiCommedia && puntiAzione > puntiHorror && puntiAzione > puntiThriller) {
      risultato = "Ti piacciono i film d'azione!";
    } else if (puntiThriller > puntiCommedia && puntiThriller > puntiHorror && puntiThriller > puntiAzione) {
      risultato = "Ti piacciono i film thriller!";
    } else if (puntiRecenti > puntiClassici) {
      risultato = "Preferisci i film recenti!";
    } else if (puntiClassici > puntiRecenti) {
      risultato = "Preferisci i film classici!";
    } else if (puntiStranieri > puntiItaliani) {
      risultato = "Ti piacciono i film stranieri!";
    } else if (puntiItaliani > puntiStranieri) {
      risultato = "Ti piacciono i film italiani!";
    }

    setRisultato(risultato);
  };

  return (
    <div>
      <h1>Quiz sui film</h1>

      {risultato ? (
        <div>
          <h2>Risultato: {risultato}</h2>
        </div>
      ) : (
        <div>
          <h2>Che tipo di film ti piacciono?</h2>
          <button onClick={() => aggiungiRisposta("commedia", 1)}>Commedia</button>
          <button onClick={() => aggiungiRisposta("horror", 1)}>Horror</button>
          <button onClick={() => aggiungiRisposta("azione", 1)}>Azione</button>
          <button onClick={() => aggiungiRisposta("thriller", 1)}>Thriller</button>

          <h2>Preferisci film recenti o classici?</h2>
          <button onClick={() => aggiungiRisposta("recenti", 1)}>Recenti</button>
          <button onClick={() => aggiungiRisposta("classici", 1)}>Classici</button>

          <h2>Ti piacciono i film stranieri o preferisci quelli italiani?</h2>
          <button onClick={() => aggiungiRisposta("stranieri", 1)}>Stranieri</button>
          <button onClick={() => aggiungiRisposta("italiani", 1)}>Italiani</button>

          <button onClick={calcolaRisultato}>Mostra risultato</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
