import "./Contacts.css"


const Contacts = () => {

    return (
        <section className="contacts">
            <h1>Get Over Here to our physical store</h1>
            <img className="contacts-mainImg" src="https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/10/mortal-kombat-11-ultimate-feature-header.jpg" />
            <p>If You want to visit our physical store You can find it's location on the map below or You can contact us from the provided e-mail or phone number(s)D</p>
            <p className="contacts-donot">Do not hesitate and get over to us NOW!</p>

            <div className="contacts-wrapper">
                <div className="contacts-info">
                    <h1 className="contacts-title">Contacts</h1>

                    <ul className="contacts-info-cr">
                        <li>Telephone number #1: <a href="tel:0700 02 600">0700 02 600</a></li>
                        <li>Telephone number #2: <a href="tel:0700 02 601">0700 02 601</a></li>
                        <li>E-mail: <a href="mailto:lyubomir_vasilev1992@abv.bg">lyubomir_vasilev1992@abv.bg</a></li>
                    </ul>

                    <p className="contacts-hq">Main office HQ</p>
                    <p className="contacts-hq-address">ul. arch. "Nikola Lazaorv", 1756 Simeonovo - Sever, Sofia, Bulgaria</p>

                    
                    <p className="contacts-store">Physical Store Address </p>
                    <p className="contacts-store-address">ul. "197-ma", 1756 Simeonovo - Sever, Sofia, Bulgaria</p>
                </div>

                <div className="mapouter">
                    <div className="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=ul.%20%22197-ma%22,%201756%20Simeonovo%20-%20Sever,%20Sofia&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>

            </div>



        </section>
    );
}

export default Contacts;