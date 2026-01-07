
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const conectDB = require('./db/conect')
require('dotenv').config()


// middleware
app.use(express.json())



// routes 
app.get('/hello', (req,res)=>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

const port = 3000



const start = async () =>{
    try{
        await conectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is lisining on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}


start()
// left at 1:16:30
