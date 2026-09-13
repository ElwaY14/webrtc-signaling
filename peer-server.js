const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();
const PORT = process.env.PORT || 9000;

app.get('/', (_req, res) => {
  res.send('Ultah WebRTC signaling server is running');
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`HTTP server listening on ${PORT}`);
});

const peerServer = ExpressPeerServer(server, {
  path: '/',
  proxied: true,
  allow_discovery: true,
  debug: true
});

app.use('/peerjs', peerServer);

process.on('SIGTERM', () => server.close(() => process.exit(0)));