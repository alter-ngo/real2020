import {Button,Col,Row,Modal,Card } from "antd";
import Widget from "../../Widget";
import React from "react";
import FormIntro from '../../FormIntro';


const{Meta}=Card;
class ModalSelector extends React.Component {
  state = {
    visible: true,
    status:"",
    colors: [
      { id: 1, value: "white", context: "Elev" },
      { id: 2, value: "white", context: "Tutore" },
      { id: 3, value: "white", context: "Profesor" },
      ],
      windowHeight: 0,
      windowWidth: 0
  };

  updateWindowDimension = () => {
    this.setState(
      {
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
      },
    );
  };

  componentDidMount() {
    this.updateWindowDimension();
    window.addEventListener("resize", this.updateWindowDimension);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimension);
  }

  handleSelection(mode){
    for (let i = 0; i <= 2; i++) {
      if (this.state.colors[i].context == mode) {
        this.state.colors[i].value = "#fa8c15";
      }else {
        this.state.colors[i].value = "white";
      }
    }
    this.props.nextStep();
    this.props.setStatus(mode);
    this.setState({
      visible: false,
      ready: true,
    });
  }
  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
  objectiveSelectionDisplay = () => {
  if(this.state.windowWidth <= 950){
    return(
<Card>
  <div className="gx-d-flex justify-content-center" >
    <Col span={24}>    
    <Row>
      <FormIntro/>
    </Row>

      <Button block={true} className="gx-widget-bg" type="primary" onClick={this.handleSelection.bind(this,"Elev")}>Elev</Button>
      <Button block={true} className="gx-widget-bg" type="primary" onClick={this.handleSelection.bind(this,"Tutore")}>Tutore</Button>
      <Button block={true} className="gx-widget-bg" type="primary" onClick={this.handleSelection.bind(this,"Profesor")}>Profesor</Button>

    </Col>
  </div>

  </Card>
  )
  }else{
    return(
<Card>
  <div className="gx-d-flex justify-content-center" >
    <Col span={24}>    
    <Row>
      <FormIntro/>
    </Row>
    <Row gutter={16}>
      <Col  xl={8}
            md={8}
            sm={12}
            xs={24} onClick={this.handleSelection.bind(this,"Elev")}>

          <Widget styleName="gx-widget-bg"
          cover={
            <img src="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Felevi.jpg?alt=media&token=2e59253a-b2fc-41e0-9f83-100c0aea2e9e" />
          }> 
            <p
              style={{
                color: this.state.colors[0].value,
                fontSize: "1.25em",
                textAlign: "center",
                margin: 0
              }}
            >
              Elev
            </p>
            
          </Widget>
      </Col>
      
      <Col xl={8}
            md={8}
            sm={12}
            xs={24} onClick={this.handleSelection.bind(this,"Tutore")}>
      <Widget styleName="gx-widget-bg"
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
              Tutore
            </p>
          </Widget>      
      </Col>
      <Col xl={8}
            md={8}
            sm={12}
            xs={24} onClick={this.handleSelection.bind(this,"Profesor")}>
      <Widget styleName="gx-widget-bg"
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
              Profesor
            </p>
          </Widget>
      </Col>
    </Row>

    </Col>
  </div>

  </Card>
  )}
  };

  render() {
    
    return (
      <div>
      {this.objectiveSelectionDisplay()}
      </div>
    );
  }
}


export default ModalSelector;
