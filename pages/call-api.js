import { useEffect } from 'react';

const CallApi = () => {
    
    useEffect(()=>{
        fetch('http://localhost:3000/students')
        .then(function(data) {
            console.log(data);
        })
        .catch(function() {

        });
    }, []);

    return(
        <>
            <p>Call an api</p>
        </>
    )
}


export default CallApi;