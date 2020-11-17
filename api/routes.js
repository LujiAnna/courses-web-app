const controllers = require('./controllers.js');
const express = require('express');

const router = express.Router();

router.get('/', controllers.hello);

// write your routes
router.get('/api', controllers.allEntries);
router.get('/api/:id', controllers.singleEntry);
router.post('/api', controllers.newPet);
router.delete('/api/:id', controllers.deleteEntry);

module.exports = router;