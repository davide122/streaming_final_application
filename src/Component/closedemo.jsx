import { useLocation, useNavigate } from "react-router-dom";

const Closedemo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fristaccess = new URLSearchParams(location.search).get("fristaccess");
  const handleClick = () => {
    navigate("/");
  };

  return (
fristaccess&&<div className="democlose">
      <button className="mybutton" onClick={handleClick}>
        Chiudi demo
      </button>
    </div>
 
  );
};

export default Closedemo;
