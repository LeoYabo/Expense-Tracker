const express = require("express")
const db = require('./sqlModels/')
const cors = require("cors")
const app = express()

//allow cross communication between server and frontend(react)
app.use(cors())

//parse information into json
app.use(express.json())

//create sql model and table called expenses and expenses_table from the sqlModels.js file
db.sequelize.sync();


//use the routes from routes.js
require("./routes/routes")(app)


//create server port
app.listen(8000, () => {
    console.log("server is running on port 8000")
})

