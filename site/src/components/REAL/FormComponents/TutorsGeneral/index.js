import { InputNumber, Form, Radio, Slider, Col, Select, Button, Alert } from "antd";
import Widget from "components/Widget";
import React from "react";

const { Option } = Select;
class GeneralForm extends React.Component {
  constructor(props){
    super(props);  
  this.state = {
    valid: [],
    question:[],
  };
  this.validate=this.validate.bind(this);
  this.validateForm=this.validateForm.bind(this);
  this.saveCurrentState=this.saveCurrentState.bind(this);
  }
  componentWillMount(){
    let auxv=[],auxq=[];
    for(let i=0;i<=4;i++){
      auxq.push(
        {value:""}
      );
      auxv.push({status:"",txt:""});
    }
    this.setState({valid:auxv,question:auxq});
  }
    componentWillMount(){
      let auxv=[],auxq=[];
      for(let i=0;i<=4;i++){
        auxq.push(
          {value:""}
        );
        auxv.push({status:"",txt:""});
      }
      this.setState({valid:auxv,question:auxq});
    }
    saveCurrentState(){
      const {generalVariables} = this.props;
      const {question} = this.state;
      for(let i=0;i<=4;i++){
        generalVariables[i].value=question[i].value;
      }
      this.props.nextStep();
    }
    componentDidMount(){
      const {generalVariables}= this.props;
      let aux=this.state.question;
      for(let i=0;i<=4;i++){
        aux[i].value=generalVariables[i].value;
      }
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
    handleChange(value,input){
      this.validate(input);
      let aux = this.state.question;
      aux[input].value = value;
      this.setState({
        question: aux,
      });
   };
   validateForm(){
    const {question}=this.state;
    let ok=true;
    let aux=this.state.valid;
     for(let i=0;i<=4;i++){
       if(question[i].value==""){
         aux[i].status="error";
         aux[i].txt="*Acest câmp este obligatoriu.";
         ok=false;
       }
     }
     this.setState({valid:aux});
     if(ok){
       this.saveCurrentState();
     }
   }
  render() {
    const {valid,question}=this.state;
    let judete = [], licee = [], localitati = [];
    for (let i = 1; i <= 6; i++) {
      judete.push(
        <Select.Option key={"Judet" + i}>
          {"Judet" + i}
        </Select.Option>
      )
      licee.push(
        <Select.Option key={"Liceul" + i}>
          {"Liceul" + i}
        </Select.Option>
      )
      localitati.push(
        <Select.Option key={"Localitatea" + i}>
          {"Localitatea" + i}
        </Select.Option>
      )
    }
    return (
    <Widget>
      <Form layout={"vertical"}>
      <Alert
        message="Notă privind completarea multiplă"
        description="În cazul în care aveți copii care învață la licee diferite, vă rugăm să completați formularul o dată pentru fiecare liceu."
        type="info"
        showIcon
      />
        <br/>
        <Form.Item validateStatus={valid[0].status} help={valid[0].txt} label={" Ce vârstă aveți?"}>
          <InputNumber min={20} max={90} value={question[0].value} onChange={(value)=>{this.handleChange(value, 0)}} />
        </Form.Item>


        <Form.Item validateStatus={valid[1].status} help={valid[1].txt} label=" Gen">
          <Select style={{ width: 200 }} placeholder="Selectează" value={question[1].value || undefined}  onChange={(value)=>{this.handleChange(value, 1)}}>
            <Option value="male">Masculin</Option>
            <Option value="female">Feminin</Option>
            <Option value="unspecfied">Nu doresc să menționez</Option>
          </Select>
        </Form.Item>
        <Form.Item validateStatus={valid[2].status} help={valid[2].txt} label={" În ce județ învață copilul dumneavoastră?"}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Selectează județul"
            onChange={(value)=>{this.handleChange(value, 2)}}
            value={question[2].value || undefined}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {judete}
          </Select>
        </Form.Item>
        <Form.Item validateStatus={valid[3].status} help={valid[3].txt} label={" În ce localitate învață copilul dumneavoastră?"}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Selectează localitatea"
            onChange={(value)=>{this.handleChange(value, 3)}}
            value={question[3].value || undefined}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {localitati}
          </Select>
        </Form.Item>
        <Form.Item validateStatus={valid[4].status} help={valid[4].txt} label={" La ce liceu învață copilul dumneavoastră?"}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Selectează liceul"
            onChange={(value)=>{this.handleChange(value, 4)}}
            value={question[4].value || undefined}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {licee}
          </Select>
        </Form.Item>
      </Form>
        <br/>
        <Button type="primary" style={{marginLeft:8}} onClick={()=>this.validateForm()}>Next</Button>
      </Widget>
    );
  }
}


export default GeneralForm;
