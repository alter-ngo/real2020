import React from "react";

import Widget from "components/Widget";
import { Row, Col } from "antd";

function UserCard(name, desc, imgUrl) {

    return (
      <Widget styleName="gx-card-full gx-dot-arrow-hover">
        <div className="gx-user-wid-row">
          <div className="gx-user-wid gx-mr-3">
            <img alt="..." src={imgUrl} className="gx-object-cover"/>
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
          {UserCard("Ilinca Ivancu","Community Manager", "https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/team%2FIlinca.jpg?alt=media&token=07877f63-d726-4aed-9188-88085b520ba9")}
          {UserCard("Bianca Nicolau","Community Manager", "https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/team%2FBianca.jpg?alt=media&token=6ac0ba84-458b-4684-a972-1f91a6566501")}
          {UserCard("Anastasia Șeitan","Event Manager", "https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/team%2FAnastasia.jpg?alt=media&token=c4d03445-0d93-45f2-b14b-9527a7c7e4a6")}
        </center>
      </Col>
      <Col xl={6} md={6} sm={12} xs={24}>
        <center>
          <i className="icon icon-camera-2 gx-fs-xlxl " />
          <h3>Content</h3>
          <br />
          {UserCard("Stefania Bratu","Content Creator", "https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/team%2FStefi.PNG?alt=media&token=a214d8da-5166-4b67-b61a-ea95c377916b")}
          {UserCard("Dan Chira","Public Relations Manager", "https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/team%2FDan.jpeg?alt=media&token=9b9f73a2-f8ae-447d-9bf3-d3950ca30bf9")}
          {UserCard("Bogdan Vidrașcu","Project Manager", "https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/team%2FBodi.jpeg?alt=media&token=f18a87b2-4e9d-420f-a270-fdacf3b92a2f")}
        </center>
      </Col>
      <Col xl={6} md={6} sm={12} xs={24}>
        <center>
          <i className="icon icon-diamond gx-fs-xlxl " />
          <h3>Financial</h3>
          <br />
          {UserCard("Ciprian Anghel","Fundraising Officer", "https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/team%2FCiprian.jpg?alt=media&token=63815b6b-85bd-4900-bcbb-461411d61f43")}
        </center>
      </Col>
      <Col xl={6} md={6} sm={12} xs={24}>
        <center>
          <i className="icon icon-data-display gx-fs-xlxl " />
          <h3>Technical</h3>
          <br />
          {UserCard("Paul Bricman","Project Manager", "https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/team%2FPaul.jpeg?alt=media&token=61c333f5-0d9e-4a8f-b37a-7c385860470c")}
          {UserCard("Alexandru Constantin","Web Developer", "https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/team%2Falex.jpg?alt=media&token=acb4ad55-f531-4ff0-bbf8-75b90396affd")}
          {UserCard("Mihai Sturza","Product Manager", "https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/team%2FMihai.jpg?alt=media&token=a916ff02-e1fe-4a24-9085-b104baa55a41")}
        </center>
      </Col>
    </Row>
  );
};

export default TeamMembers;
