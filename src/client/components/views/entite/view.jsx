import React from 'react';
import style from './style.css';
import { Link } from 'react-router'

const Entite = React.createClass({
  render: function() {
    return (
		<div>
			Entite
			<Link
                to='/'>
                Home
			</Link>
		</div>
    );
  }
});

export default Entite;