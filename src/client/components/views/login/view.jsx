import React from 'react';
import style from './style.css';
import Auth from '../../../api/AuthService'
import {PropTypes} from 'react';

export default class Login extends React.Component {
	
	static contextTypes = {
		router: PropTypes.object.isRequired
	  };
	  
	constructor() {
		super()
		this.state = {
			user: '',
			password: ''
		};
	}
	
	

  login(e) {
	Auth.setRouter(this.context.router);
    Auth.login(this.state.user, this.state.password)
      /*.catch(function(err) {
        console.log("Error logging in", err);
      })*/;
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
										<img src="http://s11.postimg.org/7kzgji28v/logo_sm_2_mr_1.png" className={style.img_responsive} alt="Conxole Admin"/>
									</div>
								</div>
								<div className="panel-body">
									<form  className={style.form_signin}>
										<fieldset>
											<label className="panel-login">
												<div className="login_result"></div>
											</label>
											<input className="form-control" placeholder="Email" id="username" type="text"/>
											<input className="form-control" placeholder="Mot de passe" id="password" type="password"/>
											<br></br>
											<input className="btn btn-lg btn-primary btn-block" type="submit" id="login" value="Login" onClick={this.login.bind(this)}/>
										</fieldset>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
