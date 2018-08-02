import React from 'react';
import ReactDOM from 'react-dom';
import InstructionSet from '../src/components/instruction-set';

describe('InstructionSet component', () => {
	const instructionSet = {
		'ini': [
			{ instruction: "ini", nops: "5", opcodes: "ed a2" },
		],
		'xor': [
			{ instruction: "xor c", nops: "1", opcodes: "a9" },
			{ instruction: "xor a", nops: "1", opcodes: "af" },
			{ instruction: "xor b", nops: "1", opcodes: "a8" },
		],
		'jp': [
			{ instruction: "jp nnnn", nops: "3", opcodes: "c3 nn nn" },
			{ instruction: "jp (hl)", nops: "1", opcodes: "e9" },
		],
	};
	let container;

	beforeEach(() => {
		container = document.createElement('div');
		ReactDOM.render(<InstructionSet instructionSet={ instructionSet } />, container);
	});

	test('renders a div', () => {
		const table = container.querySelectorAll('div.instruction-set');
		expect(table.length).toEqual(1);
	});

	test('contains an instruction-table for each mnemonic', () => {
		const tables = container.querySelectorAll('table.instruction-table');
		expect(tables.length).toEqual(3);
	});

	test('instruction-tables are ordered alphabetically', () => {
		const titles = container.querySelectorAll('table thead tr:nth-child(1)');
		expect(titles[0].textContent).toEqual('ini');
		expect(titles[1].textContent).toEqual('jp');
		expect(titles[2].textContent).toEqual('xor');
	});
});
