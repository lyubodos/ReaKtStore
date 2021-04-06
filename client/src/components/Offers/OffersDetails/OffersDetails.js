
import firebase from "firebase";
import {useState, useEffect} from "react";
import { Link, useHistory } from 'react-router-dom';


import Reviews from '../../Reviews';
import * as gamesService from "../../../services/GamesService";
import { useAuth } from "../../Authentication/AuthContext";


export default function OffersDetails({
    match
}) {
    const [reviews, setReviews] = useState([]);
    const [game, setGame] = useState({});

    const { currentUser } = useAuth();

    const gameId = match.params.gameId;
    const history = useHistory();


    useEffect(() =>{
        const fetchData = async() => {
            const db = firebase.firestore();
            const data = await db.collection("offers").get();
            const games = data.docs.map(doc => doc.data());
            const res = games.find(game => game.id === gameId);
           
            setGame(res);
            setReviews((res.reviews))
            
        }

        fetchData();
        
    }, [match])


    async function likesHandler(){
    let newLikes = Number(game.likes) + 1;
  

    const db = firebase.firestore();
    const data = await db.collection("offers").update();

      gamesService.likeGame(gameId, newLikes)
        .then((res => setGame(res)))
      
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
            <button  >Add to favourites</button>
            <button  onClick={likesHandler}>Like<i class="fas fa-hand-rock"></i></button>
            <button  >Buy NOW!</button>

        </section>
    );
}