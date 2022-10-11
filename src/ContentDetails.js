import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ContentDetails = () => {
    const { id } = useParams();
    const { data: content, isLoading, error } = useFetch('http://localhost:8000/Content/' + id);

    return ( 
        <div className="content-details">
            
            {isLoading && <div>Loading...</div>}
            {error && <div> { error } </div>}
            { content && 
                (<article>
                    <h3>{ content.title}</h3>
                    <div>{ content.body }</div>
                    {/* <img src={content.path} alt="images"/> */}
                </article>
            )}

        </div>
     );
}
 
export default ContentDetails;