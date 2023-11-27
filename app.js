const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');

// Importing Routes
const userRoutes = require('./routes/userRoutes');
const attachmentRoutes = require('./routes/attachmentRoutes');
const applicationRoutes = require('./routes/applicationRoutes');

// Importing Middleware

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Routes for serving web pages.

// Mounting API routes.
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/attachments', attachmentRoutes);
app.use('/api/v1/applications', applicationRoutes);

module.exports = app;
