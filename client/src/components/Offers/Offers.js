import "./Offers.css";

import CatalogNav from "../Catalog/CatalogNav";
import Game from "../Game";
import * as gamesService from "../../services/GamesService";


import { useState, useEffect } from "react";
import {Link , NavLink} from 'react-router-dom'
import firebase from "firebase";
import OffersTemp from "./OffersTemp/OffersTemp";



export default function Offers() {

    const [offerGames, setofferGames] = useState([]);
    const [offer, setOffer] = useState(false);

    

    useEffect(() =>{
        const fetchData = async() => {
            const db = firebase.firestore();
            const data = await db.collection("offers").get()

            setofferGames(data.docs.map(doc => doc.data()))
        }

        fetchData();
    }, [])




    
    return (
        <section className="offers">
            <CatalogNav />
            <h1>All Games</h1>

            <div className="offers-games">
           
                {
                    offerGames.map(x => 

                    <OffersTemp key={x.id} {...x} />

                    )}
            </div>
            
        </section>
    )
}
