const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// Database

// Settings
app.set('PORT', 5000);

// Routes
const userController = require('./routes/users');

// Middlewares
app.use(cors());
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(morgan('dev'));

// Serve static files

// Api
app.use('/api/users', userController);



// Start server
app.listen(app.get('PORT'), () => {
    console.log(`Server on PORT: ${app.get('PORT')}`);
});