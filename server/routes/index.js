const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();


router.get('/', (req, res) => res.send('I am root!'))

router.post('/foods', controllers.createFood)
router.get('/foods', controllers.getAllFoods)
router.get('/foods/:id', controllers.getFoodById)
router.get('/food/:id', controllers.updateFood)
router.get('/foods/:id', controllers.deleteFood)

module.exports = router;