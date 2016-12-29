import React from 'react';
import { Link } from 'react-router';
import Auth from '../../../api/AuthService'
import style from './style.css';
import {PropTypes} from 'react';

var MainLayout = React.createClass({
	
	logout: function(){
		Auth.setRouter(this.context.router);
		Auth.logout();
	},	
	render: function() {
		return (
			<div className="wrapper">
				<nav className="navbar navbar-inverse navbar-fixed-top">
					<div className="container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand text-uppercase" href="#">Modeler Tool</a>
						</div>

						<div className="collapse navbar-collapse" id="navigation">
							<ul className="nav navbar-nav navbar-right">
								<li><a href="#">Entités</a></li>
								<li><a href="#">A propos</a></li>
								<li><button type="button" className="btn btn-danger navbar-btn btn-circle" onClick={this.logout}>Déconnexion</button></li>
							</ul>
						</div>
					</div>
				</nav>
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