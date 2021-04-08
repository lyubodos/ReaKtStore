import "./ShoppingCart.css";

import { useState, useEffect } from 'react';


import firebase from 'firebase';

import ShoppingTemp from "./ShoppingTemp";
import * as gameService from "../../services/GamesService";

import ButtonTemp from "../Shared/Button"
import { useAuth } from "../Authentication/AuthContext";


export default function ShoppingCart(

) {
    const [cartItems, setCartItems] = useState([]);
    const { currentUser } = useAuth();


    let totalCost = 0;


    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("shoppingCart").get()

           const games = data.docs.map(doc => doc.data());

           const currentGames = [];

           games.forEach(game => game.reference.forEach(ref =>{
               if(ref === currentUser.uid) currentGames.push(game)
            }))

            setCartItems(currentGames);
        }

        fetchData();

    }, []);



    /*Local back-end in case firebase-connection outage scenariois//

    useEffect(() => {
        return fetch("http://localhost:5000/basket")
            .then(res => res.json())
            .then(res => {

                res.forEach(game => game.reference.forEach(ref => {
                    console.log(game);
                    if (ref === currentUser.uid) currentGames.push(game)
                }))

                console.log(currentGames);
                setCartItems(currentGames)
            })

    }, []);

    /* ==================== Capsule End =================== */

    cartItems.forEach(item => {
        console.log(item.price);
        let purePrice = item.price.slice(0, 4);

        totalCost += Number(purePrice) * item.copies;
    });


    return (
        <section className="shopping-cart">
            <div className="shopping-cart-main">
                <h1 className="shopping-cart-items">Items</h1>
                <h3 className="shopping-cart-total">Current Total Cost: {totalCost.toFixed(2)}$ </h3>

            </div>

            <div className="shopping-cart-container" >
                {cartItems.length === 0 &&
                    <div className="no-items"><h2>No items in the cart</h2>
                        <img className="no-items-img" src="https://i2.wp.com/www.film-tv.at/upload/bilder/filmshot_klein/2019/mortal-kombat-logo-hell-thumb-960-retina.jpg?ssl=1" />
                    </div>}

                <div className="games">
                    {
                        cartItems.map(x =>
                            <ShoppingTemp key={x.id} {...x} />
                        )
                    }
                </div>
            </div>
            {cartItems.length > 0 
            ? <ButtonTemp>Check Out!</ButtonTemp>
            : ""}
            <div>
               
            </div>
        </section>
    )
}
