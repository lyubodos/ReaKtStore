import React, { useState, useEffect } from 'react'

import { NavLink } from "react-router-dom";
import firebase from "firebase";

import * as gameService from "../../../services/GamesService"


export default function ShoppingTemp({
    id,
    title,
    imageURL,
    price,
    copies
}) {


    const addCopie = async () => {
        const db = firebase.firestore();

        await db.collection("shoppingCart").doc(title).update({
            copies: (copies + 1)
        });
    }

    const removeCopie = async () => {
        const db = firebase.firestore();

        let decrementedCopies = copies - 1;

        if (decrementedCopies < 1) {
            return deleteItem();
        }

        return await db.collection("shoppingCart").doc(title).update({ copies: decrementedCopies });
    }

    const deleteItem = async () => {
        const db = firebase.firestore();

        await db.collection("shoppingCart").doc(title).delete();
    }


    /*Local back-end in case of firebase-connection outage scenariois
    
        function deleteItem (){
            gameService.deleteItem(id);
        }
    
    
        function addAnotherCopy(){
    
            let incrementedCopies = copies + 1
            
            return gameService.addCopie(id, incrementedCopies)
           
        }
    
        function removeCopie(){
            let decrementedCopies = copies - 1;
    
            if(decrementedCopies < 1){
                return  gameService.deleteItem(id);
            }
    
            return gameService.addCopie(id, decrementedCopies);
        }
    
    // ==================== Capsule End ==================== */


    return (
        <div className="game">
            <h2>{title}</h2>

            <img className="game-img" src={imageURL}></img>
            <button><NavLink onClick={addCopie} to="/cart">Add another Copy</NavLink></button>
            <button><NavLink onClick={removeCopie} to="/cart">Remove Copy</NavLink></button>
            <button><NavLink onClick={deleteItem} to="/cart">Remove from Cart</NavLink></button>

            <p>Price: {price}</p>
            <p>Copies: {copies}</p>
            <style jsx="true">
                {
                    `
                p{ margin: 8px; }
                
                `
                }
            </style>
        </div>
    )
}
