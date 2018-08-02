import React from 'react';
import ReactDOM from 'react-dom';
import InstructionTable from '../src/components/instruction-table';

describe('InstructionTable component', () => {
	const mnemonic = 'xor';
	const instructions = [
		{ instruction: "xor c", nops: "1", opcodes: "a9" },
		{ instruction: "xor a", nops: "1", opcodes: "af" },
		{ instruction: "xor b", nops: "1", opcodes: "a8" },
	];
	let container;

	beforeEach(() => {
		container = document.createElement('div');
		ReactDOM.render(<InstructionTable mnemonic={ mnemonic } instructions={ instructions } />, container);
	});

	test('renders a table', () => {
		const table = container.querySelectorAll('table.instruction-table');
		expect(table.length).toEqual(1);
	});

	test('title row shows mnemonic', () => {
		const row = container.querySelector('tr');
		expect(row.textContent).toEqual(mnemonic);
	});

	test('contains a row for each instruction', () => {
		const rows = container.querySelectorAll('tbody tr');
		expect(rows.length).toEqual(3);
	});

	test('instructions are ordered alphabetically', () => {
		const cells = container.querySelectorAll('tbody td:nth-child(1)');
		expect(cells[0].textContent).toEqual('xor a');
		expect(cells[1].textContent).toEqual('xor b');
		expect(cells[2].textContent).toEqual('xor c');
	});
});
