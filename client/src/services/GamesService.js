/*Basic fetch function for testing pruposes*/

let url = "http://localhost:5000/games";


export const getAll = (category = '') =>{


    url += (category && category !== "all")
    ? `?category=${category}`
    : "";

    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err));

}


export const getOne = (gameId) => {

    return fetch(`${url}/${gameId}`)
    .then(res => res.json())
    .catch(err => console.log(err));
}
