import "./ShoppingCart.css";

import { useState, useEffect } from 'react';
import firebase from 'firebase';

import ShoppingTemp from "./ShoppingTemp";
import * as gameService from "../../services/GamesService";



export default function ShoppingCart(

) {
    const [cartItems, setCartItems] = useState([]);
    let totalCost = 0;

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const db = firebase.firestore();
    //         const data = await db.collection("shoppingCart").get()

    //         setCartItems(data.docs.map(doc => doc.data()));
    //     }


    //     fetchData();
    // }, [cartItems]);



    //Local back-end in case firebase-connection outage scenariois
    useEffect(() => {
        fetch("http://localhost:5000/basket")
        .then(res => res.json())
        .then(res =>setCartItems(res))

    }, [cartItems]);




    cartItems.forEach(item => {
        console.log(item.price);
        let purePrice = item.price.slice(0, 4);
      
        totalCost += Number(purePrice)*item.copies;
    });

    return (
        <section className="shopping-cart">
            <div className="">
                 <h3 className="shopping-cart-total">Current Total Cost: {totalCost.toFixed(2)}$ </h3>
                <h1 className="shopping-cart-items">Items</h1>

            </div>

            <div className="shopping-cart-container" >
                {cartItems.length === 0 &&

                    <div><h2>No items in the cart</h2>
                        <img src="https://i2.wp.com/www.film-tv.at/upload/bilder/filmshot_klein/2019/mortal-kombat-logo-hell-thumb-960-retina.jpg?ssl=1" />
                    </div>}

                <div className="games">
                    {
                        cartItems.map(x =>
                            <ShoppingTemp key={x.id} {...x} />
                        )
                    }
                </div>
            </div>
        </section>
    )
}
