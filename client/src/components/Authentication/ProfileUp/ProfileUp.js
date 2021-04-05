import "./ProfileUp.css";

import {useState, useRef} from 'react';
import {Link, useHistory } from 'react-router-dom';
import {useAuth} from "../AuthContext";

import Notification from "../../Shared/Notification";


export default function ProfileUp() {

    const emailRef = useRef();
    const passRef = useRef();
    const rePassRef = useRef();

    const { currentUser, updateEmail, updatePassword} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)

    const history = useHistory();

    function submitHandler(e){
        e.preventDefault();
        setLoading(true);
        setError('');
      

        if(passRef.current.value !== rePassRef.current.value){
            return setError('Passwords do not match');
        }

        const promises = []

        if(emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }

        if(passRef.current.value){
            promises.push(updatePassword(emailRef.current.value))
        }

        
        Promise.all(promises).then(() =>[
            history.push("/")
        ])
        .catch(() => {
            setError("Failed to update current account")
        })
        .finally(() => {
            setLoading(false);
        })
      
    }   
    
    return (
    
            <div className="nav-update">
            {error && <Notification>{error}</Notification>}
            <h1 className="update-title">Update Your profile</h1>
            <p className="update-description">If You are worried that Your account's password may be compromised , reset it and try re-logging again.</p>
            <img  src="https://glamadelaide.com.au/wp-content/uploads/2021/02/thumbnail_image002.jpg"/>
    
            <form onSubmit={submitHandler}>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" ref={emailRef} defaultValue={currentUser.email}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password"  ref={passRef} id=""/>
                <label htmlFor="repeatPassword">Repeat Password</label>
                <input type="password" name="repeatPassword" ref={rePassRef} id="loginPassword"/>
              
                <input type="submit" disabled={loading} value="Update"/>
                
            </form>
            <p className="update-link">You have made up Your mind about chanding Your credentials? <Link to="/">Cancel</Link></p>
            </div>
    )
}
