import React from 'react';

function InstructionTable(props) {
	const { mnemonic, instructions } = props;

	function renderRows() {
		return instructions.map((item) => {
			const { instruction, nops, opcodes } = item;
			const operands = extractOperands(instruction);

			return (
				<tr key={ instruction }>
					<td><b>{ mnemonic }</b>{ operands }</td>
					<td>{ nops }</td>
					<td>{ opcodes }</td>
				</tr>
			);
		});
	}

	return (
		<table className="instruction-table" id={ mnemonic }>
			<thead>
				<tr><th colSpan="3"><a href={ 'http://z80-heaven.wikidot.com/instructions-set:' + mnemonic } title={ mnemonic + ' at z80-heaven' }>{ mnemonic }</a></th></tr>
				<tr><th>instruction</th><th>nops</th><th>bytes</th></tr>
			</thead>
			<tbody>
				{ renderRows() }
			</tbody>
		</table>
	);
}

function extractOperands(instruction) {
	var i = instruction.indexOf(' ');
	return i > -1 ? instruction.slice(i) : '';
}

export default InstructionTable;
