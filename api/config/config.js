const config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 5000
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

const envConfig = require(`./${config.env}`);

module.exports = { ...config, ...envConfig };
