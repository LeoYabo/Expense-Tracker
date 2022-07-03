//sql local server information

module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: "123456",
    DB: "expenses",
    dialect: "mysql",
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}


