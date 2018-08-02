import React from 'react';
import InstructionSet from './instruction-set';
import InstructionShortcuts from './instruction-shortcuts';

function App(props) {
	const { instructionSet } = props;

	return (
		<div>
			<h1>Z80 Instruction Set</h1>
			<InstructionShortcuts instructionSet={ instructionSet } />
			<InstructionSet instructionSet={ instructionSet } />
			<footer>
				Thanks to:<br/>
				<a href="http://jgmalcolm.com/z80/opcodes/opcodesN.htm">http://jgmalcolm.com/z80/opcodes/opcodesN.htm</a><br/>
				<a href="http://www.cpc-power.com/cpcarchives/index.php?page=articles&amp;num=65">http://www.cpc-power.com/cpcarchives/index.php?page=articles&amp;num=65</a><br/>
				<a href="http://z80-heaven.wikidot.com/instructions-set">http://z80-heaven.wikidot.com/instructions-set</a><br/>
				<a href="http://www.z80.info/z80undoc.htm">http://www.z80.info/z80undoc.htm</a>
			</footer>
		</div>
	);
}

export default App;
