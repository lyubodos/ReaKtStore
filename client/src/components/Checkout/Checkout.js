import "./Checkout.css";

import React, { useState, useEffect } from 'react'
import { useAuth } from '../Authentication/AuthContext';

import firebase from 'firebase';
import { NavLink } from "react-router-dom";

import ButtonTemp from "../Shared/Button";

export default function Checkout() {

    const { currentUser } = useAuth();

    const [cart, setCart] = useState([]);
    
    let totalCost = 0;

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("shoppingCart").get()

            const currentGames = [];

            const games = data.docs.map(doc => doc.data());

            games.forEach(game => game.reference.forEach(ref => {
                if (ref === currentUser.uid) currentGames.push(game)
            }))

            setCart(currentGames);        
        }

        fetchData();

    }, []);

    cart.forEach(item => {
        let purePrice = item.price.slice(0, 4);

        totalCost += Number(purePrice) * item.copies;
    });



    return (
        <div className="checkout">
            <div className="totalcost-main">
            <h1>Congratulations!</h1>
            <p>You are at the final stage of Your purchase. Below You can enter Your preffered method for payment. After You fill-in the necessary information we will receive an e-mail and review it. You will be contacted as soon as posible for furhter infromation regariding the shipping process.</p>
           
            </div>
      

            <div className="checkout-container">
            <h1 className="totalcost">Total cost: {`${totalCost.toFixed(2)}$`}</h1>
                <h3>Games</h3>
                {cart.map(x => 
                <ul className="checkout-games">
                <li key={x.id} title={x.title} price={x.price} copies={x.copies}>{x.title}: {x.price} x {x.copies}</li>
                </ul>)
                }
            </div>
            <form action="mailto:lyubomir_vasilev1992@abv.bg">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" name="fullName"></input>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="number" name="phoneNumber"></input>
                <label htmlFor="payment">Choose payment method:</label>
                <select name="payment" id="pay">
                    <option>Visa/Visa Electron</option>
                    <option>Master Card</option>
                    <option>On delivery</option>
                    <option>Bank Transfer</option>
                </select>
                <input type="submit" value="Send Information"></input>
            </form>

            <img className="payment-img" src="https://www.destructoid.com//ul/535012-mk%2011.jpg" />
            <div class="payment-nav">
                <ButtonTemp><NavLink to="/cart">Back to Cart</NavLink></ButtonTemp>
                <ButtonTemp><NavLink to="/catalog">Back to Catalog</NavLink></ButtonTemp>
                <ButtonTemp><NavLink to="/profile">Back to Profile</NavLink></ButtonTemp>
            </div>
        </div>
    )
}
