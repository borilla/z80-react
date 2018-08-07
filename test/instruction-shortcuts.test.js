import React from 'react';
import ReactDOM from 'react-dom';
import InstructionShortcuts from '../src/components/instruction-shortcuts';

describe('InstructionShortcuts component', () => {
	const instructionSet = {
		'and': [],
		'xor': [],
		'add': [],
		'pop': [],
		'push': [],
		'adc': [],
	};
	let container;

	function convertGroupsToArray(container) {
		const uls = container.querySelectorAll('div.shortcuts ul');
		return [...uls].map(ul => [...ul.children].map(li => li.textContent));
	}

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
		const grpups = convertGroupsToArray(container);
		const initialLetters = grpups.map(group => group[0].charAt(0));
		expect(initialLetters).toEqual(['a', 'p', 'x']);
	});

	test('orders mnemonics within groups alphabetically', () => {
		const groups = convertGroupsToArray(container);
		expect(groups).toEqual([
			['adc', 'add', 'and'],
			['pop', 'push'],
			['xor'],
		]);
	});

	test('mnemonics link to anchors within the page', () => {
		const links = container.querySelectorAll('li a');
		const hrefs = [...links].map(a => a.getAttribute('href'));
		expect(hrefs).toEqual([
			'#adc', '#add', '#and',
			'#pop', '#push',
			'#xor',
		])
	});
});
