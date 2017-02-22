import React from 'react';
import HeaderView from '../../views/header/view.jsx';
import { connect } from 'react-redux';
import { logout } from '../../../actions/login';

const HeaderContainer = React.createClass({

	propTypes: {
	  jwt : ptypes.string.isRequired,
		// redux action hookups, set up below
		logout: ptypes.func.isRequired
	},
	componentDidMount: function() {
  },
	render: function() {
		return (
			 <HeaderView logout={this.props.logout} jwt={this.props.jwt}/>
		);
	}
});

var mapStateToProps = function(state){
	return {jwt : state.authMessage.jwt};
};

var mapDispatchToProps = function(dispatch){
	return {
		logout: function(router){ dispatch(logout(router)); }
	}
};

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);
