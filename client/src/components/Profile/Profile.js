import "./Profile.css";

import { useAuth } from "../Authentication/AuthContext";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import firebase from 'firebase';

import UploadPhoto from "./UploadPhoto"
import Favourites from "../Favourites";


export default function Profile() {

    const { currentUser } = useAuth();
    const [favourites, setFavs] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("favourites").get()

            const games = data.docs.map(doc => doc.data());

            const currentGames = [];

            games.forEach(game => game.reference.forEach(ref => {
                if (ref === currentUser.uid) currentGames.push(game)
            }))

            console.log(currentGames);
            setFavs(currentGames);
        }

        fetchData();

    }, [favourites]);



    return (
        <div className="profile">
            <div className="profile-wrapper">
                <div className="profile-upImg">
                    <UploadPhoto />
                </div>

                <div className="profile-info">
                    <h1>Lyubodos</h1>
                    <p class="profile-title">E-mail: {currentUser.email}</p>
                    <p>Status: Member</p>
                    <Link className="reset-btn" to="/profile-update">Reset Password</Link>
                </div>
            </div>

            <div className="profile-favourites">
                <h3>Favourite Games:</h3>
                {favourites.length === 0 && 
                <div>
                <h3>No favourites for the current user</h3>
                <img className="no-Favs" src="https://i.redd.it/4amdnzb3lvp01.jpg" />
                </div>
                }

                <div className="favourites-wrapper">
                    {
                        favourites.map(x =>
                            <Favourites key={x.id} {...x} />
                        )}
                </div>
            </div>
        </div>
    )
}
