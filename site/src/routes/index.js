import React from "react";
import {Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";
import Bord from "./Bord/index";
import Catalog from "./Catalog/index";
import About from "./About/index";
import Home from "./HomePage/index";
import Blog from "./Blog/index";
import Formular from "./Formular/index";

const App = ({match}) => (
  <div className="gx-main-content-wrapper">
   <Switch>
      <Route path={`${match.url}home`} component={Home}/>
      
      <Route patn={`${match.url}catalog`} component={Catalog}/>

      <Route patn={`${match.url}bord`} component={Bord}/>   
       
      <Route patn={`${match.url}about`} component={About}/> 
      <Route patn={`${match.url}blog`} component={Blog}/> 
      <Route patn={`${match.url}formular`} component={Formular}/> 
  </Switch>
  </div>
);

export default App;
