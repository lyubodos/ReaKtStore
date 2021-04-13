import "./GameDetails.css"

import { useEffect, useState, useRef, useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";

import * as gamesService from "../../../services/GamesService";
import { useAuth } from "../../Authentication/AuthContext";
import Reviews from "../../Reviews";
import LikeProv from "../Game"
import Loading from "../../Shared/Loading";


const GameDetails = ({
    match
}) => {

    const [review, setReview] = useState({});
    const [reviews, setReviews] = useState([]);
    const [game, setGame] = useState({});
    const [loading, setLoading] = useState(false);


    const { currentUser } = useAuth();

    const gameId = match.params.gameId;
    const history = useHistory();

    const commentRef = useRef();


    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("games").get();
            const games = data.docs.map(doc => doc.data());
            const res = games.find(game => game.id === gameId);

            setGame(res);
            setReviews((res.reviews))
        }

        fetchData();

    }, []);


   const likesHandler = async () => {
        setLoading(true);

        let newLikes = Number(game.likes) + 1;

            const db = firebase.firestore();
            return await db.collection("games").doc(game.title).update(
                {
                    likes: newLikes
                }
            ).then(setLoading(false))
    }

    async function reviewHandler() {
        const db = firebase.firestore();
        
        let currComment = commentRef.current.value;

        setReview({
            userId: currentUser.email,
            comment: currComment
        })

       reviews.push(review)
       console.log(game);
       console.log(reviews);

            return await db.collection("games").doc(game.title).update(
                {
                reviews
            })
            .then( commentRef.current.value = "")
            
    }

    
    const addFavs = async () => {
        let currentGame = {
            id: game.id,
            title: game.title,
            description: game.description,
            imageURL: game.imageURL,
            category: game.category,
            price: game.price,
            likes: game.likes,
            copies: 1,
            reference: [currentUser.uid]
        }

        const db = firebase.firestore();

        await db.collection("favourites").doc(game.title).set(currentGame)
        .then(history.push("/profile"));
    }

    async function addToCart() {
        if (!currentUser) {
            history.push("/register");
        } else {

            let currentGame = {
                id: game.id,
                title: game.title,
                description: game.description,
                imageURL: game.imageURL,
                category: game.category,
                price: game.price,
                likes: game.likes,
                copies: 1,
                reference: [currentUser.uid]
        
            }
            return gamesService.addGameToCart(currentGame)
                .then(history.push("/cart"));
        }
    }


    /*Local back-end in case of firebase-connection outage scenariois


    useEffect(() => {
        gamesService.getOne("games", gameId)
            .then(res => {
                setGame(res)
                setReviews(res.reviews)
            })

    }, [match]);

    
    // const addFavs = async () => {
    //     const db = firebase.firestore();


    //     await db.collection("favourites").doc(game.title).set(currentGame)
    //     .then(history.push("/profile"));
    // }


    const addToCart = () => {


        if(!currentUser){
            history.push("/register")
        } else{
        let currentGame = {
            id: game.id,
            title: game.title,
            description: game.description,
            imageURL: game.imageURL,
            category: game.category,
            price: game.price,
            likes: game.likes,
            copies: 1,
            reference: [currentUser.uid]
        }

        gamesService.createGame(currentGame)
            .then(history.push("/cart"));

    }
    }


    // ==================== Capsule End ==================== */

    return (

        <section className="details">
            {loading
            ? <Loading/>
            : ""}
            <h3>{game.title}</h3>
            <p>Likes: {game.likes}</p>

            <div className="details-wrapper">

                <div className="img-wrapper">
                    <p className="img"><img src={game.imageURL} /></p>
                    <p>Price: {game.price}</p>
                </div>


                <div className="details-tabs">
                    <div className="details-tabs-el">
                        <Link to="">Description</Link>
                        <p className="description">{game.description}</p>
                    </div>

                    <div className="details-tabs-el">
                        <Link to="">Reviews</Link>
                        {reviews.map(x =>
                            <Reviews className="review" key={x.userId} {...x} />
                        )}

                        {currentUser
                            ? <div className="review-section">
                                <h5>User: {currentUser.email}</h5>
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
                    <button onClick={addFavs} >Add to favourites</button>
                    <button onClick={likesHandler}>Like<i class="fas fa-hand-rock"></i></button>
                    <button onClick={addToCart}>Buy NOW!</button>
                </div>
                : <button onClick={addToCart} >Buy NOW!</button>}
                
      
        </section>
    );
};


export default GameDetails;