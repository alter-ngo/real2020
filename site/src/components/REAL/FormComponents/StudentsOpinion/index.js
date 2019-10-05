import { Form, Radio, Input, Col, Select, Button,Icon,Tooltip } from "antd";
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
      question: [],
      radioOptions: [{ id: "Da" },
      { id: "Nu" },],

    };
    this.saveCurrentState = this.saveCurrentState.bind(this);
  }
  saveCurrentState(arg) {
    const { question, radioValue } = this.state;
    const { opinionVariables,radioValueStudents } = this.props;
    for (let i = 0; i <= 23; i++) {
      opinionVariables[i].value = question[i].value;
    }
    for(let i=0;i<=3;i++)
    {
      radioValueStudents[i].value=radioValue[i].value;
    }
    if (arg == "back")
      this.props.prevStep();
    else
      this.props.nextStep();
  };
  componentWillMount(){
    let auxq=[];
    for(let i=0;i<=23;i++){
      auxq.push(
        {value:""}
      );
    }
    this.setState({question:auxq});
  }
  componentDidMount() {
    const { opinionVariables,radioValueStudents } = this.props;
    let aux = this.state.question,radioAux=this.state.radioValue;

    for (let i = 0; i <= 23; i++) {
      aux[i].value = opinionVariables[i].value;
    }
    for(let i=0;i<=3;i++)
    {
      radioAux[i].value=radioValueStudents[i].value;
    }
    this.setState({
      question: aux,
      radioValue: radioAux,
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
    let { question, radioOptions, radioValue,widthSlider } = this.state;
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
                <Form.Item  label={<span>Ai acces la activități extracurriculare în afara liceului, care să fie promovate în cadrul liceului?&nbsp;       
                <Tooltip title="Se consideră activități extracurriculare externe: voluntariate, tabere, conferințe, ateliere etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[0].value} onChange={(value) => { this.handleSChange(value, 0) }} />
                </Form.Item>
                <Form.Item label={<span>Ai acces la activități extracurriculare organizate în cadrul liceului?&nbsp;       
                <Tooltip title="Se consideră activități extracurriculare interne: club de lectură, club de fotografie, cor etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[1].value} onChange={(value) => { this.handleSChange(value, 1) }} />
                </Form.Item>
                <Form.Item label={<span>Ai acces la susținere suplimentară pentru cultivarea performanțelor academice?&nbsp;       
                <Tooltip title="Se consideră susținere suplimantară organizarea de sesiuni de pregătire în afara orelor pentru concursuri, olimpiade, examene etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[2].value} onChange={(value) => { this.handleSChange(value, 2) }} />
                </Form.Item>
                <Form.Item label={<span>Ce părere ai despre nivelul dotărilor?&nbsp;       
                <Tooltip title="Prin dotări ne referim la: calculatoare, laboratoare, materiale didactice etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[3].value} onChange={(value) => { this.handleSChange(value, 3) }} />
                </Form.Item>
                <Form.Item label={<span>Ce părere ai despre starea dotărilor?&nbsp;       
                <Tooltip title="Prin starea dotărilor ne referim la stadiul de deteriorare și uzură al dotărilor.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[4].value} onChange={(value) => { this.handleSChange(value, 4) }} />
                </Form.Item>
                <Form.Item label={<span>Cât de curat consideri că este liceul?&nbsp;       
                <Tooltip title="Se referă la igiena băilor, a sălilor de clasă etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[5].value} onChange={(value) => { this.handleSChange(value, 5) }} />
                </Form.Item>

                <Form.Item label={<span>Ți s-a solicitat vreodată să contribui la fondul clasei?&nbsp;       
                <Tooltip title="Fondul clasei presupune strângerea banilor pentru achiziționarea unor resurse / bunuri pentru uz comun.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <Radio.Group onChange={this.onChange(0)} value={radioValue[0].value}>
                    {radioOpts}
                  </Radio.Group>
                </Form.Item>
                <Form.Item label={" Câte sesiuni de meditații ai pe săptămână?"}>
                  <TextArea value={question[6].value} onChange={this.handleChange(6)} autosize={{ minRows: 1, maxRows: 1 }} />
                </Form.Item>
                <Form.Item label={<span>Cât de satisfăcut ești de relația elev-profesor?&nbsp;       
                <Tooltip title="Întrebarea se referă la: respectul reciproc, devotamentul, susținerea acordată etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[7].value} onChange={(value) => { this.handleSChange(value, 7) }} />
                </Form.Item>
                <Form.Item label={<span>Cât de satisfăcut ești de relația elev-diriginte?&nbsp;       
                <Tooltip title="Întrebarea se referă la: desfășurarea orelor de dirigenție, atenția acordată problemelor personale etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[8].value} onChange={(value) => { this.handleSChange(value, 8) }} />
                </Form.Item>
                <Form.Item label={<span>Cât de interactive sunt orele de curs?&nbsp;       
                <Tooltip title="Interactivitatea presupune activitatea la oră și comunicarea deschisă dintre elevi și profesori.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[9].value} onChange={(value) => { this.handleSChange(value, 9) }} />
                </Form.Item>
                <Form.Item label={<span>Cât de implicați consideri că sunt profesorii pe parcursul orei de curs?&nbsp;       
                <Tooltip title="Întrebarea se referă la cât de mult își dau interesul profesorii în timpul predării.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[10].value} onChange={(value) => { this.handleSChange(value, 10) }} />
                </Form.Item>
                <Form.Item label={<span>Cât de des consideri că profesorii utilizează dotările?&nbsp;       
                <Tooltip title="Întrebarea presupune cât de des beneficiezi de uzul dotărilor(calculatoare, proiectoare, materiale audio-video etc.).">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[11].value} onChange={(value) => { this.handleSChange(value, 11) }} />
                </Form.Item>
                <Form.Item label={<span>Cât de mult consideri că profesorii pun accentul pe efort în afara orelor?&nbsp;       
                <Tooltip title="Prin efort în afara orelor ne referim la teme pentru acasă, proiecte etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[12].value} onChange={(value) => { this.handleSChange(value, 12) }} />
                </Form.Item>
                <Form.Item label={<span>Cât de mult consideri că profesorii pun accentul pe scoaterea in evidenta a unor anumite persoane?&nbsp;       
                <Tooltip title="Prin scoaterea in evidenta facem referire la compararea rezultatelor unor anumiți elevi sau menționarea unor elevi ca exemple negative sau pozitive.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[13].value} onChange={(value) => { this.handleSChange(value, 13) }} />
                </Form.Item>
                <Form.Item label={<span>Cât de mult te inspiră profesorii tăi?&nbsp;       
                <Tooltip title="Un profesor te poate inspira fiind un model de urmat din punct de vedere profesional, academic și personal.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[15].value} onChange={(value) => { this.handleSChange(value, 15) }} />
                </Form.Item>
                <Form.Item label={<span>Ai apelat la serviciile consilierilor scolari?&nbsp;       
                <Tooltip title="Conșiierii școlari pot ajuta prin susținere în decizii personale și profesionale.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <Radio.Group onChange={this.onChange(1)} value={radioValue[1].value}>
                    {radioOpts}
                  </Radio.Group>
                </Form.Item>
                <Form.Item label={<span>Cât de mult te-au ajutat consilierii școlari?&nbsp;       
                <Tooltip title="Conșiierii școlari pot ajuta prin susținere în decizii personale și profesionale.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[14].value} onChange={(value) => { this.handleSChange(value, 14) }} />
                </Form.Item>
                <Form.Item label={<span>Ai fost vreodată hărțuit de un profesor?&nbsp;       
                <Tooltip title="Prin hărțuire facem referire la violență fizică sau verbală, avansuri nepotrivite etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <Radio.Group onChange={this.onChange(2)} value={radioValue[2].value}>
                    {radioOpts}
                  </Radio.Group>
                </Form.Item>
                <Form.Item label={<span>Cât de relaxat te simți la liceu?&nbsp;       
                <Tooltip title="Prin gradul de relaxare ne referim la relațiile cu colegii și cu profesorii, la nivelul de stres etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[15].value} onChange={(value) => { this.handleSChange(value, 15) }} />
                </Form.Item>
                <Form.Item label={<span>Care sunt cele mai semnificative surse de stres resimțite de tine?&nbsp;       
                <Tooltip title="Povestește-ne de sursele care îți generează stres cel mai des.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <TextArea value={question[16].value} onChange={this.handleChange(16)} autosize={{ minRows: 1, maxRows: 1 }} />
                </Form.Item>
                <Form.Item label={<span>Cât de divers ți se pare colectivul liceului tău?&nbsp;       
                <Tooltip title="Diversitatea se referă la diferențele de mentalitate de la elev la elev.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[17].value} onChange={(value) => { this.handleSChange(value, 17) }} />
                </Form.Item>
                <Form.Item label={" Cât de ușor ți-a fost să te integrezi în colectiv?"}>
                <IconSlider marks={marks} min={1} max={10} value={question[18].value} onChange={(value) => { this.handleSChange(value, 18) }} />
                </Form.Item>
                <Form.Item label={<span>Cât de competitivi consideri că sunt colegii tăi?&nbsp;       
                <Tooltip title="Prin competitivitate ne referim la competiția pe note dintre colegi sau alte asemenea.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[19].value} onChange={(value) => { this.handleSChange(value, 19) }} />
                </Form.Item>
                <Form.Item label={<span>Ai fost vreodată hărțuit de colegi?&nbsp;       
                <Tooltip title="Prin hărțuire ne referim la violență fizică sau verbală, avansuri nepotrivite etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <Radio.Group onChange={this.onChange(3)} value={radioValue[3].value}>
                    {radioOpts}
                  </Radio.Group>
                </Form.Item>
                <Form.Item label={" Ce sfaturi i-ai da unui viitor elev în liceul tău?"}>
                  <TextArea value={question[20].value} onChange={this.handleChange(20)} autosize={{ minRows: 2, maxRows: 5 }} />
                </Form.Item>
                <Form.Item label={" Ce sfaturi le-ai da profesorilor tăi?"}>
                  <TextArea value={question[21].value} onChange={this.handleChange(21)} autosize={{ minRows: 2, maxRows: 5 }} />
                </Form.Item>
                <Form.Item label={" Ce recomandări ai propune conducerii liceului în care înveți?"}>
                  <TextArea value={question[22].value} onChange={this.handleChange(22)} autosize={{ minRows: 2, maxRows: 5 }} />
                </Form.Item>
                <Form.Item label={<span>Ce recomandări ai propune factorilor decizionali?&nbsp;       
                <Tooltip title="Factorii decizionali includ: Guvernul, Ministerul Educației Naționale etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <TextArea value={question[23].value} onChange={this.handleChange(23)} autosize={{ minRows: 2, maxRows: 5 }} />
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
