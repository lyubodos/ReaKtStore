import "./GameDetails.css"

import {useEffect, useState} from 'react';
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
            <p>Likes: {game.likes}<button class="button">Like</button>
            </p>
            <p class="img"><img src={game.imageURL} /></p>
            <p class="description">{game.description}</p>
        </section>
    );
};


export default GameDetails;