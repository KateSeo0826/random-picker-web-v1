import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import NavLink from './nav-link';
import SideDrawer from './side-drawer';
import Backdrop from '../backdrop/backdrop';

import './navigation.css';

const Navigation = (props) => {
	const { about, review } = props;

	const [drawerIsOpen, setDrawerIsOpen] = useState(false);

	const openDrawerHandler = () => {
		setDrawerIsOpen(true);
	};

	const closeDrawerHandler = () => {
		setDrawerIsOpen(false);
	};
	return (
		<React.Fragment>
			{drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
			{drawerIsOpen && (
				<SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
					<nav className='main-navigation__drawer-nav'>
						<NavLink about={about} />
					</nav>
				</SideDrawer>
			)}

			<button className='main-navigation__menu-btn' onClick={openDrawerHandler}>
				<FaBars />
			</button>
			<nav className='main-navigation__header-nav'>
				<NavLink about={about} review={review} />
			</nav>
		</React.Fragment>
	);
};

export default Navigation;
