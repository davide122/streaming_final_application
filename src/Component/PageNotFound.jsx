import { Link} from "react-router-dom";

const PageNotFound = () => {
    return(
   <div className="h-100 vh-100 justify-content-center align-items-center d-flex flex-column">
            <h1 className="text-light">Page Not Found</h1>
            <p><Link to={localStorage.getItem("token")?("/home"):("/")}>{localStorage.getItem("token")?("torna alla home"):("Vai alla pagina di login")}</Link></p>
   </div>

    )
}
export default PageNotFound;