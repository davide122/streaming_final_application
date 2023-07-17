import React, { useEffect, useState } from "react";
import palmo from "../image/palmo-removebg-preview.png"
import ok from "../image/pollicesu.png"
const Info = () => {
  const [pausa, setpausa] = useState();
  const [attiva, setattiva] = useState();
 const [Count, setCount] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 3000);
    
   
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
     localStorage.getItem("cosa fa?") === "pausa" && setpausa("pausa");
     
    
localStorage.getItem("cosa fa?") === "attiva" && setattiva("attiva")

    
  }, [Count]);
  return (
    <>
      <div className="d-flex">
        <div className="mx-2 text-light rounded-3">
          <h1 className="text-center my-3">
            Ehi ciao, benvenuto su StreamThron, la piattaforma di streaming che offre nuove funzionalità.
          </h1>
          <div className="d-flex justify-content-center ">
            <p>
              Sai che su StreamThron puoi utilizzare l'intelligenza artificiale? Sì, hai letto bene! Puoi utilizzare la fotocamera del tuo computer per rendere il sito "touch" senza mai toccare lo schermo.
            </p>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row">
          <div className=  {` col col-6 ${pausa&&"border border-success"}` }  >
            <img src={palmo} alt=""width={300}/>


          </div>
          <div className=  {` col col-6 ${attiva&&"border border-success"}` }  >
          <img src={ok} alt="" width={300}/>
            <div>
              {/* Aggiungi qui il contenuto della seconda colonna */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
