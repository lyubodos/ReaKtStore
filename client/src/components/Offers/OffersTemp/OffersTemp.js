import React from 'react'

import { useState, useEffect, useRef} from "react";
import { NavLink } from 'react-router-dom';

import * as gamesService from "../../../services/GamesService";

import firebase from "firebase";

const OffersTemp =({
    id,
    title,
    likes,
    imageURL,
    price,
})=> {


    const gameRef = document.getElementsByClassName("game");


    const addToCart = () =>{
 
        console.log("Buy now button clicked!");


    }


    return (
        <div className="game">
           
            <h2>{title}</h2>
            <img className="offers-img" src="https://img.pngio.com/20-off-png-png-group-romolagaraiorg-1280_640.png" />
            <img className="game-img" src={imageURL}></img>
            <button><NavLink to="">Buy Game</NavLink></button>
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