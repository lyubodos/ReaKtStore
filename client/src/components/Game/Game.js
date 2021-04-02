import "./Game.css"

import { useState, useEffect} from "react";
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