import axios from 'axios';
import React, { useState } from 'react'
import "./Register.css";
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async () => {
        try {
            const response = await axios.post(`http://localhost:9000/users`, {
                name: name,
                email: email,
                password: password
            });
    
            if (response.status == 201) {
                console.log("User successfully registered");
                setName("");
                setEmail("");
                setPassword("");
                navigate('/login')
            } else {
                console.log("User not registered");
            }
        } catch (error) {
            console.error("An error occurred during registration:", error);
        }
    };


    return (
        <div className='container content'>
        <div className='form-container '>
            <h1 className='form-header'>Register</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Username</label>
                    <input type="text" name='name' onChange={(e) => setName(e.target.value)} value={name} className="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" id="password" />
                </div>
                <button type="button" onClick={() => handleSubmit()} className="submit-button">Submit</button>
            </form>
        </div>
    </div>
      );
}

export default Register