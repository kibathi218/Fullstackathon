const Food = require('../models/food');

const createFood = async (req, res) => {
    try {
        const food = await new Food(req.body)
        await food.save()
        return res.status(201).json({
            food,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllFoods = async (req, res) => {
    try {
        const foods = await Food.find()
        return res.status(200).json({ foods })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getFoodById = async (req, res) => {
    try {
        const { id } = req.params;
        const food = await Food.findById(id)
        if (food) {
            return res.status(200).json({ food })
        }
        return res.status(404).send('The Food (by that Id) Does Not Exsit!')
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateFood = async (req, res) => {
    try {
        const { id } = req.params;
        await Food.findByIdAndUpdate(id, req.body, { new: true }, (err, food) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!food) {
                res.status(500).send(`That's not food!`);
            }
            return res.status(200).json(food);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteFood = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Food.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Food is no more (deleted)');
        }
        throw new Error(`That is not the food you're looking for`);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createFood,
    getAllFoods,
    getFoodById,
    updateFood,
    deleteFood
}