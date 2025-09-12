const express = require('express');
const router = express.Router();

const pizzasRoute = require('../pizza/pizzasRoute');
const ingredientsRoute = require('../ingredient/ingredientsRoute');

router.use('/pizzas', pizzasRoute);
router.use('/ingredients', ingredientsRoute);

module.exports = router;
