import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { GiTennisRacket } from 'react-icons/gi'
import { AiFillHome } from 'react-icons/ai'
import { IoMdHelpCircle } from 'react-icons/io'
import { Link, NavLink, useLocation } from 'react-router-dom';

interface NavbarProps {

}

const NavbarComponent: React.FC<NavbarProps> = () => {

    const location = useLocation();
    return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Link color="green" to="/SEG3525LabModule9">
                <Navbar.Brand >
                    <GiTennisRacket className="mr-2" size={36} color="#b30000"/>   
                    À vos raquettes!
                </Navbar.Brand>
            </Link>
            <Nav className="mr-auto">
            <NavLink
                style={{color: "white", padding: ".5rem 1rem"}}
                activeStyle={{ fontWeight: "bold", color: "white", textDecoration:"underline"}} 
                to="/SEG3525LabModule9/reservation">
                    Réservation
                </NavLink>
                
                <NavLink
                style={{color: "white", padding: ".5rem 1rem"}}
                activeStyle={{ fontWeight: "bold", color: "white", textDecoration:"underline"}} 
                to="/SEG3525LabModule9/teachers">
                    Nos enseignants
                </NavLink>
                <NavLink
                style={{color: "white", padding: ".5rem 1rem"}}
                activeStyle={{ fontWeight: "bold", color: "white", textDecoration:"underline"}} 
                to="/SEG3525LabModule9/courses">
                    Cours offerts
                </NavLink>
                <NavLink
                style={{color: "white", padding: ".5rem 1rem"}}
                activeStyle={{ fontWeight: "bold", color: "white", textDecoration:"underline"}} 
                to="/SEG3525LabModule9/availability">
                    Disponibilité
                </NavLink>
                <NavLink
                style={{color: "white", padding: ".5rem 1rem"}}
                activeStyle={{ fontWeight: "bold", color: "white", textDecoration:"underline"}} 
                to="/SEG3525LabModule9/partners">
                    Recherche de partenaires
                </NavLink>
            </Nav>
            <Nav className="ml-auto">
                <Link to="/SEG3525LabModule9">
                    <AiFillHome className="mr-2 p-1 border rounded" size={36} color="#b30000" />
                </Link>
                <Link to="/SEG3525LabModule9/help">
                    <IoMdHelpCircle className="ml-2 p-1 border rounded" size={36} color="#b30000" />
                </Link>
            </Nav>
            
        </Container>
      </Navbar>
    );
  }

export default NavbarComponent;