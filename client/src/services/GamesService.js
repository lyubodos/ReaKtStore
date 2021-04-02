/*Basic fetch functions*/

import firebase from 'firebase';


let baseUrl = "http://localhost:5000/games";


export const getAll = (category = '') =>{

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


export const likeGame = (gameId, likes) =>{
    return fetch(`${baseUrl}/${gameId}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({likes})
    })
    .then((res => res.json()))
}


// export const leaveReview = (gameId, reviews) =>{
//     return fetch(`${baseUrl}/${gameId}`, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             reviews:{
//                 userId: reviews.userId,
//                 comment:
//             }
//         })
//     })
//     .then((res => res.json()));
// }