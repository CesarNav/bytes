// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import "./index.css";
// import App from "./App";

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();


// Settings

  // Define the defoult port
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/sales', require('./routes/sales.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
});

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
