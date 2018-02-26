import history from './history';
import { OAuth2Config } from '../../config.js';
import { notification } from '../../components';

class OAuth2Helper {

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login(handleLogin, user, password) {

    // debug - log username & password to console
    console.log(user);
    console.log(password);

    // function to perform async login with OAuth2 server
  	const authReq = async() => {

      // OAUTH2 - GET A NEW TOKEN
  		try {
  			var response = await fetch ('/auth/oauth/token',
  				{
  				method: 'POST',
  				mode: 'same-origin',
  				headers: new Headers({
                'Authorization' : OAuth2Config.authorization,
  					    'Content-Type'  : 'application/x-www-form-urlencoded'
  				    }),
          body: `grant_type=${OAuth2Config.grant_type}` +
                `&client_id=${OAuth2Config.client_id}`  +
                `&username=${user}` +
                `&password=${password}`
  			});

  			var authRsp = await response.json();

        // debug - log OAuth token to console
        console.log(`OAuth2: Fetch 'Get OAuth Token' Response:`);
        console.log(authRsp);

        if (authRsp.access_token) {
          this.setSession(authRsp);
          handleLogin();
        } else {
          notification('error', 'Wrong username or password');
          //this.logout();
        }

  		} catch(e) {
  			console.log("OAuth2: ERROR - Problem occurred fetching a new token.");
  		}
/*
      // USER - REQUEST ALL USERS
      try {
        response = await fetch ('/user/getAllUsers',
          {
          method: 'GET',
          mode: 'same-origin',
          headers: new Headers({
            'Authorization' : `bearer ${authRsp.access_token}`,
            'Content-Type' :  'application/json'
              }),
        });
        var userRsp = await response.json();

        // debug - log 'Get All Users' to console
        console.log(`OAuth2: Fetch 'Get All Users' Response:`);
        console.log(userRsp);

      } catch(e) {
        console.log(`OAuth2: ERROR - Problem occurred fetching 'Get All Users'`);
      }

      // TELEMETRY - REQUEST ALL TRIPS
      try {
        response = await fetch ('/telemetry/getTrip',
          {
          method: 'POST',
          mode: 'same-origin',
          headers: new Headers({
            'Authorization' : `bearer ${authRsp.access_token}`,
            'Content-Type' :  'application/json'
              }),
          body: JSON.stringify({searchBy:"device",searchValue:"Testing",source:"DD"})
        });
        var telRsp = await response.json();

        // debug - log 'Get Trip' to console
        console.log(`OAuth2: Fetch 'Get Trip Response:`);
        console.log(telRsp);

      } catch(e) {
        console.log(`OAuth2: ERROR - Problem occurred fetching 'Get Trip'`);
      }
*/

  	}

  authReq();

  }

  handleAuthentication(props) {

    localStorage.setItem('id_token', 'secret token');
    history.replace('/dashboard');

  }

  setSession(authRsp) {

    // Set the time that the access token will expire at
    let expiresIn = JSON.stringify(
      authRsp.expires_in * 1000 + new Date().getTime()
    );
    localStorage.setItem('id_token', authRsp.access_token);
    localStorage.setItem('refresh_token', authRsp.refresh_token);
    localStorage.setItem('expires_in', expiresIn);
    localStorage.setItem('scope', authRsp.scope);

    // navigate to the home route
    history.replace('/dashboard');
  }

  logout() {

    // Clear access token and ID token from local storage
    localStorage.removeItem('id_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('expires_in');
    localStorage.removeItem('scope');
    // navigate to the home route
    history.replace('/');

  }

  isAuthenticated() {

    // Check whether the current time is past the
    // access token's expiry time
    return (
      new Date().getTime() < JSON.parse(localStorage.getItem('expires_in'))
    );

  }
}
export default new OAuth2Helper();
