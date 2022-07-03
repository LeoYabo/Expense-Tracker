module.exports = (sequelize, Sequelize) => {
    

    //create table model named ExpensesTable
    const ExpensesTable = sequelize.define("expenses_table",{
        title : { 
            type: Sequelize.STRING,
            notNull: false,
        },
        amount : { 
            type: Sequelize.DECIMAL,
            notNull: false
            },
        date : { 
            type: Sequelize.DATE,
            notNull: false
        },
        category: {
            type: Sequelize.STRING,
            notNull: false
        }
    })

    return ExpensesTable
}