import React from "react";
import {Input,Form,Radio,Slider,Col,Select,Row,Modal,Steps } from "antd";
import Widget from "components/Widget";
import { AnimateOnChange,HideUntilLoaded } from 'react-animation';

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
    radioValue: 1,
    visible: true,
    sliderValue: 0,
    step: 1,
    current: -1,
  };
  this.setStatus=this.setStatus.bind(this);
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
  }
  prevStep=()=>{
    const{step, current}=this.state;
    this.setState({
      step: step - 1,
      current: current - 1
    });
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
                nextStep={this.nextStep}/>
              </div>
            )
          case 4:
            return(
              <div>
                <StepsComp current={this.state.current}/>
                <br/>
                <FeedbackForm
                prevStep={this.prevStep}
                nextStep={this.nextStep}/>
              </div>
            )

        }

  }
};

export default Formular;
