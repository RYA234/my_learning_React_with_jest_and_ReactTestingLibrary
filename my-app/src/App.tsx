import {useState} from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';

export function replaceCamelWithSpaces(colorName: string){
	return colorName.replace(/\B([A-Z])\B/g," $1");
}

function App() {
	const [buttonColor, setButtonColor] = useState('red');
	const newButtonColor = buttonColor === 'red'? 'blue' : 'red';
	const [disabled,setDisabled] = useState(false);
  return (
    <div >
    <button 
		style={{backgroundColor: buttonColor}} 
		onClick={() => setButtonColor(newButtonColor)}
		disabled={disabled}
		>
		Change to {newButtonColor}
	</button>	
		<br></br>
		<input 
			type ="checkbox"
			id="disable-button-checkbox"
			defaultChecked = {disabled}
			onChange={(e) => setDisabled(e.target.checked)} 
			/>
			<label htmlFor="disable-button-checkbox">Disable button</label>

		</div>

		

		

		

  );
}

export default App;
