import "./CatalogNav.css"

import { NavLink } from "react-router-dom"

const CatalogNav = () => {
    return(
        <nav className="catalog-categories">
            <ul className="catalog-nav">
                <li><NavLink to="/catalog">All categories</NavLink></li>
                <li><NavLink to="catalog">Action</NavLink></li>
                <li><NavLink to="catalog">Adventures</NavLink></li>
                <li><NavLink to="catalog">Horror</NavLink></li>
                <li><NavLink to="catalog">Logical</NavLink></li>
                <li><NavLink to="catalog">Kids</NavLink></li>
            </ul>
            <style jsx>{`
              
                `}</style>
        </nav>
        
    );

}

export default CatalogNav;