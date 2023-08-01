const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mealPlanRoutes = require('./routes/mealPlanRoutes');

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', mealPlanRoutes);

module.exports = app;
