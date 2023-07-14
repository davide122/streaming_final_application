import { useSelector } from "react-redux";
import { getCategories } from "../Store";
import { useLocation } from "react-router-dom";

const MoviesFound = () =>{
    const categories = useSelector(getCategories);
    const location = useLocation();
    const category = new URLSearchParams(location.search).get("category");
    const movies = categories[category] || [];
    console.log(category);
  
    return (
        <div className="container">
          <div className="row">
            {movies.map((film) => (
              <div className="col-6 col-md-4 col-lg-3" key={film.id}>
              <h1>{film.title}</h1>
              <img src={film.poster_url} alt="" width={100}/>
              </div>
            ))}
          </div>
        </div>
      );
    };
    

export default MoviesFound;