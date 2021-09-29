import React, { useState, useEffect} from 'react';
 
 import './number.css';
 
 const Number = (props) => {

	/*고민해야할 부분: 
	1~3은 에러체킹
	1.min <= max
	2.값이 없을경우
	3.숫자입력이 아닐때

	4.true false값으로 generating: generate 바꿀 필요 있음
	5.클릭하면 몇초동안 계속 랜덤값을 받아야함 => 생각은 interval 몇초 후에 clearinterval: done
	button click 하면 
	4번 5번 둘다 필요

	*/
	
	const initialState = {min: 0, max: 100, result: ''};
	const [buttonText, setButtonText] = useState('Generate')
	const [inputs, setInputs] = useState(initialState);
	const [toggle, setToggle] = useState(false);
	const [err, setError] = useState({hasError:false, message:"", type:"server"});


	const handleChange = (event) => {
		setInputs({...inputs, [event.target.name]: event.target.value});
	};

	function getRandomValue(minValue, maxValue, event) {
		let newResult =  Math.floor(Math.random() * (maxValue - minValue + 1) ) + minValue;
		setInputs({...inputs, result: newResult})
		
	}
	function activeCheck() {
		setButtonText('Generating')
		setToggle(true);
	}

	useEffect(() => {

		if(toggle) {
			var iad = setInterval(() => getRandomValue(inputs.min, inputs.max), 100);
			var iaa = setTimeout(() => {clearInterval(iad);setButtonText('Generate');}, 1500);
			iaa = false;
			if (!iaa) {
				setToggle(false);
			}
		}
		
		return () => {clearTimeout(iaa);}
	})
	  

	return(
		<>
			<h1>min</h1>
			<input name="min" placeholder = "min" onChange={() => handleChange()} value={inputs.min} />
			<h1>max</h1>
			<input name="max" placeholder = "max" onChange={() => handleChange()} value={inputs.max}/>
		
			<h1>result</h1>
			<button name = 'buttonText' onClick = {() => activeCheck()}> {buttonText}</button>
			<h1>{inputs.result}</h1>
		</>
	);
	
 };
 
 export default Number;
