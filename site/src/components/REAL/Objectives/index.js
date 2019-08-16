import React from "react";
import Widget from "components/Widget";
import { Button, Row, Col, Divider } from "antd";
import image from "assets/images/avatar-placeholder.png";
const Objectives = ({styleName, placeholder, onChange, value}) => {

  return (

        
          <Widget>
            <Row gutter={16}>
            <Col span={12}>
              <Widget>
                
              <h1>Elev</h1>
                <p>
              <span class="icon icon-check-circle-o"  /><font size={5}> Acest camp este pentru o
          descriere.</font><br/>
              <span class="icon icon-check-circle-o" /><font size={5}> Acest camp este pentru o
          descriere.</font><br/>
              <span class="icon icon-check-circle-o" /><font size={5}> Acest camp este pentru o
          descriere.</font><br/>
                </p>
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
                      <img src= {image} alt= 'icon' height={95} width={200} />
                      <Divider/>
                      <h3>Elevi</h3>
                    </Widget>
                  </Col>
                  <Col span={8}>
                    <Widget>
                      <img src= {image} alt= 'icon' height={95} width={200} />
                      <Divider/>
                      <h3>Parinti</h3>
                    </Widget>
                  </Col>
                  <Col span={8}>
                    <Widget>
                      <img src= {image} alt= 'icon' height={95} width={200} />  
                      <Divider/>
                      <h3>Profesori</h3>
                    </Widget>
                  </Col>
                </Row>
                <Row gutter={24}>
                  <Col span={8}>
                <Widget>
                  <img src= {image} alt= 'icon' height={95} width={200} />
                  <Divider/>
                  <h3>Cercatatori</h3>
                </Widget>
                  </Col>
                  <Col span={8}>
                <Widget>
                  <img src= {image} alt= 'icon' height={95} width={200} />
                  <Divider/>
                  <h3>Conduceri</h3>
                </Widget>
                  </Col>
                  <Col span={8}>
                <Widget>
                  <img src= {image} alt= 'icon' height={95} width={200} />
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
