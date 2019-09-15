import {Form,Radio,Input,Col,Select,Button } from "antd";
import Widget from "components/Widget";
import { verify } from "crypto";
import { relative } from "path";
import React from "react";


const { Option } = Select;
const { TextArea } = Input;
class GeneralForm extends React.Component {
  state = {
    radioValue: 0,
    motivationValue: "",
    questionValue:"",
    recommendationValue: "",
    altele: true,
  };

  onChange = e => {
    if(e.target.value==7){
      this.setState({
        radioValue: e.target.value,
        altele: false,
      });
    }else{
      this.setState({
        radioValue: e.target.value,
        altele: true,
      });
    }
  };

  onChangeMotivation = e => {
    this.setState({
      motivationValue: e.target.value,
    });
  };
  onChangeQuestion = e => {
    this.setState({
      questionValue: e.target.value,
    });
  };
  onChangeRecommendation = e => {
    this.setState({
      recommendationValue: e.target.value,
    });
  };
  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    return (
      <div>
        <div className="gx-d-flex justify-content-center">
          <Col span={24}>
            <Widget>
            <Form layout={"vertical"}>
              <Form.Item label={" Ce te-a motivat să ajungi la sfârșitul formularului?"}>
              <TextArea  value={this.state.motivationValue} onChange={this.onChangeMotivation} autosize={{ minRows: 3, maxRows: 5 }}/>
              </Form.Item>
              <Form.Item label={" Ce întrebare ai adăuga în formular?"}>
              <TextArea  value={this.state.questionValue} onChange={this.onChangeQuestion} autosize={{ minRows: 1, maxRows: 3 }}/>
              </Form.Item>

              <Form.Item label={" Cum ai aflat de formular?"}>
                <Radio.Group onChange={this.onChange} value={this.state.radioValue}>
                  <Radio style={radioStyle} value={1}>
                    Facebook
                  </Radio>
                  <Radio style={radioStyle} value={2}>
                    Instagram
                  </Radio>
                  <Radio style={radioStyle} value={3}>
                    Youtube
                  </Radio>
                  <Radio style={radioStyle} value={4}>
                    Prieteni
                  </Radio>
                  <Radio style={radioStyle} value={5}>
                    Profesori
                  </Radio>
                  <Radio style={radioStyle} value={6}>
                    Parinti
                  </Radio>
                  <Radio style={radioStyle} value={7}>
                    Altele:{" "}
                    
                  </Radio>
                </Radio.Group>
                <Input disabled={this.state.altele}/>
              </Form.Item>
              <Form.Item label={" Ai recomandări pentru echipa #estereal?"}>
              <TextArea  value={this.state.recommendationValue} onChange={this.onChangeRecommendation} autosize={{ minRows: 2, maxRows: 5 }}/>
              </Form.Item>
            </Form>

              <Button style={{marginLeft:8}} type="default" onClick={()=>this.props.prevStep()}>Back</Button>
              <Button style={{marginLeft:10}} type="primary">Submit</Button> 
            </Widget>
            </Col>
        </div>
      </div>
    );
  }
}


export default GeneralForm;
