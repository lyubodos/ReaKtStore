import "./Offers.css";

import CatalogNav from "../Catalog/CatalogNav";
import Game from "../Game";


import { useState, useEffect} from "react";
import firebase from "firebase";




export default function Offers() {

    const [offers, setOffers] = useState([]);


    useEffect(() =>{
        const fetchData = async() => {
            const db = firebase.firestore();
            const data = await db.collection("offers").get()

            setOffers(data.docs.map(doc => doc.data()))
        }

        fetchData();
    }, [])


    return (
        <section className="offers">
                    <CatalogNav />
                <h1>All Games</h1>

                <div className="offers-games">
                {
                    offers.map(x => 
                    <Game key={x.id} {...x} />
                    )
                }
                </div>
        </section>
    )
} 
