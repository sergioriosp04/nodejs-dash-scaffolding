const config = require('./env');

module.exports = {
  "development": {
    "username": config.dbUser,
    "password": config.dbPassword,
    "database": config.dbDatabase,
    "host": config.dbHost,
    "port": config.dbPort,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
