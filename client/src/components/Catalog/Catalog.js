import "./Catalog.css";

import CatalogNav from "./CatalogNav"

import { NavLink } from "react-router-dom"

const Catalog = () => {
    return (
        <section className="catalog">
            <CatalogNav/>
            
            <h1>All Games</h1>
            <div className="games">
                <div className="game">
                    <h2>Mortal Kombat 11</h2>
                    <img src="https://cdn.ozone.bg/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/o/ea943466f69866303f88a523efd1ad15/mortal-kombat-11-ps4-30.jpg" />
                    <button><NavLink to="">Buy Game</NavLink></button>
                    <button><NavLink to="">Details</NavLink></button>
                </div>
                <div className="game">
                    <h2>Mortal Kombat 11</h2>
                    <img src="https://cdn.ozone.bg/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/o/ea943466f69866303f88a523efd1ad15/mortal-kombat-11-ps4-30.jpg" />
                    <button><NavLink to="">Buy Game</NavLink></button>
                    <button><NavLink to="">Details</NavLink></button>
                </div>
                <div className="game">
                    <h2>Mortal Kombat 11</h2>
                    <img src="https://cdn.ozone.bg/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/o/ea943466f69866303f88a523efd1ad15/mortal-kombat-11-ps4-30.jpg" />
                    <button><NavLink to="">Buy Game</NavLink></button>
                    <button><NavLink to="">Details</NavLink></button>
                </div>
                <div className="game">
                    <h2>Mortal Kombat 11</h2>
                    <img src="https://cdn.ozone.bg/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/o/ea943466f69866303f88a523efd1ad15/mortal-kombat-11-ps4-30.jpg" />
                    <button><NavLink to="">Buy Game</NavLink></button>
                    <button><NavLink to="">Details</NavLink></button>
                </div>
                <div className="game">
                    <h2>Mortal Kombat 11</h2>
                    <img src="https://cdn.ozone.bg/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/o/ea943466f69866303f88a523efd1ad15/mortal-kombat-11-ps4-30.jpg" />
                    <button><NavLink to="">Buy Game</NavLink></button>
                    <button><NavLink to="">Details</NavLink></button>
                </div>
                <div className="game">
                    <h2>Mortal Kombat 11</h2>
                    <img src="https://cdn.ozone.bg/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/o/ea943466f69866303f88a523efd1ad15/mortal-kombat-11-ps4-30.jpg" />
                    <button><NavLink to="">Buy Game</NavLink></button>
                    <button><NavLink to="">Details</NavLink></button>
                </div>
            </div>
        </section>
    );
}

export default Catalog;