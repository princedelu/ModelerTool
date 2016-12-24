import React from 'react';
import RegisterView from '../../views/register/view.jsx';

const RegisterContainer = React.createClass({

  getInitialState: function() {
    return {
      users: [{id:1,name:"toto"}]
    }
  },

  componentDidMount: function() {
  },

  render: function() {
    return (
      <RegisterView />
    );
  }

}); 

export default RegisterContainer;
