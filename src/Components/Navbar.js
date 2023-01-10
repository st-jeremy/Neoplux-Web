import { Link } from "react-router-dom";
import Logo from '../images/logo-removebg.png';
import { FcSearch } from "react-icons/fc";

const Navbar = () => {
    const linkStyle = {
        textDecoration : 'none',
        color: 'maroon'
    }
    const searchStyle = {
        marginLeft : '-25px',
        paddingTop : '5px'
    }

    return (
        <div className="Navbar">
            <div className="Nav1">
                <img src= {Logo} alt="logo" id="Logo" className="Logo"/>
                <h3>NeoPlux Swim Academy</h3>
            </div>
            
            <div className="Nav2">
                <Link to='/' style={linkStyle}>Home</Link>
                <Link to="/Register" style={linkStyle}>Register</Link>
                <Link to="/ContactUs" style={linkStyle}>Contact Us</Link>
                <Link to="AboutUs" style={linkStyle}>About Us</Link>
            </div>
                
            <div className="Nav3">
                <input type="search" name="Search" id="search" placeholder="  Search" /><FcSearch style={ searchStyle}/>
            </div>
            
        </div>
    );
}
 
export default Navbar;
