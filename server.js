const express = require('express');
const hubsRouter = require('./hubs/hubs-router');

const server = express();

server.use(express.json()); // Gives Express the ability to parse the req.body
server.use(hubsRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

module.exports = server