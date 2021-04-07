
import "./ForgotPassword.css";

import {  Link } from "react-router-dom";
import {useRef, useState} from "react";
import { useAuth } from "../AuthContext";
import Notification from "../../Shared/Notification";
import SuccessNote from "../../Shared/SuccessNote";

export default function ForgotPassword() {

    const emailRef = useRef();
    const {resetPassword} = useAuth();
    const [error, setError] = useState("");
    const [message, setMesasge] = useState("");
    const [loading, setLoading] = useState(false);

    async function resetHandler(e){
        e.preventDefault();

        try{
            setError("");
            setMesasge("");
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMesasge("Check Your inbox for the password reset link");

        } catch {
            setError("Failed to reset password");
        }

        setLoading(false);
    }

    return (
        <section className="forgotPass">
        <h1>Forgot Your password?</h1>
        <p>Do not worry!<br></br> Use Your initial e-mail for verification. We will send You a link for password reset.</p>
        {message && <SuccessNote>{message}</SuccessNote>}
        {error && <Notification>{error}</Notification>}
        <img src="https://i.pinimg.com/originals/f1/75/2f/f1752f2eb3da3ba7a716ba3080f644da.jpg"/>
        <form onSubmit={resetHandler}>
            <label htmlFor="username">E-mail</label>
            <input type="e-mail" name="e-mail" ref={emailRef}  id="loginEmail"/>
            <input type="submit" value="Send link"/>
        </form>
       <Link className="try-again" to="/login">Try logging in again!</Link>
        </section>
    );
}
