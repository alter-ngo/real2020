import React from "react";
import {Route, Switch} from "react-router-dom";

import Bord from "./Bord/index";
import Catalog from "./Catalog/index";
import About from "./About/index";
import Home from "./HomePage/index";
import Blog from "./Blog/index";
import Formular from "./Formular/index";
import BlogPost from "../components/REAL/BlogPost";

const NoMatchPage = () => {
  return (
    <React.Fragment>
     <div style={{ fontSize: "15em", textAlign: "center", color: "black" }} >404</div>
     <p style={{ fontSize: "2em", textAlign: "center", color: "gray" }} >Construim cea mai mare colecție de date despre învățământ, dar din păcate nu am găsit ce căutai.</p>
    </React.Fragment>
  );
};

const App = ({match}) => (
  <div className="gx-main-content-wrapper">
   <Switch>
      <Route exact path={`${match.url}home`} component={Home}/>
      <Route exact path={`${match.url}catalog`} component={Catalog}/>
      <Route exact path={`${match.url}bord`} component={Bord}/>   
      <Route exact path={`${match.url}about`} component={About}/> 
      <Route exact path={`${match.url}blog`} component={Blog}/>  
      <Route exact path={`${match.url}blog/:slug`} component={BlogPost}/>  
      <Route exact path={`${match.url}formular`} component={Formular}/> 
      <Route component={NoMatchPage} />
  </Switch>
  </div>
);

export default App;
