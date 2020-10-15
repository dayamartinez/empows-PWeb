import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import empow from '../logos/Empow-01.jpeg'

export default function navBar(){
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" text="dark" style={{lineHeight:"50px"}}>
          <Navbar.Brand href="#home">
            <img src={empow} alt="logoempow" height="120px" width="190px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
            <Nav >
              <NavDropdown title="SEÑALES" id="collasible-nav-dropdown">          
                <NavDropdown.Item href="https://chat.whatsapp.com/KFGlQDJjW4DE2sjW5JrCt8"> SEÑALES GRATIS</NavDropdown.Item>
                  <NavDropdown.Divider /> 
                <NavDropdown.Item href="#premium">SEÑALES PREMIUM</NavDropdown.Item>
              </NavDropdown>  
              <Nav.Link href="#gestion-de-capital">GESTIÓN DE CAPITAL</Nav.Link>
              <Nav.Link href="#analisis-tecnico"> ANÁLISIS TÉCNICO</Nav.Link>
              <NavDropdown title="CURSOS" id="collasible-nav-dropdown">          
                
                <NavDropdown.Item href="#ondas-de-elliott">ONDAS DE ELLIOTT</NavDropdown.Item>
                <NavDropdown.Item href="#patrones-armonicos">PATRONES ARMÓNICOS</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#mentoria">MENTORIA 1-1</Nav.Link>
              <Nav.Link href="#preguntas">CONTACTO</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">REDES SOCIALES</Nav.Link> 
            </Nav>
          </Navbar.Collapse> 
      </Navbar>
        
    )
}
