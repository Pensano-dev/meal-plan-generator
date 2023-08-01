const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mealPlanRoutes = require('./routes/mealPlanRoutes');

app.use(bodyParser.json());

// Routes
app.use('/api', mealPlanRoutes);

module.exports = app;
