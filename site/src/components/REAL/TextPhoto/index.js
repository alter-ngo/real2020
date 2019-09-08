import React from "react";
import Widget from "components/Widget";
import { Button, Row, Col, Divider, Card } from "antd";
import image from "assets/images/avatar-placeholder.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class TextPhoto extends React.Component {
    constructor(props) {
        super(props);
    }

    imageSide = () => {
        return (
            <React.Fragment>
                <Row gutter={16} style={{ marginBottom: "-1em" }}>
                    <Col
                        xl={24}
                        md={24}
                        sm={24}
                        xs={24}
                    >
                        <Widget
                            cover={
                                <img src={this.props.imgSrc} />
                            }
                        >
                            <p
                                style={{
                                    fontSize: "1.25em",
                                    textAlign: "center",
                                    margin: 0
                                }}
                            >
                                {this.props.caption}
                            </p>
                        </Widget>
                    </Col>
                </Row>
            </React.Fragment>
        );
    };

    render() {
        return (
            <Widget>
                <Row gutter={16} type="flex" align="middle">
                    <Col xl={12} md={12} sm={12} xs={24}>
                        <div style={{ marginLeft: "1.7em", marginRight: "1.7em" }}>
                            <p
                                style={{
                                    fontSize: "4em",
                                    color: "black",
                                    margin: 0,
                                    marginBottom: "0.4em"
                                }}
                            >
                                {this.props.title}
                            </p>
                            <p
                                style={{
                                    fontSize: "1.2em",
                                    color: "gray",
                                    textAlign: "justify",
                                    margin: 0,
                                    marginBottom: "0.4em"
                                }}
                            >
                                {this.props.children}
                            </p>
                            <br />
                        </div>
                    </Col>
                    <Col xl={12} md={12} sm={12} xs={24}>
                        {this.imageSide()}
                    </Col>
                </Row>
            </Widget>
        );
    }
}

export default TextPhoto;
