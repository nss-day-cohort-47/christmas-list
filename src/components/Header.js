import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink as RRNavLink } from "react-router-dom";

/*
when using react-router-dom and react-bootstrap, need to manually add classes
For example <RRNavLink> needs the specific react-bootstrap classes added for spacing
*/
export const Header = () => {
  const [expanded, setExpanded] = useState(false);
 

  return (
    <>
      <Navbar bg="primary" expand="lg" expanded={expanded} className="navbar-dark">
        <Navbar.Brand href="/">All I Want For Christmas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto navbar-nav " activeKey="/home" onClick={() => setExpanded(false)}> 
		<Nav.Item className="text-right"><RRNavLink className="nav-link" to="/home">Home</RRNavLink></Nav.Item>
		<Nav.Item className="text-right"><RRNavLink className="nav-link" to="/list">My List</RRNavLink></Nav.Item>
		<Nav.Item className="text-right"><RRNavLink className="nav-link" to="/add">Add One</RRNavLink></Nav.Item>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
