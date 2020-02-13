import {Steps} from "antd";
import Widget from "components/Widget";
import React from "react";


const steps = [
  {
    title: 'General',
    content: 'First-content',
  },
  {
    title: 'Opinii',
    content: 'Second-content',
  },
  {
    title: 'Feedback',
    content: 'Last-content',
  },
];
const { Step } = Steps;
class StepsComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    
    return (
      <div>
      <Steps current={this.props.current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      </div>
    );
  }
}


export default StepsComp;
