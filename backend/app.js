const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mealPlanRoutes = require('./routes/mealPlanRoutes');
const rateLimit = require('express-rate-limit');

const allowedOrigins = [
  'http://localhost:3000', // Development frontend URL - this can also be set as a ENV variable and imported
  // add production frontend URL here once deployed
]

const limiter = rateLimit({
  windowMs: 5 * 1000,
  max: 1,
  message: {error: 'Too many requests'}
})

app.use(bodyParser.json());

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

app.use('/api/mealplan', limiter)

// Routes
app.use('/api', mealPlanRoutes);

module.exports = app;
