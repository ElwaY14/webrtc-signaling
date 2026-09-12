const express = require('express');
const { PeerServer } = require('peer');
const app = express();
const PORT = process.env.PORT || 9000;

app.get('/', (_req, res) => res.send('Ultah WebRTC signaling server is running ♡'));

const server = app.listen(PORT, () => {
  console.log(`HTTP server listening on ${PORT}`);
});

PeerServer({ port: PORT, path: '/peerjs', server, allow_discovery: true });

process.on('SIGTERM', () => server.close(() => process.exit(0)));
