import "./Game.css";

import { useState, useEffect, useRef, createContext } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import firebase from "firebase";

import * as gamesService from "../../services/GamesService";
import { useAuth } from "../Authentication/AuthContext";


const Game = ({
    id,
    title,
    category,
    description,
    likes,
    imageURL,
    price,
    userIds,
    match,
    props
}) => {

    const { currentUser } = useAuth();
    const history = useHistory();
    const [liked, setLike] = useState(false);

    const LikeProv = createContext(liked);


    useEffect(() => {

        if(currentUser){
            userIds.forEach(ref => {
                if (currentUser.uid === ref) setLike(true)
            })
        }
      
    }, [])


    const addToCart = async () => {
        let defaultGame = {
            id: id,
            title: title,
            description: description,
            imageURL: imageURL,
            category: category,
            price: price,
            likes: likes,
            copies: 1,
            reference: [currentUser.uid]
        }

        const db = firebase.firestore();

        await db.collection("shoppingCart").doc(title).set(defaultGame)
            .then(history.push("/cart"))

    }



    /*Local back-end in case of firebase-connection outage scenariois

    //     return fetch(`http://localhost:5000/basket`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(game)
    //     })
    //     .then(history.push("/cart"))

    // // }



    const addToCart = () => { 

        if(!currentUser){
            history.push("/register")
        } else{
            let game = {
                id: id,
                title: title,
                description: description,
                imageURL: imageURL,
                price: price,
                likes: likes,
                copies: 1,
                reference: [currentUser.uid]
            }
    
      
    
            return gamesService.createGame(game)
                .then(history.push("/cart"))
        }

   
    }
    // ==================== Capsule End ==================== */


    return (
        <LikeProv.Provider value={liked}>
            <div className="game">

                <h2>{title}</h2>

                <img className="game-img" src={imageURL}></img>
                <button onClick={addToCart}>Buy Game</button>
                <button><NavLink to={`/games/details/${id}`}>Details</NavLink></button>
                <p>Likes: {likes}</p>
                <p>Price: {price}</p>
                <style jsx="true">
                    {
                        `
                    p{ margin: 6px; }
                    
                    `
                    }
                </style>
            </div>
        </LikeProv.Provider>
    )
}

export default Game;