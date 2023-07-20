import React, { useEffect, useState } from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import palmo from "../image/palmo-removebg-preview.png";
import pollicesu from "../image/pollicesu.png";
import angleback from "../image/Aggiungi_un_intestazione__1_-removebg-preview.png";
import { useNavigate } from "react-router-dom";
const Info = () => {
  const [Count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const [pausa, setpausa] = useState(false);
  const [attiva, setattiva] = useState(false);
  const [page, setPage] = useState(1);

  const navigation = useNavigate();
  
  
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      let cosafa = localStorage.getItem("cosa fa?");
      cosafa === "pausa" && handlepause();
      cosafa === "play" && handleattiva();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handlepause = () => {
    setpausa(true);
  };

  const handleattiva = () =>{
setattiva(true);
  }

  const finalbutton = () =>{
    
  }

  return (
    <div className="d-flex justify-content-center align-items-center flex-column vh-100 h-100 mx-5">
      {page === 1 && (
        <>
          <div className="text-center border border-light mx-2 my-1 p-5">
            <div className="mx-2 text-light rounded-3">
              <h1 className="text-center my-3">
               Ciao, sai che in Streamthron puoi gestire i tuoi film con dei semplici gesti? provalo!
              </h1>
              
            </div>
            <button className="text-center  mybutton p-2" onClick={() => setPage(2)}>
           Demo
          </button>
          </div>
          
        </>
      )}

      {page === 2 && (
        <div className="text-light d-flex justify-content-center flex-column align-items-center text-center">
          <h1>
            Proviamo insieme, assicurati di accendere la tua fotocamera ed abilitarla! attenzione: la tua mano deve essere
            ben visibile dalla fotocamera, a circa 1 metro dal dispositivo.

          </h1>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <img src={palmo} alt="" className={`img-fluid ${pausa && "border border-success"}`} width={300} />

            {pausa && (
              <>
                <h3 className="text-success">Bravo, hai capito come funziona, andiamo avanti!</h3>
                <button className="mybutton bg-success w-100"onClick={() => setPage(3)}>Clicca qui per provare la funzione attiva film</button>
              </>
            )}
          </div>
        </div>
      )}

{page === 3 && (
    <div className="text-light d-flex justify-content-center flex-column align-items-center text-center">

    <h1>
      attenzione: la tua mano deve essere
      ben visibile dalla fotocamera, a circa 1 metro dal dispositivo.
    
    </h1>
    <div className="d-flex justify-content-center align-items-center flex-column">
      <img src={pollicesu} alt="" className={`img-fluid ${attiva && "border border-success"}`} />

      {attiva && (
        <>
          <h1>Bravo, hai capito come funziona, andiamo avanti!</h1>
          <button className="mybutton w-100 bg-success" onClick={() => navigation("/home?fristaccess=true")}>Clicca qui per provare un film </button>
        </>
      )}
    </div>
  </div>
)}
    </div>
  );
};

export default Info;
