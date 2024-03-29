
import { Route, Switch } from "react-router-dom";


import Header from "./components/Header";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Catalog from "./components/Catalog";
import Contacts from "./components/Contacts";
import PrivateRoute from "./components/Authentication/PrivateRoute";
import Offers from "./components/Offers"
import './App.css';

import About from "./components/About"
import Main from "./components/Main";
import Footer from "./components/Footer";

import SuggestGame from "./components/SuggestGame/";
import GameDetails from "./components/Game/GameDetails";
import Feedback from "./components/Feedback";
import { AuthProv } from "./components/Authentication/AuthContext";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import ProfileUp from "./components/Authentication/ProfileUp"
import Profile from "./components/Profile";
import ShoppingCart from "./components/ShoppingCart/";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import OffersDetails from "./components/Offers/OffersDetails";
import Checkout from "./components/Checkout";


function App() {
  return (
    <div className="App">

       <AuthProv>

      <Header/>

      <Switch>

        <PrivateRoute path="/offers" exact component={Offers} />
        <PrivateRoute path="/offers/details/:gameId" component={OffersDetails} />
        <PrivateRoute path="/profile" exact component={Profile}/>
        <PrivateRoute path="/cart" component={ShoppingCart}/>
        <PrivateRoute path="/checkout" component={Checkout}/>
        <PrivateRoute path="/profile-update" component={ProfileUp}/>

        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/forgotpassword" component={ForgotPassword}></Route>
 
        <Route path="/" exact component={Main}></Route>
       
        <Route path="/catalog" exact component={Catalog}></Route>
        <Route path="/catalog/:category"  component={Catalog}></Route>
        <Route path="/games/details/:gameId" component={GameDetails}></Route>

        <Route path="/about" component={About}></Route>
        <Route path="/contacts" component={Contacts}></Route>

        <Route path="/suggestgame" component={SuggestGame}></Route>
        <Route path="/feedback" component={Feedback}></Route>

        <Route component={PageNotFound}/>
     
      </Switch>

      </AuthProv>

      <Footer/>
    </div>
  );
}

export default App;
