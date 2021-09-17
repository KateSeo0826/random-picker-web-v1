import React from 'react';
import { FaAppStoreIos } from 'react-icons/fa';

import Container from '../container/container';
import './footer.css';

const Footer = (props) => {
	return (
		<div className='footer'>
			<Container className='container-footer'>
				<div className='footer-icon'>
					<FaAppStoreIos />
				</div>
				<div className='footer-text'>
					<span>Download on the App Store</span>
				</div>
			</Container>
		</div>
	);
};

export default Footer;
