import React, {Component} from "react";
import {Button, Dropdown, Icon, Layout, Menu, message, Popover, Select} from 'antd';
import {connect} from "react-redux";
import CustomScrollbars from "util/CustomScrollbars";

import languageData from "../languageData";
import SearchBox from "components/SearchBox";
import UserInfo from "components/UserInfo";
import AppNotification from "components/AppNotification";
import MailNotification from "components/MailNotification";
import {switchLanguage, toggleCollapsedSideNav} from "../../../appRedux/actions/Setting";
import HorizontalNav from "../HorizontalNav";
import {Link} from "react-router-dom";
import IntlMessages from "util/IntlMessages";

const {Header} = Layout;

const Option = Select.Option;
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Products</Menu.Item>
    <Menu.Item key="2">Apps</Menu.Item>
    <Menu.Item key="3">Blogs</Menu.Item>
  </Menu>
);

function handleMenuClick(e) {
  message.info('Click on menu item.');
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

class BelowHeader extends Component {

  state = {
    searchText: '',
  };

  languageMenu = () => (
    <CustomScrollbars className="gx-popover-lang-scroll">
      <ul className="gx-sub-popover">
        {languageData.map(language =>
          <li className="gx-media gx-pointer" key={JSON.stringify(language)} onClick={(e) =>
            this.props.switchLanguage(language)
          }>
            <i className={`flag flag-24 gx-mr-2 flag-${language.icon}`}/>
            <span className="gx-language-text">{language.name}</span>
          </li>
        )}
      </ul>
    </CustomScrollbars>);

  updateSearchChatUser = (evt) => {
    this.setState({
      searchText: evt.target.value,
    });
  };


  render() {
    const {locale, navCollapsed} = this.props;

    return (
      <div className="gx-header-horizontal gx-header-horizontal-dark gx-below-header-horizontal">
        <div className="gx-header-horizontal-top">
          <div className="gx-container">
            <div className="gx-header-horizontal-top-flex">
              <div className="gx-header-horizontal-top-left">
                <i className="icon icon-alert gx-mr-3"/>
                <p className="gx-mb-0 gx-text-truncate"><IntlMessages id="app.announced"/></p>
              </div>
              <ul className="gx-login-list">
                <li>Login</li>
                <li>Signup</li>
              </ul>
            </div>
          </div>
        </div>


        <Header
          className="gx-header-horizontal-main">
          <div className="gx-container">
            <div className="gx-header-horizontal-main-flex">

              <div className="gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3">
                <i className="gx-icon-btn icon icon-menu"
                   onClick={() => {
                     this.props.toggleCollapsedSideNav(!navCollapsed);
                   }}
                />
              </div>
              <Link to="/" className="gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo">
                <img alt="" src={require("assets/images/w-logo.png")}/></Link>
              <Link to="/" className="gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo">
                <img alt="" src={require("assets/images/logo.png")}/></Link>
              <div className="gx-header-search gx-d-none gx-d-lg-flex">
                <SearchBox styleName="gx-lt-icon-search-bar-lg"
                           placeholder="Search in app..."
                           onChange={this.updateSearchChatUser.bind(this)}
                           value={this.state.searchText}/>

                <Select defaultValue="lucy" style={{width: 120}} onChange={handleChange}>
                  <Option value="jack">Products</Option>
                  <Option value="lucy">Apps</Option>
                  <Option value="Yiminghe">Blogs</Option>
                </Select>
              </div>

              <ul className="gx-header-notifications gx-ml-auto">
                <li className="gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none">
                  <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={
                    <div className="gx-d-flex"><Dropdown overlay={menu}>
                      <Button>
                        Category <Icon type="down"/>
                      </Button>
                    </Dropdown>
                      <SearchBox styleName="gx-popover-search-bar"
                                 placeholder="Search in app..."
                                 onChange={this.updateSearchChatUser.bind(this)}
                                 value={this.state.searchText}/></div>
                  } trigger="click">
                    <span className="gx-pointer gx-d-block"><i className="icon icon-search-new"/></span>
                  </Popover>
                </li>

                <li className="gx-notify">
                  <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={<AppNotification/>}
                           trigger="click">
                    <span className="gx-pointer gx-d-block"><i className="icon icon-notification"/></span>
                  </Popover>
                </li>

                <li className="gx-msg">
                  <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight"
                           content={<MailNotification/>} trigger="click">
                <span className="gx-pointer gx-status-pos gx-d-block">
                <i className="icon icon-chat-new"/>
                <span className="gx-status gx-status-rtl gx-small gx-orange"/>
                </span>
                  </Popover>
                </li>
                <li className="gx-language">
                  <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight"
                           content={this.languageMenu()} trigger="click">
              <span className="gx-pointer gx-flex-row gx-align-items-center"><i
                className={`flag flag-24 flag-${locale.icon}`}/>
              </span>
                  </Popover>
                </li>
                <li className="gx-user-nav"><UserInfo/></li>
              </ul>
            </div>
          </div>
        </Header>
        <div className="gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block">
          <div className="gx-container">
            <div className="gx-header-horizontal-nav-flex">
              <HorizontalNav/>
              <ul className="gx-header-notifications gx-ml-auto">
                <li><span className="gx-pointer gx-d-block"><i className="icon icon-menu-lines"/></span></li>
                <li><span className="gx-pointer gx-d-block"><i className="icon icon-setting"/></span></li>
                <li><span className="gx-pointer gx-d-block"><i className="icon icon-apps-new"/></span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({settings}) => {
  const {locale, navCollapsed} = settings;
  return {locale, navCollapsed}
};
export default connect(mapStateToProps, {toggleCollapsedSideNav, switchLanguage})(BelowHeader);
