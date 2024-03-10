const dotenv = require('dotenv').config();
const fs = require('node:fs');
const crypto = require('node:crypto');
const EventEmitter = require('node:events');
const { Readable, Writable, Transform } = require('node:stream');
const readline = require('node:readline');
const http = require('node:http');
const url = require('url');
const querystring = require('querystring');
const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();

app.use((req, res, next) => {
    req.startTime = Date.now();
    next();
});
app.set('view engine', 'pug');
app.get('/', (req, res) => {
    const rndmTime = Math.floor(Math.random() * 3 + 1) * 1000;
    const failStatus = Math.floor(Math.random() * 100 + 1);
    const status = failStatus <= 10 ? 500 : 200;
    setTimeout(() => {
        if (status === 500) {
            const resTime = Date.now() - req.startTime;
            res.status(status).render('index.pug', {
                time: resTime / 1000,
                status: status,
            });
        } else {
            res.status(status).send('OK');
        }
    }, rndmTime);
});
app.listen(8000, () => {
    console.log('Server is running http://localhost:8000/');
});
