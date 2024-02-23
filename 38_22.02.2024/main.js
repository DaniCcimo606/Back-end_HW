const dotenv = require('dotenv').config();
const fs = require('node:fs');
const crypto = require('node:crypto');
const EventEmitter = require('node:events');
const { encode } = require('node:querystring');
const { Readable, Writable, Transform } = require('node:stream');
const readline = require('node:readline');

let counter = 0;
process.on('SIGINT', () => {
    counter++;
    if (counter === 1) {
        console.log('1');
    } else if (counter === 2) {
        console.log('2');
        counter = 0;
        process.exit(0);
    }
    setTimeout(() => {
        counter = 0;
    }, 3000);
});

setInterval(() => {
    console.log(1);
}, 2000);
