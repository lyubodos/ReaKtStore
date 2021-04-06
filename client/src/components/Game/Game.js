import "./Game.css"

import { useState, useEffect, useRef} from "react";
import { NavLink } from 'react-router-dom';

import * as gamesService from "../../services/GamesService";

import firebase from "firebase";

const Game = ({
    id,
    title,
    description,
    likes,
    category,
    imageURL,
    price,
    
}) => {


    const addToCart = async () =>{
        const db = firebase.firestore();

        await db.collection("shoppingCart").doc(title).set({
            id: id,
            title: title,
            description: description,
            imageURL: imageURL,
            category: category,
            price: price,
            reviews: [
              {
                userId: "1321313123131321123",
                comment: "This game is awesome!"
              }
            ],
            likes: likes
        })
    }


    return (
        <div className="game">
           
            <h2>{title}</h2>
        
            <img className="game-img" src={imageURL}></img>
            <button><NavLink onClick={addToCart} to="">Buy Game</NavLink></button>
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