import React, { useEffect, useState } from 'react';
import { FaPlusSquare, FaMinusSquare, FaDice } from 'react-icons/fa';

import Button from '../../shared-component/button/button';

import './dice.css';

const Dice = (props) => {
	const [buttonName, setButtonName] = useState('Roll');
	const [numberOfDices, setNumberOfDices] = useState(3);

	useEffect(() => {
		setNumberOfDices(numberOfDices);
	});

	return (
		<div className='dice-container'>
			<p>Number Of Dices</p>

			<div className='dice-buttons-group'>
				<FaMinusSquare
					onClick={() => {
						numberOfDices <= 0
							? setNumberOfDices(0)
							: setNumberOfDices(numberOfDices - 1);
					}}
				/>
				{numberOfDices}
				<FaPlusSquare
					onClick={() => {
						setNumberOfDices(numberOfDices + 1);
					}}
				/>
			</div>
			<div className='dice'>
				<FaDice />
			</div>
			<Button mode onClick={() => setButtonName('Rolling')}>
				{buttonName}
			</Button>
		</div>
	);
};

export default Dice;
