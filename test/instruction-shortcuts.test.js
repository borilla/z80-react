import React from 'react';
import ReactDOM from 'react-dom';
import InstructionShortcuts from '../src/components/instruction-shortcuts';

describe('InstructionShortcuts component', () => {
	const instructionSet = {
		'and': {},
		'xor': {},
		'add': {},
		'pop': {},
		'push': {},
	};

	let container;

	beforeEach(() => {
		container = document.createElement('div');
		ReactDOM.render(<InstructionShortcuts instructionSet={ instructionSet } />, container);
	});

	test('renders a div container', () => {
		const divs = container.querySelectorAll('div.shortcuts');
		expect(divs.length).toEqual(1);
	});

	test('renders a group for each unique initial letter', () => {
		const uls = container.querySelectorAll('div.shortcuts ul');
		expect(uls.length).toEqual(3);
	});

	test('orders groups alphabetically', () => {
		const uls = container.querySelectorAll('div.shortcuts ul');
		const initialLetters = [...uls].map((ul) => ul.children[0].textContent[0]);
		expect(initialLetters).toEqual(['a', 'p', 'x']);
	});
});
