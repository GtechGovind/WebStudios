import { Redirect, Route, Switch } from 'react-router'

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Services from './Pages/Services'
import Contacts from './Pages/Contacts'
import Privacy from './Pages/Privacy'
import AboutUs from "./Pages/AboutUs";
import Disclaimers from "./Pages/Disclaimer";


function App() {
  return (
      <>
          <Navbar />
          <Switch>
              <Route exact path = "/" component = { Home } />
              <Route exact path = "/project" component = { Projects } />
              <Route exact path = "/service" component = { Services } />
              <Route exact path = "/contact" component = { Contacts } />
              <Route exact path = "/privacy" component = { Privacy } />
              <Route exact path = "/about" component = { AboutUs } />
              <Route exact path = "/disclaimer" component = { Disclaimers } />
              <Redirect to = "/" />
          </Switch>
          <Footer />
      </>
  );
}

export default App;
