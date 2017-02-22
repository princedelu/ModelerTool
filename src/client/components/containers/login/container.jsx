import React from 'react';
import LoginView from '../../views/login/view.jsx';
import { connect } from 'react-redux'

const LoginContainer = React.createClass({

	propTypes: {
		// redux store state, imported below
		username: ptypes.string.isRequired
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
      <LoginView/>
    );
  }

});

var mapStateToProps = function(state){
	return {jwt : state.jwt};
};

var mapDispatchToProps = function(dispatch){
	return {
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);
