import "./Register.css";

import {useRef, useState} from "react";
import { useAuth} from "../AuthContext";

import {Link} from "react-router-dom";
import InputError from "../../Shared/InputError/InputError";


const Register = () => {

    const emailRef = useRef();
    const passRef = useRef();
    const rePassRef = useRef();

    const { signup, currentUser} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)


    async function submitHandler(e){
        e.preventDefault();


        if(passRef.current.value !== rePassRef.current.value){
            return setError('Passwords do not match');
        }

        try{
        setError('');
        setLoading(true);
          await signup(emailRef.current.value, passRef.current.value);

        } catch {
            setError('Failed to create an account')
        }   
        setLoading(false)
    }   
    
    return(

        <div className="nav-register">
        <h1 className="reg-title">Sign Up NOW!</h1>
        <p className="reg-description">Do not have an account?<br></br> Make a pact with us providing Your data, which You can make sure that we will protect and not share with 3rd parties!<br></br>Register now and begin your konquest</p>
        <img  src="https://i.redd.it/fzunfh2r7hj21.png"/>
        {currentUser.email}
        <form onSubmit={submitHandler}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" ref={emailRef} id=""/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password"  ref={passRef} id=""/>
            <label htmlFor="repeatPassword">Repeat Password</label>
            <input type="password" name="repeatPassword" ref={rePassRef} id="loginPassword"/>
          
            <input type="submit" disabled={loading} value="Sign Up"/>
            
        </form>
        {error && <InputError>{error}</InputError>}
        <p className="signup-link">Already have an account? <Link to="/login">Log In NOW!</Link></p>
        </div>
       
    );
}

export default Register;