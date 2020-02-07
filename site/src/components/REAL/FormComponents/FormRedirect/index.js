import {Col } from "antd";
import Widget from "components/Widget";
import React from "react";
import { Typography } from 'antd';
import { Route,Redirect} from 'react-router-dom'
import Home from "routes/HomePage/index";
const { Paragraph,Title } = Typography;
class RedirectForm extends React.Component {
  

  renderRedirect = () =>{
    setTimeout(()=>{ window.location.href = "home"}, 2000)
  }
     

  render() { 

    return (
      <div>
        <center>
          <Col span={24}>
            <Widget>
            <Title level={4}>Vă mulțumim pentru timpul acordat!</Title>
            <Paragraph>Veți fi redirecționat în scurt timp către pagina principală.</Paragraph>
            </Widget>
            </Col>
          </center>
          {this.renderRedirect()}
      </div>
    );
  }
}


export default RedirectForm;
