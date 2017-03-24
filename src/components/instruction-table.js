import React, { Component } from 'react';

class InstructionTable extends Component {
	render() {
		const { mnemonic } = this.props;

		return (
			<table className="instruction-table" id={ mnemonic }>
				<thead>
					<tr><th colSpan="3"><a href={ 'http://z80-heaven.wikidot.com/instructions-set:' + mnemonic } title={ mnemonic + ' at z80-heaven' }>{ mnemonic }</a></th></tr>
					<tr><th>instruction</th><th>nops</th><th>bytes</th></tr>
				</thead>
				<tbody>
					{ this.renderRows() }
				</tbody>
			</table>
		);
	}

	renderRows() {
		const { mnemonic, instructions } = this.props;

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
}

function extractOperands(instruction) {
	var i = instruction.indexOf(' ');
	return i > -1 ? instruction.slice(i) : '';
}

export default InstructionTable;
