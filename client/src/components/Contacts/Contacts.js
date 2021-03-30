import "./Contacts.css"


const Contacts = () =>{

    return(
        <section className="contacts">
            <img className="contacts-mainImg" src="https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/10/mortal-kombat-11-ultimate-feature-header.jpg"/>

            <div className="contacts-wrapper">
            <img src="https://www.technipages.com/wp-content/uploads/2020/10/fix-google-maps-not-updating-location-600x341.png" />

            <ul className="contacts-info">
                <li><a href="">ReaKtStore&copy;</a></li>
                <li><a href="">ReaKtStore&copy;</a></li>
                <li><a href="">ReaKtStore&copy;</a></li>
                <li><a href="">ReaKtStore&copy;</a></li>
            </ul>
            </div>
        </section>
    );
}

export default Contacts;