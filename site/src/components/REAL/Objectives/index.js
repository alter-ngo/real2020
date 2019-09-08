import React from "react";
import Widget from "components/Widget";
import { Button, Row, Col, Divider, Card } from "antd";
import image from "assets/images/avatar-placeholder.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Objectives extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectionName: "Elevi",
      selectedItemCarousel: 0,
      colors: [
        { id: 1, value: "secondary-color", context: "Elevi", firstObjective:" Te ajutăm să alegi liceul cel mai potrivit pentru tine.", secondObjective:" Îți arătăm ce spun elevii și profesorii despre liceu.", thirdObjective:" Îți dăm informații despre oportunități, resurse și organizare." },
        { id: 2, value: "black", context: "Parinți", firstObjective:" Vă ajutam să alegeți un liceu sigur pentru copilul dumneavoastră.", secondObjective:" Vă prezentam informații despre calitatea actului educațional.", thirdObjective:" Vă transmitem date despre relația tutore-profesori." },
        { id: 3, value: "black", context: "Profesori", firstObjective:" Vă ajutam să alegeți un cadru profesional potrivit dumneavoastră.", secondObjective:" Vă facilitam accesul la date despre colectivul didactic.", thirdObjective:" Vă oferim informații despre oportunități de dezvoltare profesională." },
        { id: 4, value: "black", context: "Cercetători", firstObjective:" Vă oferim acces la cea mai mare colecție de date despre liceele din România.", secondObjective:" Facilităm dezvoltarea de materiale printr-o metodologie riguroasă.", thirdObjective:" Vă ajutăm să observați corelații ce nu au mai putut fi observate până acum." },
        { id: 5, value: "black", context: "Conduceri", firstObjective:" Vă oferim informații bogate despre starea instituției de învățământ.", secondObjective:" Vă oferim recomandări bazate pe date de la sute de licee.", thirdObjective:" Vă transmitem într-o formă compactă recomandările elevilor și profesorilor." },
        { id: 6, value: "black", context: "Minister", firstObjective:" Confirmăm independent un set de măsurători critice pentru luarea deciziilor.", secondObjective:" Vă oferim recomandări bazate pe date de la sute de licee.", thirdObjective:" Vă transmitem recomandările elevilor, profesorilor și părinților." }
      ],
      firstObjective:" Te ajutăm să alegi liceul cel mai potrivit pentru tine.",
      secondObjective:" Îți arătăm ce spun elevii și profesorii despre liceu.",
      thirdObjective:" Îți dăm informații despre oportunități, resurse și organizare.",
      windowHeight: 0,
      windowWidth: 0
    };
    this.handleChangeD = this.handleChangeD.bind(this);
  }
  handleClick(mode) {
    for (let i = 0; i <= 5; i++) {
      if (this.state.colors[i].context == mode) {
        this.state.colors[i].value = "#fa8c15";
        this.handleChangeD(i);
      } else {
        this.state.colors[i].value = "black";
      }
    }
    this.setState({
      selectionName: mode

    });
  }
  handleChangeD(current) {

    this.state.colors[current].value = "#fa8c15";
    this.setState({
      selectedItemCarousel: current,
      selectionName: this.state.colors[current].context,
      firstObjective: this.state.colors[current].firstObjective,
      secondObjective: this.state.colors[current].secondObjective,
      thirdObjective: this.state.colors[current].thirdObjective    
    });
  }

  updateWindowDimension = () => {
    this.setState(
      {
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
      },
      console.log("Width " + this.state.windowWidth)
    );
  };

  componentDidMount() {
    this.updateWindowDimension();
    window.addEventListener("resize", this.updateWindowDimension);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimension);
  }

  objectiveSelectionDisplay = () => {
    if (this.state.windowWidth <= 950)
      return (
        <Carousel
          showStatus={false}
          selectedItem={this.state.selectedItemCarousel}
          infiniteLoop={true}
          emulateTouch={true}
          showThumbs={false}
          onChange={current => {
            this.handleChangeD(current);
          }}
        >
          <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Felevi.jpg?alt=media&token=2e59253a-b2fc-41e0-9f83-100c0aea2e9e" />
            <p className="legend">Elevi</p>
          </div>
          <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Fparinti.jpg?alt=media&token=cab87a57-dfb8-43a1-8ba0-7a4f62dd016b" />
            <p className="legend">Parinți</p>
          </div>
          <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Fprofesori.jpg?alt=media&token=2933756d-8127-458a-a523-5619cbb8f7e5" />
            <p className="legend">Profesori</p>
          </div>
          <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Fcercetatori.jpg?alt=media&token=fd86a844-5e31-49b3-910b-30fa7b0311b3" />
            <p className="legend">Cercetători</p>
          </div>
          <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Fconducere.jpg?alt=media&token=14cdf79a-eb4e-46c0-8f8e-2e821c57e0ae" />
            <p className="legend">Conduceri</p>
          </div>
          <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Fminister.jpg?alt=media&token=03f0012f-042e-4c2c-8e42-45f9bc615076" />
            <p className="legend">Minister</p>
          </div>
        </Carousel>
      );
    else
      return (
        <React.Fragment>
          <Row gutter={16} style={{ marginBottom: "-1em" }}>
            <Col
              xl={8}
              md={8}
              sm={8}
              xs={8}
              onClick={this.handleClick.bind(this, "Elevi")}
            >
              <Widget
                cover={
                  <img src="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Felevi.jpg?alt=media&token=2e59253a-b2fc-41e0-9f83-100c0aea2e9e" />
                }
              >
                <p
                  style={{
                    color: this.state.colors[0].value,
                    fontSize: "1.25em",
                    textAlign: "center",
                    margin: 0
                  }}
                >
                  Elevi
                </p>
              </Widget>
            </Col>
            <Col
              xl={8}
              md={8}
              sm={8}
              xs={8}
              onClick={this.handleClick.bind(this, "Parinți")}
            >
              <Widget
                cover={
                  <img src="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Fparinti.jpg?alt=media&token=cab87a57-dfb8-43a1-8ba0-7a4f62dd016b" />
                }
              >
                <p
                  style={{
                    color: this.state.colors[1].value,
                    fontSize: "1.25em",
                    textAlign: "center",
                    margin: 0
                  }}
                >
                  Parinți
                </p>
              </Widget>
            </Col>
            <Col
              xl={8}
              md={8}
              sm={8}
              xs={8}
              onClick={this.handleClick.bind(this, "Profesori")}
            >
              <Widget
                cover={
                  <img src="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Fprofesori.jpg?alt=media&token=2933756d-8127-458a-a523-5619cbb8f7e5" />
                }
              >
                <p
                  style={{
                    color: this.state.colors[2].value,
                    fontSize: "1.25em",
                    textAlign: "center",
                    margin: 0
                  }}
                >
                  Profesori
                </p>
              </Widget>
            </Col>
          </Row>
          <Row gutter={16} style={{ marginBottom: "-1.75em" }}>
            <Col xl={8} md={8} sm={8} xs={8} onClick={this.handleClick.bind(this, "Cercetători")}>
              <Widget
                cover={
                  <img src="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Fcercetatori.jpg?alt=media&token=fd86a844-5e31-49b3-910b-30fa7b0311b3" />
                }
              >
                <p
                  style={{
                    color: this.state.colors[3].value,
                    fontSize: "1.25em",
                    textAlign: "center",
                    margin: 0
                  }}
                >
                  Cercetători
                </p>
              </Widget>
            </Col>
            <Col
              xl={8}
              md={8}
              sm={8}
              xs={8}
              onClick={this.handleClick.bind(this, "Conduceri")}
            >
              <Widget
                cover={
                  <img src="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Fconducere.jpg?alt=media&token=14cdf79a-eb4e-46c0-8f8e-2e821c57e0ae" />
                }
              >
                <p
                  style={{
                    color: this.state.colors[4].value,
                    fontSize: "1.25em",
                    textAlign: "center",
                    margin: 0
                  }}
                >
                  Conduceri
                </p>
              </Widget>
            </Col>
            <Col
              xl={8}
              md={8}
              sm={8}
              xs={8}
              onClick={this.handleClick.bind(this, "Minister")}
            >
              <Widget
                cover={
                  <img src="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Fminister.jpg?alt=media&token=03f0012f-042e-4c2c-8e42-45f9bc615076" />
                }
              >
                <p
                  style={{
                    color: this.state.colors[5].value,
                    fontSize: "1.25em",
                    textAlign: "center",
                    margin: 0
                  }}
                >
                  Minister
                </p>
              </Widget>
            </Col>
          </Row>
        </React.Fragment>
      );
  };

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
                <span className="icon icon-check-circle-o" />{this.state.firstObjective}
                <br />
                <br />
                <span className="icon icon-check-circle-o" />{this.state.secondObjective}
                <br />
                <br />
                <span className="icon icon-check-circle-o" /> {this.state.thirdObjective}
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
          <Col xl={12} md={12} sm={12} xs={24}>
            {this.objectiveSelectionDisplay()}
          </Col>
        </Row>
      </Widget>
    );
  }
}

export default Objectives;
