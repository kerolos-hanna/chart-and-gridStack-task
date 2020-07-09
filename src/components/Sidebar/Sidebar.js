/** @format */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
// import SalesChart from '../Charts/Sales/Sales';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerContainer: {
		overflow: 'auto',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

const Sidebar = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Drawer
				className={classes.drawer}
				variant="permanent"
				style={{ zIndex: '-1' }}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<Toolbar />
				<div className={classes.drawerContainer}>
					<List>
						<br />
						<ListItem>
							<Button
								variant="outlined"
								color="primary"
								size="large"
								style={{ width: '100%' }}
							>
								<AddIcon />
								New Widget
							</Button>
						</ListItem>
						{/* <div
							style={{
								width: '95%',
								margin: 'auto',
								border: '1px solid #EEE',
								padding: '2px',
							}}
						>
							<SalesChart />
						</div> */}
					</List>
					<Divider />
					<List>
						{['All mail', 'Trash', 'Spam'].map((text, index) => (
							<ListItem button key={text}>
								<ListItemIcon>
									{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
				</div>
			</Drawer>
		</div>
	);
};

export default Sidebar;
