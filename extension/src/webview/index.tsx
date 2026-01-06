import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Declare vscode API
declare const acquireVsCodeApi: () => {
  postMessage(message: { command: string; [key: string]: any }): void;
};

// Initialize vscode API
const vscode = acquireVsCodeApi();
(window as any).vscode = vscode;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

