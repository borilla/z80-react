import React from 'react';
import InstructionTable from './instruction-table';

function InstructionSet(props) {
	const { instructionSet } = props;

	function renderInstructions() {
		const mnemonics = Object.keys(instructionSet);

		return mnemonics.map(function (mnemonic) {
			return <InstructionTable key={ mnemonic } mnemonic={ mnemonic } instructions={ instructionSet[mnemonic] } />
		});
	}

	return (
		<div className="instruction-set">
			{ renderInstructions() }
		</div>
	);
}

export default InstructionSet;
