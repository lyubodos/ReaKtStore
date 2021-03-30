import "./Game.css"

import { NavLink } from 'react-router-dom'

const Game = ({
    id,
    title,
    likes,
    imageURL,
    price
    
}) => {
    return (
        <div className="game">
            <h2>{title}</h2>
            <img src={imageURL} />
            <button><NavLink to="">Buy Game</NavLink></button>
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