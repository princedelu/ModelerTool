import LoginConstants from '../constants/LoginConstants.jsx';
import {PropTypes} from 'react';

class LoginAction {
	
	  
	setRouter(_router){
		this.router = _router;
	}
	
	loginUser(jwt) {
		var savedJwt = localStorage.getItem('jwt');
		
		if (savedJwt !== jwt) {
			
			localStorage.setItem('jwt', jwt);
			var nextPath = this.router.getCurrentLocation().nextPath || '/';
			this.router.push(nextPath);
		}
	}

	logoutUser() {
		this.router.push('/login');
		localStorage.removeItem('jwt');
		
	}
}

export default new LoginAction()