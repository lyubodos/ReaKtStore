import "./About.css";

import {Link } from "react-router-dom";

import ButtonTemp from "../Shared/Button";

const About = () => {

    function redirectImg(){
        
    }

    return (
        <section className="about">
            <div className="about-bottom">
                <img src="https://images-na.ssl-images-amazon.com/images/I/412XigLW2hL._AC_.jpg" onClick={redirectImg}/>
            
           
                <h1>ReaKt Store</h1>
                <p>ReaKt Store is one of the latest projects of the official web designing company - <a href="https://xenodochial-blackwell-6396b1.netlify.app/#the-begining"><strong>SmartFox</strong>&copy;.</a><br/>Here You can browse, review and even buy some of your favourite games.
                    From the very begining of this project, we made a pact to bend to the end-customer's viewpoint and to implement almost everything , which we receive as feedback.<br/>
                    If You have any questions or thoughs on the current performance or design of the site, please do not hesitate to leave an opinnion before leaving our store.
                </p>
                <div className="btn-container"> 
                <ButtonTemp><Link to="/feedback" class="main-btn">Leave a feedback</Link></ButtonTemp>
                <ButtonTemp><Link to="/suggestgame" class="main-btn">Suggest a game</Link></ButtonTemp>
               </div>
            </div>
        
        </section>
      
    )
        
}

export default About;
