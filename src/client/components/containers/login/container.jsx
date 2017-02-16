import React from 'react';
import LoginView from '../../views/login/view.jsx';
import { connect } from 'react-redux'
import actions from '../../../actions.js';

const LoginContainer = React.createClass({

	propTypes: {
		// redux store state, imported below
		username: ptypes.string.isRequired,
		// redux action hookups, set up below
		login: ptypes.func.isRequired
	},

  getInitialState: function() {
    return {
      users: [{id:1,name:"toto"}]
    }
  },

  componentDidMount: function() {
  },

  render: function() {
    return (
      <LoginView login={this.props.login}/>
    );
  }

});

var mapStateToProps = function(state){
	return {jwt : state.jwt};
};

var mapDispatchToProps = function(dispatch){
	return {
		login: function(login,password,router){ dispatch(actions.login(login,password,router)); }
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);
