const mongoose = require('mongoose');

// Establishes database URI
const URI = 'mongodb://localhost/bytes-sales';

mongoose.connect(URI)
    // Show a message weh db is running
    .then(db => console.log('Database is connected'))
    // show an error when database is not running
    .catch(err => console.error(err));

    module.exports = mongoose;