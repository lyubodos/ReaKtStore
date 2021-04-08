import React from 'react'

import { useState, useEffect, useRef} from "react";
import { NavLink , useHistory} from 'react-router-dom';

import * as gamesService from "../../../services/GamesService";

import firebase from "firebase";
import { useAuth } from '../../Authentication/AuthContext';

const OffersTemp =({
    id,
    title,
    likes,
    imageURL,
    price,
})=> {


    const {currentUser} = useAuth();
    const history = useHistory();
    
    const addToCart = async () =>{
 
        const db = firebase.firestore();

        await db.collection("shoppingCart").doc(title).set({
            id: id,
            title: title,
            imageURL: imageURL,
            price: price,
            likes: likes,
            copies: 1,
            reference: [currentUser.uid]
        }).then(history.push("/cart"))
       

    }


    return (
        <div className="game">
           
            <h2>{title}</h2>
            <img className="offers-img" src="https://img.pngio.com/20-off-png-png-group-romolagaraiorg-1280_640.png" />
            <img className="game-img" src={imageURL}></img>
            <button onClick={addToCart}><NavLink to="/cart">Buy Game</NavLink></button>
            <button><NavLink to={`/offers/details/${id}`}>Details</NavLink></button>
            <p>Likes: {likes}</p>
            <p>Price: {price}</p>
            <style jsx="true">
                {
                    `
                    p{ margin: 6px; }
                    
                    `
                }
            </style>
        </div>
    )
  
}


export default OffersTemp;