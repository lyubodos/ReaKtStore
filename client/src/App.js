
import { Route, Switch} from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Catalog from "./components/Catalog";
import Contacts from "./components/Contacts"
import './App.css';

import About from "./components/About"
import Main from "./components/Main";
import Footer from "./components/Footer";



import SuggestGame from "./components/SuggestGame/";
import GameDetails from "./components/Game/GameDetails";
import Feedback from "./components/Feedback";
import { AuthProv } from "./components/Authentication/AuthContext";


function App() {
  return (
    <div className="App">
      <Header />

      <AuthProv>
        <Route path="/register" component={Register}></Route>
        </AuthProv>
        

      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/login" component={Login}></Route>

       
        <Route path="/catalog" exact component={Catalog}></Route>
        <Route path="/catalog/:category"  component={Catalog}></Route>

        <Route path="/about" component={About}></Route>
        <Route path="/contacts" component={Contacts}></Route>

        <Route path="/suggestgame" component={SuggestGame}></Route>
        <Route path="/feedback" component={Feedback}></Route>
        <Route path="/games/details/:gameId" component={GameDetails}></Route>
      </Switch>
    
      <Footer/>
    </div>
  );
}

export default App;
