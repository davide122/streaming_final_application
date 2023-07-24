import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiSearchAlt2 } from "react-icons/bi";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getFilm, setFilm, setIsAdmin } from "../Store";
import { useLocation, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
const MyNav = () => {
  const location = useLocation();
  const dettagli = new URLSearchParams(location.search).get("dettagli");
  const currentPagePath = location.pathname;

  const Dispatch = useDispatch();
  const allfilm = useSelector(getFilm);
  const categorie = useSelector(getCategories);
  const navigation = useNavigate();
  const [VisibleSearch, setVisibleSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState();
  const [bytitle, setbytitle] = useState();
const[isadmin,setisadmin] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSearch = (e) => {
    e.preventDefault();

    const filteredFilms = allfilm.filter((film) =>
      film.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredFilms.length > 0) {
      setbytitle(filteredFilms);
      Dispatch(setFilm(filteredFilms[0]));
      const firstFilm = filteredFilms[0];

      if (firstFilm && firstFilm.id) {
        navigation(`/details/${firstFilm.id}`);
      } else {
        <Alert variant="info" className="textonvideo" show>
        This is aalert with
        <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
        you like.
      </Alert>
      }

      console.log(filteredFilms);
    } else {
      <Alert variant="info" className="textonvideo" show>
      This is aalert with
      <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
      you like.
    </Alert>
    }
  };

useEffect(()=>{
admin()
},[])

  const admin = async () => {
    try {
      const resopnseadmin = await fetch("http://localhost:8080/api/test/admin", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (resopnseadmin.ok) {
        setisadmin(true); 
        Dispatch(setIsAdmin(true));
      } else {
        console.log("Error is not admin");
        setisadmin(false); 
        Dispatch(setIsAdmin(false));

      }
    } catch (error) {
      console.log("Generic error occurred", error);
      setisadmin(false); 
      Dispatch(setIsAdmin(false));

    }
  };

  const handleclickcategory = (category) => {
    setCategory(category);
    console.log("Ricerca:", category);
    navigation(`/moviesfound?category=${category}`);
  };

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} className="modifyoffcanvas">
        <Offcanvas.Body className="d-flex justify-content-center align-items-center flex-column">
           <button
    className="btn-close btn-close-white btn-lg"
    onClick={handleClose}
    aria-label="Close"
  ></button>
          {Object.entries(categorie).map(([category, films], index) => (
            <div key={category} className="mb-2 mt-5">
              <h5
                className="text-light  "
                onClick={() => {
                  handleclickcategory(category);
                }}
              >
                {category.charAt(0).toUpperCase() +
                  category.slice(1).toLowerCase()}
              </h5>
            </div>
          ))}
        </Offcanvas.Body>
    
      </Offcanvas>
{currentPagePath ==="/" || currentPagePath==="/register" ? (null): (     <Navbar expand="lg" className="nav d-flex z100">
        <Container fluid className="mx-5">
          <Navbar.Brand href="" className="text-light "onClick={() => {
                navigation("/home");
              }}>
            StreamThron
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="" className="text-light"
               onClick={() => {
                navigation("/home");
              }}>
                Home
              </Nav.Link>
              <Nav.Link
                href=""
                className="text-light"
                onClick={handleShow}
              >

                Category
              </Nav.Link>
              
{!dettagli&&<Nav.Link
                href=""
                className="text-light"
                onClick={() => {
                  navigation("/quiz");
                }}
              >
                quiz
              </Nav.Link>}
              


        {isadmin&&( <Nav.Link
                href=""
                className="text-light"
                onClick={() => {
                  navigation("/backoffice");
                }}
              >
                Backoffice
              </Nav.Link>)}
             
            </Nav>
            {/* Ho creato un controllo sul sullo stato di visiblesearch, fa in modo che quando viene cliccato il pulsante cerca venga fuori il box per la ricerca */}
{!dettagli && <BiSearchAlt2
              className="text-light mx-4"
              onClick={() => {
                VisibleSearch
                  ? setVisibleSearch(false)
                  : setVisibleSearch(true);
              }}
            ></BiSearchAlt2>}
            

            {VisibleSearch ? (
              <Form onSubmit={handleSearch} className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search by title and press enter"
                  className="me-2"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Form>
            ) : null}
            
            {/*Recupero dal localstorage il set item messo in precedenza in fase di login, recupero il nome utente*/}

            {localStorage.getItem("username") && (
              <button className="text-light btn justify-content-center align-items-center">
                {localStorage.getItem("username").toLocaleUpperCase()}
              </button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>)}
 
    </>
  );
};

export default MyNav;
