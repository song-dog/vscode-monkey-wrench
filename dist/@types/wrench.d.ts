import * as vscode from 'vscode';

declare type Item = {
  label: string;
  completions?: vscode.CompletionItem[];
  hover?: vscode.Hover;
  signatures: vscode.SignatureInformation[];
};

declare type MetadataItem = Item;

declare type ApiItem = Item;
