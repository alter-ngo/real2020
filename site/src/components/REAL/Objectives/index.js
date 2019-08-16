import React from "react";
import Widget from "components/Widget";
import { Button, Row, Col, Divider } from "antd";
import image from "assets/images/avatar-placeholder.png";
class Objectives extends React.Component {
  constructor(props){
    super(props); 
    this.state={
      selectionName:"Elevi"
    };
  }

  handleClick(mode){
    this.setState({
        selectionName: mode
    })

  }
  render(){
    return (

        
          <Widget>
            <Row gutter={16} type="flex" align="middle">
            <Col xl={12} md={12} sm={12} xs={24}>
                <Widget>  
              <p style={{fontSize:"2.5em", color:"black"}}>{this.state.selectionName}</p>
                <p>
              <span class="icon icon-check-circle-o"  />Acest camp este pentru o
          descriere.<br/><br/>
              <span class="icon icon-check-circle-o" /> Acest camp este pentru o
          descriere.<br/><br/>
              <span class="icon icon-check-circle-o" /> Acest camp este pentru o
          descriere.<br/><br/>
                </p>
                <br/>
                <p>
                  <Button className="gx-mb-1 gx-btn-warning" htmlType="submit">Completează formularul</Button>
                  <Button className="gx-mb-1" htmlType="submit">Află mai multe</Button>
                </p>
                </Widget>
            </Col>
              <Col xl={12} md={12} sm={12} xs={24}>
                <Row gutter={8}>
                  <Col span={8}>
                    <Widget >
                      <img src= {image} alt= 'icon' height={60} width={60} onClick={this.handleClick.bind(this,"Elevi")}/>
                      <Divider/>
                      <p style={{fontSize:"0.75em"}}>Elevi</p>
                    </Widget>
                  </Col>
                  <Col span={8}>
                    <Widget >
                      <img src= {image} alt= 'icon' height={60} width={60} onClick={this.handleClick.bind(this,"Parinți")} />
                      <Divider/>
                      <p style={{fontSize:"0.75em"}}>Parinți</p>
                    </Widget>
                  </Col>
                  <Col span={8}>
                    <Widget>
                      <img src= {image} alt= 'icon' height={60} width={60} onClick={this.handleClick.bind(this,"Profesori")}/>  
                      <Divider/>
                      <p style={{fontSize:"0.75em"}}>Profesori</p>
                    </Widget>
                  </Col>
                </Row>
                <center>
                <Row gutter={8}>
                  <Col span={8}>
                <Widget>
                  <img src= {image} alt= 'icon' height={60} width={60} onClick={this.handleClick.bind(this,"Cercetători")}/>
                  <Divider/>
                  <center>
                  <p style={{fontSize:"0.75em"}}>Cercetători</p>
                  </center>
                </Widget>
                  </Col>
                  <Col span={8}>
                <Widget>
                  <img src= {image} alt= 'icon' height={60} width={60} onClick={this.handleClick.bind(this,"Conduceri")}/>
                  <Divider/>
                  <p style={{fontSize:"0.75em"}}>Conduceri</p>
                </Widget>
                  </Col>
                  <Col span={8}>
                <Widget >
                  <img src= {image} alt= 'icon' height={60} width={60} onClick={this.handleClick.bind(this,"Minister")}/>
                  <Divider/>
                  <p style={{fontSize:"0.75em"}}>Minister</p>
                </Widget>
                  </Col>
                </Row>
                </center>
              </Col>
            </Row>
          </Widget>
        

  )
}
}

export default Objectives;


