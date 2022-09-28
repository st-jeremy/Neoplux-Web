import pic from './swim2.png';
import gif from './loading1.gif';
import ContentList from './ContentList';
import useFetch from './useFetch';

const Home = () => {
    const { data: content, isLoading, error } = useFetch('http://localhost:5000/Content') 
    
    return ( 
        <div className="Home column">
            {/* Output the right if the left is returned as true */}
            
            { isLoading && <div> Please, wait!<br/> <img src={gif} alt='loading' /></div>}

            { error && <div>{ error }</div>}

            {content && <ContentList content={content} title="Swimming" />}

            { <img src={pic} alt="swim" />}

        </div>
    );
}
 
export default Home;
