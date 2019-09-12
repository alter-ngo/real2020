import {Input,Form,Radio,Slider,Col,Select,Row,Modal } from "antd";
import Widget from "components/Widget";
import React from "react";
import FormIntro from 'components/REAL/FormIntro';

class ModalSelector extends React.Component {
  state = {
    visible: true,
    status:"",
    colors: [
      { id: 1, value: "white", context: "Elevi" },
      { id: 2, value: "white", context: "Parinți" },
      { id: 3, value: "white", context: "Profesori" },
      ],
  };

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

  render() {
    
    return (
      <Modal
      title="Selecteaza statutul tau:"
      visible={this.state.visible}
      footer={null}
    >
  <div className="gx-d-flex justify-content-center" >
    <Col span={24}>    
    <Row>
      <FormIntro/>
    </Row>
    <Row>
      <Col span={8} onClick={this.handleSelection.bind(this,"Elev")}>
          <Widget styleName="gx-widget-bg"
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
              Elev
            </p>
          </Widget>
      </Col>
      
      <Col span={8} onClick={this.handleSelection.bind(this,"Parinte")}>
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
              Parinte
            </p>
          </Widget>      
      </Col>
      <Col span={8} onClick={this.handleSelection.bind(this,"Profesor")}>
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

  </Modal>
    );
  }
}


export default ModalSelector;
