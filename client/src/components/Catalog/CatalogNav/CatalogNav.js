import "./CatalogNav.css"

import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react";

const CatalogNav = () => {

    return(
        <nav className="catalog-categories">
            <ul className="catalog-nav">
                <li><NavLink to="/catalog/all">All categories</NavLink></li>
                <li><NavLink to="/catalog/action">Action</NavLink></li>
                <li><NavLink to="/catalog/adventures">Adventures</NavLink></li>
                <li><NavLink to="/catalog/horror">Horror</NavLink></li>
                <li><NavLink to="/catalog/logical">Logical</NavLink></li>
                <li><NavLink to="/catalog/other">Other </NavLink></li>
            </ul>
        </nav>
    );
}

export default CatalogNav;