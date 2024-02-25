const dotenv = require('dotenv').config();
const fs = require('node:fs');
const crypto = require('node:crypto');
const EventEmitter = require('node:events');
const { encode } = require('node:querystring');
const { Readable, Writable, Transform } = require('node:stream');
const readline = require('node:readline');
const http = require('node:http');

const rndmTime = Math.floor(Math.random() * 3 + 1) * 1000;
const failStatus = Math.floor(Math.random() * 100 + 1);
const status = failStatus <= 10 ? 500 : 200;
console.log(rndmTime);
console.log(status);

const server = http.createServer();
server.on('request', (req, res) => {
    setTimeout(() => {
        res.writeHead(status, { 'content-type': 'text/html' });
        res.end();
    }, rndmTime);
});
server.listen(3000);
