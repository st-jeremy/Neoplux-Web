import { useState, useEffect } from "react";

const useFetch = (url) => {
 
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(()=> {

        const abortCtrl = new AbortController();

        // Playing with the loading time, e dey sweet my body!
        setTimeout(()=>{
            fetch(url, { signal: abortCtrl.signal })
            // this above returns a promise
            .then((res) =>{
                if (!res.ok){
                    throw Error('Could not fetch data for that resource!');
                }
                return res.json();
            })
            .then((data) =>{
                
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err=> {
                if(err.name === 'AbortError'){
                    console.log('fetch Aborted');
                } else{
                    setError(err.message);
                    setIsLoading(false);
                }
                
            })
        }, 2000)

        return () => abortCtrl.abort();

        // having url here as dependencies help rerun this function once the url changes
    }, [url]
    );
    return { data, isLoading, error };
}
 
export default useFetch;