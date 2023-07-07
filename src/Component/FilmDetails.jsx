import { useSelector } from "react-redux";
import { getFilm } from "../Store";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const FilmDetails = () =>{
   
    const filmDetails = useSelector(getFilm);
    return(
<div className="DetailsContainer">
<div className="position-absolute d-flex justify-content-start align-items-center h-100 ms-5">

    <h1 className="text-danger">{filmDetails?.title}</h1>

</div>
<img src={filmDetails?.poster_url} alt=""/>

</div>
    )
}
export default FilmDetails;