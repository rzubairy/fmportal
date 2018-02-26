import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../../components/uielements/input';
import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
import authAction from '../../redux/auth/actions';
import OAuth2 from '../../helpers/oauth2';
import IntlMessages from '../../components/utility/intlMessages';
import SignInStyleWrapper from './signin.style';

const { login } = authAction;

class SignIn extends Component {

  constructor(props) {
  	super(props);
  	this.state = {
    	redirectToReferrer: false,
    	inputUsername: '',
    	inputPassword: ''
  	};

  	this.handlerInputUsername = this.handlerInputUsername.bind(this);
  	this.handlerInputPassword = this.handlerInputPassword.bind(this);
    this.handlerButtonSignIn  = this.handlerButtonSignIn.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.isLoggedIn !== nextProps.isLoggedIn &&
      nextProps.isLoggedIn === true
    ) {
      this.setState({ redirectToReferrer: true });
    }
  }

  handlerInputUsername(event) {
  	this.setState({inputUsername: event.target.value})
  }

  handlerInputPassword(event) {
  	this.setState({inputPassword: event.target.value})
  }

  handlerButtonSignIn(event) {
    const { login } = this.props;
    login();
    OAuth2.login(this.handleLogin, this.state.inputUsername, this.state.inputPassword);
  }

  handleLogin = () => {
    console.log ('signin.js: handleLogin()');
//    const { login } = this.props;
//    login();
//    console.log("login():");
//    console.log( login() );
  };
// handleLogin = () => {
//   const { login } = this.props;
//   login();
//   this.props.history.push('/dashboard');
// };
// 
  render() {
    const from = { pathname: '/dashboard' };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <SignInStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoLogoWrapper">
              <Link to="/dashboard">
                <IntlMessages id="page.signInTitle" />
              </Link>
            </div>

            <div className="isoSignInForm">
              <div className="isoInputWrapper">
                <Input size="large" placeholder="Username" onChange={this.handlerInputUsername}/>
              </div>

              <div className="isoInputWrapper">
                <Input size="large" type="password" placeholder="Password" onChange={this.handlerInputPassword}/>
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox>
                  <IntlMessages id="page.signInRememberMe" />
                </Checkbox>
                <Button type="primary" id="btnSignIn" onClick={this.handlerButtonSignIn}>
                  <IntlMessages id="page.signInButton" />
                </Button>
              </div>

              <div className="isoCenterComponent isoHelperWrapper">
                <Link to="/forgotpassword" className="isoForgotPass">
                  <IntlMessages id="page.signInForgotPass" />
                </Link>
                <Link to="/signup">
                  <IntlMessages id="page.signInCreateAccount" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

export default connect(
  state => ({
    isLoggedIn: state.Auth.get('idToken') !== null ? true : false,
  }),
  { login }
)(SignIn);
