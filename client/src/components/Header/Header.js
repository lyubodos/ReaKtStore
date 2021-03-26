import "./Header.css";


import { NavLink } from "react-router-dom"

function Header(props){

    return (
        <header class="header">
        <h1 class="header-title">ReaKt Store</h1>
            <nav>
                <ul class="header-reg">
                    <li><NavLink to ="/login">Login</NavLink></li>
                    <li><NavLink to ="/register">Sign-Up</NavLink></li>
                </ul>
            
                <ul>
                    <li><NavLink to ="/">Home</NavLink></li>
                    <li><NavLink to ="/about">About</NavLink></li>
                    <li><NavLink to ="/catalog">Katalog</NavLink></li>
                    <li><NavLink to ="/offers">Best Offers</NavLink></li>
                    <li><NavLink to ="/contacts">Kontants</NavLink></li>       
                </ul>
                
            </nav>
           
        </header>      
  
    );
}

export default Header;