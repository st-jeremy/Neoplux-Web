import pic from './Images/swim2.png';
import gif from './Images/loading.gif';
import arena from "./Images/arenalogo.png";
import speedo from "./Images/speedologo.png";
import omega from "./Images/omegalogo.png";
import ContentList from './ContentList';
import Random from './Random';
import useFetch from './useFetch';
import './index.css';

const Home = () => {
    const { data: content, isLoading, error } = useFetch('http://localhost:8000/Content');

     
    return ( 
        <div className="Home">

            <div className='random'>
                <Random />
            </div>

            

            {/* Output the right if the left is returned as true */}
            
            { isLoading && <div><img src={gif} alt='loading' id='loading'/></div>}

            { error && <div>{ error }</div>}

            {content && <ContentList content={content} title="Swimming" />}

            <div className="Partners">
                <h3>Our Partners</h3>
                <img src={arena} alt="Arena" />
                <img src={omega} alt="omega" />
                <img src={speedo} alt="speedo" />

            </div>

            <img src= {pic} alt='Pic' id='homePic' />
        </div>
    );
}
 
<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> 85e2d53b233e4bc0a804b7bb892c6fe4b926d96c
