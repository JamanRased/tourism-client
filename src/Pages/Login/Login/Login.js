import React from 'react';
import { Button } from 'react-bootstrap';
import useFirebase from '../../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div className='bg-warning p-5'>
            <h2>Please Login</h2>
            <input className="input-field" type="Email"placeholder="Enter Your Email"/>
            <br />
            <input className="input-field" type="password"placeholder="Enter Your Password"/>
            <br />
            <Button className="pt-2 m-2" onClick = ''>Login</Button>
            <br />
            <button onClick={signInUsingGoogle} className="btn btn-success">Google Sign In</button>
        </div>
    );
};

export default Login;