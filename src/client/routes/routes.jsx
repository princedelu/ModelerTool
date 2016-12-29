import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

// Layouts
import MainLayout from '../components/layouts/main/layout.jsx';
import OutLayout from '../components/layouts/out/layout.jsx';

// Pages
import HomeContainer from '../components/containers/home/container.jsx';
import RegisterContainer from '../components/containers/register/container.jsx';
import LoginContainer from '../components/containers/login/container.jsx';
import EntiteContainer from '../components/containers/entite/container.jsx';
import routeConfig from '../../config/route.js';

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
	
	// Chargement des routes dynamiquement
	getRoutes(){
		
		let result={};
		
		result.childRoutes=[];
		
		let routeLayout1={};
		
		routeLayout1.component=MainLayout;
		routeLayout1.childRoutes=[];
		
		let route={};
		
		route.path='/';
		route.component=HomeContainer;
		route.onEnter = this.requireAuth;
		
		routeLayout1.childRoutes.push(route);
		
		// Ajout dynamique
		routeConfig.routeConfig.models.index.map(function(item) {
			route={};
			
            route.path=item.path;
			route.component=EntiteContainer;
			route.onEnter = this.requireAuth;
			route.name=item.name;
			
			routeLayout1.childRoutes.push(route);
        },this);
		
		result.childRoutes.push(routeLayout1);
		
		// Ajout des routes login et register dans une autre layout
		let routeLayout2={};
		
		routeLayout2.component=OutLayout;
		routeLayout2.childRoutes=[];
		
		route={};
		route.path='login';
		route.component=LoginContainer;
		route.onEnter = this.redirectLogin;
		
		routeLayout2.childRoutes.push(route);
		
		route={};
		route.path='register';
		route.component=RegisterContainer;
		route.onEnter = this.redirectLogin;
		
		routeLayout2.childRoutes.push(route);
		
		route={};
		route.path='*';
		route.component=RegisterContainer;
		route.onEnter = this.redirectLogin;
		
		routeLayout2.childRoutes.push(route);
		
		result.childRoutes.push(routeLayout2);
		
		return result;
	}
	
	getRouter(){		
		return (
			<Router history={browserHistory} routes={this.getRoutes()}>
			</Router>
		)
	}
}

export default new Routes()