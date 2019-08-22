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
          <h3>Community</h3>
          <br />
          {UserCard("Ilinca Ivancu","Community Manager")}
          {UserCard("Bianca Nicolau","Community Manager")}
          {UserCard("Anastasia Șeitan","Event Manager")}
        </center>
      </Col>
      <Col xl={6} md={6} sm={12} xs={24}>
        <center>
          <i className="icon icon-camera-2 gx-fs-xlxl " />
          <h3>Content</h3>
          <br />
          {UserCard("Stefania Bratu","Content Creator")}
          {UserCard("Dan Chira","Public Relations Manager")}
          {UserCard("Bogdan Vidrașcu","Project Manager")}
        </center>
      </Col>
      <Col xl={6} md={6} sm={12} xs={24}>
        <center>
          <i className="icon icon-diamond gx-fs-xlxl " />
          <h3>Financial</h3>
          <br />
          {UserCard("Ciprian Anghel","Fundraising Officer")}
        </center>
      </Col>
      <Col xl={6} md={6} sm={12} xs={24}>
        <center>
          <i className="icon icon-data-display gx-fs-xlxl " />
          <h3>Technical</h3>
          <br />
          {UserCard("Paul Bricman","Project Manager")}
          {UserCard("Alexandru Constantin","Web Developer")}
          {UserCard("Mihai Sturza","Product Manager")}
        </center>
      </Col>
    </Row>
  );
};

export default TeamMembers;
