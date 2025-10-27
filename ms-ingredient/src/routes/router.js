const express = require('express');
const router = express.Router();

// routes locales du microservice ingredient
const ingredientsRoute = require('./ingredientsRoute'); // même dossier

router.use('/ingredients', ingredientsRoute);

module.exports = router;
