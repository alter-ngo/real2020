import { Form, Radio, Input, Col, Select, Button, Rate, Slider } from "antd";
import Widget from "components/Widget";
import React from "react";
import IconSlider from "components/REAL/FormComponents/IconSlider";
const { Option } = Select;
const { TextArea } = Input;
class StudentsOpinionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioValue: [
        {value: 0},
        {value: 0},
        {value: 0},
        {value: 0},],
      question: [{ value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },],
      radioOptions: [{ id: "Da" },
      { id: "Nu" },],

    };
    this.saveCurrentState = this.saveCurrentState.bind(this);
  }
  saveCurrentState(arg) {
    const { question, radioValue } = this.state;
    const { opinionVariables } = this.props;
    for (let i = 0; i <= 8; i++) {
      opinionVariables[i].value = question[i].value;
      console.log(opinionVariables[i].value);
    }
    if (arg == "back")
      this.props.prevStep();
    else
      this.props.nextStep();
  };
  componentDidMount() {
    const { opinionVariables } = this.props;
    let aux = this.state.question;
    for (let i = 0; i <= 8; i++) {
      aux[i].value = opinionVariables[i].value;
    }
    this.setState({
      question: aux,
    })

  }
  handleChange = input => e => {
    let aux = this.state.question;
    aux[input].value = e.target.value;
    this.setState({
      question: aux,
    });
  };
  handleSChange(value, input) {
    let aux = this.state.question;
    aux[input].value = value;
    this.setState({
      question: aux,
    });
  }
  onChange = input => e => {
    let aux = this.state.radioValue;
    aux[input].value = e.target.value;
    this.setState({
      radioValue: aux,
    });
  };

  render() {
    let radioOpts = [];
    let { question, radioOptions, radioValue } = this.state;
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const marks = {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
    };
    for (let i = 1; i <= 2; i++) {
      radioOpts.push(
        <Radio style={radioStyle} value={i}>
          {radioOptions[i - 1].id}
        </Radio>
      )
    }
    return (
      <div>
        <div className="gx-d-flex justify-content-center">
          <Col span={24}>
            <Widget>
              <Form layout={"vertical"}>
                <Form.Item label={" Ai acces la activități extracurriculare în afara liceului, care să fie promovate în cadrul liceului?"}>
                  <IconSlider marks={marks} min={1} max={10} value={question[0].value} onChange={(value) => { this.handleSChange(value, 0) }} />
                </Form.Item>
                <Form.Item label={" Ai acces la activități extracurriculare organizate în cadrul liceului?"}>
                  <IconSlider marks={marks} min={1} max={10} value={question[1].value} onChange={(value) => { this.handleSChange(value, 1) }} />
                </Form.Item>
                <Form.Item label={" Ai acces la susținere suplimentară pentru cultivarea performanțelor academice?"}>
                  <IconSlider marks={marks} min={1} max={10} value={question[2].value} onChange={(value) => { this.handleSChange(value, 2) }} />
                </Form.Item>
                <Form.Item label={" Ce părere ai despre nivelul dotărilor?"}>
                  <IconSlider marks={marks} min={1} max={10} value={question[3].value} onChange={(value) => { this.handleSChange(value, 3) }} />
                </Form.Item>
                <Form.Item label={" Ce părere ai despre starea dotărilor?"}>
                  <IconSlider marks={marks} min={1} max={10} value={question[4].value} onChange={(value) => { this.handleSChange(value, 4) }} />
                </Form.Item>
                <Form.Item label={" Cât de curat consideri că este liceul?"}>
                  <IconSlider marks={marks} min={1} max={10} value={question[5].value} onChange={(value) => { this.handleSChange(value, 5) }} />
                </Form.Item>
                <Form.Item label={" Ți s-a solicitat vreodată să contribui la fondul clasei?"}>
                  <Radio.Group onChange={this.onChange(0)} value={radioValue[0].value}>
                    {radioOpts}
                  </Radio.Group>
                </Form.Item>
                <Form.Item label={" Câte sesiuni de meditații ai pe săptămână?"}>
                  <TextArea value={question[7].value} onChange={this.handleChange(7)} autosize={{ minRows: 1, maxRows: 1 }} />
                </Form.Item>
                <Form.Item label={" Cât de satisfăcut ești de relația elev-profesor?"}>
                  <IconSlider marks={marks} min={1} max={10} value={question[8].value} onChange={(value) => { this.handleSChange(value, 8) }} />
                </Form.Item>
                <Form.Item label={" Cât de satisfăcut ești de relația elev-diriginte?"}>
                  <IconSlider marks={marks} min={1} max={10} value={question[9].value} onChange={(value) => { this.handleSChange(value, 9) }} />
                </Form.Item>
                <Form.Item label={" Cât de interactive sunt orele de curs?"}>
                  <IconSlider marks={marks} min={1} max={10} value={question[10].value} onChange={(value) => { this.handleSChange(value, 10) }} />
                </Form.Item>
                <Form.Item label={" Cât de implicați consideri că sunt profesorii pe parcursul orei de curs?"}>
                  <IconSlider marks={marks} min={1} max={10} value={question[11].value} onChange={(value) => { this.handleSChange(value, 11) }} />
                </Form.Item>
                <Form.Item label={" Cât de des consideri că profesorii utilizează dotările?"}>
                  <IconSlider marks={marks} min={1} max={10} value={question[12].value} onChange={(value) => { this.handleSChange(value, 12) }} />
                </Form.Item>
                <Form.Item label={" Cât de mult consideri că profesorii pun accentul pe efort în afara orelor?"}>
                  <IconSlider marks={marks} min={1} max={10} value={question[13].value} onChange={(value) => { this.handleSChange(value, 13) }} />
                </Form.Item>
                <Form.Item label={" Cât de mult consideri că profesorii pun accentul pe scoaterea in evidenta a unor anumite persoane?"}>
                  <IconSlider marks={marks} min={1} max={10} value={question[14].value} onChange={(value) => { this.handleSChange(value, 14) }} />
                </Form.Item>
                <Form.Item label={" Cât de mult te inspiră profesorii tăi?"}>
                  <IconSlider marks={marks} min={1} max={10} value={question[15].value} onChange={(value) => { this.handleSChange(value, 15) }} />
                </Form.Item>
                <Form.Item label={" Ai apelat la serviciile consilierilor scolari?"}>
                  <Radio.Group onChange={this.onChange(1)} value={radioValue[1].value}>
                    {radioOpts}
                  </Radio.Group>
                </Form.Item>
                <Form.Item label={" Cât de mult te-au ajutat consilierii școlari?"}>
                  <IconSlider marks={marks} min={1} max={10} value={question[17].value} onChange={(value) => { this.handleSChange(value, 17) }} />
                </Form.Item>
                <Form.Item label={" Ai fost vreodată hărțuit de un profesor?"}>
                  <Radio.Group onChange={this.onChange(2)} value={radioValue[2].value}>
                    {radioOpts}
                  </Radio.Group>
                </Form.Item>
                <Form.Item label={" Cât de relaxat te simți la liceu?"}>
                  <IconSlider marks={marks} min={1} max={10} value={question[19].value} onChange={(value) => { this.handleSChange(value, 19) }} />
                </Form.Item>
                <Form.Item label={" Care sunt cele mai semnificative surse de stres resimțite de tine?"}>
                  <TextArea value={question[20].value} onChange={this.handleChange(20)} autosize={{ minRows: 1, maxRows: 1 }} />
                </Form.Item>
                <Form.Item label={" Cât de divers ți se pare colectivul liceului tău?"}>
                <IconSlider marks={marks} min={1} max={10} value={question[21].value} onChange={(value) => { this.handleSChange(value, 21) }} />
                </Form.Item>
                <Form.Item label={" Cât de ușor ți-a fost să te integrezi în colectiv?"}>
                <IconSlider marks={marks} min={1} max={10} value={question[22].value} onChange={(value) => { this.handleSChange(value, 22) }} />
                </Form.Item>
                <Form.Item label={" Cât de competitivi consideri că sunt colegii tăi?"}>
                <IconSlider marks={marks} min={1} max={10} value={question[23].value} onChange={(value) => { this.handleSChange(value, 23) }} />
                </Form.Item>
                <Form.Item label={" Ai fost vreodată hărțuit de colegi?"}>
                  <Radio.Group onChange={this.onChange(3)} value={radioValue[3].value}>
                    {radioOpts}
                  </Radio.Group>
                </Form.Item>
                <Form.Item label={" Ce sfaturi i-ai da unui viitor elev în liceul tău?"}>
                  <TextArea value={question[25].value} onChange={this.handleChange(25)} autosize={{ minRows: 2, maxRows: 5 }} />
                </Form.Item>
                <Form.Item label={" Ce sfaturi le-ai da profesorilor tăi?"}>
                  <TextArea value={question[26].value} onChange={this.handleChange(26)} autosize={{ minRows: 2, maxRows: 5 }} />
                </Form.Item>
                <Form.Item label={" Ce recomandări ai propune conducerii liceului în care înveți?"}>
                  <TextArea value={question[27].value} onChange={this.handleChange(27)} autosize={{ minRows: 2, maxRows: 5 }} />
                </Form.Item>
                <Form.Item label={" Ce recomandări ai propune factorilor decizionali?"}>
                  <TextArea value={question[28].value} onChange={this.handleChange(28)} autosize={{ minRows: 2, maxRows: 5 }} />
                </Form.Item>
              </Form>
              <Button style={{ marginLeft: 8 }} type="default" onClick={() => this.saveCurrentState("back")}>Back</Button>
              <Button style={{ marginLeft: 10 }} type="primary" onClick={() => this.saveCurrentState("next")}>Next</Button>
            </Widget>
          </Col>
        </div>
      </div>
    );
  }
}


export default StudentsOpinionForm;
