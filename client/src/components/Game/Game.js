import "./Game.css"

import { useState, useEffect, useRef } from "react";
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

}) => {

    const {currentUser} = useAuth();

    const addToCart = async () => {
        const db = firebase.firestore();

        await db.collection("shoppingCart").doc(title).set({
            id: id,
            title: title,
            description: description,
            imageURL: imageURL,
            category: category,
            price: price,
            likes: likes,
            copies: 1,
            reference: [currentUser.uid]
        })
    }



    //Local back-end in case of firebase-connection outage scenariois
    // const history = useHistory();

    //     return fetch(`http://localhost:5000/basket`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(game)
    //     })
    //     .then(history.push("/cart"))

    // }


    // const addToCart = () => {

    //     let game = {
    //         id: id,
    //         title: title,
    //         description: description,
    //         imageURL: imageURL,
    //         price: price,
    //         likes: likes,
    //         copies: 1
    //     }


    // ==================== Capsule End ==================== //


    return (
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
    )
}

export default Game;