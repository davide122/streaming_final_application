import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiSearchAlt2 } from "react-icons/bi";
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';

import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getFilm, setFilm } from '../Store';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
const MyNav = () =>{
  const Dispatch=useDispatch()
  const allfilm = useSelector(getFilm);
  const categorie = useSelector(getCategories);
  const navigation = useNavigate();
 
  console.log(categorie);

  const [VisibleSearch, setVisibleSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState()
const[bytitle,setbytitle]=useState();

  console.log("controlla",category);
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
        console.error("L'oggetto firstFilm non ha una proprietà 'id'");
      }

      console.log(filteredFilms);
    } else {
      console.log("Nessun film trovato");
    }
  };

  const handleclickcategory = (category) =>{
  setCategory(category)
  console.log("Ricerca:", category)
  navigation(`/moviesfound?category=${category}` )
  }
  
    return(
      <>
     
      <Offcanvas show={show} onHide={handleClose} className="modifyoffcanvas">
        <Offcanvas.Header closeButton className='closebutton'>
    
        </Offcanvas.Header>
        <Offcanvas.Body className='text-center me-4'>
        {Object.entries(categorie).map(([category, films],index) => (
          
          <div key={category} className='mb-2 mt-5'>
              <h5 className='text-light  ' onClick={()=>{handleclickcategory(category)}}>{category.charAt(0).toUpperCase()+ category.slice(1).toLowerCase()}</h5>
          </div>
        ))}
  

</Offcanvas.Body>
      </Offcanvas>


          <Navbar expand="lg" className="nav d-flex">
      <Container fluid className='mx-5'>
        <Navbar.Brand href="#" className='text-light '>StreamThron</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='text-light'>Home</Nav.Link>
            <Nav.Link href="#action2" className='text-light' onClick={handleShow}>category</Nav.Link>
            <Nav.Link href="#quiz" className='text-light' onClick={()=>{navigation("/quiz")}}>quiz</Nav.Link>
          </Nav>
           {/* Ho creato un controllo sul sullo stato di visiblesearch, fa in modo che quando viene cliccato il pulsante cerca venga fuori il box per la ricerca */}
        
          <BiSearchAlt2 className='text-light mx-4' onClick={()=>{
            VisibleSearch?(setVisibleSearch(false)):setVisibleSearch(true);
          }}>
            
          </BiSearchAlt2>
          
     {
        VisibleSearch ? (<Form onSubmit={handleSearch} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              
            />
          </Form>):null
     }
              {/*Recupero dal localstorage il set item messo in precedenza in fase di login, recupero il nome utente*/}

           {localStorage.getItem("username")&&<button className='text-light btn justify-content-center align-items-center'>{localStorage.getItem("username").toLocaleUpperCase()}</button>}          

   

        </Navbar.Collapse>
        
      </Container>
    </Navbar>
 
      </>
         

        

      
    )
}

export default MyNav;