const express = require('express');
const router = express.Router();

// routes locales du microservice pizza
const pizzasRoute = require('./pizzasRoute'); // même dossier

router.use('/pizzas', pizzasRoute);

module.exports = router;
