import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="NotFound">
            <h2>Oh, Sorry!</h2>
            <p>That page cannot be found.</p>
            <Link to="/">Back to Neoplux homepage</Link>
        </div>
     );
}
 
export default NotFound;