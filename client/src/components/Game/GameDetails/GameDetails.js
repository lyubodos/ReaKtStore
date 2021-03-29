import "./GameDetails.css"

import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"

import * as gamesService from "../../../services/GamesService";


const GameDetails = ({
    match
}) => {
    let [game, setGame] = useState({});

    useEffect(() => {
        gamesService.getOne(match.params.gameId)
            .then(res => setGame(res));
    }, [match]);

    return (
        <section className="details">
            <h3>{game.title}</h3>
            <p>Likes: {game.likes}</p>

            <div className="details-wrapper">

                <p className="img"><img src={game.imageURL} /></p>

                <div className="details-tabs">
                    <div className="details-tabs-el">
                    <Link>Description</Link>
                    <p className="description">{game.description}</p>
                    </div>

                    <div className="details-tabs-el">
                    <Link>Reviews</Link>
                    <p>This game is awesome</p>
                    <button>Leave a review</button>
                    </div>
                </div>
            </div>
            <button className="button">Like<i class="fas fa-hand-rock"></i></button>

        </section>
    );
};


export default GameDetails;