import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand("extension.copyVariableConsoleLog", function () {
		const editor = vscode.window.activeTextEditor;
		const selection = editor?.selection;
		const text = editor?.document.getText(selection);
		const variableName = text?.trim();
		const consoleLog = `console.log("${variableName}", ${variableName});`;
		vscode.env.clipboard.writeText(consoleLog);
		vscode.window.showInformationMessage(`Copied ${consoleLog} to clipboard.`);
	});

	context.subscriptions.push(disposable);
}