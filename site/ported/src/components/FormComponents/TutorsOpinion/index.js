import { Form, Radio, Input, Button,Icon,Tooltip} from "antd";
import Widget from "../../Widget";
import React from "react";
import IconSlider from "../IconSlider";
const { TextArea } = Input;
class TutorsOpinionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: [],
      radioOptions: [{ id: "Da" },{ id: "Nu" },]
    };
    this.saveCurrentState = this.saveCurrentState.bind(this);
    this.validate=this.validate.bind(this);
    this.validateForm=this.validateForm.bind(this);
  }
  saveCurrentState(arg) {
    const { question } = this.state;
    const { opinionVariables } = this.props;
    for (let i = 0; i <= 10; i++) {
      opinionVariables[i].value = question[i].value;
    }
    if (arg == "back")
      this.props.prevStep();
    else
      this.props.nextStep();
  };
  componentWillMount(){
    let auxq=[],auxv=[];
    for (let i=0;i<=10;i++){
      auxq.push(
        {value:""}
      );
      auxv.push({status:"",txt:""});
    }
    auxv.push({status:"",txt:""});
    this.setState({question:auxq,valid:auxv});

  }
  validateForm(arg){
   const {question}=this.state;
   let ok=true;
   let aux=this.state.valid;
    for(let i=0;i<=10;i++){
      if(question[i].value==""){
        aux[i].status="error";
        aux[i].txt="*Acest câmp este obligatoriu.";
        ok=false;
      }
    }
    this.setState({valid:aux});
    if(ok){
      this.saveCurrentState(arg);
    }
  }
  componentDidMount() {
    const { opinionVariables} = this.props;
    let aux = this.state.question,evmAux=[];

    for (let i = 0; i <= 10; i++) {
      aux[i].value = opinionVariables[i].value;
    }
    this.setState({question: aux,});
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
  handleSChange(value, input) {
    this.validate(input);
    let aux = this.state.question;
    aux[input].value = value;
    this.setState({
      question: aux,
    });
  }
  render() {
    let radioOpts = [];
    let { question, radioOptions, valid } = this.state;
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
        <Radio style={radioStyle} value={radioOptions[i - 1].id}>
          {radioOptions[i - 1].id}
        </Radio>
      )
    }
    return (
      <div>
        <div className="gx-d-flex justify-content-center">
            <Widget>
              <Form layout={"vertical"}>
                <Form.Item validateStatus={valid[0].status} help={valid[0].txt} label={<span>Cât de ușor credeți că le este elevilor să acceseze activități extracurriculare în afara liceului, care să fie promovate în cadrul liceului?&nbsp;       
                <Tooltip title="Se consideră activități extracurriculare externe: voluntariate, tabere, conferințe, ateliere etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <IconSlider marks={marks} min={1} max={10} value={question[0].value} onChange={(value) => { this.handleSChange(value, 0) }} />
                </Form.Item>
                <Form.Item validateStatus={valid[1].status} help={valid[1].txt} label={<span>Cât de ușor credeți că le este elevilor să acceseze activități extracurriculare interne?&nbsp;       
                <Tooltip title="Se consideră activități extracurriculare interne: cluburi de lectură, cor etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <IconSlider marks={marks} min={1} max={10} value={question[1].value} onChange={(value) => { this.handleSChange(value, 1) }} />
                </Form.Item>
                <Form.Item validateStatus={valid[2].status} help={valid[2].txt} label={<span>Credeți că liceul oferă elevilor susținere suplimentară pentru cultivarea performanțelor academice?&nbsp;       
                <Tooltip title="Prin organizare de sesiuni de pregătire în afara orelor pentru concursuri, olimpiade, examene etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <IconSlider marks={marks} min={1} max={10} value={question[2].value} onChange={(value) => { this.handleSChange(value, 2) }} />
                </Form.Item>
                <Form.Item validateStatus={valid[10].status} help={valid[10].txt} label={<span>În clasa copilului dumneavoastră există fondul clasei?&nbsp;       
                <Tooltip title="Fondul clasei presupune strângerea banilor pentru achiziționarea unor resurse / bunuri.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <Radio.Group onChange={this.handleChange(10)} value={question[10].value}>
                    {radioOpts}
                  </Radio.Group>
                </Form.Item>
                <Form.Item validateStatus={valid[3].status} help={valid[3].txt} label={" În cazul în care copilul dumneavoastră face meditații, câți bani alocați pe săptămână ședințelor?"}>
                  <TextArea value={question[3].value} onChange={this.handleChange(3)} autosize={{ minRows: 1, maxRows: 1 }} />
                </Form.Item>
                <Form.Item validateStatus={valid[4].status} help={valid[4].txt} label={<span>Cât de satisfăcut sunteți de relația dintre dumneavoastră și dirigintele copilului dumneavoastră?&nbsp;       
                <Tooltip title="Întrebarea face referire la: respectul reciproc, devotamentul si susținerea acordată etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <IconSlider marks={marks} min={1} max={10} value={question[4].value} onChange={(value) => { this.handleSChange(value, 4) }} />
                </Form.Item>
                <Form.Item validateStatus={valid[5].status} help={valid[5].txt} label={<span>Cât de satisfăcut sunteți de relația dintre dumneavoastră și conducerea liceului la care învață copilul dumneavoastră?&nbsp;       
                <Tooltip title="Întrebarea face referire la: respectul reciproc, deschiderea conducerii de a primi propuneri de la dumneavoastră, susținerea acordată etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <IconSlider marks={marks} min={1} max={10} value={question[5].value} onChange={(value) => { this.handleSChange(value, 5) }} />
                </Form.Item>
                <Form.Item validateStatus={valid[6].status} help={valid[6].txt} label={<span>Cât de satisfăcut sunteți de relația dintre dumneavoastră și profesorii copilul dumneavoastră?&nbsp;       
                <Tooltip title="Întrebarea face referire la: respectul reciproc, deschiderea profesorilor de a primi propuneri de la dumneavoastră, susținerea acordată etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <IconSlider marks={marks} min={1} max={10} value={question[6].value} onChange={(value) => { this.handleSChange(value, 6) }} />
                </Form.Item>
                <Form.Item validateStatus={valid[7].status} help={valid[7].txt} label={" Ce recomandări ați oferi părinților care vor să își înscrie copiii la liceul copilului dumneavoastră?"}>
                  <TextArea value={question[7].value} onChange={this.handleChange(7)} autosize={{ minRows: 2, maxRows: 5 }} />
                </Form.Item>
                <Form.Item validateStatus={valid[8].status} help={valid[8].txt} label={" Ce recomandări ați oferi conducerii liceului la care învață copilul dumneavoastră?"}>
                  <TextArea value={question[8].value} onChange={this.handleChange(8)} autosize={{ minRows: 2, maxRows: 5 }} />
                </Form.Item>
                <Form.Item validateStatus={valid[9].status} help={valid[9].txt} label={<span>Ce recomandări ați oferi factorilor decizionali?&nbsp;       
                <Tooltip title="Factorii decizionali includ: Guvernul, Ministerul Educației etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <TextArea value={question[9].value} onChange={this.handleChange(9)} autosize={{ minRows: 2, maxRows: 5 }} />
                </Form.Item>
              </Form>
              <Button style={{ marginLeft: 8 }} type="default" onClick={() => this.validateForm("back")}>Back</Button>
              <Button style={{ marginLeft: 10 }} type="primary" onClick={() => this.validateForm("next")}>Next</Button>
            </Widget>
        </div>
      </div>
    );
  }
}


export default TutorsOpinionForm;
