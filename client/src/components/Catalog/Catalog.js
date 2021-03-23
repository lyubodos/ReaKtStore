import "./Catalog.css";

import CatalogNav from "./CatalogNav";
import Game from "../Game"
import * as gamesService from "../../services/GamesService"

import { Component } from "react"


class Catalog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            games: [],
            currentCategory: "all"
        }
    }

    componentDidMount() {
        gamesService.getAll()
            .then(res => this.setState({ games: res }))
    }

    // componentDidUpdate(){
    //     const categpry = this.props.match.params.category
            
    //     if (prevProps.match.params.category === categpry){
    //         return;
    //     }

    //     gamesService.getAll(categpry)
    //         .then(res => {
    //             this.setState({pets: res, currentCategory: categpry});
    //         })
    // }

    render() {
        console.log(this.state.games);
        return (
            <section className="catalog">
                <CatalogNav />
                <h1>All Games</h1>

                <div className="games">
                {
                        this.state.games.map(x => 
                            <Game key={x.id} {...x} />
                        )
                }
                  
                </div>
            </section>
        );
    };


}

export default Catalog;