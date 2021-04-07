import "./Catalog.css";

import { useState, useEffect } from "react";
import firebase from 'firebase';

import * as gamesService from "../../services/GamesService"
import CatalogNav from "./CatalogNav";
import Game from "../Game";



function Catalog(
    {
        match
    }
) {

    const [category, setCategory] = useState("");
    const [games, setGames] = useState([]);

    useEffect(() => {
        setCategory("");

        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("games").get()

            setGames(data.docs.map(doc => doc.data()))
        }

        fetchData();
    }, []);



    //Local back-end in firebase-connection outage scenariois

    // useEffect(() =>{

    //     gamesService.getAll(category)
    //     .then(res => setGames(res))
    // }, [category]);


    // ==================== Capsule End ==================== //


    return (
        <section className="catalog">
            <CatalogNav />
            <h1>All Games</h1>

            <div className="games">
                {
                    games.map(x =>
                        <Game key={x.id} {...x} />
                    )
                }
            </div>
        </section>
    );
}

export default Catalog;