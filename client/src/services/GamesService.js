/*Basic fetch function for testing pruposes*/

let baseUrl = "http://localhost:5000/games";


export const getAll = (category = '') =>{


    baseUrl += (category && category !== "all")
    ? `?category=${category}`
    : "";

    return fetch(baseUrl)
        .then(res => res.json())
        .catch(err => console.log(err));

}


export const getOne = (gameId) => {

    return fetch(`${baseUrl}/${gameId}`)
    .then(res => res.json())
    .catch(err => console.log(err));
}
