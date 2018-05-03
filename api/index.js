const express = require('express');

const router = require('./routes');
const app = express();

const config = require('./config/config');

// Apply Middleware
require('./middleware')(app);

app.use('/', router);

app.listen(5000, () => {
  console.log('App listening on 5000');
});
