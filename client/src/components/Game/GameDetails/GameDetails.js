import "./GameDetails.css"

import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"

import * as gamesService from "../../../services/GamesService";
import ButtonTemp from "../../Shared/Button"
import { useAuth } from "../../Authentication/AuthContext";
import Reviews from "../../Reviews";


const GameDetails = ({
    match
}) => {


    let [game, setGame] = useState({});
    let [reviews, setReviews] = useState([]);
    
    const { currentUser } = useAuth();

    useEffect(() => {
        gamesService.getOne(match.params.gameId)
            .then(res => {
                setReviews(res.reviews)
                setGame(res)
            });
            
    }, [match]);

    
    console.log(game);
    console.log(reviews);

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
                    {reviews.map(x => 
                        <Reviews className="review" key={x.userId} {...x}/>
                    )}
               
                    {currentUser 
                    ? <ButtonTemp>Leave a review</ButtonTemp>
                    : ""}
                    </div>
                </div>
            </div>
            <ButtonTemp className="button">Like<i class="fas fa-hand-rock"></i></ButtonTemp>

        </section>
    );
};


export default GameDetails;