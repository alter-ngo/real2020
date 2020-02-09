import {Form,Radio,Input,Col,Button } from "antd";
import Widget from "../../Widget";
import React from "react";
const { TextArea } = Input;
class FeedbackForm extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    valid:[],
    question:[],    
    radioOptions: [{id:"Facebook"},
                   {id:"Instagram"},
                   {id:"Youtube"},
                   {id:"Prieteni"},
                   {id:"Profesori"},
                   {id:"Parinti"},
                   {id:"Altele"}],
  };
  this.validate=this.validate.bind(this);
  this.saveCurrentState=this.saveCurrentState.bind(this);
  this.validateForm=this.validateForm.bind(this);
  }
  componentWillMount(){
    let auxv=[],auxq=[];
    for(let i=0;i<=3;i++){
      auxq.push({value:""});
      auxv.push({status:"",txt:""});
    }
    auxq.push({value:"",altele:true});
    auxv.push({status:"",txt:""});
    this.setState({valid:auxv,question:auxq});
  }
  saveCurrentState(arg){
    const {FeedbackVariables} = this.props;
    const {question} = this.state;
    for(let i=0;i<=3;i++){
      FeedbackVariables[i].value=question[i].value;
    }
    FeedbackVariables[4].altele=question[4].altele;
    FeedbackVariables[4].value=question[4].value;
    if (arg == "back")
      this.props.prevStep();
    else
      this.props.onSubmit();
  }
  componentDidMount(){
    const {FeedbackVariables}= this.props;
    let aux=this.state.question;
    for(let i=0;i<=3;i++){
      aux[i].value=FeedbackVariables[i].value;
    }
    aux[4].altele=FeedbackVariables[4].altele;
    aux[4].value=FeedbackVariables[4].value;
    this.setState({question:aux});
  }
  validate(input){
    let aux = this.state.valid;
    if(this.state.question[input].value=""){
      aux[input].status="error";
      aux[input].txt="*Acest câmp este obligatoriu.";
    }
    else{
      aux[input].status="success"; 
      aux[input].txt="";
    }
    this.setState({valid:aux});
    
  }
  handleChange = input => e => {
    this.validate(input);
    let aux = this.state.question;
    aux[input].value = e.target.value;
    this.setState({
      question: aux,
    });  
  };
  onChange =input => e => {
    this.validate(2);
    let aux=this.state.question;
    if(e.target.value=="Altele"){
      aux[input].value=e.target.value;
      aux[4].altele=false;
    }else{
      aux[input].value=e.target.value;
      aux[4].altele=true;
    }
    this.setState({question:aux});
  };
  validateForm(arg){
  const {question}=this.state;
  let ok=true;
  let aux=this.state.valid;
   for(let i=0;i<=3;i++){
     if(question[i].value==""){
       aux[i].status="error";
       aux[i].txt="*Acest câmp este obligatoriu.";
       ok=false;
     }
   }
   if(question[4].altele==false){
     if(question[4].value==""){
      aux[4].status="error";
      aux[4].txt="*Acest câmp este obligatoriu.";
      ok=false;
     }

   }
   this.setState({valid:aux});
   if(ok){
     this.saveCurrentState(arg);
   }
 }
  render() { 
    let radioOpts=[];
    const {radioOptions,question,valid}=this.state;   
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    for(let i =1; i<=7;i++){
      radioOpts.push(
        <Radio style={radioStyle} value={radioOptions[i-1].id}>
        {radioOptions[i-1].id}
      </Radio>
      )
    }
    return (
      <div>
        <div className="gx-d-flex justify-content-center">
          <Col span={24}>
            <Widget>
            <Form  layout={"vertical"}>
              <Form.Item validateStatus={valid[0].status} help={valid[0].txt} label={" Ce te-a motivat să ajungi la sfârșitul formularului?"}>
              <TextArea  value={question[0].value} onChange={this.handleChange(0)} autosize={{ minRows: 3, maxRows: 5 }}/>
              </Form.Item>
              <Form.Item validateStatus={valid[1].status} help={valid[1].txt} label={" Ce întrebare ai adăuga în formular?"}>
              <TextArea  value={question[1].value} onChange={this.handleChange(1)} autosize={{ minRows: 1, maxRows: 3 }}/>
              </Form.Item>

              <Form.Item validateStatus={valid[2].status} help={valid[2].txt} label={" Cum ai aflat de formular?"}>
                <Radio.Group onChange={this.onChange(2)} value={question[2].value}>
                  {radioOpts}
                </Radio.Group>
              </Form.Item>
              <Form.Item validateStatus={valid[4].status} help={valid[4].txt}>
                <Input disabled={question[4].altele} value={question[4].value || undefined} onChange={this.handleChange(4)}/></Form.Item>
              <Form.Item validateStatus={valid[3].status} help={valid[3].txt} label={" Ai recomandări pentru echipa #estereal?"}>
              <TextArea  value={question[3].value} onChange={this.handleChange(3)} autosize={{ minRows: 2, maxRows: 5 }}/>
              </Form.Item>
            </Form>
              <Button style={{marginLeft:8}} type="default" onClick={()=>this.validateForm("back")}>Back</Button>
              <Button style={{marginLeft:10}} type="primary" onClick={()=>this.validateForm("submit")}>Submit</Button> 
            </Widget>
            </Col>
        </div>
      </div>
    );
  }
}


export default FeedbackForm;
