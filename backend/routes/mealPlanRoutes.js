const express = require('express');
const router = express.Router();
const mealPlanController = require('../controllers/mealPlanController');

router.post('/mealplan', mealPlanController.generateMealPlan);

module.exports = router;
