import React from 'react';
import style from './style.css';
import {PropTypes} from 'react';

class Header extends React.Component {

	static propTypes = {
	  jwt : ptypes.string.isRequired,
		// redux action hookups, set up below
		logout: ptypes.func.isRequired
	};

	static contextTypes = {
		router: PropTypes.object.isRequired
	  };

	componentDidMount() {
    }

	constructor() {
		super()

	}

	handleLogout = e => {
		this.props.logout(this.context.router);
	}

  render() {
		return (
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
							<li><a href="#">Entités{this.props.jwt}</a></li>
							<li><a href="#">A propos</a></li>
							<li><button type="button" className="btn btn-danger navbar-btn btn-circle" onClick={this.handleLogout}>Déconnexion</button></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
