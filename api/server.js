const express = require('express');

const carsRouter = require('../routers/cars-router.js');

const server = express();

server.use(express.json());

server.use('/api/cars', carsRouter);

module.exports = server;