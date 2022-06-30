const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()

app.use(cors())

app.use(express.json())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "123456",
    database: "expenses"
})

app.post('/insert_new_expenses',(req,res)=>{

    const title = req.body.title
    const amount = req.body.amount
    const date = req.body.date
    const category = req.body.category

    db.query("INSERT INTO expenses_table (title,amount,date,category) VALUES (?,?,?,?)", [title,amount,date,category], (err, result)=>{
        console.log(err)
        console.log(result)
    })
})


app.get('/get_expenses', (req,res)=>{
    db.query("SELECT * FROM expenses.expenses_table", (err,results)=>{
        res.send(results)
        console.log(err)
        console.log(results)
    })
})


app.listen(8000, () => {
    console.log("server is running on port 8000")
})