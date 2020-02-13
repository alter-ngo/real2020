import React, {Component} from "react";
import {connect} from "react-redux";
import {Menu} from "antd";
import {Link} from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";

import Auxiliary from "util/Auxiliary";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import IntlMessages from "../../util/IntlMessages";

class SidebarContent extends Component {

  getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };

  render() {
    const {themeType, navStyle, pathname} = this.props;
    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split('/')[1];
    return (<Auxiliary>

        <SidebarLogo/>
        <div className="gx-sidebar-content">
          <div className={`gx-sidebar-notifications ${this.getNoHeaderClass(navStyle)}`}>
            <UserProfile/>
           <AppsNavigation/>
          </div>
          <CustomScrollbars className="gx-layout-sider-scrollbar">
            <Menu
              defaultOpenKeys={[defaultOpenKeys]}
              selectedKeys={[selectedKeys]}
              theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
              mode="inline">
          <Menu.Item key="home">
            <Link to="/home">
            <i className="icon icon-home " />
              <IntlMessages id="Acasă"/>
            </Link>
          </Menu.Item> 
          <Menu.Item key="formular">
            <Link to="/form">
            <i className="icon icon-feedback " />
              <IntlMessages id="Formular"/>
            </Link>
          </Menu.Item>
          <Menu.Item key="bord">
            <Link to="/panel">
            <i className="icon icon-ckeditor " />
              <IntlMessages id="Panou"/>
            </Link>
          </Menu.Item>
          <Menu.Item key="catalog">
            <Link to="/catalogue">
            <i className="icon icon-product-list " />
              <IntlMessages id="Catalog"/>
            </Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">
            <i className="icon icon-card " />
              <IntlMessages id="Despre"/>
            </Link>
          </Menu.Item>
          <Menu.Item key="blog">
            <Link to="/blog"> 
            <i className="icon icon-folder " />
              <IntlMessages id="Blog"/>
            </Link>
          </Menu.Item>
            </Menu>
          </CustomScrollbars>
        </div>
      </Auxiliary>
    );
  }
}

SidebarContent.propTypes = {};
const mapStateToProps = ({settings}) => {
  const {navStyle, themeType, locale, pathname} = settings;
  return {navStyle, themeType, locale, pathname}
};
export default connect(mapStateToProps)(SidebarContent);

