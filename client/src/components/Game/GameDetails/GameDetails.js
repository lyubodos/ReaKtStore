import "./GameDetails.css"

import { useEffect, useState} from 'react';
import { Link, useHistory } from "react-router-dom";


import * as gamesService from "../../../services/GamesService";
import { useAuth } from "../../Authentication/AuthContext";
import Reviews from "../../Reviews";


const GameDetails = ({
    match
}) => {


    let [game, setGame] = useState({});
    let [reviews, setReviews] = useState([]);

    const { currentUser } = useAuth();

    const gameId = match.params.gameId;
    const history = useHistory();


    useEffect(() => {
        gamesService.getOne(gameId)
            .then(res => {
                setReviews(res.reviews)
                setGame(res)
            });
            
    }, [match]);


    function likesHandler(){
      let newLikes = Number(game.likes) + 1;
  

      gamesService.likeGame(gameId, newLikes)
        
        .then((res => setGame(res)))
      
    }

    function checkLoginStatus() {

        console.log("Button pushed!");
        if(!currentUser){
            history.push("/register");
        } 
    }


    return (
        <section className="details">
            <h3>{game.title}</h3>
            <p>Likes: {game.likes}</p>

            <div className="details-wrapper">
                
                <div className="img-wrapper">
                <p className="img"><img src={game.imageURL} /></p>
                <p>Price: {game.price}</p>
                </div>
                
              
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
                    ? <div className="review-section">
                         <textarea></textarea>
                         <button type="submit">Leave a review</button>
                        
                    </div> 
                   
                    : ""}
                    </div>
                </div>
            </div>
            {currentUser
            ? 
            <div>
            <button  >Add to favourites</button>
            <button  onClick={likesHandler}>Like<i class="fas fa-hand-rock"></i></button>
            <button  >Buy NOW!</button>
            </div>
            : <button onClick={checkLoginStatus} >Buy NOW!</button>}
            
          
            

        </section>
    );
};


export default GameDetails;