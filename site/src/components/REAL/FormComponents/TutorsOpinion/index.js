import { Form, Radio, Input, Col, Select, Button,Icon,Tooltip} from "antd";
import Widget from "components/Widget";
import React from "react";
import IconSlider from "components/REAL/FormComponents/IconSlider";
const { Option } = Select;
const { TextArea } = Input;
class TutorsOpinionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioValue: 0,
      question: [],
      radioOptions: [{ id: "Da" },{ id: "Nu" },],

    };
    this.saveCurrentState = this.saveCurrentState.bind(this);
  }
  saveCurrentState(arg) {
    const { question, radioValue } = this.state;
    const { opinionVariables } = this.props;
    for (let i = 0; i <= 8; i++) {
      opinionVariables[i].value = question[i].value;
    }
    opinionVariables[9].value = radioValue;
    if (arg == "back")
      this.props.prevStep();
    else
      this.props.nextStep();
  };
  componentWillMount(){
    let aux=[];
    for(let i =0;i<=8;i++){
      aux.push(
        {value: ""}
      );
    }
    this.setState({question:aux});
  }
  componentDidMount() {
    const { opinionVariables } = this.props;
    let aux = this.state.question;
    for (let i = 0; i <= 8; i++) {
      aux[i].value = opinionVariables[i].value;
    }
    this.setState({
      question: aux,
      radioValue: opinionVariables[9].value,
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
  onChange = e => {
    this.setState({
      radioValue: e.target.value
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
                <Form.Item label={<span>Cât de ușor credeți că le este elevilor să acceseze activități extracurriculare în afara liceului, care să fie promovate în cadrul liceului?&nbsp;       
                <Tooltip title="Se consideră activități extracurriculare externe: voluntariate, tabere, conferințe, ateliere etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <IconSlider marks={marks} min={1} max={10} value={question[0].value} onChange={(value) => { this.handleSChange(value, 0) }} />
                </Form.Item>
                <Form.Item label={<span>Cât de ușor credeți că le este elevilor să acceseze activități extracurriculare interne?&nbsp;       
                <Tooltip title="Se consideră activități extracurriculare interne: cluburi de lectură, cor etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <IconSlider marks={marks} min={1} max={10} value={question[1].value} onChange={(value) => { this.handleSChange(value, 1) }} />
                </Form.Item>
                <Form.Item label={<span>Credeți că liceul oferă elevilor susținere suplimentară pentru cultivarea performanțelor academice?&nbsp;       
                <Tooltip title="Prin organizare de sesiuni de pregătire în afara orelor pentru concursuri, olimpiade, examene etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <IconSlider marks={marks} min={1} max={10} value={question[2].value} onChange={(value) => { this.handleSChange(value, 2) }} />
                </Form.Item>
                <Form.Item label={<span>În clasa copilului dumneavoastră există fondul clasei?&nbsp;       
                <Tooltip title="Fondul clasei presupune strângerea banilor pentru achiziționarea unor resurse / bunuri.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <Radio.Group onChange={this.onChange} value={radioValue}>
                    {radioOpts}
                  </Radio.Group>
                </Form.Item>
                <Form.Item label={" În cazul în care copilul dumneavoastră face meditații, câți bani alocați pe săptămână ședințelor?"}>
                  <TextArea value={question[3].value} onChange={this.handleChange(3)} autosize={{ minRows: 1, maxRows: 1 }} />
                </Form.Item>
                <Form.Item label={<span>Cât de satisfăcut sunteți de relația dintre dumneavoastră și dirigintele copilului dumneavoastră?&nbsp;       
                <Tooltip title="Întrebarea face referire la: respectul reciproc, devotamentul si susținerea acordată etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <IconSlider marks={marks} min={1} max={10} value={question[4].value} onChange={(value) => { this.handleSChange(value, 4) }} />
                </Form.Item>
                <Form.Item label={<span>Cât de satisfăcut sunteți de relația dintre dumneavoastră și conducerea liceului la care învață copilul dumneavoastră?&nbsp;       
                <Tooltip title="Întrebarea face referire la: respectul reciproc, deschiderea conducerii de a primi propuneri de la dumneavoastră, susținerea acordată etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <IconSlider marks={marks} min={1} max={10} value={question[5].value} onChange={(value) => { this.handleSChange(value, 5) }} />
                </Form.Item>
                <Form.Item label={" Ce recomandări ați oferi părinților care vor să își înscrie copiii la liceul copilului dumneavoastră?"}>
                  <TextArea value={question[6].value} onChange={this.handleChange(6)} autosize={{ minRows: 2, maxRows: 5 }} />
                </Form.Item>
                <Form.Item label={" Ce recomandări ați oferi conducerii liceului la care învață copilul dumneavoastră?"}>
                  <TextArea value={question[7].value} onChange={this.handleChange(7)} autosize={{ minRows: 2, maxRows: 5 }} />
                </Form.Item>
                <Form.Item label={<span>Ce recomandări ați oferi factorilor decizionali?&nbsp;       
                <Tooltip title="Factorii decizionali includ: Guvernul, Ministerul Educației etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <TextArea value={question[8].value} onChange={this.handleChange(8)} autosize={{ minRows: 2, maxRows: 5 }} />
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


export default TutorsOpinionForm;
