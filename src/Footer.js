import { FaFacebookSquare } from 'react-icons/fa';
import { SiTwitter } from 'react-icons/si';
import { SiTiktok } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {

    const linkStyle = {
        color: 'red',
        borderRadius: '10px'
    }

    return ( 
        <div className="Footer">
            <div className="Link">
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/Register" style={linkStyle}>Register</Link>
                <Link to="/ContactUs" style={linkStyle}>Contact Us</Link>
                <Link to="/AboutUs" style={linkStyle}>About Us</Link>
                <br />

                Copyright Neoplux Swim Academy 2022

            </div>
            <div className="social">
                <a 
                href="http://facebook.com"
                target="_blank" 
                rel="noopener noreferrer"
                >
                    <FaFacebookSquare/>
                    FaceBook
                </a>
                <br />

                <a 
                href="http://twitter.com"
                target="_blank" 
                rel="noopener noreferrer"
                >
                    <SiTwitter/>
                    Twitter
                </a>
                <br />

                <a 
                href="http://tiktok.com"
                target="_blank" 
                rel="noopener noreferrer"
                >
                    <SiTiktok/>
                    Tiktok
                </a>
            </div>

        </div>
     );
}
 
export default Footer;