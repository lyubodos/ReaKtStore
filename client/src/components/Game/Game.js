import "./Game.css"

import { useState, useEffect, useRef} from "react";
import { NavLink } from 'react-router-dom';

import * as gamesService from "../../services/GamesService";

import firebase from "firebase";

const Game = ({
    id,
    title,
    likes,
    imageURL,
    price,
    offers
    
}) => {

    const [cartItems, setCartItems] = useState([]);
    const [game, setGame] = useState({});
    const [offer, setOffer] = useState(false);

    const gameRef = document.getElementsByClassName("game");



    useEffect(()=>{
        setOffer(offers)
    },[])
        

    const addToCart = () =>{
 
        console.log("Buy now button clicked!");


    }


    return (
        <div className="game">
           
            <h2>{title}</h2>
        
            <img className="game-img" src={imageURL}></img>
            <button><NavLink to="">Buy Game</NavLink></button>
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