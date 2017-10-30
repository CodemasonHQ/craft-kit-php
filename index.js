module.exports = {
  name: 'php',
  default: ["php"],
  masonJson: {
    php: require('./mason-json/php.js'),
    mysql: require('./mason-json/mysql.js'),
    mariadb: require('./mason-json/mariadb.js'),
    mongodb: require('./mason-json/mongodb.js'),
    postgres: require('./mason-json/postgres.js'),
    postgis: require('./mason-json/postgis.js'),
  },
}