import {React} from 'react'

const Register = async (companyName, ownerName, ownerEmail,rollNo,accessCode) => {
  const company = {
    "companyName": companyName,
    "ownerName": ownerName,
    "ownerEmail": ownerEmail,
    "rollNo": rollNo,
    "accessCode": accessCode
  }
    const response = await fetch('http://20.244.56.144/train/register', {
        method: 'POST',
        body: JSON.stringify(company),
        headers: {
        'Content-Type': 'application/json'
        }
    });
    const result = await response.json();
    return result
}


export default Register