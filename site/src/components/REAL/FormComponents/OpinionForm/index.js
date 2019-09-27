import {Form,Radio,Slider,Col,Select,Button } from "antd";
import Widget from "components/Widget";
import { verify } from "crypto";
import { relative } from "path";
import IconSlider from "components/REAL/FormComponents/IconSlider";
import React from "react";


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
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const marks = {
      0: 'Deloc',
      1: 'Foarte Putin',
      2: 'Putin',
      3: 'Moderat',
      4: 'Mult',
      5: 'Foarte mult',
      6: 'Absolut',
      7: 'Sunt deja tocilar',
    };
    return (
      <div>
        <div className="gx-d-flex justify-content-center">
            <Col span={24}>
            <Widget>
              <span>{"The development team is working on this form page. :)"}</span><br/><br/>
          <Button style={{marginLeft:8}} type="default" onClick={()=>this.props.prevStep()}>Back</Button>
          <Button style={{marginLeft:8}} type="primary" onClick={()=>this.props.nextStep()}>Next</Button> 
          </Widget>
          </Col>
        </div>
      </div>
    );
  }
}


export default GeneralForm;
