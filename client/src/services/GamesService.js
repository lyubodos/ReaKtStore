/*Basic fetch functions*/

import firebase from 'firebase';


let baseUrl = "http://localhost:5000/games";

let url =  "http://localhost:5000";


//Fetching data from local db start

export const getAll = (path) => {

    return fetch(`${url}/${path}`)
        .then(res => res.json())
        .catch(err => console.log(err))

}


export const getOne = (path, gameId) => {

    return fetch(`${url}/${path}/${gameId}`)
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


export const likeGame = (gameId, likes, userIds) => {
    return fetch(`${baseUrl}/${gameId}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({likes, userIds})
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



export const addUserId = (gameId, reference) => {
    return fetch(`http://localhost:5000/basket/${gameId}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({reference})
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


//Fetching data from local db end


//Adding a new game to the firestore db 

export const addGameToCart = async (game) => {
    const db = firebase.firestore();

    return await db.collection("shoppingCart").doc(game.title).set(game);
}