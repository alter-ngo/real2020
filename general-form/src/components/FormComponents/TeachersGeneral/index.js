import { InputNumber, Form, Select, Button, Alert } from "antd";
import Widget from "../../Widget";
import React from "react";
import Data from "../data";
const { Option } = Select;
var json = Data;
const judete_array = [
	"MUNICIPIUL BUCURE\u015eTI",
	"ALBA",
	"ARAD",
	"ARGE\u015e",
	"BAC\u0102U",
	"BIHOR",
	"BISTRI\u0162A-N\u0102S\u0102UD",
	"BOTO\u015eANI",
	"BR\u0102ILA",
	"BRA\u015eOV",
	"BUZ\u0102U",
	"C\u0102L\u0102RA\u015eI",
	"CARA\u015e-SEVERIN",
	"CLUJ",
	"CONSTAN\u0162A",
	"COVASNA",
	"D\u00c2MBOVI\u0162A",
	"DOLJ",
	"GALA\u0162I",
	"GIURGIU",
	"GORJ",
	"HARGHITA",
	"HUNEDOARA",
	"IALOMI\u0162A",
	"IA\u015eI",
	"ILFOV",
	"MARAMURE\u015e",
	"MEHEDIN\u0162I",
	"MURE\u015e",
	"NEAM\u0162",
	"OLT",
	"PRAHOVA",
	"S\u0102LAJ",
	"SATU MARE",
	"SIBIU",
	"SUCEAVA",
	"TELEORMAN",
	"TIMI\u015e",
	"TULCEA",
	"VASLUI",
	"V\u00c2LCEA",
	"VRANCEA"
];
let localitati = [],
	licee = [],
	specializari = [],
	filiere = [],
	profile = [];
let path = json["ALBA"],
	second_path,
	third_path,
	fourth_path,
	fifth_path;
class GeneralForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			valid: [],
			question: [],
			verif: {status:"",txt:""},
		};
		this.validate = this.validate.bind(this);
		this.saveCurrentState = this.saveCurrentState.bind(this);
		this.validateForm = this.validateForm.bind(this);
	}
	componentWillMount() {
		let auxv = [],
			auxq = [];
		for (let i = 0; i <= 4; i++) {
			auxq.push({ value: "" });
			auxv.push({ status: "", txt: "" });
		}
		this.setState({ valid: auxv, question: auxq });
	}
	saveCurrentState() {
		const { generalVariables } = this.props;
		const { question } = this.state;
		for (let i = 0; i <= 4; i++) {
			generalVariables[i].value = question[i].value;
		}
		this.props.nextStep();
	}
	componentDidMount() {
		const { generalVariables } = this.props;
		let aux = this.state.question;
		for (let i = 0; i <= 4; i++) {
			aux[i].value = generalVariables[i].value;
		}
		this.setState({ question: aux });
	}
	validate(input) {
		let aux = this.state.valid;
		if ((this.state.question[input].value = "")) {
			aux[input].status = "error";
			aux[input].txt = "*Acest câmp este obligatoriu.";
		} else {
			aux[input].status = "success";
			aux[input].txt = "";
		}
		this.setState({ valid: aux });
	}
	handleChange(value, input) {
		this.validate(input);
		let aux = this.state.question;
		aux[input].value = value;
		if (input === 3) {
			let loc = json[path][second_path].judet;
			aux[input].value = loc;
		}
		if (input === 4) {
			let loc = json[path][second_path].judet;
			let lic = json[path][second_path][loc][third_path].liceu;
			aux[input].value = lic;
		}
		this.setState({
			question: aux
		});
	}
	handleChangeNested(value, input) {
		if (input === 2) {
			let aux_q = this.state.question;
			aux_q[3].value = "";
			aux_q[4].value = "";
			this.setState({
				question: aux_q
			});
			path = value;
			localitati = [];
			licee = [];
			profile = [];
			specializari = [];
			filiere = [];
			for (var i in json[value]) {
				localitati.push(
					<Select.Option key={i}>{json[value][i].judet}</Select.Option>
				);
			}
		}
		if (input === 3) {
			let aux_q = this.state.question;
			aux_q[4].value = "";
			this.setState({
				question: aux_q
			});
			licee = [];
			profile = [];
			specializari = [];
			filiere = [];
			second_path = value;
			let aux = json[path][value].judet;
			let inx = 0;
			for (var i in json[path][value][aux]) {
				licee.push(
					<Select.Option key={inx}>
						{json[path][value][aux][i].liceu}
					</Select.Option>
				);
				inx += 1;
			}
		}
		if (input === 4) {
			filiere = [];
			profile = [];
			specializari = [];
			third_path = value;
			let aux = json[path][second_path].judet;
			let aux2 = json[path][second_path][aux][third_path].liceu;
			if (
				Array.isArray(json[path][second_path][aux][third_path][aux2][0]) &&
				json[path][second_path][aux][third_path][aux2][0].length
			) {
				filiere.push(<Select.Option key={0}>{"Teoretica"}</Select.Option>);
			}
			if (
				Array.isArray(json[path][second_path][aux][third_path][aux2][1]) &&
				json[path][second_path][aux][third_path][aux2][1].length
			) {
				filiere.push(<Select.Option key={1}>{"Tehnologica"}</Select.Option>);
			}
		}
		this.handleChange(value, input);
	}
	validateForm() {
		const { question } = this.state;
		let ok = true;
		let aux = this.state.valid;
		for (let i = 0; i <= 4; i++) {
			if (question[i].value == "") {
				aux[i].status = "error";
				aux[i].txt = "*Acest câmp este obligatoriu.";
				ok = false;
			}
		}
		this.setState({ valid: aux });
		if (ok) {
            let yetanotheraux=this.state.verif;
            yetanotheraux.status = "success";
            yetanotheraux.txt = "Gata!";
            this.setState({verif:yetanotheraux});

            this.saveCurrentState();
        }
        else{
            let yetanotheraux=this.state.verif;
            yetanotheraux.status = "error";
            yetanotheraux.txt = "Vă rugam să completați toate câmpurile marcate.";
            this.setState({verif:yetanotheraux});

        }
	}
	render() {
		let judete = [];
		const { question, valid,verif } = this.state;
		for (let i = 0; i <= 41; i++) {
			judete.push(
				<Select.Option key={judete_array[i]}>{judete_array[i]}</Select.Option>
			);
		}
		return (
			<Widget>
				<Form layout={"vertical"}>
					<Alert
						message="Notă privind completarea multiplă"
						description="În cazul în care predați la mai multe licee, vă rugăm să completați formularul o dată pentru fiecare liceu."
						type="info"
						showIcon
					/>
					<br />
					<Form.Item
						validateStatus={valid[0].status}
						help={valid[0].txt}
						label={
							<p style={{ fontSize: 18, fontWeight: 500 }}> Ce vârstă aveți?</p>
						}
					>
						<InputNumber
							min={20}
							max={90}
							style={{width:'100%'}}
							value={question[0].value}
							onChange={value => {
								this.handleChange(value, 0);
							}}
						/>
					</Form.Item>

					<Form.Item
						validateStatus={valid[1].status}
						help={valid[1].txt}
						label={<p style={{ fontSize: 18, fontWeight: 500 }}> Gen</p>}
					>
						<Select
							placeholder="Selectează"
							value={question[1].value || undefined}
							onChange={value => {
								this.handleChange(value, 1);
							}}
						>
							<Option value="male">Masculin</Option>
							<Option value="female">Feminin</Option>
							<Option value="unspecfied">Nu doresc să menționez</Option>
						</Select>
					</Form.Item>
					<Form.Item
						validateStatus={valid[2].status}
						help={valid[2].txt}
						label={
							<p style={{ fontSize: 18, fontWeight: 500 }}>
								{" "}
								În ce județ predați?
							</p>
						}
					>
						<Select
							showSearch
							onChange={value => {
								this.handleChangeNested(value, 2);
							}}
							value={question[2].value || undefined}
							placeholder="Selectează județul"
							optionFilterProp="children"
							filterOption={(input, option) =>
								option.props.children
									.toLowerCase()
									.indexOf(input.toLowerCase()) >= 0
							}
						>
							{judete}
						</Select>
					</Form.Item>
					<Form.Item
						validateStatus={valid[3].status}
						help={valid[3].txt}
						label={
							<p style={{ fontSize: 18, fontWeight: 500 }}>
								{" "}
								În ce localitate predați?
							</p>
						}
					>
						<Select
							showSearch
							placeholder="Selectează localitatea"
							value={question[3].value || undefined}
							disabled={valid[2].status === "success" ? false : true}
							onChange={value => {
								this.handleChangeNested(value, 3);
							}}
							optionFilterProp="children"
							filterOption={(input, option) =>
								option.props.children
									.toLowerCase()
									.indexOf(input.toLowerCase()) >= 0
							}
						>
							{localitati}
						</Select>
					</Form.Item>
					<Form.Item
						validateStatus={valid[4].status}
						help={valid[4].txt}
						label={
							<p style={{ fontSize: 18, fontWeight: 500 }}>
								{" "}
								La ce liceu predați?
							</p>
						}
					>
						<Select
							showSearch
							placeholder="Selectează liceul"
							value={question[4].value || undefined}
							onChange={value => {
								this.handleChangeNested(value, 4);
							}}
							disabled={valid[3].status === "success" ? false : true}
							optionFilterProp="children"
							filterOption={(input, option) =>
								option.props.children
									.toLowerCase()
									.indexOf(input.toLowerCase()) >= 0
							}
						>
							{licee}
						</Select>
					</Form.Item>
				</Form>
				<br />
				<Button
					type="primary"
					style={{ marginLeft: 8 }}
					onClick={() => this.validateForm()}
				>
					Next
				</Button>
				<Form.Item
						validateStatus={verif.status}
						help={verif.txt}
					/>
			</Widget>
		);
	}
}

export default GeneralForm;
