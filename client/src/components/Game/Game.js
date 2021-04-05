import "./Game.css"

import { useState, useEffect, useRef} from "react";
import { NavLink } from 'react-router-dom';

import * as gamesService from "../../services/GamesService";


const Game = ({
    id,
    title,
    likes,
    imageURL,
    price,
    
}) => {

    const [cartItems, setCartItems] = useState([]);
    const [game, setGame] = useState({});

    const gameRef = document.getElementsByClassName("game");

    let offers = false;

 

    useEffect(() => {
        console.log(gameRef[0].parentElement.className === "offers-games")
        if(gameRef[0].parentElement === "offers-games"){
            offers = true;
        }

    }, [offers])


    useEffect(() => {
        gamesService.getOne(id)
            .then(res => {
                setGame(res)
            });
            
    }, []);
        

    const addToCart = () =>{
 
        console.log("Buy now button clicked!");

        console.log(game);
    }


    return (
        <div className="game">
            {offers
            ?  <img className="offers-img" src="https://img.pngio.com/20-off-png-png-group-romolagaraiorg-1280_640.png" />
            : ""}
            <h2>{title}</h2>
            <img src={imageURL} />
            <button><NavLink onClick={()=> addToCart(game)} to="">Buy Game</NavLink></button>
            <button><NavLink to={`/games/details/${id}`}>Details</NavLink></button>
            <p>Likes: {likes}</p>
            <p>Price: {price}</p>
            <style jsx>
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