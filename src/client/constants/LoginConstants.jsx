
class LoginConstants {
	
	constructor() {
		this.BASE_URL = 'http://localhost:8080/api/';
		this.LOGIN_URL=this.BASE_URL + 'login';
		this.SIGNUP_URL=this.BASE_URL + 'users';
		this.LOGIN_USER= 'LOGIN_USER';
		this.LOGOUT_USER= 'LOGOUT_USER';
		this.REFRESH_COMPONENT= 'REFRESH_COMPONENT';
	}
	
	getBaseURL(){
		return this.BASE_URL;
	}
	
	getLoginURL(){
		return this.LOGIN_URL;
	}
	
	getSignupURL(){
		return this.SIGNUP_URL;
	}
	
	getLoginUser(){
		return this.LOGIN_USER;
	}
	
	getLogoutUser(){
		return this.LOGOUT_USER;
	}
	
	getRefreshComponent(){
		return this.REFRESH_COMPONENT;
	}
	
}

export default new LoginConstants()