const db = require('../sqlModels')
const Expense = db.expenses;
const Op = db.Sequelize.Op;

// Create and Save a new expense 
exports.create = (req, res) => {
    

    // Create an expense from data received from frontend
    const expense = {
         title : req.body.title,
         amount : req.body.amount,
         date : req.body.date,
         category : req.body.category
        
    }

    // Save expense in the database
    Expense.create(expense)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message || "Some error occurred while creating the Tutorial."})) 
};

// Retrieve all expenses from the database.
exports.findAll = (req, res) => {
    Expense.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message || "Some error occurred while retrieving tutorials."})) 
};
