
import { Route, Switch} from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Catalog from "./components/Catalog";
import Contacts from "./components/Contacts"
import About from "./components/About"
import Main from "./components/Main";
import Footer from "./components/Footer";


import './App.css';
import SuggestGame from "./components/SuggestButton/SuggestGame./SuggestGame";
import GameDetails from "./components/Game/GameDetails/GameDetails";


function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>

        <Route path="/catalog" exact component={Catalog}></Route>
        <Route path="/catalog/:category"  component={Catalog}></Route>

        <Route path="/about" component={About}></Route>
        <Route path="/contacts" component={Contacts}></Route>
        
        <Route path="/suggestgame" component={SuggestGame}></Route>
        <Route path="/games/details/:gameId" component={GameDetails}></Route>
      </Switch>
    
      <Footer/>
    </div>
  );
}

export default App;
