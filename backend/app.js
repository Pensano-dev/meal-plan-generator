const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mealPlanRoutes = require('./routes/mealPlanRoutes');

app.use(bodyParser.json());

const allowedOrigins = [
  'http://localhost:3000', // Development frontend URL - this can also be set as a ENV variable and imported
  // add production frontend URL here once deployed
]

// CORS configuration so frontend can only access backend from allowed origins
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Origin not allowed by CORS'));
    }
  },
}));

// Routes
app.use('/api', mealPlanRoutes);

module.exports = app;
