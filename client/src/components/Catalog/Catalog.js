import "./Catalog.css";

import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import firebase from 'firebase';

import * as gamesService from "../../services/GamesService"
import CatalogNav from "./CatalogNav";
import Game from "../Game";
import Loading from "../Shared/Loading";



function Catalog() {

    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(false);

    const [games, setGames] = useState([]);


    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("games").get()

            setGames(data.docs.map(doc => doc.data()))
        }

        fetchData();
        setLoading(false);
    }, []);


    /*Local back-end in firebase-connection outage scenariois

    useEffect(() => {
        gamesService.getAll("games")
        .then(res => setGames(res))

    }, []);



    // ==================== Capsule End ====================*/


    return (
        <section className="catalog">
            <CatalogNav />
            {loading
            ?  <Loading/>
            : ""}
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