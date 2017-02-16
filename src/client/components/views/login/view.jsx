import React from 'react';
import style from './style.css';
import {PropTypes} from 'react';

export default class Login extends React.Component {

	static propTypes = {
		// redux store state, imported below
		jwt : ptypes.string.isRequired,
		// redux action hookups, set up below
		login: ptypes.func.isRequired
	};

	static contextTypes = {
		router: PropTypes.object.isRequired
	  };

		handleLogin = e => {
		 const email = "tttt";
		 const password = "ddd";

	    this.props.login(email, password,this.context.router);
	  }


  render() {
		return (
			<div className={style.fullscreen_bg}>
				<div className="container">
					<div className={style.vertical_offset_100 + ' row'}>
						<div className="col-md-4 col-md-offset-4">
							<div className={style.panel +' panel-default'}>
								<div className="panel-heading">
									<div className="row-fluid user-row">
										<h1 className={style.form_signin_heading + ' text-muted'}>Modeler Tool</h1>
										<img src="http://s11.postimg.org/7kzgji28v/logo_sm_2_mr_1.png" className={style.img_responsive} alt="Console Admin"/>
									</div>
								</div>
								<div className="panel-body">
									<fieldset>
										<label className="panel-login">
											<div className="login_result"></div>
										</label>
										<input className="form-control" placeholder="Email" id="username" type="text"/>
										<input className="form-control" placeholder="Mot de passe" id="password" type="password"/>
										<br></br>
										<button type="button" className="btn btn-lg btn-primary btn-block" onClick={this.handleLogin}>Login</button>
									</fieldset>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
