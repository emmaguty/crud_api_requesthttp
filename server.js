const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const routes = require('./Routes/routes')

const app = express();
app.set('port', process.env.PORT || 5050)

const dbOptions = {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'crud_1'
}

// Middlewares
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to my api app')
})

app.use('/api', routes)

// Server running
app.listen(app.get('port'), ()=>{
    console.log('listening on port', app.get('port'))
});