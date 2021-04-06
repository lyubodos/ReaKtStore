import React from 'react'

import { NavLink } from "react-router-dom";
import firebase from "firebase";


export default function ShoppingTemp({
    id,
    title,
    description,
    likes,
    category,
    imageURL, 
    price,
}) {


    

    const deleteItem = async (e) =>{
        e.preventDefault();
        const db = firebase.firestore();

        await db.collection("shoppingCart").doc(title).delete();
    }


    function addAnotherCopy(){
        
    }

    return (
        <div className="game">
             <h2>{title}</h2>
        
        <img className="game-img" src={imageURL}></img>
        <button><NavLink onClick={addAnotherCopy} to="/cart">Add another Copy</NavLink></button>
        <button><NavLink onClick={deleteItem} to="/cart">Remove from Cart</NavLink></button>
        <p>Price: {price}</p>
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
