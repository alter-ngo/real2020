import React from "react";
import {Button, Checkbox, Form, Icon, Input, message} from "antd";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignIn,
  userTwitterSignIn
} from "appRedux/actions/Auth";
import IntlMessages from "util/IntlMessages";
import CircularProgress from "components/CircularProgress/index";

const FormItem = Form.Item;

class SignIn extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.showAuthLoader();
        this.props.userSignIn(values);
      }
    });
  };

  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
    if (this.props.authUser !== null) {
      this.props.history.push('/');
    }
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const {showMessage, loader, alertMessage} = this.props;

    return (
      <div className="gx-app-login-wrap">
        <div className="gx-app-login-container">
          <div className="gx-app-login-main-content">
            <div className="gx-app-logo-content">
              <div className="gx-app-logo-content-bg">
                <img src="https://via.placeholder.com/272x395" alt='Neature'/>
              </div>
              <div className="gx-app-logo-wid">
                <h1><IntlMessages id="app.userAuth.signIn"/></h1>
                <p><IntlMessages id="app.userAuth.bySigning"/></p>
                <p><IntlMessages id="app.userAuth.getAccount"/></p>
              </div>
              <div className="gx-app-logo">
                <img alt="example" src={require("assets/images/logo.png")}/>
              </div>
            </div>
            <div className="gx-app-login-content">
              <Form onSubmit={this.handleSubmit} className="gx-signin-form gx-form-row0">

                <FormItem>
                  {getFieldDecorator('email', {
                    initialValue: "demo@example.com",
                    rules: [{
                      required: true, type: 'email', message: 'The input is not valid E-mail!',
                    }],
                  })(
                    <Input placeholder="Email"/>
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    initialValue: "demo#123",
                    rules: [{required: true, message: 'Please input your Password!'}],
                  })(
                    <Input type="password" placeholder="Password"/>
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox><IntlMessages id="appModule.iAccept"/></Checkbox>
                  )}
                  <span className="gx-signup-form-forgot gx-link"><IntlMessages
                    id="appModule.termAndCondition"/></span>
                </FormItem>
                <FormItem>
                  <Button type="primary" className="gx-mb-0" htmlType="submit">
                    <IntlMessages id="app.userAuth.signIn"/>
                  </Button>
                  <span><IntlMessages id="app.userAuth.or"/></span> <Link to="/signup"><IntlMessages
                  id="app.userAuth.signUp"/></Link>
                </FormItem>
                <div className="gx-flex-row gx-justify-content-between">
                  <span>or connect with</span>
                  <ul className="gx-social-link">
                    <li>
                      <Icon type="google" onClick={() => {
                        this.props.showAuthLoader();
                        this.props.userGoogleSignIn();
                      }}/>
                    </li>
                    <li>
                      <Icon type="facebook" onClick={() => {
                        this.props.showAuthLoader();
                        this.props.userFacebookSignIn();
                      }}/>
                    </li>
                    <li>
                      <Icon type="github" onClick={() => {
                        this.props.showAuthLoader();
                        this.props.userGithubSignIn();
                      }}/>
                    </li>
                    <li>
                      <Icon type="twitter" onClick={() => {
                        this.props.showAuthLoader();
                        this.props.userTwitterSignIn();
                      }}/>
                    </li>
                  </ul>
                </div>
                <span
                  className="gx-text-light gx-fs-sm"> demo user email: 'demo@example.com' and password: 'demo#123'</span>
              </Form>
            </div>

            {loader ?
              <div className="gx-loader-view">
                <CircularProgress/>
              </div> : null}
            {showMessage ?
              message.error(alertMessage.toString()) : null}
          </div>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(SignIn);

const mapStateToProps = ({auth}) => {
  const {loader, alertMessage, showMessage, authUser} = auth;
  return {loader, alertMessage, showMessage, authUser}
};

export default connect(mapStateToProps, {
  userSignIn,
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGoogleSignIn,
  userGithubSignIn,
  userTwitterSignIn
})(WrappedNormalLoginForm);
