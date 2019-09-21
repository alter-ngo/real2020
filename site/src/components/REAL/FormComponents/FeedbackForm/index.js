import {Form,Radio,Input,Col,Select,Button } from "antd";
import Widget from "components/Widget";
import { verify } from "crypto";
import { relative } from "path";
import React from "react";


const { Option } = Select;
const { TextArea } = Input;
class GeneralForm extends React.Component {
  state = {
    radioValue: 1,
    altele: true,
    motivationText: "",
    recommendationText: "",
    questionText: "",
    alternativeText: "",
    radioOptions: [{id:"Facebook"},
                   {id:"Instagram"},
                   {id:"Youtube"},
                   {id:"Prieteni"},
                   {id:"Profesori"},
                   {id:"Parinti"},
                   {id:"Altele "}],
  };
  saveCurrentState(){
    const {FeedbackVariables}= this.props;
    const {radioValue, altele, alternativeText, questionText, motivationText, recommendationText}= this.state;
      FeedbackVariables[2].select=radioValue;
      FeedbackVariables[2].altele=altele;      
      FeedbackVariables[2].value=alternativeText;
      FeedbackVariables[1].value=questionText;
      FeedbackVariables[0].value=motivationText;
      FeedbackVariables[3].value=recommendationText;

      this.props.prevStep();
  }
  componentWillMount(){
    const {FeedbackVariables}= this.props;
    this.setState({      
      altele: FeedbackVariables[2].altele,
      radioValue: FeedbackVariables[2].select,
      motivationText: FeedbackVariables[0].value,
      recommendationText: FeedbackVariables[3].value,
      questionText: FeedbackVariables[1].value,
      alternativeText: FeedbackVariables[2].value,
    });
  }
  handleChange = input => e =>{
    this.setState({ [input]: e.target.value});
  };
  onChange = e => {
    if(e.target.value==7){
      this.setState({
        altele: false,
        radioValue: e.target.value
      });
    }else{
      this.setState({
        altele: true,
        radioValue: e.target.value
      });
    }
  };

  render() { 
    let radioOpts=[];
    const {radioOptions, motivationText, questionText, radioValue, altele, recommendationText}=this.state;   
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    for(let i =1; i<=7;i++){
      radioOpts.push(
        <Radio style={radioStyle} value={i}>
        {radioOptions[i-1].id}
      </Radio>
      )
    }
    return (
      <div>
        <div className="gx-d-flex justify-content-center">
          <Col span={24}>
            <Widget>
            <Form layout={"vertical"}>
              <Form.Item label={" Ce te-a motivat să ajungi la sfârșitul formularului?"}>
              <TextArea  value={motivationText} onChange={this.handleChange('motivationText')} autosize={{ minRows: 3, maxRows: 5 }}/>
              </Form.Item>
              <Form.Item label={" Ce întrebare ai adăuga în formular?"}>
              <TextArea  value={questionText} onChange={this.handleChange('questionText')} autosize={{ minRows: 1, maxRows: 3 }}/>
              </Form.Item>

              <Form.Item label={" Cum ai aflat de formular?"}>
                <Radio.Group onChange={this.onChange} value={radioValue}>
                  {radioOpts}
                </Radio.Group>
                <Input disabled={altele} value={this.state.alternativeText || undefined} onChange={this.handleChange('alternativeText')}/>
              </Form.Item>
              
              <Form.Item label={" Ai recomandări pentru echipa #estereal?"}>
              <TextArea  value={recommendationText} onChange={this.handleChange('recommendationText')} autosize={{ minRows: 2, maxRows: 5 }}/>
              </Form.Item>
            </Form>
              <Button style={{marginLeft:8}} type="default" onClick={()=>this.saveCurrentState()}>Back</Button>
              <Button style={{marginLeft:10}} type="primary">Submit</Button> 
            </Widget>
            </Col>
        </div>
      </div>
    );
  }
}


export default GeneralForm;
