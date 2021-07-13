import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './Navbar';
import { Route, Switch } from 'react-router-dom';
import ReservationComponent from './Reservation';
import TeachersComponent from './Teachers';
import CoursesComponent from './Courses';
import PartnersComponent from './Partners';
import HelpComponent from './Help';
import AvailabilityComponent from './Availability';
interface AppProps {
}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <NavbarComponent/>
      <Switch>
        <Route path="/SEG3525LabModule9/home">
        </Route>
        <Route path="/SEG3525LabModule9/reservation">
          <ReservationComponent />
        </Route>
        <Route path="/SEG3525LabModule9/availability">
          <AvailabilityComponent />
        </Route>
        <Route path="/SEG3525LabModule9/teachers">
          <TeachersComponent />
        </Route>
        <Route path="/SEG3525LabModule9/courses">
          <CoursesComponent />
        </Route>
        <Route path="/SEG3525LabModule9/partners">
          <PartnersComponent />
        </Route>
        <Route path="/SEG3525LabModule9/help">
          <HelpComponent />
        </Route>
      </Switch>
    </>
  );
}

export default App;
