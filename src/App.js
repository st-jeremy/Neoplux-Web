import './index.css';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
import Register from './Components/Register';
import ContactUs from './Components/ContactUs';
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import ContentDetails from './Components/ContentDetails';
// import NotFound from './Components/NotFound.js';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />

      <Sidebar />

      <Switch>
        <div className="content">

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/ContactUs">
            <ContactUs />
          </Route>

          <Route path="/Content/:id">
            <ContentDetails />
          </Route>

          <Route path="/AboutUs">
            <AboutUs />
          </Route>
          
          {/* <Route path="*">
            <NotFound />
          </Route> */}
          
        </div>
      </Switch>

      <Footer />
      
      
    </div>
    </Router>
  );
}

export default App;
