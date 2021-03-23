import "./About.css";

import SuggesButton from "../SuggestButton";

const About = () => {
    return (
        <section className="about">
            <div>
                <img src="https://images-na.ssl-images-amazon.com/images/I/412XigLW2hL._AC_.jpg"/>
            </div>
            <div>
                <h1>ReaKt Store</h1>
                <p>ReaKt Store is one of the latest projects of the official web designing company - <strong>SmartFox</strong>&copy;.<br/>Here You can browse, review and even buy some of your favourite games.
                    From the very begining of this project, we made a pact to bend to the end-customer's viewpoint and to implement almost everything , which we receive as feedback.<br/>
                    If You have any questions or thoughs on the current performance or design of the site, please do not hesitate to leave an opinnion before leaving our store.
                </p>
                <div className="btn-container"> 
                <button>Leave a feedback</button>
               <SuggesButton/>
               </div>
            </div>
        
        </section>
      
    )
        
}

export default About;
