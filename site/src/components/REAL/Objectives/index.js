import React from "react";
import Widget from "components/Widget";
import { Button, Row, Col, Divider, Card } from "antd";
import image from "assets/images/avatar-placeholder.png";

class Objectives extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectionName: "Elevi",
      firstObjective:
        " Te ajutăm să alegi liceul cel mai potrivit pentru tine.",
      secondObjective: " Îți arătăm ce spun elevii și profesorii despre liceu.",
      thirdObjective:
        " Îți dăm informații despre oportunități, resurse și organizare.",
      colors: [
        { id: 1, value: "secondary-color", context: "Elevi" },
        { id: 2, value: "black", context: "Parinți" },
        { id: 3, value: "black", context: "Profesori" },
        { id: 4, value: "black", context: "Cercetători" },
        { id: 5, value: "black", context: "Conduceri" },
        { id: 6, value: "black", context: "Minister" }
      ],
      selectedHeight: "800px"
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
    var firstObjective, secondObjective, thirdObjective;
    if (mode == "Elevi") {
      this.setState({
        firstObjective:
          " Te ajutăm să alegi liceul cel mai potrivit pentru tine.",
        secondObjective:
          " Îți arătăm ce spun elevii și profesorii despre liceu.",
        thirdObjective: " Îți dăm informații despre oportunități și resurse."
      });
    } else if (mode == "Parinți") {
      this.setState({
        firstObjective:
          " Vă ajutam să alegeți un liceu sigur pentru copilul dumneavoastră.",
        secondObjective:
          " Vă prezentam informații despre calitatea actului educațional.",
        thirdObjective: " Vă transmitem date despre relația tutore-profesori."
      });
    } else if (mode == "Profesori") {
      this.setState({
        firstObjective:
          " Vă ajutam să alegeți un cadru profesional potrivit dumneavoastră.",
        secondObjective:
          " Vă facilitam accesul la date despre colectivul didactic.",
        thirdObjective:
          " Vă oferim informații despre oportunități de dezvoltare profesională."
      });
    } else if (mode == "Cercetători") {
      this.setState({
        firstObjective:
          " Vă oferim acces la cea mai mare colecție de date despre liceele din România.",
        secondObjective:
          " Facilităm dezvoltarea de materiale printr-o metodologie riguroasă.",
        thirdObjective:
          " Vă ajutăm să observați corelații ce nu au mai putut fi observate până acum."
      });
    } else if (mode == "Conduceri") {
      this.setState({
        firstObjective:
          " Vă oferim informații bogate despre starea instituției de învățământ.",
        secondObjective:
          " Vă oferim recomandări bazate pe date de la sute de licee.",
        thirdObjective:
          " Vă transmitem într-o formă compactă recomandările elevilor și profesorilor."
      });
    } else if (mode == "Minister") {
      this.setState({
        firstObjective:
          " Confirmăm independent un set de măsurători critice pentru luarea deciziilor.",
        secondObjective:
          " Vă oferim recomandări bazate pe date de la sute de licee.",
        thirdObjective:
          " Vă transmitem recomandările elevilor, profesorilor și părinților."
      });
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
            <div style={{ marginLeft: "1.7em" }}>
              <p
                style={{
                  fontSize: "4em",
                  color: "black",
                  margin: 0,
                  marginBottom: "0.4em"
                }}
              >
                {this.state.selectionName}
              </p>
              <p>
                <span className="icon icon-check-circle-o" />{" "}
                {this.state.firstObjective}
                <br />
                <br />
                <span className="icon icon-check-circle-o" />
                {this.state.secondObjective}
                <br />
                <br />
                <span className="icon icon-check-circle-o" />
                {this.state.thirdObjective}
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
            </div>
          </Col>
          <Col
            xl={12}
            md={12}
            sm={12}
            xs={24}
            ref={heightSelector => (this.heightSelector = heightSelector)}
          >
            {console.log(this.refs.heightSelector)}
            <Row gutter={8} style={{ marginBottom: "-0.5em" }}>
              <Col span={8}>
                <div onClick={this.handleClick.bind(this, "Elevi")}>
                  <Widget
                    cover={
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Felevi.jpg?alt=media&token=2e59253a-b2fc-41e0-9f83-100c0aea2e9e"
                        alt="icon"
                        style={{ objectFit: "cover" }}
                        height={100}
                      />
                    }
                  >
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
                  <Widget
                    cover={
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Fparinti.jpg?alt=media&token=cab87a57-dfb8-43a1-8ba0-7a4f62dd016b"
                        alt="icon"
                        style={{ objectFit: "cover" }}
                        height={100}
                      />
                    }
                  >
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
                  <Widget
                    cover={
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Fprofesori.jpg?alt=media&token=2933756d-8127-458a-a523-5619cbb8f7e5"
                        alt="icon"
                        style={{ objectFit: "cover" }}
                        height={100}
                      />
                    }
                  >
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
            <Row gutter={8} style={{ marginBottom: "-2em" }}>
              <Col span={8}>
                <div onClick={this.handleClick.bind(this, "Cercetători")}>
                  <Widget
                    cover={
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Fcercetatori.jpg?alt=media&token=fd86a844-5e31-49b3-910b-30fa7b0311b3"
                        alt="icon"
                        style={{ objectFit: "cover" }}
                        height={100}
                      />
                    }
                  >
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
                  <Widget
                    cover={
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Fconducere.jpg?alt=media&token=14cdf79a-eb4e-46c0-8f8e-2e821c57e0ae"
                        alt="icon"
                        style={{ objectFit: "cover" }}
                        height={100}
                      />
                    }
                  >
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
                  <Widget
                    cover={
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Fminister.jpg?alt=media&token=03f0012f-042e-4c2c-8e42-45f9bc615076"
                        alt="icon"
                        style={{ objectFit: "cover" }}
                        height={100}
                      />
                    }
                  >
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
