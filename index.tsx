import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error("Application Failed to Start:", error);
  // Fallback UI in case of immediate crash
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #0d1117; color: #ff0000; font-family: monospace; text-align: center; padding: 20px;">
        <h2 style="font-size: 24px; margin-bottom: 16px;">System Critical Error</h2>
        <p>The application failed to initialize.</p>
        <pre style="background: #161b22; padding: 16px; border-radius: 8px; margin-top: 20px; max-width: 800px; overflow: auto; text-align: left;">${error instanceof Error ? error.message : String(error)}</pre>
      </div>
    `;
  }
}