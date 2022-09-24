import pic from './swim2.png';
import gif from './loading1.gif';
import ContentList from './ContentList';
import useFetch from './useFetch';

const Home = () => {
    const { data: content, isLoading, error } = useFetch('http://localhost:8000/Content') 
    
    return ( 
        <div className="Home column">

            { <img src={pic} alt="swim" />}

            {/* Output the right if the left is returned as true */}
            { isLoading && <div> Please, wait!<br/> <img src={gif} alt='loading' /></div>}

            { error && <div>{ error }</div>}

            {content && <ContentList content={content} title="Swimming" />}

        </div>
    );
}
 
export default Home;