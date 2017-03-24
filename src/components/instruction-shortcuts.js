import React, { Component } from 'react';

class InstructionShortcut extends Component {
	render() {
		const mnemonic = this.props.mnemonic;

		return (
			<li><a href={ '#' + mnemonic }>{ mnemonic }</a></li>
		);
	}
}

class InstructionShortcutGroup extends Component {
	render() {
		return (
			<ul>{ this.renderShortcuts() }</ul>
		);
	}

	renderShortcuts() {
		return this.props.mnemonics.map(function (mnemonic) {
			return <InstructionShortcut key={ mnemonic } mnemonic={ mnemonic } />;
		});
	}
}

class InstructionShortcuts extends Component {
	render() {
		return (
			<div className="shortcuts">
				{ this.renderShortcutGroups() }
			</div>
		);
	}

	renderShortcutGroups() {
		const instructionSet = this.props.instructionSet;
		const allMnemonics = Object.keys(instructionSet);
		const groups = [];
		var letterCode, letter, mnemonics;

		for (letterCode = 'a'.charCodeAt(0); letterCode <= 'z'.charCodeAt(0); ++letterCode) {
			letter = String.fromCharCode(letterCode);
			mnemonics = mnemonicsStartingWith(letter);

			if (mnemonics.length) {
				groups.push(<InstructionShortcutGroup key={ letter } mnemonics={ mnemonics } />);
			}
		}

		return groups;

		function mnemonicsStartingWith(letter) {
			return allMnemonics.filter(function (mnemonic) {
				return mnemonic.charAt(0) === letter;
			});
		}
	}
}

export default InstructionShortcuts;
