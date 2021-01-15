const express = require('express');
const {acc} = require('../Controllers/questionController');
const router = express.Router();

router.route('/').get(acc);


module.exports = router