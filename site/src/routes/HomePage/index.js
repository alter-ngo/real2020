import React from "react";

import Widget from "components/Widget";
import { Row, Col } from "antd";
import imag from "assets/images/placeholder.jpg";
import Jumbotron from "components/REAL/jumbotron.js"

const HomePage = () => {
  return (
    <React.Fragment>
      <Row gutter={16}>
        <Col span={24}>
          <Jumbotron></Jumbotron>
        </Col>
      </Row>
      <Row gutter={16} className="height:2000">
        <Col span={24}>
          <Widget title="#estereal">
            <h1>Devs from REAL wish you happy coding</h1>
          </Widget>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default HomePage;
