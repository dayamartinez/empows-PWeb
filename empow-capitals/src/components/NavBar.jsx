import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import empow from '../logos/Empow-01.jpeg'

export default function navBar(){
    return (
      <div className='nav'>
      <Navbar collapseOnSelect expand="lg" >
        <div>
           <Navbar.Brand href="#home">
            <img src={empow} alt="logoempow" height="100px" width="160px" />
          </Navbar.Brand>
        </div>
          
          
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <div>

         
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
              <NavDropdown title="SEÑALES" id="collasible-nav-dropdown">          
                <NavDropdown.Item href="https://chat.whatsapp.com/KFGlQDJjW4DE2sjW5JrCt8"> SEÑALES GRATIS</NavDropdown.Item>
                  <NavDropdown.Divider /> 
                <NavDropdown.Item href="#premium">SEÑALES PREMIUM</NavDropdown.Item>
              </NavDropdown>  
              <Nav.Link href="#gestion-de-capital">GESTIÓN DE CAPITAL</Nav.Link>              
              <Nav.Link href="#cursos">CURSOS</Nav.Link>   
              <Nav.Link href="#mentoria">MENTORIA 1-1</Nav.Link>
              <Nav.Link href="#contacto">CONTACTO</Nav.Link>
              <Nav.Link eventKey={2} href="#social">REDES SOCIALES</Nav.Link> 
            </Nav>
          </Navbar.Collapse> </div>
      </Navbar> 
        </div>
    )
}
