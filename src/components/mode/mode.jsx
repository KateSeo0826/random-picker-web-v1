import React, { useState } from 'react';

import {
	FaDesktop,
	FaBoxOpen,
	FaCoins,
	FaDiceThree,
	FaHashtag,
	FaLocationArrow,
	FaMoneyBillAlt,
} from 'react-icons/fa';

import './mode.css';
import Modal from '../../shared-component/modal/modal';
import Button from '../../shared-component/button/button';
import Number from '../../pages/number/number';
import Coin from '../../pages/coin/coin';
import Dice from '../../pages/dice/dice';
import Spin from '../../pages/spin/spin';
import Lottery from '../../pages/lottery/lottery';
import Pick from '../../pages/pick/pick';

const Mode = ({ mode }) => {
	const { title } = mode;

	const [showFeature, setShowFeature] = useState(false);

	const openFeatureHandler = () => setShowFeature(true);

	const closeFeatureHandler = () => setShowFeature(false);

	function SwichIcon() {
		switch (title) {
			case 'number':
				return <FaHashtag />;
			case 'coin':
				return <FaCoins />;
			case 'dice':
				return <FaDiceThree />;
			case 'spin':
				return <FaLocationArrow />;
			case 'lottery':
				return <FaMoneyBillAlt />;
			case 'pick':
				return <FaBoxOpen />;
			default:
				return '';
		}
	}

	function SwichMode() {
		switch (title) {
			case 'number':
				return <Number />;
			case 'coin':
				return <Coin />;
			case 'dice':
				return <Dice />;
			case 'spin':
				return <Spin />;
			case 'lottery':
				return <Lottery />;
			case 'pick':
				return <Pick />;
			default:
				return '';
		}
	}

	return (
		<React.Fragment>
			<Modal
				show={showFeature}
				header={mode.title}
				onCancel={closeFeatureHandler}
				contentClass='place-item__modal-content'
				footerClass='place-item__modal-actions'
				footer={<Button onClick={closeFeatureHandler}>CLOSE</Button>}
			>
				<SwichMode value={mode.title} />
			</Modal>
			<div className='mode'>
				<div className='mode-content'>
					<p className='mode-title'>
						<SwichIcon value={mode.title} />
						{mode.title}
					</p>
					<p className='mode-description'>{mode.description}</p>
					<Button className='mode-try' onClick={openFeatureHandler}>
						<FaDesktop /> Try on the web
					</Button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Mode;
