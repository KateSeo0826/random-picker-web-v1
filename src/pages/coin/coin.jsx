import { useState, useEffect } from 'react';
import Button from '../../shared-component/button/button';
import headCoin from '../../assets/images/coin/headCoin.png';
import tailCoin from '../../assets/images/coin/tailCoin.png';
import './coin.css';

const Coin = () => {
	const [side, setSide] = useState(1);
	const [btnClicked, setBtnClicked] = useState(false);
	//const [flipping, setFlipping] = useState(false);
	const [btnText, setBtnText] = useState('Flip');
	const [resultText, setResultText] = useState('');

	const flippedCoin = () => {
		const flippedOn = Math.round(Math.random());

		setSide(flippedOn);
	}

	useEffect(() => {
		if (btnClicked) {
			flippedCoin();
			setTimeout(() => {
				//setFlipping(false);
				setBtnText('Flip');
				setResultText(() => side === 1 ? setResultText('head') : setResultText('tail'));
			}, 1500);

			//setFlipping(true);
			setBtnText('Flipping');
			setResultText('');
			setBtnClicked(false);
		}

		return () => clearTimeout();
	}, [side, btnClicked]);

	return (
		<>
			<div className='coin-container'>
				<h1>{resultText}</h1>
				<div>{resultText === 'head' ? <img className='head' src={headCoin} alt='headCoin' /> : <img className='tail' src={tailCoin} alt='tailCoin' />}</div>
				<Button mode onClick={() => setBtnClicked(true)}>{btnText}</Button>
			</div>
		</>
	)
};

export default Coin;
