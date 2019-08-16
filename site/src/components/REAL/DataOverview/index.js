import React from "react";

import Widget from "components/Widget";
import { Row, Col, Card, Divider } from "antd";

const DataOverview = () => {
  return (
    <Row gutter={16}>
      <Col xl={12} md={12} sm={24} xs={24}>
        <Widget>
          <h1>Obiective</h1>
          <span class="icon icon-check-circle-o" /> Acest camp este pentru o
          descriere.
          <Divider style={{ visibility: "hidden" }} />
          <Row gutter={16}>
            <Col xl={12} md={12} sm={12} xs={24}>
              <Card>
                <h2>Exemple</h2>
                <Divider />
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
              </Card>
            </Col>
            <Col sxl={12} md={12} sm={12} xs={24}>
              <Card>
                <h2>Surse</h2>
                <Divider />
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
              </Card>
            </Col>
          </Row>
        </Widget>
      </Col>
      <Col xl={12} md={12} sm={24} xs={24}>
        <Widget>
          <h1>Subiective</h1>
          <span class="icon icon-check-circle-o" /> Acest camp este pentru o
          descriere.
          <Divider style={{ visibility: "hidden" }} />
          <Row gutter={16}>
            <Col xl={12} md={12} sm={12} xs={24}>
              <Card bordered={true}>
                <h2>Exemple</h2>
                <Divider />
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
              </Card>
            </Col>
            <Col xl={12} md={12} sm={12} xs={24}>
              <Card>
                <h2>Surse</h2>
                <Divider />
                <p>Content</p>
                <p>Content</p>
                <p>Content</p>
              </Card>
            </Col>
          </Row>
        </Widget>
      </Col>
    </Row>
  );
};

export default DataOverview;
