import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import empow from '../logos/Empow-01.jpeg'

export default function navBar(){
    return (
      <div className='nav justify-content-center'>
      <Navbar collapseOnSelect expand="lg" >
        
          <Navbar.Brand href="#home">
          <img src={empow} alt="logoempow" height="83px" width="145px" />
          </Navbar.Brand>
         
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />   

          <Navbar.Collapse  id="responsive-navbar-nav">
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
            </Nav>
          </Navbar.Collapse>
      </Navbar> 
    </div>
  
    )
}
