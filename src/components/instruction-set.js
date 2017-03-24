import React, { Component } from 'react';
import InstructionTable from './instruction-table';

class InstructionSet extends Component {
	render() {
		return (
			<div className="instruction-set">
				{ this.renderInstructions() }
			</div>
		);
	}

	renderInstructions() {
		const instructionSet = this.props.instructionSet;
		const mnemonics = Object.keys(instructionSet);

		return mnemonics.map(function (mnemonic) {
			return <InstructionTable key={ mnemonic } mnemonic={ mnemonic } instructions={ instructionSet[mnemonic] } />
		});
	}
}

export default InstructionSet;
