import React, { useState, useEffect } from 'react';
import Button from '../../shared-component/button/button'
import './number.css';

const Number = (props) => {

	const initialState = { min: 0, max: 100, result: '' };
	const [buttonText, setButtonText] = useState('Generate')
	const [inputs, setInputs] = useState(initialState);
	const [toggle, setToggle] = useState(false);

	const handleChange = (event) => {
		setInputs({ ...inputs, [event.target.name]: event.target.value });
	};

	function getRandomValue(minValue, maxValue, event) {
		let newResult = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
		setInputs({ ...inputs, result: newResult })

	}
	function activeCheck() {
		setButtonText('Generate')
		setToggle(true);
	}
	useEffect(() => {
		if (toggle) {
			var iad = setInterval(() => getRandomValue(inputs.min, inputs.max), 100);
			var iaa = setTimeout(() => { clearInterval(iad); setButtonText('Generate'); }, 1500);
			iaa = false;
			if (!iaa) {
				setToggle(false);
			}
		}
		return () => { clearTimeout(iaa); }
	})
	return (
		<>
			<div className='input-box'>
				<div className='minNum-box'>
					<h2>Min</h2>
					<input name="min" placeholder="min" onChange={handleChange} value={inputs.min} />
				</div>
				<div className='minNum-box'>
					<h2>Max</h2>
					<input name="max" placeholder="max" onChange={handleChange} value={inputs.max} />
				</div>
			</div>
			<div className='result-box'>
				<h2>{inputs.result}</h2>
			</div>
			<Button mode name='buttonText' onClick={activeCheck}>{buttonText}</Button>
		</>
	);

};

export default Number;
