import React from "react";

import { Row, Col, Divider } from "antd";
import Jumbotron from "components/REAL/Jumbotron";
import DataOverview from "components/REAL/DataOverview";
import Objectives from "components/REAL/Objectives";
import TeamMembers from "components/REAL/Team";
import BlogOverview from "../../components/REAL/BlogOverview";

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
        <Col span={24}>
          <Objectives />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <center>
            <i className="icon icon-apps gx-fs-xlxl" />
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
          <BlogOverview></BlogOverview>
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
          <TeamMembers />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default HomePage;
