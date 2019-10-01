import {Form,Radio,Slider,Col,Select,Button } from "antd";
import Widget from "components/Widget";
import React from "react";
import TutorsOpinion from "components/REAL/FormComponents/TutorsOpinion";
import StudentsOpinionForm from "components/REAL/FormComponents/StudentsOpinion";
class OpinionForm extends React.Component {


  render() {
    switch(this.props.status){
      case "Elev":
        return(
          <div className="gx-d-flex justify-content-center">
            <Col span={24}>
            <StudentsOpinionForm
              prevStep={this.props.prevStep}
              nextStep={this.props.nextStep}
              opinionVariables={this.props.opinionVariables}
              />
            </Col>
          </div>
        )
      case "Tutore":
        return(
          <div className="gx-d-flex justify-content-center">
            <Col span={24}>
              <TutorsOpinion
              prevStep={this.props.prevStep}
              nextStep={this.props.nextStep}
              opinionVariables={this.props.opinionVariables}
              />
            </Col>
          </div>
        )
      case "Profesor":
        return(
          <div className="gx-d-flex justify-content-center">
            <Col span={24}>
              <Button style={{marginLeft:8}} type="default" onClick={()=>this.props.prevStep()}>Back</Button>
              <Button style={{marginLeft:10}} type="primary" onClick={()=>this.props.nextStep()}>Next</Button> 
            </Col>
          </div>
        )
    }
  }
}


export default OpinionForm;
