/*Basic fetch functions*/

import firebase from 'firebase';


let baseUrl = "http://localhost:5000/games";


export const getAll = (category = '') => {

    baseUrl += (category && category !== "all")
        ? `?category=${category}`
        : "";

    return fetch(baseUrl)
        .then(res => res.json())
        .catch(err => console.log(err))
        .finally(res => category = "");

}


export const getOne = (gameId) => {

    return fetch(`${baseUrl}/${gameId}`)
        .then(res => res.json())
        .catch(err => console.log(err));
}

export const createGame = (game) => {
    return fetch(`http://localhost:5000/basket`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(game)
    });
}


export const likeGame = (gameId, likes) => {
    return fetch(`${baseUrl}/${gameId}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ likes })
    })
        .then((res => res.json()))
}



export const leaveReview = (gameId, game) => {
    return fetch(`${baseUrl}/${gameId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(game)
    })
        .then((res => res.json()));
}



export const addCopie = (gameId, copies) => {
    return fetch(`http://localhost:5000/basket/${gameId}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ copies })
    })
}

export const deleteItem = (gameId) => {
    return fetch(`http://localhost:5000/basket/${gameId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        }
    })
}


export const addGameToCart = async (game) => {
    const db = firebase.firestore();

    return await db.collection("shoppingCart").doc(game.title).set(game)

}