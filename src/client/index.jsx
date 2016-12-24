import React from 'react';
import ReactDom from 'react-dom';
import {PropTypes} from 'react';

import Routes from './routes/routes.jsx';

class Index {
	
	
	launchApp() {
		ReactDom.render(Routes.getRouter(), document.getElementById('app'));
	}
}

var index = new Index();
index.launchApp();
