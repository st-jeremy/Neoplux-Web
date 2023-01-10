import picture from "../images/Swim1.jpeg";

const AboutUs = () => {
    return ( 
        <div className="AboutUs">
            <div>
                <img src={picture} alt="about us" />
                <h2>CORE VALUES</h2>
                    <ul>
                        Deriving from the same set of values that our clients and coaches are expected to adhere to, we have adopted key corporate values which will define and crystallize its approach and behavior.
                    </ul>

                    <h3>We value</h3> 

                    <ul>
                        The lifelong pursuit of excellence across all levels of the sport and organization.
                    </ul>

                    <ul>
                        Behaviour of the highest ethical standard based on a foundation of accountability, integrity, respect and safety in all of our interactions.
                    </ul>

                    <ul>
                        The power of teamwork; as agile leaders in the swimming community we are committed to working collaboratively with our members and partners.
                    </ul>

                    <ul>
                        Continual improvement across all levels of the sport and organization.
                    </ul>
                    
                    <ul>
                        People as we strive to make swimming a diverse and inclusive sport for all.
                    </ul>
            </div>
        </div>
     );
}
 
export default AboutUs;
