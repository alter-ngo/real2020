import React from "react";

import Widget from "components/Widget";
import { Row, Col, Card, Divider } from "antd";

const DataOverview = () => {
  return (
    <Row gutter={16}>
      <Col xl={12} md={12} sm={24} xs={24}>
        <Widget>
          <h1>Obiective</h1>
          <span className="icon icon-check-circle-o" /> Datele obiective
          reprezintă valori fixe ce provin direct de la instituții oficiale.
          <Divider style={{ visibility: "hidden" }} />
          <Row gutter={16} style={{ marginBottom: "-3em" }}>
            <Col xl={12} md={12} sm={12} xs={24}>
              <Card bordered={false}>
                <h2>Exemple</h2>
                <Divider />
                <p>Procentul de profesori cu doctorat</p>
                <p>Numărul de premii obținute de elevi</p>
                <p>Promovabilitatea la Bacalaureat</p>
              </Card>
            </Col>
            <Col sxl={12} md={12} sm={12} xs={24}>
              <Card bordered={false}>
                <h2>Surse</h2>
                <Divider />
                <p>Raportul Anual de Evaluare Internă</p>
                <p>Cartografia Școlară</p>
                <p>Admiterea la Liceu</p>
              </Card>
            </Col>
          </Row>
        </Widget>
      </Col>
      <Col xl={12} md={12} sm={24} xs={24}>
        <Widget>
          <h1>Subiective</h1>
          <span className="icon icon-check-circle-o" /> Datele subiective
          reprezintă opiniile manifestate de elevi, profesori și tutori.
          <Divider style={{ visibility: "hidden" }} />
          <Row gutter={16} style={{ marginBottom: "-3em" }}>
            <Col xl={12} md={12} sm={12} xs={24}>
              <Card bordered={false}>
                <h2>Exemple</h2>
                <Divider />
                <p>Interactivitatea profesorilor</p>
                <p>Deschiderea comunității de elevi</p>
                <p>Relația tutore-diriginte</p>
              </Card>
            </Col>
            <Col xl={12} md={12} sm={12} xs={24}>
              <Card bordered={false}>
                <h2>Surse</h2>
                <Divider />
                <p>Formularul #estereal</p>
              </Card>
            </Col>
          </Row>
        </Widget>
      </Col>
    </Row>
  );
};

export default DataOverview;
