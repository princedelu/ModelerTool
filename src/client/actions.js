import constants from './constants'
import axios from 'axios';

module.exports = {
	login: function(username,password,router){
		// A normal action creator, returns a simple object describing the action.
		return function(dispatch,getState){
			return axios({
				  url: constants.API_BASE_URL + constants.API_PATH_LOGIN,
				  method: 'post',
				  data: {
						username, password
				  }
			}).then(function(response) {
					var jwt = response.data.jwt;
					var savedJwt = localStorage.getItem('jwt');

					if (savedJwt !== jwt) {

						localStorage.setItem('jwt', jwt);
						var nextPath = router.getCurrentLocation().nextPath || '/';
						dispatch({type:constants.ACTIONS.LOGIN_SUCESS,jwt:jwt});
						router.push(nextPath);
					}
			  })
			  .catch(function(e) {
						console.log(e);
		  	});
		}
	},
	logout : function (router) {
		return function(dispatch,getState){
			localStorage.removeItem('jwt');
			dispatch({type:constants.ACTIONS.LOGOUT_SUCESS});
			router.push('/login');
		}
	}
};
