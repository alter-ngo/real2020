import React from "react";

import { Row, Col, Divider, Button } from "antd";
import Jumbotron from "components/REAL/Jumbotron";
import DataOverview from "components/REAL/DataOverview";
import Objectives from "components/REAL/Objectives";
import TeamMembers from "components/REAL/Team";
import BlogOverview from "../../components/REAL/BlogOverview";
import TextPhoto from "components/REAL/TextPhoto";

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
            <i className="icon icon-autocomplete gx-fs-xlxl " />
            <h1>Despre</h1>
            <h3>Cu ce ne ocupăm?</h3>
            <br />
          </center>
        </Col>
        <Col span={24}>
          <TextPhoto side="left" title="#estereal" caption="Date" imgSrc="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Fdata.jpg?alt=media&token=89a0bfa4-d04a-479d-b2a1-1f0fc5658315">
          Registrul Educațional Alternativ va livra cea mai mare colecție de date despre sistemul de învățământ românesc, combinând informații oficiale de la instituții de stat cu opiniile elevilor, profesorilor și tutorilor.
          <br/>
          <br/>
          Colectăm sute de variabile pentru fiecare instituție de învățământ, de la notele de la clasă și până la calificările profesorilor.
          <br/>
          <br/>
          Vom folosi aceste date bogate pentru a ajuta elevi, părinți, tutori, cercetători, conduceri și factori decizionali prin diverse căi.
          <br/>
          <br/>
          Proiectul este inițiat și menținut în totalitate de o echipă de liceeni și studenți voluntari, având susținere din partea unor organizații din societatea civilă și mediul academic.
          </TextPhoto>
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
          <BlogOverview mode="preview" />
          <center>
            <Button
              href="/blog"
              className="gx-mb-1 gx-btn-warning"
              type="default"
            >
              Afla mai multe
            </Button>
          </center>
          <br />
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
