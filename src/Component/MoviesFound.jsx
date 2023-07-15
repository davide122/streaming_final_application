import { useDispatch, useSelector } from "react-redux";
import { getCategories, setFilm } from "../Store";
import { useLocation, useNavigate } from "react-router-dom";

const MoviesFound = () =>{
  const Dispatch=useDispatch()
    const categories = useSelector(getCategories);
    const location = useLocation();
    const category = new URLSearchParams(location.search).get("category");
    const navigation = useNavigate();
    const movies = categories[category] || [];
    console.log(category);
  
    return (
        <div className="container d-flex justify-content-center flex-column align-items-center">
          <h1 className="titlecategory top-0 mt-5">{category}</h1>
          <div className="row my-5">
            {movies.map((film) => (
              <div className="col-6 col-md-4 col-lg-3 mb-3" key={film.id}>
              <img  src={film.poster_url} alt="" className="img " onClick={()=>{Dispatch(setFilm(film));navigation(`/details/${film.id}`) }}/>
              </div>
            ))}
          </div>
        </div>
      );
    };
    

export default MoviesFound;