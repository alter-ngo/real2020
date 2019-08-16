import React from "react";
import {Button,Divider} from "antd";
import Widget from "components/Widget/index";

const Jumbotron = () => {
    return (
      <Widget styleName="gx-widget-bg">
        <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 className="gx-font-weight-semi-bold gs-fs-xlxl">
            Registrul Educațional Alternativ
        </h1>
        
        <p>
            Cea mai mare colecție de date despre liceele din România
        </p>

        <p>
        <Button className="gx-mb-1 gx-btn-warning" htmlType="submit">Completează formularul</Button>
        <Button className="gx-mb-1" htmlType="submit">Află mai multe</Button>
        </p>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>
      </Widget>
    );
  };

export default Jumbotron;