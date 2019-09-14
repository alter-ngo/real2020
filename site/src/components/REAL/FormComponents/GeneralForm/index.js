import {Input,Form,Radio,Slider,Col,Select,Button } from "antd";
import Widget from "components/Widget";
import { verify } from "crypto";
import { relative } from "path";
import IconSlider from "components/REAL/FormComponents/IconSlider";
import React from "react";
import IntlMessages from "util/IntlMessages";
import StudentsGeneral from 'components/REAL/FormComponents/StudentsGeneral';
import TeachersGeneral from 'components/REAL/FormComponents/TeachersGeneral';
import TutorsGeneral from 'components/REAL/FormComponents/TutorsGeneral';

const { Option } = Select;
class GeneralForm extends React.Component {
  state = {
    sliderValue: 0,
    radioValue: 1,
  };

  onChange = e => {
    this.setState({
      radioValue: e.target.value,
    });
  };

  render() {

    switch(this.props.status){
      case "Elev":
        return(
          <div className="gx-d-flex justify-content-center">
            <Col span={24}>
            <Widget>
              <StudentsGeneral/>
              <br/>
              <Button type="primary" style={{marginLeft:8}} onClick={()=>this.props.nextStep()}>Next</Button>
            </Widget>
            </Col>
          </div>
        )
      case "Tutore":
        return(
          <div className="gx-d-flex justify-content-center">
            <Col span={24}>
            <Widget>
              <TutorsGeneral/>
              <br/>
              <Button type="primary" style={{marginLeft:8}} onClick={()=>this.props.nextStep()}>Next</Button>
            </Widget>
            </Col>
          </div>
        )
      case "Profesor":
        return(
          <div className="gx-d-flex justify-content-center">
            <Col span={24}>
            <Widget>
              <TeachersGeneral/>
              <br/>
              <Button type="primary" style={{marginLeft:8}} onClick={()=>this.props.nextStep()}>Next</Button>
            </Widget>
            </Col>
          </div>
        )
    }
    
  }
}


export default GeneralForm;
