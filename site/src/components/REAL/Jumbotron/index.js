import React from "react";
import { Button, Divider, Row, Col } from "antd";
import Widget from "components/Widget/index";

const Jumbotron = () => {
  return (
    <Widget styleName="gx-widget-bg">
      <Row type="flex" align="middle" style={{ height: "25em" }}>
        <Col>
          <h1
            className="gx-font-weight-semi-bold gs-fs-xlxl"
            style={{ fontSize: "3em" }}
          >
            Registrul Educațional Alternativ
          </h1>
          <p style={{ fontSize: "1.4em" }}>
            Cea mai mare colecție de date despre liceele din România
          </p>
          <p>
            <Button className="gx-mb-1 gx-btn-warning" htmlType="submit">
              Completează formularul
            </Button>
            <Button className="gx-mb-1" htmlType="submit">
              Află mai multe
            </Button>
          </p>
        </Col>
      </Row>
    </Widget>
  );
};

export default Jumbotron;
