import "./Register.css";

import {useRef, useState} from "react";
import { useAuth } from "../AuthContext";

import {Link , useHistory} from "react-router-dom";
import Notification from "../../Shared/Notification";


const Register = () => {

    const emailRef = useRef();
    const passRef = useRef();
    const rePassRef = useRef();
  

    const { signup, currentUser} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)

    const history = useHistory();

    async function submitHandler(e){
        e.preventDefault();

        if(passRef.current.value !== rePassRef.current.value){
            return setError('Passwords do not match');
        } else if((passRef.current.value || rePassRef.current.value) === ""){
            return setError('Password fields cannot be empty');
        }

        try{
        setError('');
        setLoading(true);

          await signup(emailRef.current.value, passRef.current.value)
          .catch(err => setError(err))
    
          history.push("/catalog");

        } catch {
            setError('Failed to create an account');
        }   

        setLoading(false);
    }   
    

    return(

        <div className="nav-register">
        {error && <Notification>{error}</Notification>}
        <h1 className="reg-title">Do not have an account?</h1>
        <p className="reg-description">Make a pact with us providing Your data, which You can make sure that we will protect and not share with 3rd parties!<br></br>Register now and begin your Konquest</p>
        <img  src="https://i.redd.it/fzunfh2r7hj21.png"/>

        <form onSubmit={submitHandler}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" ref={emailRef}/>
    
        
            <label htmlFor="password">Password</label>
            <input type="password" name="password"  ref={passRef}/>
            <label htmlFor="repeatPassword">Repeat Password</label>
            <input type="password" name="repeatPassword" ref={rePassRef} id="loginPassword"/>
          
            <input type="submit" disabled={loading} value="Sign Up"/>
            
        </form>
        <p className="signup-link">Already have an account? <Link to="/login">Log In NOW!</Link></p>
        </div>
       
    );
}

export default Register;