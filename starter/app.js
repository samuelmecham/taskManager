
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const conectDB = require('./db/conect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// middleware left at 2:50:00
app.use(express.static('./public'))
app.use(express.json())



// routes 

app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000



const start = async () =>{
    try{
        await conectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is lisining on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}


start()

