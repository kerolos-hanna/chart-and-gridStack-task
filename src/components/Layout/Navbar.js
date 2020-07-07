/** @format */

import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import classes from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={classes.Navbar}>
			<h2>Dashbang</h2>
			<ul>
				<li>
					<Avatar alt="Kerolos" src="/static/images/avatar/1.jpg" />
				</li>
				<li>Kerolos</li>
			</ul>
		</nav>
	);
};

export default Navbar;
