import './App.css';

import  {Navbar}  from './Components/Navbar';
//import InboundChecker from './Inbound-checker';
//import BasicTable from './Components/BasicTable';
import OutboundChecker from './Components/OutboundChecker';
import {Toggle} from './Components/Toggle'
import SignInSide from './Components/SignInSide';
import InboundChecker from './Components/Inbound-checker';
import Footer from './Components/footer'
//import InboundChecker from './Inbound-checker';
import { NavbarHome } from './Components/NavbarHome';
import InboundMaker from './Components/InboundMaker';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BasicTable from './Components/BasicTable';

function App() {
  
  return (
      <Router>
        <div>
          <Switch>
            <Route exact path = "/">
              <NavbarHome/>
              <SignInSide/>
              <Footer/>
            </Route>

            <Route exact path = "/home">
              <Navbar/>
              <BasicTable/>
            </Route>

            <Route exact path = "/outbound/maker">
              <Navbar/>
              <Toggle/>
            </Route>

            <Route exact path = "/outbound/checker">
              <Navbar/>
              <OutboundChecker/>
            </Route>

            <Route exact path = "/inbound/checker">
              <Navbar/>
              <InboundChecker/>

            </Route>

            <Route exact path = "/inbound/maker">
              <Navbar/>
              <InboundMaker/>

            </Route>

          </Switch>
        </div>
      </Router>
  );
}

export default App;
