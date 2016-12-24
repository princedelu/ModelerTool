import React from 'react';
import style from './style.css';
import { Link } from 'react-router'

const Home = React.createClass({
  render: function() {
    return (
		<div>
			Bienvenue
			<Link
                to='entite'>
                Entite
			</Link>
		</div>
    );
  }
});

export default Home;