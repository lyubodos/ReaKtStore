import "./Catalog.css";

import * as gamesService from "../../services/GamesService"
import CatalogNav from "./CatalogNav";
import Game from "../Game"


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

    componentDidUpdate(prevProps, prevState) {
        let category = this.props.match.params.category
            
        if (prevProps.match.params.category === category){
            return;
        }

        gamesService.getAll(category)
            .then(res => {
                this.setState({games: res, currentCategory: category});
            })
           
    }

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