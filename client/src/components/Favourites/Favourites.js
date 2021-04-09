import "./Favourites.css";

import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";
import firebase from 'firebase';
import { useAuth } from '../Authentication/AuthContext';
import Game from '../Game';

import * as gameService from "../../services/GamesService";

export default function Favourites(
    {
        id,
        title,
        category,
        description,
        imageURL,
        price,
        likes,
        reference
    }
) {


    const { currentUser } = useAuth();

    const history = useHistory();
    
    const addToCart = async () => {
        const db = firebase.firestore();

        await db.collection("shoppingCart").doc(title).set({
            id: id,
            title: title,
            description: description,
            imageURL: imageURL,
            category: category,
            price: price,
            likes: likes,
            copies: 1,
            reference: [currentUser.uid]
        })
        .then(history.push("/cart"))

    }

    
    const deleteFav = async () =>{
        const db = firebase.firestore();
        
        await db.collection("favourites").doc(title).delete()
        
    }



    return (
        <div className="favourite-game">

            <h2>{title}</h2>
            <h4>Category: {category}</h4>

            <img className="fav-img" src={imageURL}></img>
            <div className="favourites-wrapper-section">
                <div className="section-1">
                    <p className="fav-descr">{description}</p>
                </div>
           
                <div className="section-2">
                    <button onClick={addToCart}>Buy Now!</button>
                    <button onClick={deleteFav}> Remove from favourites</button>
                </div>

            </div>

            <style jsx="true">
                {
                    `button{
                    margin: 10px 20px;
                }

                `
                }
            </style>
        </div>
    )
}

