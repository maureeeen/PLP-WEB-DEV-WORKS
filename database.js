// import package
const mysql = require('mysql2');

// create the connection
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mcvalence8904M:',
    database: 'node_crud'
});

//conect to the db
db.connect( (error) => {
    if(error){
        console.log('There was an error connection to DB:', error.stack)
        return;
    }

    console.log('Successfully connected to DB');
});
