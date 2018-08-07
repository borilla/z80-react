import React from 'react';
import ReactDOM from 'react-dom';
import InstructionShortcuts from '../src/components/instruction-shortcuts';

describe('InstructionShortcuts component', () => {
	const instructionSet = {
		'and': {},
		'xor': {},
		'add': {},
	};

	let container;

	beforeEach(() => {
		container = document.createElement('div');
		ReactDOM.render(<InstructionShortcuts instructionSet={ instructionSet } />, container);
	});

	test('renders a div', () => {
		const divs = container.querySelectorAll('div.shortcuts');
		expect(divs.length).toEqual(1);
	});
});
