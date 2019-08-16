import React from "react";
import Widget from "components/Widget";
import { Button, Row, Col, Divider } from "antd";
import image from "assets/images/avatar-placeholder.png";
const Objectives = ({styleName, placeholder, onChange, value}) => {

  return (

        
          <Widget>
            <Row gutter={16} type="flex" align="middle">
            <Col span={12}>
              <Widget>
                
              <h1><font size={8}>Elevi</font></h1>
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
                <Row gutter={24}>
                  <Col span={8}>
                    <Widget>
                      <div><img src= {image} alt= 'icon' height={60} width={60} class="icon-dashbord"/></div>
                      
                      <Divider/>
                      <h3>Elevi</h3>
                    </Widget>
                  </Col>
                  <Col span={8}>
                    <Widget>
                      <img src= {image} alt= 'icon' height={60} width={60} class="gx-d-flex gx-justify-content-around gx-align-items-center gx-mb-2" />
                      <Divider/>
                      <h3>Parinti</h3>
                    </Widget>
                  </Col>
                  <Col span={8}>
                    <Widget>
                      <img src= {image} alt= 'icon' height={60} width={60} />  
                      <Divider/>
                      <h3>Profesori</h3>
                    </Widget>
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={8}>
                <Widget>
                  <img src= {image} alt= 'icon' height={60} width={60} />
                  <Divider/>
                  <h3>Cercatatori</h3>
                </Widget>
                  </Col>
                  <Col span={8}>
                <Widget>
                  <img src= {image} alt= 'icon' height={60} width={60} />
                  <Divider/>
                  <h3>Conduceri</h3>
                </Widget>
                  </Col>
                  <Col span={8}>
                <Widget>
                  <img src= {image} alt= 'icon' height={60} width={60} />
                  <Divider/>
                  <h3>Minister</h3>
                </Widget>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Widget>
        

  )
};
export default Objectives;

Objectives.defaultProps = {
  styleName: "",
  value: "",
};
