import { InputNumber, Form, Radio, Select, Button } from "antd";
import React from "react";
import Widget from "components/Widget";
const { Option } = Select;
class GeneralForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    age: 12,
    gen: "",
    localitate: "",
    judet: "",
    liceu:"",
    litera: "",
    class: "",
    filiera: "",
    specializare: "",
    profil: "",
  };
  this.changeRadio=this.changeRadio.bind(this);
  }
  saveCurrentState(){
    const {generalVariables}= this.props;
    generalVariables[0].value=this.state.age;
    generalVariables[1].value=this.state.gen;
    generalVariables[2].value=this.state.judet;
    generalVariables[3].value=this.state.localitate;
    generalVariables[4].value=this.state.liceu;
    generalVariables[5].value=this.state.class;
    generalVariables[6].value=this.state.litera;
    generalVariables[7].value=this.state.filiera;
    generalVariables[8].value=this.state.profil;
    generalVariables[9].value=this.state.specializare;
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
      class: generalVariables[5].value,
      litera: generalVariables[6].value,
      filiera: generalVariables[7].value,
      specializare: generalVariables[9].value,
      profil: generalVariables[8].value,
    });
  }
  handleChange(value, input){
     this.setState({ [input]: value});
  };
  changeRadio = e => {
    this.setState({
      class: e.target.value,
    });
  }

  render() {
    let judete = [], licee = [], specializari = [], profile = [], filiere = [], localitati = [], litere = [];
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
      filiere.push(
        <Select.Option key={"Filiera" + i}>
          {"Filiera" + i}
        </Select.Option>
      )
      profile.push(
        <Select.Option key={"Profil" + i}>
          {"Profil" + i}
        </Select.Option>
      )
      specializari.push(
        <Select.Option key={"Specializarea" + i}>
          {"Specializarea" + i}
        </Select.Option>
      )
      litere.push(
        <Select.Option key={"Litera" + i}>
          {"Litera" + i}
        </Select.Option>
      )
    }
    return (
    <Widget>
      <Form layout={"vertical"} >

        <Form.Item label={" Ce vârstă ai?"}>
          <InputNumber min={12} max={25} value={this.state.age} onChange={(value)=>{this.handleChange(value, 'age')}}/>
        </Form.Item>
        <Form.Item label=" Gen">
          <Select style={{ width: 200 }} placeholder="Selectează" value={this.state.gen || undefined}  onChange={(value)=>{this.handleChange(value, 'gen')}}>
            <Option value="male">Masculin</Option>
            <Option value="female">Feminin</Option>
            <Option value="unspecfied">Nu doresc să menționez</Option>
          </Select>
        </Form.Item>
        <Form.Item label={" În ce județ înveți?"}>
          <Select
            showSearch
            style={{ width: 200 }}
            onChange={(value)=>{this.handleChange(value, 'judet')}}
            value={this.state.judet || undefined}
            placeholder="Selectează județul"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {judete}
          </Select>
        </Form.Item>
        <Form.Item label={" În ce localitate înveți?"}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Selectează localitatea"            
            optionFilterProp="children"
            value={this.state.localitate || undefined}
            onChange={(value)=>{this.handleChange(value, 'localitate')}}
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {localitati}
          </Select>
        </Form.Item>
        <Form.Item label={" La ce liceu înveți?"}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Selectează liceul"
            value={this.state.liceu || undefined}
            optionFilterProp="children"
            onChange={(value)=>{this.handleChange(value, 'liceu')}}
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {licee}
          </Select>
        </Form.Item>
        <Form.Item label={" Ce clasă ești?"}>
          <Radio.Group buttonStyle="solid" value={this.state.class || undefined} onChange={this.changeRadio}>
            <Radio.Button value="IX">a IX-a</Radio.Button>
            <Radio.Button value="X">a X-a</Radio.Button>
            <Radio.Button value="XI">a XI-a</Radio.Button>
            <Radio.Button value="XII">a XII-a</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label={" La ce literă ești?"}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Selectează litera"
            value={this.state.litera || undefined}
            onChange={(value)=>{this.handleChange(value, 'litera')}}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {litere}
          </Select>
        </Form.Item>
        <Form.Item label={" La ce filieră înveți?"}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Selectează filiera"
            value={this.state.filiera || undefined}
            onChange={(value)=>{this.handleChange(value, 'filiera')}}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {filiere}
          </Select>
        </Form.Item>
        <Form.Item label={" La ce profil înveți?"}>
          <Select
            showSearch
            style={{ width: 200 }}
            onChange={(value)=>{this.handleChange(value, 'profil')}}
            placeholder="Selectează profilul"
            value={this.state.profil || undefined}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {profile}
          </Select>
        </Form.Item>
        <Form.Item label={" La ce specializare înveți?"}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Selectează specializarea"
            optionFilterProp="children"
            value={this.state.specializare || undefined}
            onChange={(value)=>{this.handleChange(value, 'specializare')}}
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {specializari}
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
