import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

import Button from '../../shared-component/button/button';

import './spin.css';

const Spin = (props) => {
	return (
		<div className='spin'>
			<FaArrowUp className='arrow' />
			<Button mode>spin</Button>
		</div>
	);
};

export default Spin;
