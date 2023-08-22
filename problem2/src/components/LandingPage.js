import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom';

const LandingPage = () => {
    const location = useLocation();
    const [response, setResponse] = useState({});
    const access_token = location.state.access_token;

    useEffect(() => {
        getTrains();
    },[])
    const getTrains = async () => {
        await fetch('http://20.244.56.144/train/trains', {
            method: 'GET',
            headers: {
                Authorization:
                  "Bearer "+access_token,
              }

        }).then(function(response) {
            return response.json();
        })
        .then(function(data) {
            setResponse(data);
        })
    }
    if(Object.keys(response).length != 0){
        return (
            <div>
            {
                response.map((res) => (
                    <div className='train'>
                        <p className='name'>{res.trainName}</p>
                        <p className='number'>{res.trainNumber}</p>
                        <p className='time'>{res.departureTime.Hours}:{res.departureTime.Minutes}:{res.departureTime.Seconds}</p>
                    </div>
                ))
            }
            </div>
        )
    }
    else{
        return(
            <div>Loading...</div>
        )
    }
}

export default LandingPage