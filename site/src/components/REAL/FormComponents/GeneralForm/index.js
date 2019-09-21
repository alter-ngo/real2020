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
  };

  render() {

    switch(this.props.status){
      case "Elev":
        return(
          <div className="gx-d-flex justify-content-center">
            <Col span={24}>
              <StudentsGeneral
              nextStep={this.props.nextStep}
              generalVariables={this.props.generalVariables}
              />
            </Col>
          </div>
        )
      case "Tutore":
        return(
          <div className="gx-d-flex justify-content-center">
            <Col span={24}>
              <TutorsGeneral
              nextStep={this.props.nextStep}
              generalVariables={this.props.generalVariables}/>
            </Col>
          </div>
        )
      case "Profesor":
        return(
          <div className="gx-d-flex justify-content-center">
            <Col span={24}>
              <TeachersGeneral
              nextStep={this.props.nextStep}
              generalVariables={this.props.generalVariables}/>
            </Col>
          </div>
        )
    }
    
  }
}


export default GeneralForm;
