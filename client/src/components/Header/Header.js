import { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext";
import Notification from "../Shared/Notification";
import "./Header.css";




function Header() {

    const {logout, currentUser} = useAuth();
    const [error, setError] = useState("");

    const history = useHistory();

    async function logoutHandler(){

        setError('');

        try {
            await logout();
            history.push("/login");
        } catch {
            setError("Failed to log out");
        }
    }

    // function profileHandler(){
       
    //     setError('');

    //     try{
    //         history.push("/profile");
    //     } catch {
    //         setError("Failed to log into settings page");
    //     }
    // }



    return (
        <header class="header">
            <div className="header-wlc"> 
                {currentUser ? <h3>Welcome, {currentUser.email}</h3> : ""}
                <h1 class="header-title">ReaKt Store</h1>
            </div>

            <nav>
                {
                    currentUser 
                    ? <ul class="header-reg"><li><NavLink onClick={logoutHandler} to="/">Logout</NavLink></li><li><Link to="/profile"><i class="fas fa-cog fa-1x"></i></Link></li> </ul>
                    : <ul class="header-reg"><li><NavLink to="/login">Login</NavLink></li><li><NavLink to="/register">Sign-Up</NavLink></li></ul>
                }
            
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/catalog">Katalog</NavLink></li>
                    <li><NavLink to="/offers">Best Offers</NavLink></li>
                    <li><NavLink to="/contacts">Kontants</NavLink></li>
                </ul>
            </nav>
            {error && <Notification>{error}</Notification>}
        </header>
        
    );
}

export default Header;