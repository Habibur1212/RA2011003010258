import React from 'react'
import {useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const Auth = () => {
    const location = useLocation();
    const credentials = location.state[0];
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://20.244.56.144/train/auth', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
            'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        navigate('/dashboard', {state:{access_token: result.access_token}});
    }

  return (
    <div>
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Auth