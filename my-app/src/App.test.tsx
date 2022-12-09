import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


test('button has correct initial color', () => {
	render(<App />);
    // find an element with a role of button and text of 'Change to blue'
   const colorButton = screen.getByRole('button',{ name:'Change to blue' });

   //　ボタンの初期色が赤色であることを確認
    expect(colorButton).toHaveStyle({backgroundColor: 'red'})

	// ボタンを押す
	fireEvent.click(colorButton);

	// クリック後ボタンは青色になる
	expect(colorButton).toHaveStyle({ backgroundColor:'blue'});

	// クリック後ボタンは赤になる。
	expect(colorButton).toHaveTextContent('Change to red');
	
	// ボタンを押す
	fireEvent.click(colorButton);

	// クリック後ボタンは青色になる
	expect(colorButton).toHaveStyle({ backgroundColor:'red'});

	// クリック後ボタンは赤になる。
	expect(colorButton).toHaveTextContent('Change to blue');


});

// test('initial conditions', () => {
// 	render(<App />);
// 	const colorButton = screen.getByRole('button', {name: 'Change to blue'})

// 	expect(colorButton).toBeEnabled();

// 	const checkbox = screen.getByRole('checkbox');
// 	expect(checkbox).not.toBeChecked();


// });

test('Checkbox disable button on first click and enables on second click',()=>{
	render(<App />);
	//　使うタイミング　複数チェックボックスがあるときに使えそう
	const checkbox = screen.getAllByRole('checkbox',{name: 'Disable button'});

	const colorbutton = screen.getByRole('button',{name: 'Change to blue'});

	fireEvent.click(checkbox[0]);
	expect(colorbutton).toBeDisabled();

	fireEvent.click(checkbox[0]);
	expect(colorbutton).toBeEnabled();
});