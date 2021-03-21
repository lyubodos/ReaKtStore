import "./Main.css";

import Features from "../Features"


function Main (){
    return(
        <main className="main-content">
            <section class="main-info-page">
                <h1>Welcome to the latest startup project of SmartFox &copy; </h1>
                <p>In this small(for now) store you can try and find all of your favourite games and titles.</p>
                <p>if there is a game ,which you cannot find, feel free to give us feedback so we can add it here.</p>  
            </section>
        <Features/>
        </main>
    );
}


export default Main;