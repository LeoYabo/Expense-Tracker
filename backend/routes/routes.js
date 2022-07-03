// different routes(url-extensions) names and their purpose


module.exports = app => {

    const sqlQueries = require('../sqlQueries/sqlQueries')
    const router = require('express').Router()
    
    // Insert new Expense into table expenses_table
    router.post("/insert_new_expenses", sqlQueries.create);

    // get all expenses from table
    router.get('/get_expenses', sqlQueries.findAll);

    // base route
    app.use('/', router);

}
