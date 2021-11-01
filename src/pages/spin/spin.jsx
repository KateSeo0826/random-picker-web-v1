import React, { useEffect, useState } from 'react';

import { Rotate } from './spin_styled_components';
import Button from '../../shared-component/button/button';

import spin_arrow from '../../assets/images/spin_arrow.png';
import './spin.css';

const Spin = (props) => {
	const [buttonName, setButtonName] = useState('spin');
	const [spinArrow, setSpinArrow] = useState(false);
	const [speed, setSpeed] = useState(0);

	useEffect(() => {});

	const onSpinArrow = () => {
		setSpinArrow(true);
		changeButtonName();

		setTimeout(() => {
			setSpinArrow(false);
		}, 3000);
	};

	const changeButtonName = () => {
		setButtonName('fast');
	};

	const changeSpeed = () => {
		setSpeed(speed + 1);
		console.log(speed);
	};

	const stopSpin = () => {};

	const resetSpeed = () => {
		setSpeed(0);
		console.log(speed);
	};

	return (
		<div className='spin'>
			<Rotate spinArrow={spinArrow} duration={3000}>
				<img className={`arrow`} src={spin_arrow} alt='arrow' />
				{/* <img
					className={`arrow ${spinArrow && 'arrow-spin'} ${
						spinArrow && speed == 2 && 'arrow-spin-faster'
					} ${spinArrow && speed >= 3 && 'arrow-spin-fastest'}`}
					src={spin_arrow}
					alt='arrow'
				/> */}
			</Rotate>
			<Button mode onClick={onSpinArrow}>
				{buttonName}
			</Button>
		</div>
	);
};

export default Spin;
