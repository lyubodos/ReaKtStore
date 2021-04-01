import "./Catalog.css";

import * as gamesService from "../../services/GamesService"
import CatalogNav from "./CatalogNav";
import Game from "../Game"


import { Component, useState, useEffect} from "react"


function Catalog(
    {
        match
    }
){

    const [category, setCategory] = useState("all");
    const [games, setGames] = useState([]);


    useEffect(()=>{

        gamesService.getAll(category)
        .then(res => setGames(res))
    }, [category]);

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         games: [],
    //         currentCategory: "all"
    //     }
    // }

    // componentDidMount() {
      
    //     gamesService.getAll()
    //         .then(res => this.setState({ games: res }))
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     let category = this.props.match.params.category;

        

    //     console.log(prevState);
    //     console.log(prevProps);
            
    //     if (prevProps.match.params.category === category){
    //         return;
    //     }
    //     this.state.currentCategory = '';

    //     gamesService.getAll(category)
    //         .then(res => {
    //             this.setState({games: res, currentCategory: category});
    //         })
        
    // }    

console.log(games);
        return (
       
            <section className="catalog">
                <CatalogNav />
                <h1>All Games</h1>

                <div className="games">
                {
                        games.map(x => 
                            <Game key={x.id} {...x} />
                        )
                }
                </div>
            </section>
        );
 
}

export default Catalog;