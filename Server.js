const express = require('express');
const cors = require('cors')
const connect = require('./src/config/database')
const router = require('./src/routes/routes')
// const router = require('./src/routes/user.routes')
// const test = require('./src/routes/test.routes')



const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// require('./src/routes/routes')(app);
app.use(router);
// app.use(test) 
connect();
const port = 2024;


app.listen(port, () =>{
    console.log("Server is running on port:",port)
})