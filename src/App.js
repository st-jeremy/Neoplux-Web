import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import Sidebar from './Sidebar';
import Register from './Register';
import ContactUs from './ContactUs';
import AboutUs from "./AboutUs";
import Footer from "./Footer";


import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContentDetails from './ContentDetails';
// import NotFound from './NotFound';

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
