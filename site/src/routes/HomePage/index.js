import React from "react";

import Widget from "components/Widget";
import { Row, Col } from "antd";
import imag from "assets/images/placeholder.jpg";

const HomePage = () => {
  return (
    <React.Fragment>
      <Row gutter={16}>
        <Col span={12}>
          <Widget title="#estereal">
            <h1>Devs from REAL wish you happy coding</h1>
          </Widget>
        </Col>
        <Col span={12}>
          <Widget title="#estereal">
            <h1>Devs from REAL wish you happy coding</h1>
          </Widget>
        </Col>
      </Row>
      <Row gutter={16}>
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
