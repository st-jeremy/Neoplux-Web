import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="Navbar">
            <h1>NeoPlux Swim Academy</h1>
            <Link to='/'>Home</Link>
            <Link to="/Register">Register</Link>
            
            <Link to="/ContactUs">Contact Us</Link>
            <input type="search" name="Search" id="search" placeholder="Search" />
        </div>
    );
}
 
export default Navbar;
