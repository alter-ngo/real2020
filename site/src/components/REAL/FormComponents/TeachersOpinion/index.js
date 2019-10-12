import { Form, Radio, Input, Select, Button,Tooltip,Icon } from "antd";
import Widget from "components/Widget";
import React from "react";
import IconSlider from "components/REAL/FormComponents/IconSlider";
const { Option } = Select;
class StudentsOpinionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvMeth: [],
      valid: [],
      question: [],
      radioOptions: [{ id: "Da" },{ id: "Nu" },],
      teachOpts:[{id:"Test Scris"},{id:"Ascultare orală"},{id:"Proiect Individual"},{id:"Proiect în Echipă"},{id:"Evaluarea Temei"},{id:"Altele"}],
      timeIntervals:[{id:"Zilnic"},{id:"O data pe saptamana"},{id:"O data pe luna"},{id:"O data pe semestru"},{id:"Deloc"}],
      
    };
    this.saveCurrentState = this.saveCurrentState.bind(this);
    this.validateForm=this.validateForm.bind(this);
    this.validate=this.validate.bind(this);
  }
  saveCurrentState(arg) {
    const { question,selectedEvMeth } = this.state;
    const { opinionVariables,methodsOfEvaluation } = this.props;
    for (let i = 0; i <= 21; i++) {
      opinionVariables[i].value = question[i].value;
    }
    for(let i=0;i<=methodsOfEvaluation.length-1;i++){
      methodsOfEvaluation[i]=0;
    }
    for (let i=0;i<=selectedEvMeth.length-1;i++){
      methodsOfEvaluation[i]=selectedEvMeth[i];
    }
    if (arg == "back")
      this.props.prevStep();
    else
      this.props.nextStep();
  };
  componentWillMount(){
    let auxq=[],auxv=[];
    for (let i=0;i<=21;i++){
      auxq.push(
        {value:""}
      );
      auxv.push({status:"",txt:""});
    }
    //extra object for selectedEvMeth
    auxv.push({status:"",txt:""});
    this.setState({question:auxq,valid:auxv});

  }
  validateForm(arg){
   const {question,selectedEvMeth}=this.state;
   let ok=true;
   let aux=this.state.valid;
    for(let i=0;i<=21;i++){
      if(question[i].value==""){
        aux[i].status="error";
        aux[i].txt="*Acest câmp este obligatoriu.";
        ok=false;
      }
    }
    if(selectedEvMeth.length<1){
      aux[22].status="error";
      aux[22].txt="*Acest câmp este obligatoriu.";
      ok=false;
    }
    this.setState({valid:aux});
    if(ok){
      this.saveCurrentState(arg);
    }
  }
  componentDidMount() {
    const { opinionVariables,methodsOfEvaluation } = this.props;
    let aux = this.state.question,evmAux=this.state.selectedEvMeth;

    for (let i = 0; i <= 21; i++) {
      aux[i].value = opinionVariables[i].value;
    }
    for(let i =0;i<=methodsOfEvaluation.length-1;i++){
      if(methodsOfEvaluation[i]!=0){
      evmAux.push(
        methodsOfEvaluation[i]
      );}
    }
    this.setState({
      question: aux,
      selectedEvMeth: evmAux,
    })
  }
  handleEvChange =selectedEvMeth=>{
    let aux=this.state.valid;
    if(selectedEvMeth.length<1){
      aux[22].status="error";
      aux[22].txt="*Acest câmp este obligatoriu.";
    }
    else{

      aux[22].status="success";
      aux[22].txt="";
    }
      this.setState({selectedEvMeth:selectedEvMeth,valid:aux});
  };
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
    let radioOpts = [], tOpts = [], timeInt = [];
    let { question, radioOptions,teachOpts,selectedEvMeth,timeIntervals,valid } = this.state;
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
      );
    }
    for (let i = 1; i <= 5; i++) {
      timeInt.push(
        <Option value={i} label={timeIntervals[i-1].id}>
          {timeIntervals[i-1].id}
        </Option>
      );
    }
    for (let i = 1 ; i<= 6; i++) {
      tOpts.push(
        <Option value={i} label={teachOpts[i-1].id}>
          {teachOpts[i-1].id}
        </Option>
      );
    }
    return (
      <div>
        <div className="gx-d-flex justify-content-center">
            <Widget>
              <Form layout={"vertical"} >
                <Form.Item validateStatus={valid[0].status} help={valid[0].txt} label={ 
                  <span>Cât de ușor credeți că le este elevilor să acceseze activități extracurriculare în afara liceului, care să fie promovate în cadrul liceului?&nbsp;       
                <Tooltip title="Se consideră activități extracurriculare externe: voluntariate, tabere, conferințe, ateliere etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[0].value} onChange={(value) => { this.handleSChange(value, 0) }} /></Form.Item>
                <Form.Item validateStatus={valid[1].status} help={valid[1].txt} label={<span>Cat de mult va implicati in organizarea de activități extracurriculare interne?&nbsp;       
                <Tooltip title="Se consideră activități extracurriculare interne: cluburi de lectură, cor etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[1].value} onChange={(value) => { this.handleSChange(value, 1) }} /></Form.Item>
                <Form.Item validateStatus={valid[2].status} help={valid[2].txt} label={<span>Cat de des va implicati in susținere suplimentară pentru cultivarea performanțelor academice?&nbsp;       
                <Tooltip title="Prin organizare de sesiuni de pregătire în afara orelor pentru concursuri, olimpiade, examene etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[2].value} onChange={(value) => { this.handleSChange(value, 2) }} /></Form.Item>
                <Form.Item validateStatus={valid[3].status} help={valid[3].txt} label={<span>Considerați că beneficiați de oportunități de dezvoltare profesională?&nbsp;       
                <Tooltip title="Prin oportunități de dezvoltare profesională ne referim la formare continuă, cursuri de TIC etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[3].value} onChange={(value) => { this.handleSChange(value, 3) }} /></Form.Item>
                <Form.Item validateStatus={valid[4].status} help={valid[4].txt} label={<span>Ce părere aveti despre nivelul dotărilor?&nbsp;       
                <Tooltip title="Prin dotări educaționale ne referim la: calculatoare, laboratoare, materiale didactice etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[4].value} onChange={(value) => { this.handleSChange(value, 4) }} /></Form.Item>
                <Form.Item validateStatus={valid[5].status} help={valid[5].txt} label={<span>Ce părere aveti despre starea dotărilor?&nbsp;       
                <Tooltip title="Întrebarea se referă la stadiul de deteriorare / uzură al dotărilor educaționale.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[5].value} onChange={(value) => { this.handleSChange(value, 5) }} /></Form.Item>
                <Form.Item validateStatus={valid[6].status} help={valid[6].txt} label={<span>Cât de curat considerati că este liceul?&nbsp;       
                <Tooltip title="Întrebarea se referă la igiena băilor, a sălilor de clasă etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[6].value} onChange={(value) => { this.handleSChange(value, 6) }} /></Form.Item>
                <Form.Item validateStatus={valid[7].status} help={valid[7].txt} label={<span>Cât de divers este colectivul profesoral?&nbsp;       
                <Tooltip title="Diversitatea se referă la diferențele de mentalitate de la profesor la profesor.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[7].value} onChange={(value) => { this.handleSChange(value, 7) }} /></Form.Item>
                <Form.Item validateStatus={valid[8].status} help={valid[8].txt} label={" Cât de ușor v-a fost să vă integrați în colectivul profesoral?"}>
                <IconSlider marks={marks} min={1} max={10} value={question[8].value} onChange={(value) => { this.handleSChange(value, 8) }} /></Form.Item>
                <Form.Item validateStatus={valid[9].status} help={valid[9].txt} label={<span>Cât de satisfăcut sunteți de relația profesor-conducere?&nbsp;       
                <Tooltip title="Întrebarea face referire la: respectul reciproc, deschiderea conducerii de a primi propuneri de la dumneavoastră, susținerea acordată etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[9].value} onChange={(value) => { this.handleSChange(value, 9) }} /></Form.Item>
                <Form.Item validateStatus={valid[10].status} help={valid[10].txt} label={<span>Cât de interactive sunt orele dumneavoastra de curs?&nbsp;       
                <Tooltip title="Interactivitatea presupune activitatea la oră și comunicarea deschisă dintre elevi și profesori.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[10].value} onChange={(value) => { this.handleSChange(value, 10) }} /></Form.Item>
                <Form.Item validateStatus={valid[11].status} help={valid[11].txt} label={" Cât de dedicat vă considerați pe parcursul orelor de curs?"}>
                <IconSlider marks={marks} min={1} max={10} value={question[11].value} onChange={(value) => { this.handleSChange(value, 11) }} /></Form.Item>
                <Form.Item validateStatus={valid[12].status} help={valid[12].txt} label={" Cât de mult folosiți dotările educaționale în timpul orelor?"}>
                <Select placeholder={"Alegeți o variantă"} value={question[12].value || undefined} onChange={(value)=>{this.handleSChange(value,12)}}>
                  {timeInt}
                </Select></Form.Item>
                <Form.Item validateStatus={valid[13].status} help={valid[13].txt} label={<span>Cât de mult puneți accentul pe efortul în afara orelor?&nbsp;       
                <Tooltip title="Prin efort în afara orelor ne referim la teme pentru acasă, proiecte etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[13].value} onChange={(value) => { this.handleSChange(value, 13) }} /></Form.Item>
                <Form.Item validateStatus={valid[14].status} help={valid[14].txt} label={<span>Cât de des vă evaluați elevii?&nbsp;       
                <Tooltip title="Prin evaluare ne referim la teste, ascultări suplimentare etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <Select placeholder={"Alegeți o variantă"} value={question[14].value || undefined} onChange={(value)=>{this.handleSChange(value,14)}}>
                  {timeInt}
                </Select></Form.Item>
                <Form.Item validateStatus={valid[22].status} help={valid[22].txt} label={" Care sunt metodele de evaluare folosite de dumneavoastră?"}>
                  <Select mode="multiple" placeholder="Puteți alege mai multe variante, în funcție de metoda pe care ați folosit-o sau o folosiți." value={selectedEvMeth ||undefined}  onChange={this.handleEvChange}>
                    {tOpts}
                  </Select></Form.Item>
                <Form.Item validateStatus={valid[15].status} help={valid[15].txt} label={<span>Cât de mult puneți accentul pe scoaterea in evidenta a unor anumite persoane?&nbsp;       
                <Tooltip title="Prin individualizare facem referire la compararea rezultatelor unor anumiți elevi sau menționarea unor elevi ca exemple negative / pozitive.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[15].value} onChange={(value) => { this.handleSChange(value, 15) }} /></Form.Item>
                <Form.Item validateStatus={valid[16].status} help={valid[16].txt} label={<span>Cât de dedicați considerați că sunt elevii dumneavoastră în privința materiei pe care o predați?&nbsp;       
                <Tooltip title="Prin dedicare ne referim la: activitate în timpul orei, seriozitate în efectuarea temelor, interes afișat pentru materie în afara orelor etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                <IconSlider marks={marks} min={1} max={10} value={question[16].value} onChange={(value) => { this.handleSChange(value, 16) }} /></Form.Item>
                <Form.Item validateStatus={valid[17].status} help={valid[17].txt} label={<span>Cât de implicați considerați că sunt elevii dumneavoastră în cadrul orelor de curs?&nbsp;       
                <Tooltip title="Prin implicare ne referim la: atenție la predare, activitate în timpul orei etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <IconSlider marks={marks} min={1} max={10} value={question[17].value} onChange={(value) => { this.handleSChange(value, 17) }} /></Form.Item>
                <Form.Item validateStatus={valid[18].status} help={valid[18].txt} label={<span>Cât de satisfăcut sunteți de relația profesor-elevi?&nbsp;       
                <Tooltip title="Întrebarea face referire la: respectul reciproc, devotamentul si susținerea acordată etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <IconSlider marks={marks} min={1} max={10} value={question[18].value} onChange={(value) => { this.handleSChange(value, 18) }} /></Form.Item>
                <Form.Item validateStatus={valid[19].status} help={valid[19].txt} label={" Cât de divers ți se pare colectivul liceului tău?"}>
                <IconSlider marks={marks} min={1} max={10} value={question[19].value} onChange={(value) => { this.handleSChange(value, 19) }} />
                </Form.Item>
                <Form.Item validateStatus={valid[20].status} help={valid[20].txt} label={<span>Ați fost vreodată hărțuit de către un elev?&nbsp;       
                <Tooltip title="Prin hărțuire facem referire la insulte, violență fizică sau verbală, avansuri nepotrivite etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <Radio.Group onChange={this.handleChange(20)} value={question[20].value}>
                    {radioOpts}
                  </Radio.Group>
                  </Form.Item>
                <Form.Item validateStatus={valid[21].status} help={valid[21].txt} label={<span>Ați fost vreodată hărțuit de către un cadru didactic?&nbsp;       
                <Tooltip title="Prin hărțuire facem referire la insulte, violență fizică sau verbală, avansuri nepotrivite etc.">
                  <Icon type="question-circle-o" />
                </Tooltip></span>}>
                  <Radio.Group onChange={this.handleChange(21)} value={question[21].value}>
                    {radioOpts}
                  </Radio.Group></Form.Item>
              </Form>
              <Button style={{ marginLeft: 8 }} type="default" onClick={() => this.validateForm("back")}>Back</Button>
              <Button style={{ marginLeft: 10 }} type="primary" onClick={() => this.validateForm("next")}>Next</Button>
            </Widget>
        </div>
      </div>
    );
  }
}


export default StudentsOpinionForm;
