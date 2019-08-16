import React from "react";

import Widget from "components/Widget";
import { Row, Col, Divider } from "antd";
import imag from "assets/images/placeholder.jpg";
import Jumbotron from "components/REAL/jumbotron.js";
import DataOverview from "components/REAL/DataOverview";

const HomePage = () => {
  return (
    <React.Fragment>
      <Row gutter={16}>
        <Col span={24}>
          <Jumbotron />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <center>
            <i className="icon icon-star gx-fs-xlxl " />
            <h1>Obiective</h1>
            <h3>Cu ce te putem ajuta?</h3>
            <br />
          </center>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <center>
            <i className="icon icon-dasbhoard gx-fs-xlxl" />
            <h1>Date</h1>
            <h3>Ce sunt si de unde vin?</h3>
            <br />
          </center>
        </Col>
        <Col span={24}>
          <DataOverview />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <center>
            <i className="icon icon-tag gx-fs-xlxl" />
            <h1>Blog</h1>
            <h3>Poveștile din spatele proiectului</h3>
            <br />
          </center>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <center>
            <i className="icon icon-user gx-fs-xlxl" />
            <h1>Echipa</h1>
            <h3>Oamenii din spatele proiectului</h3>
            <br />
          </center>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default HomePage;
