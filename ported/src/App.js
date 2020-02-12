import React from "react";
import GeneralForm from "./components/FormComponents/GeneralForm";
import ModalSelector from "./components/FormComponents/ModalSelector";
import StepsComp from "./components/FormComponents/Steps";
import OpinionForm from "./components/FormComponents/OpinionForm";
import FeedbackForm from "./components/FormComponents/FeedbackForm";
import FormRedirect from "./components/FormComponents/FormRedirect";
import { Layout, BackTop } from "antd";
import Firebase from "firebase";
import config from "./components/FormUpload/config.js";
import "./assets/vendors/style";
import "styles/wieldy.less";
const { Content } = Layout;
class Formular extends React.Component {
	constructor(props) {
		super(props);
		Firebase.initializeApp(config);
		this.myRef = React.createRef();
		this.state = {
			status: "",
			init_time: 0,
			final_time: 0,
			step: 1,
			current: -1,
			methodsOfEvaluation: [],
			FeedbackVariables: [
				{ id: "motivation", value: "" },
				{ id: "question", value: "" },
				{ id: "radio", value: "" },
				{ id: "recommendation", value: "" },
				{ id: "extra", value: "", altele: true }
			],
			generalVariables: [
				{ id: "01", value: 11 },
				{ id: "02", value: "" },
				{ id: "judet", value: "" },
				{ id: "localitate", value: "" },
				{ id: "liceu", value: "" },
				{ id: "clasa", value: "" },
				{ id: "litera", value: "" },
				{ id: "filiera", value: "" },
				{ id: "profil", value: "" },
				{ id: "specializare", value: "" }
			],
			generalVariablesTutors: [
				{ id: "01", value: 11 },
				{ id: "02", value: "" },
				{ id: "judet", value: "" },
				{ id: "localitate", value: "" },
				{ id: "liceu", value: "" },
				{ id: "clasa", value: "" },
				{ id: "litera", value: "" },
				{ id: "filiera", value: "" },
				{ id: "profil", value: "" },
				{ id: "specializare", value: "" }
			],
			opinionVariables: [],
			opinionVariablesStudents: [],
			opinionVariablesTeachers: []
		};
		this.setStatus = this.setStatus.bind(this);
	}

	componentDidMount() {
		let auxArray = [],
			auxArrayQ2 = [],
			auxArrayQ3 = [];
		for (let i = 0; i <= 10; i++) {
			auxArrayQ2.push({ id: "question" + i, value: "" });
		}
		for (let i = 0; i <= 29; i++) {
			auxArray.push({ id: "question " + i, value: "" });
		}
		for (let i = 0; i <= 24; i++) {
			auxArrayQ3.push({ id: "question " + i, value: "" });
		}
		this.setState({
			opinionVariablesStudents: auxArray,
			opinionVariables: auxArrayQ2,
			opinionVariablesTeachers: auxArrayQ3
		});
	}
	setStatus(param) {
		this.setState({
			status: param
		});
	}
	nextStep = () => {
		const { step, current } = this.state;
		this.setState({
			step: step + 1,
			current: current + 1
		});
		document.querySelector("main").scrollTop = 0;
	};
	prevStep = () => {
		const { step, current } = this.state;
		this.setState({
			step: step - 1,
			current: current - 1
		});
		document.querySelector("main").scrollTop = 0;
	};
	Elev_Submit() {
		const {
			generalVariables,
			opinionVariablesStudents,
			FeedbackVariables
		} = this.state;
		let finalArray = [];
		let cnt = generalVariables.length;
		for (let i = 0; i <= cnt - 1; i++)
			finalArray.push({ id: "E" + (i + 1), value: generalVariables[i].value });
		cnt++;
		for (let i = 0; i <= opinionVariablesStudents.length - 1; i++) {
			finalArray.push({
				id: "E" + cnt++,
				value: opinionVariablesStudents[i].value
			});
		}
		for (let i = 0; i <= FeedbackVariables.length - 1; i++) {
			finalArray.push({ id: "E" + cnt++, value: FeedbackVariables[i].value });
		}
		let county = this.processString(finalArray[2].value);
		let place = this.processString(finalArray[3].value);
		let hs = this.processString(finalArray[4].value);
		Firebase.database()
			.ref(`forms/${county}/${place}/${hs}/tutors`)
			.push(finalArray);
	}
	Tutore_Submit() {
		const {
			generalVariablesTutors,
			opinionVariables,
			FeedbackVariables
		} = this.state;
		let finalArray = [];
		let cnt = generalVariablesTutors.length;
		for (let i = 0; i <= cnt - 1; i++)
			finalArray.push({
				id: "T" + (i + 1),
				value: generalVariablesTutors[i].value
			});
		cnt++;
		for (let i = 0; i <= opinionVariables.length - 1; i++) {
			finalArray.push({ id: "T" + cnt++, value: opinionVariables[i].value });
		}
		for (let i = 0; i <= FeedbackVariables.length - 1; i++) {
			finalArray.push({ id: "T" + cnt++, value: FeedbackVariables[i].value });
		}
		let county = this.processString(finalArray[2].value);
		let place = this.processString(finalArray[3].value);
		let hs = this.processString(finalArray[4].value);
		Firebase.database()
			.ref(`forms/${county}/${place}/${hs}/tutors`)
			.push(finalArray);
	}
	Profesor_Submit() {
		const {
			generalVariablesTutors,
			opinionVariablesTeachers,
			FeedbackVariables,
			methodsOfEvaluation
		} = this.state;
		let finalArray = [];
		let cnt = generalVariablesTutors.length;
		for (let i = 0; i <= cnt - 1; i++)
			finalArray.push({
				id: "P" + (i + 1),
				value: generalVariablesTutors[i].value
			});
		cnt++;
		for (let i = 0; i <= opinionVariablesTeachers.length - 1; i++) {
			finalArray.push({
				id: "P" + cnt++,
				value: opinionVariablesTeachers[i].value
			});
		}
		finalArray.push({ id: "P" + cnt++, value: methodsOfEvaluation });
		for (let i = 0; i <= FeedbackVariables.length - 1; i++) {
			finalArray.push({ id: "P" + cnt++, value: FeedbackVariables[i].value });
		}
		let county = this.processString(finalArray[2].value);
		let place = this.processString(finalArray[3].value);
		let hs = this.processString(finalArray[4].value);
		Firebase.database()
			.ref(`forms/${county}/${place}/${hs}/teachers`)
			.push(finalArray);
	}

	processString(str) {
		return this.removeAccents(str.toLowerCase())
			.split(" ")
			.join("-")
			.replace(/[,'”"]+/g, "");
	}

	removeAccents(str) {
		var accents = "ăâàáâãäåîìíîïșşțţòóôõöøèéêëð";
		var accentsOut = "aaaaaaaaiiiiissttooooooeeeee";
		str = str.split("");
		var strLen = str.length;
		var i, x;
		for (i = 0; i < strLen; i++) {
			if ((x = accents.indexOf(str[i])) != -1) {
				str[i] = accentsOut[x];
			}
		}
		return str.join("");
	}

	onSubmit = () => {
		const currentTime = new Date();
		const FTime =
			currentTime.getHours() * 3600 +
			currentTime.getMinutes() * 60 +
			currentTime.getSeconds();
		this.nextStep();
		if (FTime - this.state.init_time >= 25) {
			const { status } = this.state;
			if (status == "Elev") this.Elev_Submit();
			if (status == "Profesor") this.Profesor_Submit();
			if (status == "Tutore") this.Tutore_Submit();
		}
	};
	initializeForm = () => {
		const currentTime = new Date();
		const Stime =
			currentTime.getHours() * 3600 +
			currentTime.getMinutes() * 60 +
			currentTime.getSeconds();
		this.setState({
			init_time: Stime
		});
	};
	render() {
		const { step } = this.state;
		switch (step) {
			case 1:
				return (
					<Layout className="gx-app-layout">
						<Content>
							<ModalSelector
								initializeForm={this.initializeForm}
								nextStep={this.nextStep}
								setStatus={this.setStatus}
							/>
						</Content>
					</Layout>
				);
			case 2:
				return (
					<Layout className="gx-app-layout">
						<Content
							className={`gx-layout-content gx-container-wrap form-body`}
						>
							<StepsComp current={this.state.current} />
							<br />
							<GeneralForm
								generalVariables={this.state.generalVariables}
								generalVariablesTutors={this.state.generalVariablesTutors}
								status={this.state.status}
								nextStep={this.nextStep}
							/>
						</Content>
					</Layout>
				);
			case 3:
				return (
					<Layout className="gx-app-layout">
						<Content
							className={`gx-layout-content gx-container-wrap form-body`}
						>
							<StepsComp current={this.state.current} />
							<br />
							<OpinionForm
								prevStep={this.prevStep}
								nextStep={this.nextStep}
								status={this.state.status}
								methodsOfEvaluation={this.state.methodsOfEvaluation}
								opinionVariablesStudents={this.state.opinionVariablesStudents}
								opinionVariables={this.state.opinionVariables}
								opinionVariablesTeachers={this.state.opinionVariablesTeachers}
							/>
						</Content>
					</Layout>
				);
			case 4:
				return (
					<Layout className="gx-app-layout">
						<Content
							className={`gx-layout-content gx-container-wrap form-body`}
						>
							<StepsComp current={this.state.current} />
							<br />
							<FeedbackForm
								FeedbackVariables={this.state.FeedbackVariables}
								prevStep={this.prevStep}
								onSubmit={this.onSubmit}
							/>
						</Content>
					</Layout>
				);
			case 5:
				return (
					<Layout className="gx-app-layout">
						<Content
							className={`gx-layout-content gx-container-wrap form-body`}
						>
							<StepsComp current={this.state.current} />
							<br />
							<FormRedirect />
						</Content>
					</Layout>
				);
		}
	}
}

export default Formular;
