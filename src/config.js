import smlogoimage from './image/icon/digitaldriver_icon_abstract-32x32.png';
import lglogoimage from './image/icon/digitaldriver_icon_abstract-32x32.png';

export default {
  apiUrl: 'http://yoursite.com/api/'
};
const siteConfig = {
  siteName: 'Digital Driver Portal',
  siteIcon: {smlogoimage},
  footerText: 'Digital Driver Fleet Manager Portal ©2018 Created by R3PI'
};
const OAuth2Config = {
  authorization: 'Basic ZGQ6ZGlnaXRhbERyaXZlcg==',
  domain: 'http://shift-1716137055.us-east-1.elb.amazonaws.com/auth/oauth/token',    // http://shift-1716137055.us-east-1.elb.amazonaws.com/auth/oauth/token    http://localhost:9000/auth/oauth/token
  grant_type: 'password',
  client_id: 'dd'
};
const themeConfig = {
  topbar: 'themedefault',
  sidebar: 'themedefault',
  layout: 'themedefault',
  theme: 'themedefault'
};
const language = 'english';
const AlgoliaSearchConfig = {
  appId: '',
  apiKey: ''
};
const Auth0Config = {
  domain: '',
  clientID: '',
  allowedConnections: ['Username-Password-Authentication'],
  rememberLastLogin: true,
  language: 'en',
  closable: true,
  options: {
    auth: {
      autoParseHash: true,
      redirect: true,
      redirectUrl: 'http://localhost:3000/auth0loginCallback'
    },
    languageDictionary: {
      title: 'Digital Driver',
      emailInputPlaceholder: 'demo@gmail.com',
      passwordInputPlaceholder: 'demodemo'
    },
    theme: {
      labeledSubmitButton: true,
      logo: {smlogoimage},
      primaryColor: '#E14615',
      authButtons: {
        connectionName: {
          displayName: 'Log In',
          primaryColor: '#b7b7b7',
          foregroundColor: '#000000'
        }
      }
    }
  }
};
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
};
const googleConfig = {
  apiKey: 'AIzaSyDYR1G2Qk54ETWqc48zuJj_tUdAnzmTSOY' //
};
const mapboxConfig = {
  tileLayer: '',
  maxZoom: '',
  defaultZoom: '',
  center: []
};
const youtubeSearchApi = '';
export {
  siteConfig,
  themeConfig,
  language,
  AlgoliaSearchConfig,
  OAuth2Config,
  Auth0Config,
  firebaseConfig,
  googleConfig,
  mapboxConfig,
  youtubeSearchApi
};
