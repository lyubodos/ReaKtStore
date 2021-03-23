import "./CatalogNav.css"

import { NavLink } from "react-router-dom"

const CatalogNav = () => {
    return(
        <nav className="/catalog-categories">
            <ul className="/catalog-nav">
                <li><NavLink to="/catalog">All categories</NavLink></li>
                <li><NavLink to="/catalog/:id">Action</NavLink></li>
                <li><NavLink to="/catalog/:id">Adventures</NavLink></li>
                <li><NavLink to="/catalog/:id">Horror</NavLink></li>
                <li><NavLink to="/catalog/:id">Logical</NavLink></li>
                <li><NavLink to="/catalog/:id">Other    </NavLink></li>
            </ul>
            <style jsx>{`
              
                `}</style>
        </nav>
        
    );

}

export default CatalogNav;