const express = require('express');
const morgan = require('morgan');
const path = require('path');
// const bodyParser = require ('body-parser');

const { mongoose } = require ('./database')

const app = express();


// Settings

  // Define the default server port
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/sales', require('./routes/sales.routes'));

// Static files
  //Sends public folder to browser
app.use(express.static(path.join(__dirname, 'public')));

// Starting server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
});