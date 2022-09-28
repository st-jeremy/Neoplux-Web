import { Link } from "react-router-dom";
import pic from './'

const ContentList = ({content, title}) => {

    return (
        <div className="ContentList">
            <h1>{title}</h1>
            {content.map((content) => (
                <div className="content-view" key={content.id}>
                    <Link to={ `/content/${ content.id }`}>
                        <h3> {content.title} </h3>
                        {/* <p> {content.body} </p> */}
                    </Link>
                    
                </div>
            
        ))}
        </div>
    );
}
 
export default ContentList;
