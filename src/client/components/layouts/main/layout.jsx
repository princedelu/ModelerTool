import React from 'react';
import { Link } from 'react-router';
import style from './style.css';
import HeaderContainer from '../../containers/header/container.jsx';
import {PropTypes} from 'react';

var MainLayout = React.createClass({

	render: function() {
		return (
			<div className="wrapper">
				<HeaderContainer/>
				<header className={style.header}>
					<div className="container">
						{this.props.children}
					</div>
				</header>
			</div>
		);
	}
});

MainLayout.contextTypes = {
	router: PropTypes.object.isRequired
};

export default MainLayout;
