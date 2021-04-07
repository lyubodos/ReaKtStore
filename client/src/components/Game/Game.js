import "./Game.css"

import { useState, useEffect, useRef } from "react";
import { NavLink, useHistory } from 'react-router-dom';

import * as gamesService from "../../services/GamesService";


const Game = ({
    id,
    title,
    description,
    likes,
    imageURL,
    price,

}) => {

    const history = useHistory();

    // const addToCart = async () =>{
    //     const db = firebase.firestore();

    //     await db.collection("shoppingCart").doc(title).set({
    //         id: id,
    //         title: title,
    //         description: description,
    //         imageURL: imageURL,
    //         category: category,
    //         price: price,
    //         reviews: [
    //           {
    //             userId: "1321313123131321123",
    //             comment: "This game is awesome!"
    //           }
    //         ],
    //         likes: likes
    //     })
    // }


    const addToCart = () => {

        let game = {
            id: id,
            title: title,
            description: description,
            imageURL: imageURL,
            price: price,
            likes: likes,
            copies: 1
        }



        return fetch(`http://localhost:5000/basket`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(game)
        })
        .then(history.push("/cart"))
        
    }


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