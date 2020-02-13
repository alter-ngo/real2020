import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import Sidebar from "../Sidebar/index";
import HorizontalDefault from "../Topbar/HorizontalDefault/index";
import HorizontalDark from "../Topbar/HorizontalDark/index";
import InsideHeader from "../Topbar/InsideHeader/index";
import AboveHeader from "../Topbar/AboveHeader/index";
import BelowHeader from "../Topbar/BelowHeader/index";
import { Button, Icon, Divider } from "antd";
import BackToTop from "react-back-to-top-button";

import Topbar from "../Topbar/index";
import { footerText } from "util/config";
import App from "routes/index";
import { connect } from "react-redux";
import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DARK_HORIZONTAL,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE
} from "../../constants/ThemeSetting";
import NoHeaderNotification from "../Topbar/NoHeaderNotification/index";

const { Content, Footer } = Layout;

export class MainApp extends Component {
  getContainerClass = navStyle => {
    switch (navStyle) {
      case NAV_STYLE_DARK_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-container-wrap";
      case NAV_STYLE_BELOW_HEADER:
        return "gx-container-wrap";
      case NAV_STYLE_ABOVE_HEADER:
        return "gx-container-wrap";
      default:
        return "";
    }
  };
  getNavStyles = navStyle => {
    switch (navStyle) {
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return <HorizontalDefault />;
      case NAV_STYLE_DARK_HORIZONTAL:
        return <HorizontalDark />;
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return <InsideHeader />;
      case NAV_STYLE_ABOVE_HEADER:
        return <AboveHeader />;
      case NAV_STYLE_BELOW_HEADER:
        return <BelowHeader />;
      case NAV_STYLE_FIXED:
        return <Topbar />;
      case NAV_STYLE_DRAWER:
        return <Topbar />;
      case NAV_STYLE_MINI_SIDEBAR:
        return <Topbar />;
      case NAV_STYLE_NO_HEADER_MINI_SIDEBAR:
        return <NoHeaderNotification />;
      case NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR:
        return <NoHeaderNotification />;
      default:
        return null;
    }
  };

  getSidebar = (navStyle, width) => {
    if (width < TAB_SIZE) {
      return <Sidebar />;
    }
    switch (navStyle) {
      case NAV_STYLE_FIXED:
        return <Sidebar />;
      case NAV_STYLE_DRAWER:
        return <Sidebar />;
      case NAV_STYLE_MINI_SIDEBAR:
        return <Sidebar />;
      case NAV_STYLE_NO_HEADER_MINI_SIDEBAR:
        return <Sidebar />;
      case NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR:
        return <Sidebar />;
      default:
        return null;
    }
  };

  render() {
    const { match, width, navStyle } = this.props;

    return (
      <Layout className="gx-app-layout">
        {this.getSidebar(navStyle, width)}
        <Layout>
          {this.getNavStyles(navStyle)}
          <Content
            className={`gx-layout-content ${this.getContainerClass(navStyle)} `}
          >
            <App match={match} />
            <Footer>
              <div className="gx-layout-footer-content">
                <Row gutter={16} type="flex" align="middle">
                  <Divider>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/registruleducationalalternativ/"
                    >
                      <Icon
                        style={{
                          margin: "5px",
                          fontSize: "27px",
                          color: "#fa8c15"
                        }}
                        type="facebook"
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/estereal.ro/"
                    >
                      <Icon
                        style={{
                          margin: "5px",
                          fontSize: "27px",
                          color: "#fa8c15"
                        }}
                        type="instagram"
                      />
                    </a>
                    <a target="_blank" href="">
                      <Icon
                        style={{
                          margin: "5px",
                          fontSize: "27px",
                          color: "#fa8c15"
                        }}
                        type="youtube"
                      />
                    </a>
                  </Divider>
                </Row>
                <Row gutter={16} type="flex" justify="center">
                  <div style={{ margin: "5px", color: "#6A6C6E" }}>
                    {"Telefon: "}
                    {"0771637695 "}&#xb7;
                  </div>
                  <div style={{ margin: "5px", color: "#6A6C6E" }}>
                    {"Adresa: "}
                    {"Calea Plevnei 204-206, București "}&#xb7;
                  </div>
                  <div style={{ margin: "5px", color: "#6A6C6E" }}>
                    {"Email: "}
                    {"contact@estereal.ro "}
                  </div>
                </Row>
                <Divider />
                <Row gutter={16} type="flex" align="middle">
                  <Col xl={20} md={8} sm={8} xs={12}>
                    {footerText}
                  </Col>
                  <Col xl={4} md={8} sm={8} xs={12}>
                    <a href="">Terms of Use </a>
                    &#x7c;
                    <a href=""> Privacy Policy</a>
                  </Col>
                </Row>
              </div>
            </Footer>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const { width, navStyle } = settings;
  return { width, navStyle };
};
export default connect(mapStateToProps)(MainApp);
