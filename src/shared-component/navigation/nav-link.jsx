import React from 'react';
import { Link } from 'react-router-dom';

import './nav-link.css';

const NavLink = (props) => {
	return (
		<ul className='nav-list'>
			<li>
				<Link to='#' className='main-nav-link'>
					About
				</Link>
			</li>
			<li>
				<Link to='#' className='main-nav-link'>
					Review
				</Link>
			</li>
			<li>
				<Link to='#' className='main-nav-link nav-cta' target='_blank'>
					Download App
				</Link>
			</li>
		</ul>
	);
};

export default NavLink;
