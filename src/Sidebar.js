import { FaHome } from 'react-icons/fa';
import { FaCashRegister } from 'react-icons/fa';
import { FaPeopleArrows } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { FaMedapps } from "react-icons/fa";
import swimgif from './Images/swimgif.gif';


const Sidebar = () => {

    
    const linkStyle = {
        color: 'white',
        borderRadius: '10px'
    }

    return (
        <div className="Sidebar">

            <div className="side">
                <Link to='/' className='homebar' style={linkStyle}> 
                    <FaHome />
                    Home
                </Link>
                <br />

                <Link to="/Register" className='regbar' style={linkStyle}>
                    <FaCashRegister />
                    Register
                </Link>
                <br />

                <Link to="/ContactUs" className='contactbar' style={linkStyle}>
                    <FaPeopleArrows />
                    Contact Us
                </Link>
                <br />

                <Link to="AboutUs" className='aboutbar' style={linkStyle}>
                    <FaMedapps />
                    About Us
                </Link>
                <br />

                <img src= {swimgif} alt='Pic' />
            </div>
            

        </div>
    );
}
 
export default Sidebar;