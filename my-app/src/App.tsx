import {useState} from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [buttonColor, setButtonColor] = useState('red');
	const newButtonColor = buttonColor === 'red'? 'blue' : 'red';
	const [disabled,setDisabled] = useState(false);
	const [disabledSecond,setDisabledSecond] = useState(true);
  return (
    <div >
    <button 
		style={{backgroundColor: buttonColor}} 
		onClick={() => setButtonColor(newButtonColor)}
		disabled={disabled}
		>
		Change to {newButtonColor}
	</button>
		{/* <input type ="checkbox"  checked={true}/> */}
	
		<br></br>
		<input 
			type ="checkbox"
			id="disable-button-checkbox"
			defaultChecked = {disabled}
			onChange={(e) => setDisabled(e.target.checked)} 
			/>
			<label htmlFor="disable-button-checkbox">Disable button</label>
		
		<br></br>
		<input 
		type ="checkbox"
		id="disable-button-checkbox-two"
		defaultChecked = {disabledSecond}
		onChange={(e) => setDisabledSecond(e.target.checked)} 
		/>
		<label htmlFor="disable-button-checkbox-two">Disable button</label>
	


		</div>

		

		

		

  );
}

export default App;
