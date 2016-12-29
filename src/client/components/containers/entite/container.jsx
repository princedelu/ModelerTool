import React from 'react';
import EntiteView from '../../views/entite/view.jsx';

const EntiteContainer = React.createClass({
  render: function() {
    return (
      <EntiteView name={this.props.route.name}/>
    );
  }
});

export default EntiteContainer;

