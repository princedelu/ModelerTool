import React from 'react';
import LoginView from '../../views/login/view.jsx';

const LoginContainer = React.createClass({

  getInitialState: function() {
    return {
      users: [{id:1,name:"toto"}]
    }
  },

  componentDidMount: function() {
  },

  render: function() {
    return (
      <LoginView />
    );
  }

}); 

export default LoginContainer;
