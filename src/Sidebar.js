import { FaFacebookSquare } from 'react-icons/fa';
import { SiTwitter } from 'react-icons/si';
import { SiTiktok } from 'react-icons/si'

const Sidebar = () => {

    return (
        <div className="Sidebar column left">
            
            <a href="/">
            <button className="btn">
                Home
            </button>
            </a>

            <br />
            <a href="/Register">
            <button className="btn">
                Register
            </button>
            </a>
            <br />
            <a href="/ContactUs">
            <button className="btn">
                Contact Us
            </button>
            </a>
            
            <br />
            <br />
            <br />
            <br />
            <br />
            <a href="http://facebook.com"><FaFacebookSquare/>FaceBook</a>
            <br />
            <a href="http://twitter.com"><SiTwitter/>Twitter</a>
            <br />
            <a href="http://tiktok.com"><SiTiktok/>Tiktok</a>

        </div>
    );
}
 
export default Sidebar;
