import {Input,Form,Radio,Slider,Col,Select,Button } from "antd";
import Widget from "components/Widget";
import { verify } from "crypto";
import { relative } from "path";
import IconSlider from "components/REAL/FormComponents/IconSlider";
import React from "react";
import IntlMessages from "util/IntlMessages";

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
            <Form.Item  label={"1. La ce liceu inveti?"}>
              <Input placeholder="ex: Tudor Vianu"/>
            </Form.Item> 
            <br/>
              <Form.Item label={"3. Ce clasa esti?"}>
              <Radio.Group defaultValue="a" buttonStyle="solid">
                  <Radio.Button value="a">a IX-a</Radio.Button>
                  <Radio.Button value="b">a X-a</Radio.Button>
                  <Radio.Button value="c">a XI-a</Radio.Button>
                  <Radio.Button value="d">a XII-a</Radio.Button>
              </Radio.Group>
              </Form.Item>
              <Form.Item label="Gender">
              <Select
                placeholder="Ca ce te identifici?"
                onChange={this.handleSelectChange}
              >
                <Option value="male">prostitut</Option>
                <Option value="female">prostituta</Option>
              </Select>
  
          </Form.Item>
          </Form> 
          <Button type="primary" style={{marginLeft:8}} onClick={()=>this.props.nextStep()}>Next</Button>
          </Widget>
          </Col>
          
        </div>
      </div>
    );
  }
}


export default GeneralForm;
