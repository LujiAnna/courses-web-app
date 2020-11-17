'use strict'

const fs = require('fs');
const path = require('path');
const Joi = require('joi');

const config = require('../config');
const DATA_DIR = path.join(__dirname, '..', 'data', 'pets.json');

// reading dB
const data = fs.readFileSync('./data/pets.json');
const dB = JSON.parse(data);

const controllers = {
  hello: (req, res) => {
    res.json({ api: 'Hello Pets Api!!!' });
  }
};

module.exports = controllers;
