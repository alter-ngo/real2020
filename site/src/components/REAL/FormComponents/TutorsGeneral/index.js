import { InputNumber, Form, Radio, Slider, Col, Select, Button, Alert } from "antd";
import Widget from "components/Widget";
import React from "react";

const { Option } = Select;
class GeneralForm extends React.Component {
  state = {
    age: "",
    gen: "",
    judet: "",
    localitate: "",
    liceu: "",
  };
  saveCurrentState(){
    const {generalVariables}= this.props;
    generalVariables[0].value=this.state.age;
    generalVariables[1].value=this.state.gen;
    generalVariables[2].value=this.state.judet;
    generalVariables[3].value=this.state.localitate;
    generalVariables[4].value=this.state.liceu;
    this.props.nextStep();
  }
  componentWillMount(){
    const {generalVariables}= this.props;
    this.setState({
      age: generalVariables[0].value,
      gen: generalVariables[1].value,
      localitate: generalVariables[3].value,
      judet: generalVariables[2].value,
      liceu: generalVariables[4].value,
    });
  }
  handleChange(value, input){
    this.setState({ [input]: value});
 };
  render() {
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
        <Form.Item label={" Ce vârstă aveți?"}>
          <InputNumber min={9} max={90} value={this.state.age} onChange={(value)=>{this.handleChange(value, 'age')}} />
        </Form.Item>


        <Form.Item label=" Gen">
          <Select style={{ width: 200 }} placeholder="Selectează" value={this.state.gen || undefined}  onChange={(value)=>{this.handleChange(value, 'gen')}}>
            <Option value="male">Masculin</Option>
            <Option value="female">Feminin</Option>
            <Option value="unspecfied">Nu doresc să menționez</Option>
          </Select>
        </Form.Item>
        <Form.Item label={" În ce județ învață copilul dumneavoastră?"}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Selectează județul"
            onChange={(value)=>{this.handleChange(value, 'judet')}}
            value={this.state.judet || undefined}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {judete}
          </Select>
        </Form.Item>
        <Form.Item label={" În ce localitate învață copilul dumneavoastră?"}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Selectează localitatea"
            onChange={(value)=>{this.handleChange(value, 'localitate')}}
            value={this.state.localitate || undefined}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {localitati}
          </Select>
        </Form.Item>
        <Form.Item label={" La ce liceu învață copilul dumneavoastră?"}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Selectează liceul"
            onChange={(value)=>{this.handleChange(value, 'liceu')}}
            value={this.state.liceu || undefined}
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
        <Button type="primary" style={{marginLeft:8}} onClick={()=>this.saveCurrentState()}>Next</Button>
      </Widget>
    );
  }
}


export default GeneralForm;
