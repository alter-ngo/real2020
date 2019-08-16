import React from "react";

import Widget from "components/Widget";
import { Row, Col } from "antd";

function UserCard(name, desc) {

    return (
      <Widget styleName="gx-card-full gx-dot-arrow-hover">
        <div className="gx-user-wid-row">
          <div className="gx-user-wid gx-mr-3">
            <img alt="..." src='https://via.placeholder.com/150x150' className="gx-object-cover"/>
          </div>
          <div className="gx-user-wid-body gx-py-3 gx-pr-3">
            <div className="ant-row-flex">
              <h2 className="h4 gx-mr-1 gx-mb-1">{name}</h2>
            </div>
            <p  style={{textAlign:"left"}} className="gx-mb-1 gx-text-grey gx-fs-sm">{desc}</p>
          </div>
        </div>
      </Widget>
    );
}

const TeamMembers = () => {
  return (
    <Row gutter={16}>
      <Col xl={6} md={6} sm={12} xs={24}>
        <center>
          <i className="icon icon-team gx-fs-xlxl " />
          <h1>Community</h1>
          <h3>Descriere</h3>
          <br />
          {UserCard("Ilinca Ivancu","Descriere")}
          {UserCard("Bianca Nicolau","Descriere")}
          {UserCard("Anastasia Seitan","Descriere")}
        </center>
      </Col>
      <Col xl={6} md={6} sm={12} xs={24}>
        <center>
          <i className="icon icon-camera-2 gx-fs-xlxl " />
          <h1>Content</h1>
          <h3>Descriere</h3>
          <br />
          {UserCard("Stefania Bratu","Descriere")}
          {UserCard("Dan Chira","Descriere")}
          {UserCard("Bogdan Vidrașcu","Descriere")}
        </center>
      </Col>
      <Col xl={6} md={6} sm={12} xs={24}>
        <center>
          <i className="icon icon-diamond gx-fs-xlxl " />
          <h1>Financial</h1>
          <h3>Descirere</h3>
          <br />
          {UserCard("Ciprian Anghel","Descriere")}
          {UserCard("Alexandra Dincă","Descriere")}
        </center>
      </Col>
      <Col xl={6} md={6} sm={12} xs={24}>
        <center>
          <i className="icon icon-data-display gx-fs-xlxl " />
          <h1>Tehnical</h1>
          <h3>Descriere</h3>
          <br />
          {UserCard("Paul Bricman","Descriere")}
          {UserCard("Alexandru Constantin","Descriere")}
          {UserCard("Mihai Sturza","Descriere")}
        </center>
      </Col>
    </Row>
  );
};

export default TeamMembers;
