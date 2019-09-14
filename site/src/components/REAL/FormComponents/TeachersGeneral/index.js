import { InputNumber, Form, Radio, Slider, Col, Select, Button } from "antd";
import Widget from "components/Widget";
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
    }
    return (

      <Form layout={"vertical"}>

        <Form.Item label={" Ce vârstă aveți?"}>
          <InputNumber min={9} max={90} />
        </Form.Item>


        <Form.Item label=" Gen">
          <Select style={{ width: 200 }} placeholder="Selectează" onChange={this.handleSelectChange}>
            <Option value="male">Masculin</Option>
            <Option value="female">Feminin</Option>
            <Option value="unspecfied">Nu doresc să menționez</Option>
          </Select>
        </Form.Item>
        <Form.Item label={" În ce județ predați?"}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Selectează județul"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {judete}
          </Select>
        </Form.Item>
        <Form.Item label={" În ce localitate predați?"}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Selectează localitatea"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {localitati}
          </Select>
        </Form.Item>
        <Form.Item label={" La ce liceu predați?"}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Selectează liceul"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {licee}
          </Select>
        </Form.Item>
      </Form>

    );
  }
}


export default GeneralForm;
