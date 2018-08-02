import instructionData from './z80-instruction-data';

function splitIntoMnemonics(instructionData) {
	const extractMnemonic = /\w+/;
	const mnemonics = {};

	instructionData.forEach(([ instruction, nops, opcodes ]) => {
		const [ mnemonic ] = extractMnemonic.exec(instruction);
		const instuctions = mnemonics[mnemonic] || (mnemonics[mnemonic] = []);

		instuctions.push({ instruction, nops, opcodes });
	});

	return mnemonics;
}

export default splitIntoMnemonics(instructionData);
