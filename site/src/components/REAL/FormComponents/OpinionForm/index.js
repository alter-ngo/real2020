import {Col} from "antd";
import React from "react";
import TutorsOpinion from "components/REAL/FormComponents/TutorsOpinion";
import StudentsOpinionForm from "components/REAL/FormComponents/StudentsOpinion";
import TeachersOpinion from "components/REAL/FormComponents/TeachersOpinion";
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
              radioValueStudents={this.props.radioValueStudents}
              opinionVariables={this.props.opinionVariablesStudents}
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
              <TeachersOpinion
                prevStep={this.props.prevStep}
                nextStep={this.props.nextStep}
                methodsOfEvaluation={this.props.methodsOfEvaluation}
                opinionVariables={this.props.opinionVariablesTeachers}
              />
            </Col>
          </div>
        )
    }
  }
}


export default OpinionForm;
