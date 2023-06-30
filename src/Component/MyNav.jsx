import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiSearchAlt2 } from "react-icons/bi";

const MyNav = () =>{
    const [VisibleSearch, setVisibleSearch] = useState(false);
    return(
          <Navbar expand="lg" className="nav d-flex">
      <Container fluid>
        <Navbar.Brand href="#" className='text-light '>StreamThron</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='text-light'>Home</Nav.Link>
          </Nav>
           {/* Ho creato un controllo sul sullo stato di visiblesearch, fa in modo che quando viene cliccato il pulsante cerca venga fuori il box per la ricerca */}
        
          <BiSearchAlt2 className='text-light mx-4' onClick={()=>{
            VisibleSearch?(setVisibleSearch(false)):setVisibleSearch(true);
          }}>
            
          </BiSearchAlt2>
          
     {
        VisibleSearch ? (<Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
            />
          </Form>):null
     }
              {/*Recupero dal localstorage il set item messo in precedenza in fase di login, recupero il nome utente*/}

           {localStorage.getItem("username")&&<button className='text-light btn justify-content-center align-items-center'>{localStorage.getItem("username")}</button>}          

   

        </Navbar.Collapse>
        
      </Container>
    </Navbar>
         

        

      
    )
}

export default MyNav;