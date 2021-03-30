import "./Login.css"
import gateImg from "../../../images/mk_gate.jpg";


import {useRef, useState} from "react";
import { Link } from "react-router-dom";

import InputError from "../../Shared/InputError/InputError";

import { useAuth } from "../AuthContext";

const Login = () => {

    const emailRef = useRef();
    const passRef = useRef();

    const { login } = useAuth();


    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
  

    async function submitHandler(e){
        e.preventDefault();

        try{
        setError('');
        setLoading(true);
          await login(emailRef.current.value, passRef.current.value);

        } catch {
            setError('Failed to sign in')
        }   
        setLoading(false)
    }  


    return(
        <div className="nav-login">
        <h1>Log into our realm and begin your journey!</h1>
        <img src={gateImg} alt="gateImg"/>
        
        <form onSubmit={submitHandler}>
            <label htmlFor="username">E-mail</label>
            <input type="e-mail" name="e-mail" ref={emailRef}  id="loginEmail"/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" ref={passRef} id="loginPassword"/>
            <input type="submit" disabled={loading} value="Login"/>
        </form>
        {error && <InputError>{error}</InputError>}
        <p className="signup-link">Do not have an account? <Link to="/register">Sign Up</Link></p>
        </div>
    )
    
}

export default Login;

