// import img from './416169_icolorpalette.png'; 

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
            <a href="http://facebook.com"><img src="./416169_icolorpalette.png" alt="facebook" /></a>
            <br />
            <a href="http://twitter.com"><img src="./416169_icolorpalette.png" alt="twitter" /></a>
            <br />
            <a href="http://tiktok.com"><img src="./416169_icolorpalette.png" alt="tiktok" /></a>


            {/* <button className="btnA">
                Adult
            </button>

            <button className="btnH">
                Hydrotherapy
            </button>

            <button className="btnP">
                Competitive
            </button> */}

        </div>
    );
}
 
export default Sidebar;