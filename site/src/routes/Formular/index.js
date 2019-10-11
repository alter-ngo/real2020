import React from "react";
import GeneralForm from "../../components/REAL/FormComponents/GeneralForm";
import ModalSelector from 'components/REAL/FormComponents/ModalSelector';
import StepsComp from 'components/REAL/FormComponents/Steps';
import OpinionForm from 'components/REAL/FormComponents/OpinionForm';
import FeedbackForm from 'components/REAL/FormComponents/FeedbackForm';

class Formular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status:"",
      visible: true,
      step: 1,
      current: -1,
      methodsOfEvaluation: [],
      FeedbackVariables:[{id:"motivation",value:""},
                        {id:"question",value:""},
                        {id:"radio",value:""},
                        {id:"recommendation",value:""},
                        {id:"extra",value:"",altele:true}],
      generalVariables:[{id:"varsta",value:11},
                        {id:"gen",value:""},
                        {id:"judet",value:""},
                        {id:"localitate",value:""},
                        {id:"liceu",value:""},
                        {id:"clasa",value:""},
                        {id:"litera",value:""},
                        {id:"filiera",value:""},
                        {id:"profil",value:""},
                        {id:"specializare",value:""},],
      opinionVariables:[],
      opinionVariablesStudents:[],
    };
  this.setStatus=this.setStatus.bind(this);
  }
  componentDidMount(){
    let auxArray=[],auxArrayQ2=[];
    for(let i=0;i<=8;i++){
      auxArrayQ2.push({id:"question"+i,value: ""});
    }
    auxArrayQ2.push({id:"radioValue",value:0});
    for(let i=0;i<=28;i++){
      auxArray.push({id:"question "+i,value:""});
    }
    this.setState({opinionVariablesStudents: auxArray,opinionVariables:auxArrayQ2});
  }
  setStatus(param){
    this.setState({
      status: param,
    });
  }
  nextStep=()=>{
    const{step, current}=this.state;
    this.setState({
      step: step + 1,
      current: current + 1
    });
    window.scrollTo(0, 0);
  }
  prevStep=()=>{
    const{step, current}=this.state;
    this.setState({
      step: step - 1,
      current: current - 1
    });
    window.scrollTo(0, 0);
  }

  render(){
    const{step}=this.state;
       switch(step){
          case 1:
           return (
             <ModalSelector 
              nextStep={this.nextStep}
              setStatus={this.setStatus}
              />
           )
          case 2:
            return(
              <div>
                <StepsComp current={this.state.current}/>
                <br/>
                <GeneralForm
                  generalVariables={this.state.generalVariables}
                  status={this.state.status}
                  nextStep={this.nextStep}/>
              </div>
            )
          case 3:
            return(
              <div>
                <StepsComp current={this.state.current}/>
                <br/>
                <OpinionForm
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                status={this.state.status}
                methodsOfEvaluation={this.state.methodsOfEvaluation}
                radioValueStudents={this.state.radioValueStudents}
                opinionVariablesStudents={this.state.opinionVariablesStudents}
                opinionVariables={this.state.opinionVariables}/>
              </div>
            )
          case 4:
            return(
              <div>
                <StepsComp current={this.state.current}/>
                <br/>
                <FeedbackForm
                FeedbackVariables={this.state.FeedbackVariables}
                prevStep={this.prevStep}
                nextStep={this.nextStep}/>
              </div>
            )

        }

  }
};

export default Formular;
