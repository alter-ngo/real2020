import { Button, Col, Row, Modal, Card, Layout } from "antd";
import Widget from "../../Widget";
import React from "react";
import FormIntro from "../../FormIntro";
import styled from 'styled-components';
const HoverText = styled.p`
	:hover {
		box-shadow: -1px 1px 10px #4c429a;
		backgroundColor: #f5f5f5;
		Color: #f5f5f5;
		cursor: pointer;
	}
`
class ModalSelector extends React.Component {
	state = {
		status: "",
		colors: [
			{ id: 1, value: "white", context: "Elev" },
			{ id: 2, value: "white", context: "Tutore" },
			{ id: 3, value: "white", context: "Profesor" }
		],
		windowHeight: 0,
		windowWidth: 0,
	};

	updateWindowDimension = () => {
		this.setState({
			windowHeight: window.availHeight,
			windowWidth: window.width
		});
	};

	componentDidMount() {
		this.updateWindowDimension();
		window.addEventListener("resize", this.updateWindowDimension);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateWindowDimension);
	}

	handleSelection(mode) {
		for (let i = 0; i <= 2; i++) {
			if (this.state.colors[i].context == mode) {
				this.state.colors[i].value = "#fa8c15";
			} else {
				this.state.colors[i].value = "white";
			}
		}
		this.props.nextStep();
		this.props.setStatus(mode);
		this.props.initializeForm();
	}
	objectiveSelectionDisplay = () => {
		if (this.state.windowWidth <= 950) {
			return (
				<Card>
					<div>
						<Col span={24}>
							<Row>
								<FormIntro />
							</Row>

							<Button
								block={true}
								type="primary"
								onClick={this.handleSelection.bind(this, "Elev")}
							>
								Elev
							</Button>
							<br />
							<Button
								block={true}
								type="primary"
								onClick={this.handleSelection.bind(this, "Tutore")}
							>
								Tutore
							</Button>
							<br />
							<Button
								block={true}
								type="primary"
								onClick={this.handleSelection.bind(this, "Profesor")}
							>
								Profesor
							</Button>
							<br />
						</Col>
					</div>
				</Card>
			);
		} else {
			return (
				<Row>
					<Col span={6}></Col>
					<Col span={12}>
						<Row>
							<FormIntro />
						</Row>
						<Row gutter={32}>
							<Col
								xl={8}
								md={8}
								sm={12}
								xs={24}
								onClick={this.handleSelection.bind(this, "Elev")}
							>
								<HoverText>
								<Widget
									styleName="gx-widget-bg"
									cover={
										<img src="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Felevi.jpg?alt=media&token=2e59253a-b2fc-41e0-9f83-100c0aea2e9e" />
									}
								>
									<p
										style={{
											color: this.state.colors[0].value,
											fontSize: "1.25em",
											textAlign: "center",
											margin: 0
										}}
									>
										Elev
									</p>
								</Widget>
								</HoverText>
							</Col>

							<Col
								xl={8}
								md={8}
								sm={12}
								xs={24}
								onClick={this.handleSelection.bind(this, "Tutore")}
							><HoverText>
								<Widget
									styleName="gx-widget-bg"
									hoverable
									cover={
										<img src="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Fparinti.jpg?alt=media&token=cab87a57-dfb8-43a1-8ba0-7a4f62dd016b" />
									}
								>
									
									<p
										style={{
											color: this.state.colors[1].value,
											fontSize: "1.25em",
											textAlign: "center",
											marginBottom: 0
										}}
									>
										Tutore
									</p>
									
								</Widget>
								</HoverText>
							</Col>
							<Col
								xl={8}
								md={8}
								sm={12}
								xs={24}
								onClick={this.handleSelection.bind(this, "Profesor")}
							>
								<HoverText>
								<Widget
									styleName="gx-widget-bg"
									hoverable
									cover={
										<img src="https://firebasestorage.googleapis.com/v0/b/real-infrastructure.appspot.com/o/images%2Fprofesori.jpg?alt=media&token=2933756d-8127-458a-a523-5619cbb8f7e5" />
									}
								>
									<p
										style={{
											color: this.state.colors[2].value,
											fontSize: "1.25em",
											textAlign: "center",
											margin: 0
										}}
									>
										Profesor
									</p>
								</Widget>
								</HoverText>
							</Col>
						</Row>
					</Col>
				</Row>
			);
		}
	};

	render() {
		return (
			<div>

				{this.objectiveSelectionDisplay()}
			</div>
		);
	}
}

export default ModalSelector;
