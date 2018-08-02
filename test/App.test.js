import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app';

describe('App component', () => {
	const instructionSet = {};
	let container;

	beforeEach(() => {
		container = document.createElement('div');
		ReactDOM.render(<App instructionSet={ instructionSet } />, container);
	});

	it('contains instruction shortcuts component', () => {
		const shortcuts = container.querySelectorAll('div.shortcuts');
		expect(shortcuts.length).toEqual(1);
	});

	it('contains instruction set component', () => {
		const instructionSet = container.querySelectorAll('div.instruction-set');
		expect(instructionSet.length).toEqual(1);
	});
});
