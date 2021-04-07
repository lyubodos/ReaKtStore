import "./GameDetails.css"

import { useEffect, useState, useRef } from 'react';
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";

import * as gamesService from "../../../services/GamesService";
import { useAuth } from "../../Authentication/AuthContext";
import Reviews from "../../Reviews";


const GameDetails = ({
    match
}) => {

    const [reviews, setReviews] = useState([]);
    const [game, setGame] = useState({});


    const { currentUser } = useAuth();

    const gameId = match.params.gameId;
    const history = useHistory();

    const commentRef = useRef();


    // useEffect(() =>{
    //     const fetchData = async() => {
    //         const db = firebase.firestore();
    //         const data = await db.collection("games").get();
    //         const games = data.docs.map(doc => doc.data());
    //         const res = games.find(game => game.id === gameId);

    //         setGame(res);
    //         setReviews((res.reviews))

    //     }

    //     fetchData();

    // }, [match]);


    //Local back-end in firebase-connection outage scenariois
    
    useEffect(() => {
        gamesService.getOne(gameId)
            .then(res => {
            setGame(res)
            setReviews(res.reviews)
        })

    }, [gameId]);


function likesHandler() {
    let newLikes = Number(game.likes) + 1;

    gamesService.likeGame(gameId, newLikes)
    .then(res => setGame(res));

}

function reviewHandler() {

    gamesService.leaveReview()
}

const addToCart = () => {

    let currentGame = {
        id: game.id,
        title: game.title,
        description: game.description,
        imageURL: game.imageURL,
        category: game.category,
        price: game.price,
        likes: game.likes,
        copies: 1
    }

   gamesService.createGame(currentGame)
   .then(history.push("/cart"));
}




// async function addToCart() {

//     if(!currentUser){
//         history.push("/register");
//     } else{
//         const db = firebase.firestore();

//         await db.collection("shoppingCart").doc(game.title).set({
//             id: game.id,
//             title: game.title,
//             description: game.description,
//             imageURL: game.imageURL,
//             category: game.category,
//             price: game.price,
//             reviews: [
//               {
//                 userId: "1321313123131321123",
//                 comment: "This game is awesome!"
//               }
//             ],
//             likes: game.likes
//         })
//     }
// }


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
                        <Reviews className="review" key={x.userId} {...x} />
                    )}

                    {currentUser
                        ? <div className="review-section">
                            <textarea ref={commentRef}></textarea>
                            <button type="submit" onClick={reviewHandler}>Leave a review</button>

                        </div>

                        : ""}
                </div>
            </div>
        </div>
        {currentUser
            ?
            <div>
                <button  >Add to favourites</button>
                <button onClick={likesHandler}>Like<i class="fas fa-hand-rock"></i></button>
                <button onClick={addToCart}>Buy NOW!</button>
            </div>
            : <button onClick={addToCart} >Buy NOW!</button>}
    </section>
);
};


export default GameDetails;