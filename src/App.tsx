import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link, Route, Switch, NavLink } from 'react-router-dom';
import ReservationComponent from './Reservation';
import TeachersComponent from './Teachers';
import CoursesComponent from './Courses';
import PartnersComponent from './Partners';
import HelpComponent from './Help';
import AvailabilityComponent from './Availability';
import { GiTennisRacket } from 'react-icons/gi'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { IoMdHelpCircle } from 'react-icons/io'
import { AiFillHome } from 'react-icons/ai'
import { errors, LANGUAGES, NavBarComponentStrings } from './Strings';
interface AppProps {
}

const App: React.FC<AppProps> = () => {
  const [language, setLanguage] = useState<string>("Français");

  return (
    <>
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
                    {language === LANGUAGES.FRENCH ? NavBarComponentStrings.bookingFR : NavBarComponentStrings.bookingEN}
                </NavLink>
                
                <NavLink
                style={{color: "white", padding: ".5rem 1rem"}}
                activeStyle={{ fontWeight: "bold", color: "white", textDecoration:"underline"}} 
                to="/SEG3525LabModule9/teachers">
                    {language === LANGUAGES.FRENCH ? NavBarComponentStrings.teachersFR : NavBarComponentStrings.teachersEN}
                </NavLink>
                <NavLink
                style={{color: "white", padding: ".5rem 1rem"}}
                activeStyle={{ fontWeight: "bold", color: "white", textDecoration:"underline"}} 
                to="/SEG3525LabModule9/courses">
                    {language === LANGUAGES.FRENCH ? NavBarComponentStrings.coursesFR : NavBarComponentStrings.coursesEN}
                </NavLink>
                <NavLink
                style={{color: "white", padding: ".5rem 1rem"}}
                activeStyle={{ fontWeight: "bold", color: "white", textDecoration:"underline"}} 
                to="/SEG3525LabModule9/availability">
                    {language === LANGUAGES.FRENCH ? NavBarComponentStrings.availabilityFR : NavBarComponentStrings.availabilityEN}
                </NavLink>
                <NavLink
                style={{color: "white", padding: ".5rem 1rem"}}
                activeStyle={{ fontWeight: "bold", color: "white", textDecoration:"underline"}} 
                to="/SEG3525LabModule9/partners">
                    {language === LANGUAGES.FRENCH ? NavBarComponentStrings.partnerSearchFR : NavBarComponentStrings.partnerSearchEN}
                </NavLink>
            </Nav>
                
            <Nav className="ml-auto">
                    <Form.Control as="select" className="mr-3 bg-dark text-white" defaultValue={language} onChange={(e: any) => {
                        setLanguage(e.target.value)
                        console.log(language)}}>
                        <option>Français</option>
                        <option>English</option>
                    </Form.Control>
                <Link to="/SEG3525LabModule9/home">
                    <AiFillHome className="mr-2 p-1 border rounded" size={36} color="#b30000" />
                </Link>
                <Link to="/SEG3525LabModule9/help">
                    <IoMdHelpCircle className="ml-2 p-1 border rounded" size={36} color="#b30000" />
                </Link>
            </Nav>
            
        </Container>
      </Navbar>
      <Switch>
        <Route path="/SEG3525LabModule9/home">
        </Route>
        <Route path="/SEG3525LabModule9/reservation">
          <ReservationComponent language={language} />
        </Route>
        <Route path="/SEG3525LabModule9/availability">
          <AvailabilityComponent language={language} />
        </Route>
        <Route path="/SEG3525LabModule9/teachers">
          <TeachersComponent language={language} />
        </Route>
        <Route path="/SEG3525LabModule9/courses">
          <CoursesComponent language={language} />
        </Route>
        <Route path="/SEG3525LabModule9/partners">
          <PartnersComponent language={language} />
        </Route>
        <Route path="/SEG3525LabModule9/help">
          <HelpComponent language={language} />
        </Route>
        <Route path="/">
          <Container>
              <h1>
              {language === LANGUAGES.FRENCH ? errors.oopsFR : errors.oopsEN}
              </h1>
              <Link to="/SEG3525LabModule9/home">
                <Button variant="danger">
                  {language === LANGUAGES.FRENCH ? errors.redirectFR : errors.redirectEN}
                </Button>
              </Link>
          </Container>
        </Route>
      </Switch>
    </>
  );
}

export default App;
