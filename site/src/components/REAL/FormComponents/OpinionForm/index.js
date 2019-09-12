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
            <Form layout={"vertical"}>
           
              <Form.Item label={"2. Cât de dispus/ă ai fi să recomanzi unui elev de a 8-a să studieze la liceul tău?"}>
                <Radio.Group onChange={this.onChange} value={this.state.radioValue}>
                  <Radio style={radioStyle} value={1}>
                    Foarte
                  </Radio>
                  <Radio style={radioStyle} value={2}>
                    Moderat
                  </Radio>
                  <Radio style={radioStyle} value={3}>
                    Putin probabil
                  </Radio>
                  <Radio style={radioStyle} value={4}>
                    Deloc
                  </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label={"4. Pe o scara de la 1 la 10 cat de mult iti place liceul tau? [Style 1]"}>
                <Slider min={0} max={7} marks={marks} />
              </Form.Item>
              <br/>
              <Form.Item label={"5. Pe o scara de la 1 la 10 cat de mult iti place liceul tau? [Style 2]"}>
                  <IconSlider  min={0} max={10} />
              </Form.Item>
          </Form>
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
