/** @format */

import React from 'react';

import Navbar from '../components/Layout/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import SalesChart from '../components/Charts/Sales/Sales';

// import classes from './home.module.css';

const home = () => {
	return (
		<div>
			<Navbar />
			<Sidebar />
			<div
				style={{
					width: '45%',
					margin: 'auto',
					border: '1px solid #EEE',
					padding: '2px',
				}}
			>
				<SalesChart />
			</div>
		</div>
	);
};

export default home;
