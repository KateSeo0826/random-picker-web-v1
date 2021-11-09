import { useState, useEffect } from 'react';
import Button from '../../shared-component/button/button';
import headCoin from '../../assets/images/coin/headCoin.png';
import tailCoin from '../../assets/images/coin/tailCoin.png';
import './coin.css';

const Coin = () => {
	const [side, setSide] = useState(1);
	const [btnClicked, setBtnClicked] = useState(false);
	const [flipping, setFlipping] = useState(false);
	const [btnText, setBtnText] = useState('Flip');
	const [resultText, setResultText] = useState('');

	const flippedCoin = () => {
		const flippedOn = Math.round(Math.random());

		setSide(flippedOn);
	}

	useEffect(() => {
		if (btnClicked) {
			setTimeout(() => {
				flippedCoin();
				setFlipping(false);
				setBtnText('Flip');
				setResultText(() => side === 1 ? setResultText('Head') : setResultText('Tail'));
			}, 1500);

			setFlipping(true);
			setBtnText('Flipping');
			setResultText('');
			setBtnClicked(false);
		}

		return () => clearTimeout();
	}, [side, btnClicked]);

	return (
		<>
			<div className='coin-container'>
				<div className='flipped'>
					<h1>{resultText}</h1>
				</div>
				<div id="coin" className={[flipping && 'active'].filter(Boolean).join(' ')}></div>
				<div id="coin-result">
					{resultText === 'Head' ? <img className='headCoin' src={headCoin} alt='headCoin' /> : <img className='tailCoin' src={tailCoin} alt='tailCoin' />}
				</div>
				<Button mode onClick={() => setBtnClicked(true)}>{btnText}</Button>
			</div>
		</>
	)
};

export default Coin;
