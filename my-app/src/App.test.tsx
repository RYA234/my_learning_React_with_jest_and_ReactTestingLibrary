import React from 'react';
import { render, screen } from '@testing-library/react';
import { logRoles } from '@testing-library/react';
import App from './App';


test('button has correct initial color', () => {
    //コンテナ化する
	const { container } = render(<App />);
	logRoles(container);

    // find an element with a role of button and text of 'Change to blue'
   const colorButton = screen.getByRole('button',{ name:'Change to blue' });

   //　ボタンの初期色が赤色であることを確認
    expect(colorButton).toHaveStyle({backgroundColor: 'yellow'})
});

test('button turns blue when clicked', () => {});