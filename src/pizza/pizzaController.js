const { validationResult } = require('express-validator');
const Pizza = require('../entities/Pizza'); // ton entity adaptée

/**
 * CRUD Pizzas – avec champ ingredient
 */

exports.create = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const { name, price, imageUrl, ingredient } = req.body;
        const created = await Pizza.create({ name, price, imageUrl, ingredient });
        return res.status(201).json(created); // 201 Created
    } catch (err) {
        next(err);
    }
};

exports.findAll = async (_req, res, next) => {
    try {
        const pizzas = await Pizza.findAll();
        return res.status(200).json(pizzas);
    } catch (err) {
        next(err);
    }
};

exports.findOne = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid pizza id' });

        const pizza = await Pizza.findById(id);
        if (!pizza) return res.status(404).json({ error: 'Pizza not found' });

        return res.status(200).json(pizza);
    } catch (err) {
        next(err);
    }
};

exports.update = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const id = Number(req.params.id);
        if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid pizza id' });

        const { name, price, imageUrl, ingredient } = req.body;
        const updated = await Pizza.update(id, { name, price, imageUrl, ingredient });
        if (!updated) return res.status(404).json({ error: 'Pizza not found' });

        return res.status(200).json(updated);
    } catch (err) {
        next(err);
    }
};

exports.delete = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid pizza id' });

        const deleted = await Pizza.delete(id);
        if (deleted === 0) return res.status(404).json({ error: 'Pizza not found' });

        return res.status(204).send(); // No Content
    } catch (err) {
        next(err);
    }
};
