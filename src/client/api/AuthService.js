import request from 'reqwest';
import when from 'when';
import LoginConstants from '../constants/LoginConstants.jsx';
import LoginActions from '../actions/LoginActions.jsx';

class AuthService {
	
  setRouter(_router){
	this.router = _router;
  }

  login(username, password) {
	var jwt = "rrrr";
	LoginActions.setRouter(this.router);
    LoginActions.loginUser(jwt);
	return true;
    /*return this.handleAuth(when(request({
      url: LoginConstants.getLoginURL(),
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        username, password
      }
    })));*/
  }

  logout() {
    LoginActions.logoutUser();
  }

  signup(username, password, extra) {
    return this.handleAuth(when(request({
      url: SIGNUP_URL,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        username, password, extra
      }
    })));
  }

  handleAuth(loginPromise) {
    return loginPromise
      .then(function(response) {
        var jwt = response.id_token;
        LoginActions.loginUser(jwt);
        return true;
      });
  }
}

export default new AuthService()
