import "./Catalog.css";

import * as gamesService from "../../services/GamesService"
import CatalogNav from "./CatalogNav";
import Game from "../Game";


import { useState, useEffect} from "react";
import firebase from "firebase";



function Catalog(
    {
        match
    }
){

    const [category, setCategory] = useState("all");
    const [games, setGames] = useState([]);
    const [cart, setCart] = useState([]);


    // useEffect(()=>{
    //     gamesService.getAll(category)
    //     .then(res => setGames(res))
    // },  [category]);


    useEffect(() =>{
        const fetchData = async() => {
            const db = firebase.firestore();
            const data = await db.collection("games").get()

            setGames(data.docs.map(doc => doc.data()))
        }

        fetchData();
    }, [])


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