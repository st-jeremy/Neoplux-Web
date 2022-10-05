import { Link } from "react-router-dom";
import Logo from './Images/logo-removebg.png';

const Navbar = () => {


    return (
        <div className="Navbar">
            <div className="Nav1">
                <img src= {Logo} alt="logo" id="Logo" className="Logo"/>
                <h1>NeoPlux Swim Academy</h1>
            </div>
            
            <div className="Nav2">
                <Link to='/'>Home</Link>
                <Link to="/Register">Register</Link>
                <Link to="/ContactUs">Contact Us</Link>
                <Link to="AboutUs">About Us</Link>
                <Link to="Trainers">Meet the Trainers</Link>
                <br></br>
                <input type="search" name="Search" id="search" placeholder="  Search" />
            </div>
            
        </div>
    );
}
 
export default Navbar;
