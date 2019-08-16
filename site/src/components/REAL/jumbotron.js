import React from "react";
import {Button,Divider} from "antd";
import Widget from "components/Widget/index";

const Jumbotron = () => {
    return (
      <Widget styleName="gx-text-left">
        <br/>
        <br/>
        <br/>
        <br/>
        
        <h1>
            Registrul Educațional Alternativ
        </h1>
        
        <p>
            Cea mai mare colecție de date deschise despre liceele din România
        </p>
        
        <Divider/>

        <p>
            <Button variant="primary">Completează formularul</Button>
            <Button variant="primary">Află mai multe</Button>
        </p>
        
        <br/>
        <br/>
        <br/>
      </Widget>
    );
  };

export default Jumbotron;