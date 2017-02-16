import React from 'react';
import ReactDom from 'react-dom';
import {PropTypes} from 'react';

import Routes from './routes/routes.jsx';

// Store
import configureStore from './store/configureStore'

class Index {


	launchApp(store) {
		ReactDom.render(Routes.getRouter(store), document.getElementById('app'));
	}
}

// Définition de l'état initial
const initialAppState = {
	authMessage : {
		jwt : localStorage.getItem('jwt')
	}
}

const store = configureStore(initialAppState)

var index = new Index();
index.launchApp(store);
