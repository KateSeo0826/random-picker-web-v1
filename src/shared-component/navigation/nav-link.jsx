import React from 'react';
import { Link } from 'react-router-dom';

import './nav-link.css';

const NavLink = (props) => {
	const { about, review } = props;
	return (
		<ul className='nav-list'>
			<li>
				<Link to='#' className='main-nav-link' onClick={about}>
					About
				</Link>
			</li>
			<li>
				<Link to='#' className='main-nav-link' onClick={review}>
					Review
				</Link>
			</li>
			<li>
				<Link
					to={{
						pathname:
							'https://apps.apple.com/us/app/random-picker/id1435548123',
					}}
					target='_blank'
					title='Go to App Store preview page'
					className='main-nav-link nav-cta'
				>
					Download App
				</Link>
			</li>
		</ul>
	);
};

export default NavLink;
