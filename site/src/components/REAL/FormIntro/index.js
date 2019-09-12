import React from "react";
import { Button, Divider, Row, Col } from "antd";
import Widget from "components/Widget/index";

const FormIntro = () => {
    return (
        <Widget styleName="gx-widget-bg">
            <Row type="flex">
                <Col>
                    <h1
                        className="gx-font-weight-semi-bold gs-fs-xlxl"
                        style={{ fontSize: "2em" }}
                    >
                        Bine ai venit în formularul #estereal!
                    </h1>
                    <p>
                        <ul>
                            <li>
                                Opiniile exprimate de tine vor ajuta sute de mii de oameni, de la elevi care își aleg liceul și până la cercetători care realizează analize.
                            </li>
                            <li>
                                Răspunsurile tale sunt <strong>100% anonime</strong>, fiind combinate cu răspunsurile a zeci de mii de alți elevi, profesori și tutori.
                            </li>
                            <li>
                                Completarea formularului durează aproximativ 10 minute, acoperind subiecte diverse, de la oportunități până la organizare.
                            </li>
                        </ul>
                    </p>
                </Col>
            </Row>
        </Widget>
    );
};

export default FormIntro;
