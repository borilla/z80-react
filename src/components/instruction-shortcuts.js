import React from 'react';

function InstructionShortcuts(props) {
	const { instructionSet } = props;
	const allMnemonics = Object.keys(instructionSet);

	function renderShortcutGroups() {
		const groups = [];

		for (let letterCode = 'a'.charCodeAt(0); letterCode <= 'z'.charCodeAt(0); ++letterCode) {
			const letter = String.fromCharCode(letterCode);
			const mnemonics = mnemonicsStartingWith(letter);

			if (mnemonics.length) {
				groups.push(<InstructionShortcutGroup key={ letter } mnemonics={ mnemonics } />);
			}
		}

		return groups;
	}

	function mnemonicsStartingWith(letter) {
		return allMnemonics.filter(function (mnemonic) {
			return mnemonic.charAt(0) === letter;
		}).sort();
	}

	return (
		<div className="shortcuts">
			{ renderShortcutGroups() }
		</div>
	);
}

function InstructionShortcutGroup(props) {
	function renderShortcuts() {
		return props.mnemonics.map(function (mnemonic) {
			return <InstructionShortcut key={ mnemonic } mnemonic={ mnemonic } />;
		});
	}

	return (
		<ul>{ renderShortcuts() }</ul>
	);
}

function InstructionShortcut(props) {
	const { mnemonic } = props;

	return (
		<li><a href={ '#' + mnemonic }>{ mnemonic }</a></li>
	);
}

export default InstructionShortcuts;
