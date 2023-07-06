import { useSelector } from "react-redux";
import { getFilm } from "../Store";
import { useParams } from "react-router-dom";

const FilmDetails = () =>{
   
    const filmDetails = useSelector(getFilm);
    return(
<div>
    <h1>{filmDetails?.title}</h1>
    <h2>{filmDetails?.poster_url}</h2>
    <h2>{filmDetails?.poster_url}</h2>
</div>
    )
}
export default FilmDetails;