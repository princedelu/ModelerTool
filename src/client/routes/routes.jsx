import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from '../components/layouts/main/layout.jsx';

// Pages
import HomeContainer from '../components/containers/home/container.jsx';
import RegisterContainer from '../components/containers/register/container.jsx';
import LoginContainer from '../components/containers/login/container.jsx';
import EntiteContainer from '../components/containers/entite/container.jsx';

class Routes {
	// Auth middleware
	requireAuth(nextState, transition) {
		
		let jwt = localStorage.getItem('jwt');
		if (!jwt) {
			transition('/login', null, {redirect: nextState.location});
			return;
		}
	}
	
	// Auth middleware
	redirectLogin(nextState, transition) {

		let jwt = localStorage.getItem('jwt');
		if (jwt) {
			transition('/', null, {redirect: nextState.location});
			return;
		}
	}
	
	getRouter(){
		return (
			<Router history={browserHistory}>
				<Route component={MainLayout}>
					<Route path="/" component={HomeContainer} onEnter={this.requireAuth}/>
					
					<Route path="entite">
						<IndexRoute component={EntiteContainer} onEnter={this.requireAuth}/>
					</Route>

					<Route path="login">
						<IndexRoute component={LoginContainer} onEnter={this.redirectLogin}/>
					</Route>
					<Route path="register">
						<IndexRoute component={RegisterContainer} onEnter={this.redirectLogin}/>
					</Route>

				</Route>
			</Router>
		)
	}
}

export default new Routes()