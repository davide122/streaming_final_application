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

import { useSelector } from 'react-redux';
import { getCategories } from '../Store';
import { useNavigate } from 'react-router-dom';
const MyNav = () =>{

  
  const categorie = useSelector(getCategories);
  const navigation = useNavigate();
 
  console.log(categorie);

  const [VisibleSearch, setVisibleSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState()


  console.log("controlla",category);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleSearch = async (e) => {
    e.preventDefault();
    console.log('Ricerca:', searchQuery);
    try {
      const response = await fetch(`API_URL?query=${searchQuery}`);
      const data = await response.json();
      
      // Eseguire le operazioni necessarie con i dati ricevuti dalla chiamata API
      console.log('Risultati ricerca:', data);
    } catch (error) {
      console.error('Errore durante la ricerca:', error);
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
              <h4 className='titlecategory' onClick={()=>{handleclickcategory(category)}}>{category.charAt(0).toUpperCase()+ category.slice(1).toLowerCase()}</h4>
          </div>
        ))}
  

</Offcanvas.Body>
      </Offcanvas>


          <Navbar expand="lg" className="nav d-flex">
      <Container fluid className='mx-2'>
        <Navbar.Brand href="#" className='text-light '>StreamThron</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='text-light'>Home</Nav.Link>
            <Nav.Link href="#action1" className='text-light' onClick={handleShow}>category</Nav.Link>

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