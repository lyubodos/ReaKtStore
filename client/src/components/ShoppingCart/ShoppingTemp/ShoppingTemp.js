import React, { useState, useEffect } from 'react'

import { NavLink, useHistory } from "react-router-dom";
import firebase from "firebase";

import * as gameService from "../../../services/GamesService"
import { useAuth } from '../../Authentication/AuthContext';


export default function ShoppingTemp({
    id,
    title,
    imageURL,
    price,
    copies,
    reference
}) {

    const history = useHistory();

    const { currentUser } = useAuth();

    let decrementedCopies = copies - 1;
    let incrementedCopies = copies + 1;

    const addCopie = async () => {
        const db = firebase.firestore();

        await db.collection("shoppingCart").doc(title).update({
            copies: (incrementedCopies)
        })
        
        
    }


    const removeCopie = async () => {
        const db = firebase.firestore();

        if (decrementedCopies < 1) {
            return deleteItem();
        }

        return await db.collection("shoppingCart").doc(title).update({ copies: decrementedCopies })
       
    }

    
    const deleteItem = async () => {
        const db = firebase.firestore();

        await db.collection("shoppingCart").doc(title).delete()
    }



    /*Local back-end in case of firebase-connection outage scenariois//

    useEffect(() => {
        gameService.getAll("basket")
            .then(res => setCart(res))
    }, [])



    function deleteItem() {

        cart.forEach(sh => {
            if (sh.title === title) {
                let cartUserIds = sh.reference;

                let decrement = cartUserIds.indexOf(currentUser.uid)
                console.log(decrement);

                cartUserIds.splice(decrement, decrement-1)
                console.log(cartUserIds)
                gameService.addUserId(id, cartUserIds)
                    .then(res => res.json())
                    .then(res => {
                        if (res.reference.length === 0) {
                            gameService.deleteItem(id);
                        }
                    })
                    .then(history.push("/cart"))
            }


        })

    }


    function addAnotherCopy() {

        let incrementedCopies = copies + 1

        return gameService.addCopie(id, incrementedCopies)

    }

    function removeCopie() {
        let decrementedCopies = copies - 1;

        if (decrementedCopies < 1) {
            return gameService.deleteItem(id);
        }

        return gameService.addCopie(id, decrementedCopies);
    }

    // ==================== Capsule End ==================== */


    return (
        <div className="game">
            <h2>{title}</h2>

            <img className="game-img" src={imageURL}></img>
            <button><NavLink onClick={addCopie} to="/cart">Add another Copy</NavLink></button>
            <button><NavLink onClick={removeCopie} to="cart">Remove Copy</NavLink></button>
            <button><NavLink onClick={deleteItem} to="cart">Remove from Cart</NavLink></button>

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
