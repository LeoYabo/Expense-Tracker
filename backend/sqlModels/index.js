const dbConfig = require('./../config/config.js');
const Sequelize = require("sequelize");


// creating new database called expenses in our local mysql server
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
    host: dbConfig.HOST, 
    dialect: dbConfig.dialect,
    opertorsAlias: false,
    pool : {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//use the models from model.js to create the table and how it looks like
db.expenses = require('./model.js')(sequelize, Sequelize)

module.exports = db;
