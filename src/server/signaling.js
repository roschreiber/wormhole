import express from 'express';
import signaling from 'signaling';
import { createServer } from 'http';

const app = express();
const port = process.env.PORT || 3001;

const server = createServer(app);
const signalingServer = signaling(server);

app.get('/', (req, res) => {
  res.send('Signaling server is running');
});

server.listen(port, () => {
  console.log(`Signaling server running on http://localhost:${port}`);
});

const url = `http://localhost:${port}`;

export { port, url, signalingServer, server };