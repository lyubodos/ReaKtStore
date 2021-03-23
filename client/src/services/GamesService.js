/*Basic fetch function for testing pruposes*/

const baseUrl = "http://localhost:5000";

let extension = "";

export const getAll = () => {
   return fetch(`${baseUrl}/games`)
    .then(res => res.json())
    .catch(err => console.log(err))
}



export const getOne = (gameId) => {

    return fetch(`${baseUrl}/${gameId}`)
    .then(res => res.json())
    .catch(err => console.log(err));
}
