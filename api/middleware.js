const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const config = require('./config/config');

module.exports = (app) => {
  app.use(helmet());

  if (config.env === config.dev) {
    app.use(cors());
    app.use(morgan('dev'));
  }
};
