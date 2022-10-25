import { Link } from "react-router-dom";
import Logo from '/src/images/logo-removebg.png';
// import { FcSearch } from "react-icons/fc";

const Navbar = () => {
    const linkStyle = {
        color: 'maroon',
        borderRadius: '10px'
    }

    return (
        <div className="Navbar">
            <div className="Nav1">
                <img src= {Logo} alt="logo" id="Logo" className="Logo"/>
                <br />
                <h1>NeoPlux Swim Academy</h1>
            </div>
            
            <div className="Nav2">
                <Link to='/' style={linkStyle}>Home</Link>
                <Link to="/Register" style={linkStyle}>Register</Link>
                <Link to="/ContactUs" style={linkStyle}>Contact Us</Link>
                <Link to="AboutUs" style={linkStyle}>About Us</Link>
                <br />
                <input type="search" name="Search" id="search" placeholder="  Search" />
            </div>
            
        </div>
    );
}
 
export default Navbar;
