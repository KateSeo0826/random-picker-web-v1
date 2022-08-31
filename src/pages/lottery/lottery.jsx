import React, { useState } from 'react';
import Button from '../../shared-component/button/button'
import './lottery.css'
const Lottery = (props) => {
	const [number, setNumber] = useState(0)
	const [bonusOn, setBonusOn] = useState(true)
	const [maxNum, setMaxNum] = useState(0)
	const [isAdd, setIsAdd] = useState(true)
	const [randomNums, setRandomNums] = useState([])

	const numChangeHandler = (e) => {
		e.preventDefault();
		setMaxNum(e.target.value)
	}
	const generateNumbers = () => {
		let generateNum = []
		while (generateNum.length < number) {
			let randomNum = Math.floor(Math.random() * maxNum) + 1;
			if (generateNum.indexOf(randomNum) === -1) {
				generateNum.push(randomNum)
				setIsAdd(true)
			}
			for (let y = 0; y < maxNum; y++) {
				if (generateNum[y] === generateNum) {
					setIsAdd(false)
				}
			}
		}
		setRandomNums([...generateNum].sort((a, b) => a - b))
		return randomNums;
	}
	console.log(randomNums)
	const numberDecrement = () => {
		if (number > 0) {
			setNumber(number => number - 1)
		}
	}
	const numberIncrement = () => {
		if (number < 7) {
			setNumber(number => number + 1)
		}
	}
	return <>
		<div>
			<div className='control-box'>
				<div className='maxNum-box'>
					<label>Max</label>
					<input
						value={maxNum}
						type='number'
						onChange={numChangeHandler}
						min='1'
						max='49' />
				</div>
				<div className='numbers'>
					<label>Number of Draw</label>
					<div>
						<button onClick={numberDecrement}>-</button>
						<span>{number}</span>
						<button onClick={numberIncrement}>+</button>
					</div>
				</div>
				<div className='bonus-box'>
					<label>Bonus</label>
					<button onClick={() => setBonusOn(!bonusOn)}>{bonusOn ? 'Off' : 'ON'}</button>
				</div>
			</div>
			<Button mode onClick={generateNumbers}>Draw</Button>
			<div className='balls'>
				{randomNums.map((num, index) => (
					<div className='ball' key={index} >
						<div><span>{num}</span></div>
					</div>
				))}
			</div>
		</div>
	</>;
};

export default Lottery;
