
import { Route, Switch} from "react-router-dom";

import Header from "./components/Header"
import Header_Image from "./components/Header_Image";
import Catalog from "./components/Catalog";
import Main from "./components/Main";
import Footer from "./components/Footer";


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Header_Image/>

      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/catalog" component={Catalog}></Route>
      </Switch>
    

      <Footer/>
    </div>
  );
}

export default App;
