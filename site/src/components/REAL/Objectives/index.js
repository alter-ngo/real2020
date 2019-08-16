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
            <Col span={12}>
              <Widget>
                
              <h1><font size={8}>{this.state.selectionName}</font></h1>
              <br/>
                <p>
              <span class="icon icon-check-circle-o"  /><font size={4}> Acest camp este pentru o
          descriere.</font><br/><br/>
              <span class="icon icon-check-circle-o" /><font size={4}> Acest camp este pentru o
          descriere.</font><br/><br/>
              <span class="icon icon-check-circle-o" /><font size={4}> Acest camp este pentru o
          descriere.</font><br/><br/>
                </p>
                
                <br/>
                <p>
                  <Button className="gx-mb-1 gx-btn-warning" htmlType="submit">Completează formularul</Button>
                  <Button className="gx-mb-1" htmlType="submit">Află mai multe</Button>
                </p>
          </Widget>
            </Col>
              <Col span={12}>
                <Row gutter={32}>
                  <Col span={8}>
                    <Widget >
                      <img src= {image} alt= 'icon' height={60} width={60} onClick={this.handleClick.bind(this,"Elevi")}/>
                      <Divider/>
                      <h3>Elevi</h3>
                    </Widget>
                  </Col>
                  <Col span={8}>
                    <Widget >
                      <img src= {image} alt= 'icon' height={60} width={60} onClick={this.handleClick.bind(this,"Parinti")} />
                      <Divider/>
                      <h3>Parinti</h3>
                    </Widget>
                  </Col>
                  <Col span={8}>
                    <Widget>
                      <img src= {image} alt= 'icon' height={60} width={60} onClick={this.handleClick.bind(this,"Profesori")}/>  
                      <Divider/>
                      <h3>Profesori</h3>
                    </Widget>
                  </Col>
                </Row>
                <Row gutter={32}>
                  <Col span={8}>
                <Widget>
                  <img src= {image} alt= 'icon' height={60} width={60} onClick={this.handleClick.bind(this,"Cercetatori")}/>
                  <Divider/>
                  <h3>Cercetatori</h3>
                </Widget>
                  </Col>
                  <Col span={8}>
                <Widget>
                  <img src= {image} alt= 'icon' height={60} width={60} onClick={this.handleClick.bind(this,"Conduceri")}/>
                  <Divider/>
                  <h3>Conduceri</h3>
                </Widget>
                  </Col>
                  <Col span={8}>
                <Widget >
                  <img src= {image} alt= 'icon' height={60} width={60} onClick={this.handleClick.bind(this,"Minister")}/>
                  <Divider/>
                  <h3>Minister</h3>
                </Widget>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Widget>
        

  )
}
}

export default Objectives;


