
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
    const [currentIds, setCurrentIds] = useState([]);
    const [liked, setLike] = useState(false)

    const { currentUser } = useAuth();

    const gameId = match.params.gameId;
    const history = useHistory();

    let currentGame = {
        id: game.id,
        title:  game.title,
        description: game.description,
        category: game.category,
        imageURL:  game.imageURL,
        price:  game.price,
        likes:  game.likes,
        copies: 1,
        reference: [currentUser.uid]
    }

    useEffect(() =>{
        const fetchData = async() => {
            const db = firebase.firestore();
            const data = await db.collection("offers").get();

            const games = data.docs.map(doc => doc.data());
            const res = games.find(game => game.id === gameId);
           
            console.log(res);
            setGame(res);
            setReviews((res.reviews))
        }

        fetchData();
        
    }, [match])


    function checkLike(){
        setCurrentIds(game.userIds);

        currentIds.forEach(id =>{
            if(id === currentUser.uid) setLike(true)
        })

        return liked;
    }


    async function likesHandler() {

        let newLikes = Number(game.likes) + 1;

        currentIds.push(currentUser.uid);

        checkLike();
    
        if(liked){
            setGame(game);
        } else {
            const db = firebase.firestore();
            return await db.collection("offers").doc(game.title).update(
                {
                    likes: newLikes,
                    userIds: currentIds
                }
            ).then(setLike(true))
        }
        
    }

        
    const addFavs = async () => {
        const db = firebase.firestore();

        await db.collection("favourites").doc(game.title).set(currentGame)
        .then(history.push("/profile"));
    }
      

    const addToCart = async () =>{
 
        const db = firebase.firestore();

        await db.collection("shoppingCart").doc(game.title).set(currentGame)
        .then(history.push("/cart"))
       

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
            <button  onClick={addFavs}>Add to favourites</button>
            <button  onClick={likesHandler} disabled={liked}>Like<i class="fas fa-hand-rock"></i></button>
            <button  onClick={addToCart}>Buy NOW!</button>

        </section>
    );
}