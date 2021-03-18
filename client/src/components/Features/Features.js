import "./Features.css";


function Features(){
    return(
        <section  class="features">
            <article class="feature">
                <article class="feature-icon-wrapper">
                    <i class="fas fa-link"></i>
                </article>
                <h4 class="feature-title">
                   Features
                </h4>
                <p class="feature-text">Check <a href="">some</a>of our cool features which you can use while you are ordering your game.
                 </p>
            </article>
            <article class="feature">
                <article class="feature-icon-wrapper">
                    <i class="fas fa-ethernet"></i>
                </article>
                <h4 class="feature-title">
                    Katalog
                </h4>
                <p class="feature-text">Browse trough our catalog of games and check out<a href="">some</a> of the best offerst you can get!
                </p>
            </article>
            <article class="feature">
                <article class="feature-icon-wrapper">
                    <i class="fas fa-unlock-alt"></i>
                </article>
                <h4 class="feature-title">
                    Hign end security
                </h4>
                <p class="feature-text">We may store some of your personal information and data, but you can rest assure it is not being shared with third party sites.
                </p>
            </article>
            <article class="feature">
                <article class="feature-icon-wrapper">
                    <i class="fas fa-question-circle"></i>
                </article>
                <h4 class="feature-title">
                    24 hour support service
                </h4>
                <p class="feature-text">
                    You can call our 24hr hotline or send us an e-mail  at any time of the day or night. You will receive the best quality of advise and infromation.
                </p>
            </article>
        </section>
      
    );
}


export default Features;