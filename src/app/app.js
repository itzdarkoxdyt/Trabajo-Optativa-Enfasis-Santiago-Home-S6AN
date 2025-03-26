const express = require('express');
const cors = require('cors');
const config = require('../config');

const app = express();

const roles = require('../routes/rol.routes');
const authRoutes = require('../routes/auth-routes'); 
const userRoutes = require('../routes/user-routes'); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set('port', config.app.port);


app.use('/api/rol', roles);
app.use('/api/auth', authRoutes); 
app.use('/api/users', userRoutes); 
module.exports = app;
