import "./Header.css";


import { NavLink } from "react-router-dom";

import { useAuth } from "../Authentication/AuthContext";

function Header() {

    // const {currentUser} = useAuth();

    return (
        <header class="header">
            <div className="header-wlc"> 
                <h3>Welcome, Lyubodos</h3>
                <h1 class="header-title">ReaKt Store</h1>
                <NavLink className="header-logout" to="">Logout</NavLink>
            </div>

            <nav>
                <ul class="header-reg">
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Sign-Up</NavLink></li>
                </ul>

                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/catalog">Katalog</NavLink></li>
                    <li><NavLink to="/offers">Best Offers</NavLink></li>
                    <li><NavLink to="/contacts">Kontants</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;