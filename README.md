# websocket-bootcamp

A small Node.js WebSocket server example and learning playground using the `ws` library.

This repository is a compact bootcamp to practice building, running and connecting to a WebSocket server from both browser and Node.js clients.

## Contents

- `server.js` — the WebSocket server entry point (uses the `ws` package).
- `package.json` — project metadata and scripts.
- `README.md` — this document.

## Prerequisites

- Node.js (recommended >= 18). Verify with `node -v`.

## Install

Install dependencies:

```bash
npm install
```

## Run the server

Start the server in watch mode (uses the `dev` script defined in `package.json`):

```bash
npm run dev
```

By default the server listens on the port configured inside `server.js` (change the port there if needed).

## Quick examples

Browser client (open the browser console):

```js
// Connect to the server (adjust port if necessary)
const ws = new WebSocket('ws://localhost:3000');

ws.addEventListener('open', () => {
	console.log('connected');
	ws.send('Hello from the browser');
});

ws.addEventListener('message', (evt) => {
	console.log('message from server:', evt.data);
});

ws.addEventListener('close', () => console.log('closed'));
ws.addEventListener('error', (err) => console.error('error', err));
```

Node.js client (quick script):

```js
// Save as client.js and run: node client.js
import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost:3000');

ws.on('open', () => {
	console.log('connected');
	ws.send('Hello from Node.js client');
});

ws.on('message', (data) => console.log('message from server:', data.toString()));
ws.on('close', () => console.log('closed'));
ws.on('error', (err) => console.error('error', err));
```

Note: the project already depends on `ws`, so you can reuse the installed package for Node clients.

## Project structure

Typical files in this repo:

- `server.js` — WebSocket server implementation.
- `package.json` — contains the `dev` script: `node --watch server.js`.

## Troubleshooting

- "Address already in use": another process is listening on the same port. Change the port in `server.js` or stop the other process.
- No messages in browser: ensure the server is running and you used the correct `ws://` URL and port.
- If you see import errors in Node (when running the Node client example), ensure `type: "module"` is present in `package.json` (this project uses ES modules).

## Contributing

Contributions, issues and feature requests are welcome. Open an issue or submit a PR at the repository: https://github.com/GhosTHaise/websocket-bootcamp

## License

ISC — see `package.json` for license and author details.
