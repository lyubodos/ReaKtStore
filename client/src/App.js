
import { Route, Switch} from "react-router-dom";

import Header from "./components/Header"
import Catalog from "./components/Catalog";
import About from "./components/About"
import Main from "./components/Main";
import Footer from "./components/Footer";


import './App.css';
import SuggestGame from "./components/SuggestButton/SuggestGame./SuggestGame";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/catalog" component={Catalog}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/suggestgame" component={SuggestGame}></Route>
      </Switch>
    
      <Footer/>
    </div>
  );
}

export default App;
