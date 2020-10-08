import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import empow from '../logos/Empow-01.jpeg'

export default function navBar(){
    return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" text="dark" style={{lineHeight:"50px"}} >
  <Navbar.Brand href="#home">
    <img src={empow} alt="logoempow" height="130px" width="200px" />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
   
    <Nav >
    <Nav.Link href="#features">SEÑALES</Nav.Link>
    <Nav.Link href="#pricing">COPYTRADING</Nav.Link>
      <NavDropdown title="CURSO" id="collasible-nav-dropdown">
          
        <NavDropdown.Item href="#action/3.1">EJEMPLO1</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">MENTORÍA</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">BROKER</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#deets">PREGUNTAS</Nav.Link>
      <Nav.Link eventKey={2} href="#memes"> CONTACTO </Nav.Link> 
     
    </Nav>
    </Navbar.Collapse> 
</Navbar>
        
    )
}
