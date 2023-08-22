import {React, useState} from 'react'
import Register from './register';
import Auth from './Auth';
import {useNavigate} from 'react-router-dom';

const Home = () => {
  const [company, setCompany] = useState("");
  const [owner, setOwner] = useState("");
  const roll = "RA2011003010258";
  const [email, setEmail] = useState("");
  const access = "TzEfMS";
  const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const registered = <Register companyName={company} ownerName={owner} ownerEmail={email} rollNo={roll} accessCode={access}/>;
        navigate('/auth', {state:[{companyName:registered.companyName, clientID:registered.clientID, clientSecret:registered.clientSecret, ownerName:registered.ownerName, ownerEmail:registered.ownerEmail, rollNo:registered.rollNo}]});
    }

    const handleCompanyChange = (e) => {
        setCompany(e.target.value);
    }
    const handleOwnerChange = (e) => {
        setOwner(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
        
  return (
    <div>
        <input onChange={handleCompanyChange}/>
        <input onChange={handleOwnerChange}/>
        <input onChange={handleEmailChange}/>
        <button onClick={handleSubmit}>Register</button>
    </div>
  )
}

export default Home