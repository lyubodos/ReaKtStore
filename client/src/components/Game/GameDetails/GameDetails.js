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
    const [liked, setLike] = useState(false)
    const [currentIds, setCurrentIds] = useState([]);


    const { currentUser } = useAuth();

    const gameId = match.params.gameId;
    const history = useHistory();

    const commentRef = useRef();

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


    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("games").get();
            const games = data.docs.map(doc => doc.data());
            const res = games.find(game => game.id === gameId);


            setGame(res);
            setCurrentIds(res.userIds)
            setReviews((res.reviews))

        }

        fetchData();

    }, []);


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
        console.log(liked);
        if(liked){
            setGame(game);
        } else {
            const db = firebase.firestore();
            return await db.collection("games").doc(game.title).update(
                {
                    likes: newLikes,
                    userIds: currentIds
                }
            ).then(setLike(true))
        }
        
    }


    function reviewHandler() {
        gamesService.leaveReview();
    }

    
    const addFavs = async () => {
        const db = firebase.firestore();


        await db.collection("favourites").doc(game.title).set(currentGame)
        .then(history.push("/profile"));
    }


    async function addToCart() {

        if (!currentUser) {
            history.push("/register");
        } else {

     

            return gamesService.addGameToCart(currentGame)
                .then(history.push("/cart"));
        }
    }

    /*Local back-end in case of firebase-connection outage scenariois




    useEffect(() => {

        gamesService.getOne("games",gameId)
            .then(res => {
                console.log(res);
                setCurrentIds(res.userIds);
                
                currentIds.forEach(userId => {
                    if (currentUser.uid === userId) {
                        setLike(true);
                    }
                })

                setGame(res)
                setReviews(res.reviews)
            })

    }, []);


    const addToCart = () => {

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


    // ==================== Capsule End ==================== */

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
                    <button onClick={addFavs} >Add to favourites</button>
                    <button onClick={likesHandler} disabled={liked}>Like<i class="fas fa-hand-rock"></i></button>
                    <button onClick={addToCart}>Buy NOW!</button>
                </div>
                : <button onClick={addToCart} >Buy NOW!</button>}
                
      
        </section>
    );
};


export default GameDetails;