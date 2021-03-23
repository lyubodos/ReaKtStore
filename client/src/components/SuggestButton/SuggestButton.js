import "./SuggestButton.css";

import { Link } from "react-router-dom";

const SuggestButton = () => {
    return(
        <Link to="/suggestgame" class="main-btn">Suggest a game</Link>
    );

}


export default SuggestButton;