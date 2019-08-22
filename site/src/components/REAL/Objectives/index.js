import React from "react";
import Widget from "components/Widget";
import { Button, Row, Col, Divider, Card } from "antd";
import image from "assets/images/avatar-placeholder.png";

class Objectives extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectionName: "Elevi",
      colors: [
        { id: 1, value: "secondary-color", context: "Elevi" },
        { id: 2, value: "black", context: "Parinți" },
        { id: 3, value: "black", context: "Profesori" },
        { id: 4, value: "black", context: "Cercetători" },
        { id: 5, value: "black", context: "Conduceri" },
        { id: 6, value: "black", context: "Minister" }
      ]
    };
  }
  handleClick(mode) {
    for (let i = 0; i <= 5; i++) {
      if (this.state.colors[i].context == mode) {
        this.state.colors[i].value = "#fa8c15";
        console.log(this.state.colors[i].value, this.state.colors[i].context);
      } else {
        this.state.colors[i].value = "black";
        console.log(this.state.colors[i].value, this.state.colors[i].context);
      }
    }
    this.setState({
      selectionName: mode
    });
  }

  render() {
    return (
      <Widget>
        <Row gutter={16} type="flex" align="middle">
          <Col xl={12} md={12} sm={12} xs={24}>
            <Widget>
              <p style={{ fontSize: "2.5em", color: "black" }}>
                {this.state.selectionName}
              </p>
              <p>
                <span class="icon icon-check-circle-o" />
                Acest camp este pentru o descriere.
                <br />
                <br />
                <span class="icon icon-check-circle-o" /> Acest camp este pentru
                o descriere.
                <br />
                <br />
                <span class="icon icon-check-circle-o" /> Acest camp este pentru
                o descriere.
                <br />
                <br />
              </p>
              <br />
              <p>
                <Button className="gx-mb-1 gx-btn-warning" htmlType="submit">
                  Completează formularul
                </Button>
                <Button className="gx-mb-1" htmlType="submit">
                  Află mai multe
                </Button>
              </p>
            </Widget>
          </Col>
          <Col xl={12} md={12} sm={12} xs={24}>
            <Row gutter={8}>
              <Col span={8}>
                <div onClick={this.handleClick.bind(this, "Elevi")}>
                  <Widget cover={<img src={image} alt="icon" height={100} />}>
                    <p
                      style={{
                        color: this.state.colors[0].value,
                        margin: 0,
                        fontSize: "1.20em",
                        textAlign: "center"
                      }}
                    >
                      Elevi
                    </p>
                  </Widget>
                </div>
              </Col>
              <Col span={8}>
                <div onClick={this.handleClick.bind(this, "Parinți")}>
                  <Widget cover={<img src={image} alt="icon" height={100} />}>
                    <p
                      style={{
                        color: this.state.colors[1].value,
                        margin: 0,
                        fontSize: "1.20em",
                        textAlign: "center"
                      }}
                    >
                      Parinți
                    </p>
                  </Widget>
                </div>
              </Col>
              <Col span={8}>
                <div onClick={this.handleClick.bind(this, "Profesori")}>
                  <Widget cover={<img src={image} alt="icon" height={100} />}>
                    <p
                      style={{
                        color: this.state.colors[2].value,
                        margin: 0,
                        fontSize: "1.20em",
                        textAlign: "center"
                      }}
                    >
                      Profesori
                    </p>
                  </Widget>
                </div>
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={8}>
                <div onClick={this.handleClick.bind(this, "Cercetători")}>
                  <Widget cover={<img src={image} alt="icon" height={100} />}>
                    <p
                      style={{
                        color: this.state.colors[3].value,
                        margin: 0,
                        fontSize: "1.20em",
                        textAlign: "center"
                      }}
                    >
                      Cercetători
                    </p>
                  </Widget>
                </div>
              </Col>
              <Col span={8}>
                <div onClick={this.handleClick.bind(this, "Conduceri")}>
                  <Widget cover={<img src={image} alt="icon" height={100} />}>
                    <p
                      style={{
                        color: this.state.colors[4].value,
                        margin: 0,
                        fontSize: "1.20em",
                        textAlign: "center"
                      }}
                    >
                      Conduceri
                    </p>
                  </Widget>
                </div>
              </Col>
              <Col span={8}>
                <div onClick={this.handleClick.bind(this, "Minister")}>
                  <Widget cover={<img src={image} alt="icon" height={100} />}>
                    <p
                      style={{
                        color: this.state.colors[5].value,
                        margin: 0,
                        fontSize: "1.20em",
                        textAlign: "center"
                      }}
                    >
                      Minister
                    </p>
                  </Widget>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Widget>
    );
  }
}

export default Objectives;
