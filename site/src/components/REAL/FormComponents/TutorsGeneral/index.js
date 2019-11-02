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
    for(let i=0;i<=9;i++){
      auxq.push({value:""});
      auxv.push({status:"",txt:""});
    }
    this.setState({valid:auxv,question:auxq});
  }
    saveCurrentState(){
      const {generalVariables} = this.props;
      const {question} = this.state;
      for(let i=0;i<=9;i++){
        generalVariables[i].value=question[i].value;
      }
      this.props.nextStep();
    }
    componentDidMount(){
      const {generalVariables}= this.props;
      let aux=this.state.question;
      for(let i=0;i<=9;i++){
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
   handleChangeRadio = input => e => {
    this.validate(input);
    let aux = this.state.question;
    aux[input].value = e.target.value;
    this.setState({
      question: aux,
    });
  }
   validateForm(){
    const {question}=this.state;
    let ok=true;
    let aux=this.state.valid;
     for(let i=0;i<=9;i++){
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
    let judete = [], licee = [], localitati = [], clase = [], litere = [], filiere = [], profile = [], specializari = [];
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

      litere.push(
        <Select.Option key={"Litera" + i}>
          {"Litera" + i}
        </Select.Option>
      )
      filiere.push(
        <Select.Option key={"Filiera" + i}>
          {"Filiera" + i}
        </Select.Option>
      )
      profile.push(
        <Select.Option key={"Profilul" + i}>
          {"Profilul" + i}
        </Select.Option>
      )
      specializari.push(
        <Select.Option key={"Specializarea" + i}>
          {"Specializarea" + i}
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

        <Form.Item validateStatus={valid[5].status} help={valid[5].txt} label={" În ce clasă este copilul dumneavoastră?"}>
            <Radio.Group buttonStyle="solid" value={question[5].value || undefined} onChange={this.handleChangeRadio(5)}>
              <Radio.Button value={"IX"}>a IX-a</Radio.Button>
              <Radio.Button value={"X"}>a X-a</Radio.Button>
              <Radio.Button value={"XI"}>a XI-a</Radio.Button>
              <Radio.Button value={"XII"}>a XII-a</Radio.Button>
            </Radio.Group>
        </Form.Item>

        <Form.Item validateStatus={valid[6].status} help={valid[6].txt} label={" Care este litera clasei copilului dumneavoastră?"}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Selectează litera"
            onChange={(value)=>{this.handleChange(value, 6)}}
            value={question[6].value || undefined}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {litere}
          </Select>
        </Form.Item>

        <Form.Item validateStatus={valid[7].status} help={valid[7].txt} label={" La ce filieră este copilul dumneavoastra?"}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Selectează filiera"
            onChange={(value)=>{this.handleChange(value, 7)}}
            value={question[7].value || undefined}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {filiere}
          </Select>
        </Form.Item>

        <Form.Item validateStatus={valid[8].status} help={valid[8].txt} label={" La ce profil învata copilul dumneavoastra?"}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Selectează profilul"
            onChange={(value)=>{this.handleChange(value, 8)}}
            value={question[8].value || undefined}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {profile}
          </Select>
        </Form.Item>

        <Form.Item validateStatus={valid[9].status} help={valid[9].txt} label={" Care este specializarea copilului dumneavoastră?"}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Selectează specializarea"
            onChange={(value)=>{this.handleChange(value, 9)}}
            value={question[9].value || undefined}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {specializari}
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
