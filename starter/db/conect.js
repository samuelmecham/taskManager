const mongoose = require('mongoose')


const connectionStrion = 'mongodb+srv://sammecham2008_db_user:KSlsp#1108@nodeexpressprojects.fyfozgq.mongodb.net/?appName=03-Task-Manager'


mongoose
    .connect(connectionStrion)
    .then(()=> console.log("CONNECTED TO THE DB ..."))
    .catch((err)=> console.log(err))

